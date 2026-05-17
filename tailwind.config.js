/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowpc: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        },
        'ink': '#0B0B0F'
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(245, 158, 11, .25), 0 10px 40px rgba(0,0,0,.25)'
      }
    }
  },
  plugins: []
}

