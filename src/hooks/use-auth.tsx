// ysulab/kaustack-portal/src/hooks/use-auth.tsx
import { useQuery } from '@tanstack/react-query'

export function useAuth() {
    return useQuery({
        queryKey: ['auth-user'],
        queryFn: async () => {
            // This endpoint must exist on your backend to return user details
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                credentials: 'include', // Crucial: tells the browser to send cookies
            });

            if (!response.ok) throw new Error('Not authenticated');
            return response.json();
        },
        retry: false, // Don't retry if 401
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}