/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#37B04C",
        background: '#F7F7F7',
        title: '#707070C4',
        calendar: '#6A6A6A',
        'title-card': '#4D4F5C'
      },
      boxShadow: {
        'navbar': '0px 3px 6px #00000029',
        'card': '0px 2px 3px #00000029',

      },
      fontSize: {
        'title': '40px',
        'subtitle': '20px',
      }
    },
  },
  plugins: [],
  mode: 'jit',
}
