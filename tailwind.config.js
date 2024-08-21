import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "computer-image": "url('./Assets/images/computer_image.png')",
        "header-background": "url('./Assets/images/background_contactUs.png')",
        "guard-background": "url('./Assets/images/background_guard.jpg')",
        background_carousel: "url('./Assets/images/background_guard.png')",
        background_profile: "url('./Assets/images/background_profile.png')"
      },
      fontFamily: {
        headings: ["Inter", "sans-serif"],
        content: ["Noto Serif Georgian", "sans-serif"]
      }
    }
  },
  plugins: [typography]
}
