import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Inter", "sans-serif"],
        content: ["Noto Serif Georgian", "sans-serif"]
      }
    }
  },
  plugins: [typography]
}
