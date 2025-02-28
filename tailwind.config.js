/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3be',
          300: '#8ecd95',
          400: '#5fb069',
          500: '#3f9347',
          600: '#2e7636',
          700: '#265e2d',
          800: '#214b27',
          900: '#1d3f23',
          950: '#0f2213',
        },
        earth: {
          100: '#f7f3e9',
          200: '#e6d7b8',
          300: '#d5bc8c',
          400: '#c4a26b',
          500: '#a88651',
          600: '#8d6c3e',
          700: '#725431',
          800: '#5a4227',
          900: '#42321e',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
}