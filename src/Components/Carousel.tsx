import React from 'react';
import background_carousel from '../assets/images/background_carousel.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const images = [background_carousel, background_carousel, background_carousel];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
