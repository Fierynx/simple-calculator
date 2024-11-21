/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#585657",
        "light-gray": "#A5A5A5",
        "light-orange": "#F79E00",
        "light-brown": "#866242"
      },
      screens: {
        "2xl": { max: "1440px" },
        "xl": { max: "1200px" },
        "lg": { max: "900px" },
        "md": { max: "768px" },
        "sm": { max: "600px" },
        "xs": { max: "450px" },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}