/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'IBMP':[ 'IBM Plex Sans Thai', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
