/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
       navy: {
       950: '#16191E',
       900: '#1F2226',
       800: '#26292C',
       700: '#2A2C2F',
       600: '#555659',
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
         400: '#E6B155',
         500: '#E0A030',
         600: '#A37627',
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
