import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { m } from '@/paraglide/messages'
import { AUTH_QUERY_KEY, consumeReturnTo } from '@/hooks/use-auth'

export const Route = createFileRoute('/login-success')({
    component: LoginSuccess,
})

function LoginSuccess() {
    const router = useRouter()
    const queryClient = useQueryClient()

    // Resolved once on mount: reading it clears the stored value.
    const returnTo = useRef('/')

    useEffect(() => {
        // The auth service just set new cookies, so any cached "signed out"
        // answer is stale. Matters when this route is reached without a full
        // page load.
        void queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEY })

        returnTo.current = consumeReturnTo()

        // Optional: Automatically redirect after a few seconds
        const timer = setTimeout(() => {
            router.history.push(returnTo.current)
        }, 5000)
        return () => clearTimeout(timer)
    }, [router, queryClient])

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate-in fade-in zoom-in duration-500">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-2">
                {m.login_success_title()}
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
                {m.login_success_subtitle()}
            </p>

            <div className="mt-10 flex gap-4">
                <Button
                    size="lg"
                    onClick={() => router.history.push(returnTo.current)}
                    className="gap-2"
                >
                    {m.login_success_button()} <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
