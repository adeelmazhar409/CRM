/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary-bg': 'rgba(234, 236, 240, 1)',
                'component-bg': 'rgba(255, 255, 255, 1)',
                'purple-text': 'rgba(108, 1, 204, 1)',
                'purple-hover': 'rgba(52, 64, 84, 1)',
                'border-color': 'rgba(234, 236, 240, 1)',
                text: {
                    hard: 'rgba(53, 52, 53, 1)',
                    light: 'rgba(71, 84, 103, 1)',
                    nav: 'rgba(52, 64, 84, 1)',
                    footer: 'rgba(102, 112, 133, 1)'
                },
            },
            fontFamily: {
                sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xs: '12px',
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '24px',
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            lineHeight: {
                18: '18px',
                20: '20px',
                24: '24px',
                28: '28px',
            },
        },
    },
    plugins: [],
}
