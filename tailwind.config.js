/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F2CC0F",
        ocean1: "#03658C",
        ocean2: "#F24C4E",
        ocean3: "#1B7B34",
        pinky: "#F56B8C",
      },
    }
  },
  plugins: [
    require("daisyui") 
  ],
}