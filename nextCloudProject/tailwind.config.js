/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo': '#002845',
        'indigo-dark': '#020024'
      }
    },
  },
  plugins: [],
}

