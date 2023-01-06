export default defineNuxtConfig({
    head: {
        titleTemplate: '%s - Nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css'
            }
        ]
    },
    ssr: false,
    build: {
        transpile: ['@headlessui/vue']
    },
    buildModules: ['@vueuse/nuxt', '@nuxtjs/strapi'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        '@nuxtjs/i18n'
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
    strapi: {
        url: process.env.STRAPI_URL || 'https://bapi.warsono.id',
        prefix: '/api',
        version: 'v4',
        cookie: {}
    },
    i18n: {
        locales: ['en', 'id'],
        defaultLocale: 'en',
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en: {
                    app_name: 'Nuxt Tailwind Kit',
                    app_description:
                        'Quick Boilerplate built on top of Nuxt 3 and Tailwind CSS',
                    menu_home: 'Home',
                    menu_store: 'Store',
                    menu_blog: 'Blog',
                    menu_dashboard: 'Dashboard'
                },
                id: {
                    app_name: 'Nuxt Tailwind Kit',
                    app_description:
                        'Boilerplate cepat yang dibangun dari Nuxt 3 and Tailwind CSS',
                    menu_home: 'Beranda',
                    menu_store: 'Toko',
                    menu_blog: 'Blog',
                    menu_dashboard: 'Dasbor'
                }
            }
        }
    },
    runtimeConfig: {
        public: {
            gaId: ''
        }
    },
    resolve: {
        alias: {
            components: '/src/components'
        }
    },
    publicRuntimeConfig: {
        SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL,
        SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
        MAPBOX_KEY: process.env.MAPBOX_KEY
    }
})
