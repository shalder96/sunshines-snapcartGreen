import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Marquee from "react-fast-marquee";


const farmMedia = [
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1391249/pexels-photo-1391249.jpeg', // Farmer image
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg', // Field image
  },
  {
    type: 'video',
    url: 'https://videos.pexels.com/video-files/10847026/10847026-hd_1920_1080_25fps.mp4', // Farmer video
  },
  {
    type: 'video',
    url: 'https://videos.pexels.com/video-files/4684305/4684305-hd_1920_1080_25fps.mp4', // Close-up harvest
  },
];





const GreenStory = () => {
  return (
    <section className='px-1.5 pb-16 text-center md:px-6 bg-green-50 dark:bg-black'>
      <h2 className="mb-2 text-3xl font-bold text-green-800 dark:text-green-200">Rooted in Nature, Grown with Care 🌱</h2>
      <p className="max-w-xl pb-6 mx-auto text-gray-600 dark:text-gray-200">
        SnapCartGreen partners directly with small-scale, organic farmers in your locality. Every product you buy supports eco-friendly agriculture and reduces food miles.
      </p>

      <Swiper
        modules={[ Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 6000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
        className="w-full max-w-6xl mx-auto"
        >
          {farmMedia.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden shadow-lg rounded-xl">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-64 mb-2 border rounded-xl"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="object-cover w-full h-64 mb-2 border rounded-xl"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


     


      <div className="py-4 bg-yellow-200">
        <Marquee speed={40} gradient={true} gradientColor={[255, 255, 255]}>
          <ul className="flex gap-12 text-base font-medium text-green-800 whitespace-nowrap">
            <li>🌾 We source directly from farmers within 50km of your city</li>
            <li>🚚 Our supply chain cuts down transport emissions</li>
            <li>🌱 Zero chemical farming methods</li>
            <li>👨‍🌾 Empowering 100+ local farm families</li>
          </ul>
        </Marquee>
      </div>



      

    </section>
  )
}

export default GreenStory