import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import {Header} from '../components/Header.tsx'

import { getLocale } from '@/paraglide/runtime'
import { m } from '@/paraglide/messages'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import { BootGate } from '@/components/BootGate.tsx'


interface MyRouterContext {
  queryClient: QueryClient
}

const rtlLocales = ['ar']

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      const locale = getLocale()
      const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr'
      document.documentElement.setAttribute('lang', locale)
      document.documentElement.setAttribute('dir', dir)
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: m.site_title(),
      },
      {
        property: 'og:site_name',
        content: 'KStack',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&display=swap' },
      { rel: 'icon', type: 'image/svg+xml', href: '/kstack-dark.svg' },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = getLocale()
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
          <Header />
          <BootGate >{children}</BootGate>
          <Scripts />
      </body>
    </html>
  )
}
