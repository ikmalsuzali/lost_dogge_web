// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: 'Lost Doggo',
            meta: [
                {
                    name: 'title',
                    content: 'Lost Doggo - Lost & Found Pets'
                },
                {
                    property: 'og:title',
                    content:
                        'Our mission is to help you find your beloved pet as fast as possible'
                },
                {
                    name: 'description',
                    content:
                        'Lost your pet? Create a facebook or instagram ad within 5 minute and reach around 3000+ people per day within the lost or found location of your beloved pet'
                },
                {
                    property: 'og:description',
                    content:
                        'Lost your pet? Create a facebook or instagram ad within 5 minute and reach around 3000+ people per day within the lost or found location of your beloved pet'
                },
                {
                    name: 'facebook-domain-verification',
                    content: '2kwyqr1ami477rthgyqlwq4x711oxa'
                },
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css'
                },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    target: 'static',
    ssr: false,
    build: {
        transpile: ['@headlessui/vue', '@vueuse/nuxt']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        '@nuxtjs/i18n',
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Disallow: '/dashboard',
                Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml`
            }
        ]
    ],
    devServerHandlers: [],
    components: {
        global: false,
        dirs: ['~/components']
    },
    debug: true,
    plugins: [{ src: './plugins/fbSdk.ts', ssr: false }],
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
            gaId: process.env.NUXT_PUBLIC_GA_ID,
            SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL,
            SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
            MAPBOX_KEY: process.env.MAPBOX_KEY,
            WEB_HOST: process.env.WEB_HOST,
            API_HOST: process.env.API_HOST
        }
    },
    alias: {
        components: '/src/components'
    }
    // nitro: {
    //     preset: 'vercel'
    // }
})
