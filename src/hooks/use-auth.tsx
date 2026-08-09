// ysulab/kaustack-portal/src/hooks/use-auth.tsx
import { useQuery, useQueryClient } from '@tanstack/react-query'

/** Mirrors com.kaustack.auth.model.User, returned by GET /auth/me. */
export interface AuthUser {
    id: string
    name: string
    email: string
    gender: 'UNKNOWN' | 'MALE' | 'FEMALE'
}

export const AUTH_QUERY_KEY = ['auth-user'] as const

/** Where to send the user back to after the OAuth round-trip. Per-tab, survives the redirect. */
const RETURN_TO_KEY = 'auth:return-to'

const API_BASE_URL = import.meta.env.VITE_API_URL

function apiUrl(path: string) {
    if (!API_BASE_URL) {
        // Without this the app quietly fetches "undefined/auth/me".
        throw new Error(
            'VITE_API_URL is not set. It is baked in at build time, so the build/image is misconfigured.',
        )
    }
    return `${API_BASE_URL}${path}`
}

/**
 * The access_token cookie only lives 5 minutes (jwt.access-token.expiration on
 * the auth service) while the refresh_token lives 7 days. A 401 therefore
 * usually means "the access token just expired", not "signed out" — so we spend
 * the refresh token before believing it.
 *
 * Concurrent callers share one in-flight request, so a burst of 401s can't
 * stampede the endpoint.
 */
let refreshInFlight: Promise<boolean> | null = null

export function refreshAccessToken(): Promise<boolean> {
    if (!refreshInFlight) {
        refreshInFlight = fetch(apiUrl('/auth/refresh'), {
            method: 'POST',
            credentials: 'include',
        })
            .then((response) => response.ok)
            .catch(() => false)
            .finally(() => {
                refreshInFlight = null
            })
    }
    return refreshInFlight
}

async function fetchCurrentUser(): Promise<AuthUser | null> {
    const requestUser = () =>
        fetch(apiUrl('/auth/me'), {
            credentials: 'include', // Crucial: tells the browser to send cookies
        })

    let response = await requestUser()

    if (response.status === 401) {
        const refreshed = await refreshAccessToken()
        // Refresh token is gone or expired too — genuinely signed out.
        if (!refreshed) return null

        response = await requestUser()
        if (response.status === 401) return null
    }

    // Anything else (500, gateway error, CORS failure) is a real fault and must
    // not masquerade as "signed out".
    if (!response.ok) {
        throw new Error(`GET /auth/me failed with ${response.status}`)
    }

    return (await response.json()) as AuthUser
}

export function useAuth() {
    return useQuery({
        queryKey: AUTH_QUERY_KEY,
        queryFn: fetchCurrentUser,
        // Signed out now resolves to null rather than throwing, so retries only
        // ever cover genuine failures.
        retry: 1,
        staleTime: 1000 * 60 * 4, // just under the 5 minute access-token lifetime
    })
}

/**
 * Sends the user to the auth service's OAuth entry point, remembering the page
 * they were on so the landing route can put them back.
 */
export function startLogin(returnTo?: string) {
    const target = returnTo ?? window.location.pathname + window.location.search

    try {
        sessionStorage.setItem(RETURN_TO_KEY, target)
    } catch {
        // Private mode / storage disabled — fall back to the default landing page.
    }

    window.location.href = apiUrl('/auth/login')
}

/**
 * Reads and clears the pending return-to target. Only same-origin relative
 * paths are honoured, so a poisoned value can't become an open redirect.
 */
export function consumeReturnTo(): string {
    let stored: string | null = null

    try {
        stored = sessionStorage.getItem(RETURN_TO_KEY)
        sessionStorage.removeItem(RETURN_TO_KEY)
    } catch {
        return '/'
    }

    if (!stored) return '/'
    if (!stored.startsWith('/') || stored.startsWith('//')) return '/'
    if (stored.startsWith('/login-success')) return '/' // don't bounce back here

    return stored
}

/**
 * Signs the user out.
 *
 * KNOWN BACKEND BUG: POST /auth/logout reads the refresh_token cookie, but that
 * cookie is scoped to path=/auth/refresh, so the browser never sends it to
 * /auth/logout and the endpoint always answers 401 — meaning the cookies are
 * never actually cleared and a refresh signs the user back in. Cookies are
 * httpOnly, so the frontend cannot clear them itself. The fix belongs in
 * AuthController#logout (read access_token instead, or widen the refresh cookie
 * path to /auth). This call is wired correctly and starts working the moment
 * that lands.
 */
export function useLogout() {
    const queryClient = useQueryClient()

    return async () => {
        try {
            const response = await fetch(apiUrl('/auth/logout'), {
                method: 'POST',
                credentials: 'include',
            })

            if (!response.ok) {
                console.error(
                    `POST /auth/logout failed with ${response.status} — server-side cookies were NOT cleared.`,
                )
            }
        } catch (e) {
            console.error('Error signing out: ', e)
        }

        // Removing beats setQueryData(null): a background refetch would
        // immediately overwrite a manually-nulled cache entry.
        queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY })
    }
}
