/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'computer-image': "url('./Assets/images/computer_image.png')",
        'header-background': "url('./Assets/images/background_contactUs.png')",
        'guard-background': "url('./Assets/images/background_guard.jpg')",
        background_carousel: "url('./Assets/images/background_guard.png')",
        background_profile: "url('./Assets/images/background_profile.png')",
        background_world: "url('./Assets/images/background_world.png')",
        avatar: "url('./Assets/images/avatar.jpg",
      },
      // maxWidth: {
      //   xl: '90rem',
      // },
    },
  },
  plugins: [],
};
