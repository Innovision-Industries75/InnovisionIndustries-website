/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
         950: '#4A5368',
         900: '#5C6477',
         800: '#6E7586',
         700: '#838A98',
         600: '#9BA0AB',
        },
        steel: {
          50: '#F4F6F8',
          100: '#E7EBEF',
          200: '#CBD3DB',
          300: '#A9B4C0',
          400: '#7C8899',
          500: '#5C6779',
          600: '#454F5F',
        },
        signal: {
          400: '#3FD6E8',
          500: '#14B8CE',
          600: '#0E93A6',
        },
        copper: {
          400: '#D99763',
          500: '#C97B4A',
          600: '#A9622F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(63,214,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,214,232,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-trace': {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        trace: 'pulse-trace 3.5s linear infinite',
        blink: 'blink 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
