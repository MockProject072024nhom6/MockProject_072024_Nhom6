import React from 'react';
import TestimonialsCarousel from '../ShareComponents/TestimonialsCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="text-black">
      <p className="text-black font-extrabold text-4xl text-center">
        Testimonials
      </p>
      <div className="py-10">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default TestimonialsSection;
