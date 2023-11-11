/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#EAB126",
        ocean: "#1FB58F",
        cocktail: "#F24C4E",
        palm: "#1B7B34",
      },
    }
  },
  plugins: [
    require("daisyui") 
  ],
}