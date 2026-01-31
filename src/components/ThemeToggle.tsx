import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

function getTheme(): "dark" | "light" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function setTheme(t: "dark" | "light") {
  document.documentElement.classList.toggle("dark", t === "dark")
  localStorage.setItem("theme", t)
}

export default function ThemeToggle() {
  const [theme, setThemeState] = React.useState<"dark" | "light">("light")

  React.useEffect(() => {
    setThemeState(getTheme())
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        const next = getTheme() === "dark" ? "light" : "dark"
        setTheme(next)
        setThemeState(next)
      }}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
