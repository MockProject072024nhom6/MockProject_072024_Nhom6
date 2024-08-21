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
        roboto: "Roboto",
        palanquin: "Palanquin",
        montserrat: "Montserrat",
        headings: ["Inter", "sans-serif"],
        content: ["Noto Serif Georgian", "sans-serif"]
      },
      colors: {
        header: "#1E56F8"
      },
      boxShadow: {
        blueShadow: "10px 10px 80px 10px rgba(0, 34, 255, 0.15)"
      }
    }
  },
  plugins: [typography]
}
