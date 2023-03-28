/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#a170e2",
        'grey':'#2A2D46',
        'dark-purple':'#64baff',
        'gray-black':'#100F14'       
      }
    },
  },
  plugins: [],
}
