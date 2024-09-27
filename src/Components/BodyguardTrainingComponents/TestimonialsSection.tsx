import React from "react"
import TestimonialsCarousel from "../ShareComponents/TestimonialsCarousel"

const TestimonialsSection: React.FC = () => {
  return (
    <div className='text-black'>
      <p className='text-black font-extrabold text-4xl text-center pt-4'>Testimonials</p>
      <div className='py-10'>
        <TestimonialsCarousel />
      </div>
    </div>
  )
}

export default TestimonialsSection
