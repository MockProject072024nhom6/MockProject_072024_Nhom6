// src/components/TestimonialsCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { I_props_Testimonial } from '../../Types/GuardTypes';

const testimonials: I_props_Testimonial[] = [
  {
    name: 'James Bell',
    position: 'Operations Manager',
    image: '',
    feedback:
      "Our construction site needs year round security. It's a very big construction project in Midtown New York, and XPressGuards offers the best full service security service we found within our budget. I can vouch for XPressGuards. We hope to continue a long relationship with this security firm.",
  },
  {
    name: 'James Bell',
    position: 'Operations Manager',
    image: '',
    feedback:
      "Our construction site needs year round security. It's a very big construction project in Midtown New York, and XPressGuards offers the best full service security service we found within our budget. I can vouch for XPressGuards. We hope to continue a long relationship with this security firm.",
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="bg-gray-100 py-5">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-semibold text-black">
                  {testimonial.name}
                </h3>
                <p className="text-blue-600">{testimonial.position}</p>
                <p className="text-gray-700 mt-4">“{testimonial.feedback}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
