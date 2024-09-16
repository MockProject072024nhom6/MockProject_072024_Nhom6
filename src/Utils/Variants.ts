export const hoverVariants = {
  hidden: {
    y: 0
  },
  show: {
    opacity: 0,
    y: -15, // Move up by 10 pixels
    transition: {
      y: {
        duration: 0.3, // Time to move up
        repeat: 1, // Repeat the animation once
        repeatType: "reverse", // Reverse the animation to return to the original position
        delay: 0.2 // Wait for 1 second before moving back down
      },
      opacity: {
        duration: 0.8, // Time to move up
        repeat: 1, // Repeat the animation once
        repeatType: "reverse", // Reverse the animation to return to the original position
        delay: 0.3 // Wait for 1 second before moving back down
      }
    }
  }
}
