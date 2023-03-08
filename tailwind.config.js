/** @type {import('tailwindcss').Config} */

const colors = require("./colors")
module.exports = {
  content: ["./indexß.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
