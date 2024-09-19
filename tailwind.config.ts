import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: '#0E0E0B',
                primary: '#ffffff',
                secondary: '#FFC857',
                green: '#00FF1A'
            },
            blur: {
                flare: '100px'
            },
            backgroundImage: {
                Noise: "url('/Noise.svg')"
            }
        }
    },
    plugins: []
};
export default config;
