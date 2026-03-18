import { getLocale, locales, setLocale } from '@/paraglide/runtime'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'

const localeLabels: Record<string, string> = {
  en: 'EN',
  ar: 'عربي',
}

export default function LocaleSwitcher() {
  const currentLocale = getLocale()
  const nextLocale = locales.find((l) => l !== currentLocale) ?? locales[0]!

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${localeLabels[nextLocale]}`}
      onClick={() => setLocale(nextLocale)}
      className="cursor-pointer"
    >
      <Languages className="h-4 w-4" />
    </Button>
  )
}
