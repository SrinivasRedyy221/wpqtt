/** @type {import('tailwindcss').Config} */
const colors=require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#606B61',
        secondary: '#5865f2',
        gray: colors.neutral,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '4f545c',
          400: 'd4d7dc',
          300: 'e3e5e8',
          200: 'ebedef',
          100: 'f2f3f5',
        }
      },
    },
  },
  plugins: [],
}
