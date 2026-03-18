import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/login-success')({
    component: LoginSuccess,
})

function LoginSuccess() {
    const navigate = useNavigate()

    // Optional: Automatically redirect to home after a few seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate({ to: '/' })
        }, 5000)
        return () => clearTimeout(timer)
    }, [navigate])

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
                    onClick={() => navigate({ to: '/' })}
                    className="gap-2"
                >
                    {m.login_success_button()} <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}