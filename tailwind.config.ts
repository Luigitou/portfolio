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
            },
            keyframes: {
                'move-out': {
                    '0%': {
                        transform: 'translateY(0%)',
                        opacity: '1'
                    },
                    '100%': {
                        transform: 'translateY(100%)',
                        opacity: '0'
                    }
                },
                'move-in': {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                        opacity: '1'
                    }
                },
                'move-in-top': {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                        opacity: '1'
                    }
                },
                'move-out-top': {
                    '0%': {
                        transform: 'translateY(0%)',
                        opacity: '1'
                    },
                    '100%': {
                        transform: 'translateY(-100%)',
                        opacity: '0'
                    }
                }
            },
            animation: {
                'move-out': 'move-out 0.3s ease-out',
                'move-in': 'move-in 0.3s ease-out',
                'move-in-top': 'move-in-top 0.3s ease-out',
                'move-out-top': 'move-out-top 0.3s ease-out'
            }
        }
    },
    plugins: []
};
export default config;
