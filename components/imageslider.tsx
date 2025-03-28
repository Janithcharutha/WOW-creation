'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Array of image paths
const images = [
  '/images/cover/cover1.jpg',
  '/images/cover/cover2.jpg',
  '/images/cover/cover3.jpg',
  '/images/cover/cover4.jpg',
  '/images/cover/cover5.jpg',
  '/images/cover/cover6.jpg',
  '/images/cover/cover7.jpg',
  '/images/cover/cover8.jpg',
  '/images/cover/cover9.jpg',
  '/images/cover/cover10.jpg',
];

export default function ImageSlider() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Design Slider */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Design</h3>
          <Swiper
            slidesPerView={1} // Default for small screens
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides on medium screens
              },
              1024: {
                slidesPerView: 4, // 4 slides on large screens
              },
            }}
          >
            {images.slice(0, 5).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <img
                    src={image}
                    alt={`Design ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Print Slider */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Print</h3>
          <Swiper
            slidesPerView={1} // Default for small screens
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides on medium screens
              },
              1024: {
                slidesPerView: 4, // 4 slides on large screens
              },
            }}
          >
            {images.slice(5, 10).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <img
                    src={image}
                    alt={`Print ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Advertising Slider */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Advertising</h3>
          <Swiper
            slidesPerView={1} // Default for small screens
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides on medium screens
              },
              1024: {
                slidesPerView: 4, // 4 slides on large screens
              },
            }}
          >
            {images.slice(0, 5).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <img
                    src={image}
                    alt={`Advertising ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}