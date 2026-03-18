import {useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import { LogIn, User, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle"
import LocaleSwitcher from "./LocaleSwitcher"
import {Button} from "@/components/ui/button.tsx";
import {useAuth} from "@/hooks/use-auth.tsx";
import { m } from "@/paraglide/messages";


export function Header() {
    const [open, setOpen] = useState(false);

    const { data: user, isLoading } = useAuth();
    const navigate = useNavigate();


    const handleLogin = () => {

        const baseURL = import.meta.env.VITE_API_URL;


        window.location.href = `${baseURL}/auth/login`;
    }

    return (
        <header
            className="bg-background border-b border-border py-3 px-6 flex justify-between items-center sticky top-0 z-50">
            {/* --- LEFT SIDE: Logo --- */}
            <div
                className="flex items-center gap-3 cursor-pointer select-none group"
                onClick={() => navigate({to: "/"})}
            >
                <div>
                    <div className="flex items-center gap-3">

                        {<img
                            src="/kaustack_logo.svg"
                            alt="KStack Logo"
                            className="md:h-12 md:w-12 h-10 w-10 object-contain transition-transform group-hover:scale-105"
                        />}

                        <div className="font-bold md:text-3xl tracking-tight text-foreground text-2xl">
                            K<span className="text-green-600 dark:text-green-400">Stack</span>
                        </div>
                    </div>

                    <div>
                        <span className="hidden md:flex text-sm text-muted-foreground ms-2">{m.header_tagline()}</span>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: Actions --- */}
            <nav className="flex items-center gap-3">
                {/* 1. Language Switcher */}
                <LocaleSwitcher />

                {/* 2. Theme Toggle */}
                <ThemeToggle/>

                {isLoading ? (
                    <div className="h-9 w-20 animate-pulse bg-muted rounded-sm" />
                ) : user ? (
                    // User is logged in
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <User className="h-4 w-4" />
                            <span>{user.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => {/* handle logout */}}>
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                ) : (
                    // User is not logged in
                    <Button onClick={handleLogin} className="flex items-center gap-3 rounded-sm cursor-pointer">
                        <LogIn className="h-4 w-4" />
                        <span>{m.header_login()}</span>
                    </Button>
                )}

                {/* 3. DESKTOP LINKS (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6 ms-2">

                </div>

                {/* 4. MOBILE MENU (Visible only on mobile) */}
                <div className="md:hidden">
                </div>
            </nav>
        </header>
    );
}