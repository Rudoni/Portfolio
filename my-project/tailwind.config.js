/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F2F2F2',
        beige: '#D9BC9A',
        brown: '#593312',
        lightbrown: '#8C633F'
      },
      fontFamily: {
        'pop': ['Poppins'],
      },
      fontSize: {
        'size': '2.60rem',
        'sizeheader': '1.2rem'
        
      }
    },
  },
  plugins: [],
}