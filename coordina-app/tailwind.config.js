/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-bold": ["Montserrat-bold", "sans-serif"],
        "montserrat-light": ["Montserrat-light", "sans-serif"],
        "montserrat-light-italic": ["Montserrat-lightItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

