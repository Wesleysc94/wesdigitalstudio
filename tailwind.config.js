/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#121212',
                darkBase: '#1A1A1A',
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F3E5AB'
                },
                teal: {
                    DEFAULT: '#0F766E',
                    light: '#14B8A6'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
