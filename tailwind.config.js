/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00263D',
        primaryLight: '#003D5C',
        accent: '#0140A5',
        accentHover: '#01388E',
        border: '#C8E8F8',
        surface: '#FFFFFF',
        bg: '#F0F8FF',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
}

