const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const primary = colors.blue
const secondary = colors.pink
const info = colors.sky
const warning = colors.amber
const success = colors.emerald
const error = colors.red

module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './server/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/windplus/styles/**/*.{vue,js,css}',
        './node_modules/windplus/styles/*.{vue,js,css}',
        './node_modules/windplus/styles/main.css',
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary,
                secondary,
                info,
                warning,
                success,
                error
            },
            width: {
                a4: '210mm'
            },
            height: {
                a4: '297mm'
            },
            scale: {
                25: '.25',
                35: '.35',
                30: '.30',
                40: '.40'
            },
            textColor: {
                skin: {
                    base: 'var(--color-text-base)',
                    muted: 'var(--color-text-muted)',
                    active: 'var(--color-text-active)',
                    hover: 'var(--color-text-hover)',
                    icon: 'var(--color-text-icon)'
                }
            },
            backgroundColor: {
                skin: {
                    fill: 'var(--color-fill)',
                    'fill-active': 'var(--color-fill-active)',
                    'fill-hover': 'var(--color-fill-hover)',
                    'icon-fill': 'var(--color-icon-fill)'
                }
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
    ]
}
