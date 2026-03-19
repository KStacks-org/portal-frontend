import {useNavigate} from "@tanstack/react-router";
import { LogIn, User, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle"
import LocaleSwitcher from "./LocaleSwitcher"
import {Button} from "@/components/ui/button.tsx";
import {useAuth} from "@/hooks/use-auth.tsx";
import { m } from "@/paraglide/messages";
import {useQueryClient} from "@tanstack/react-query";
import {ProjectLogo} from "@/components/ProjectLogo.tsx";


export function Header() {

    const { data: user, isLoading } = useAuth();
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const baseURL = import.meta.env.VITE_API_URL;


    const handleLogin = () => {

        window.location.href = `${baseURL}/auth/login`;
    }

    // not fully figured out yet
    const handleLogout = () => {

        try {

            // this currently doesn't exist, but there should be an endpoint for the service to clear JWT
            // await fetch(`${baseURL}/auth/logout`, {method: 'POST', credentials: 'include'});


            queryClient.setQueryData(['auth-user'], null)
            void navigate({to: "/"});
        }
        catch (e) {
            console.error("Error logging in: ", e);
        }

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

                        <ProjectLogo projectId={'kstack'} projectName={'kstack'}/>

                        <div className=" hidden md:block font-bold md:text-3xl tracking-tight text-foreground text-2xl ">
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
                {/* 1 & 2. Switchers */}
                <div className="flex items-center gap-2 shrink-0">
                    <LocaleSwitcher />
                    <ThemeToggle/>
                </div>

                {isLoading ? (
                    <div className="h-9 w-20 animate-pulse bg-muted rounded-sm" />
                ) : user ? (
                    // User is logged in
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <User className="h-4 w-4 shrink-0" />
                            <span className="truncate max-w-[80px] sm:max-w-[150px]">{user.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => {handleLogout()}}>
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