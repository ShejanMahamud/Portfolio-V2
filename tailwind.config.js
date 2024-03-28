/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'cedarville-cursive' : 'Cedarville Cursive',
        'poppins' : 'Poppins',
        'space-mono' : 'Space Mono'
      }
    },
  },
  plugins: [],
}