import {defineConfig, loadEnv} from 'vite'
import {devtools} from '@tanstack/devtools-vite'
import {paraglideVitePlugin} from '@inlang/paraglide-js'
import {tanstackStart} from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import {fileURLToPath, URL} from 'url'

import tailwindcss from '@tailwindcss/vite'
import {nitro} from 'nitro/vite'

const config = defineConfig(({ mode, command }) => {
    // VITE_API_URL is inlined at build time, so a missing value silently ships
    // an image that fetches "undefined/auth/me". Fail the build instead.
    const env = loadEnv(mode, process.cwd(), '')
    if (command === 'build' && !env.VITE_API_URL) {
        throw new Error(
            'VITE_API_URL must be set at build time (Docker build arg / CI variable).',
        )
    }

    return {
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        devtools(),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/paraglide',
            strategy: ['cookie', 'preferredLanguage', 'baseLocale'],
            cookieDomain: mode === 'production' ? 'kstacks.org' : 'localhost',
            cookieName: 'PARAGLIDE_LOCALE'
        }),
        nitro(),
        // this is the plugin that enables path aliases
        viteTsConfigPaths({
            projects: ['./tsconfig.json'],
        }),
        tailwindcss(),
        tanstackStart(),
        viteReact(),
    ],
    }
})

export default config
