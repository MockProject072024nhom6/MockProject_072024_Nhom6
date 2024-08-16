import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        palanquin: "Palanquin",
        montserrat: "Montserrat",
        headings: ["Inter", "sans-serif"],
        content: ["Noto Serif Georgian", "sans-serif"]
      },
      boxShadow: {
        blueShadow: "10px 10px 80px 10px rgba(0, 34, 255, 0.15)"
      }
    }
  },
  plugins: [],
  plugins: [typography]
}
