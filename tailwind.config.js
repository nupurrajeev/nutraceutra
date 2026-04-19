/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6E6E',
          dark: '#0A5555',
          light: '#E8F5F0',
        },
        secondary: {
          DEFAULT: '#C4943D',
          light: '#F5E6C8',
          dark: '#A07830',
        },
        charcoal: '#1A1A2E',
        'body-text': '#4A4A5A',
        'off-white': '#F7F8FA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out 4s infinite',
        'count-up': 'countUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D6E6E 0%, #0A5555 40%, #1A1A2E 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0D6E6E 0%, #0A5555 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(13, 110, 110, 0.08)',
        'card-hover': '0 12px 40px rgba(13, 110, 110, 0.18)',
        'gold': '0 4px 20px rgba(196, 148, 61, 0.25)',
      },
    },
  },
  plugins: [],
}
