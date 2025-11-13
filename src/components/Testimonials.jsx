import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



const testimonials = [
  {
    id: 1,
    quote: "Absolutely love the quality and freshness! Delivery is always on time.",
    name: "Ritika Sharma",
    location: "New Town",
  },
  {
    id: 2,
    quote: "I switched from the supermarket to SnapCart — never going back!",
    name: "Sourav Das",
    location: "Salt Lake",
  },
  {
    id: 3,
    quote: "The mint and tomatoes tasted like they came straight from the earth!",
    name: "Priya Mukherjee",
    location: "Howrah",
  },
];


const Testimonials = () => {
  return (
    <section className="px-1.5 py-16 bg-green-50 dark:bg-black md:px-20">
  <h2 className="mb-10 text-3xl font-bold text-center text-green-800 dark:text-green-200">💬 What Our Customers Say</h2>
  
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 3 },
    }}
    loop
    autoplay={{ delay: 4000 }}
    pagination={{ clickable: true }}
    className='w-full px-4 mx-auto'
  >
    {testimonials.map((t) => (
      <SwiperSlide key={t.id}>
        <div className='w-full py-6 bg-transparent'>
          <div className="relative p-6 text-center bg-green-100 border border-green-200 shadow-md dark:bg-black shadow-gray-400 rounded-xl">
{/* Glowing background blobs */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <div className="absolute hidden w-40 h-40 bg-pink-400 rounded-full opacity-50 dark:block blur-3xl top-10 left-10 animate-spin" />
              <div className="absolute hidden w-32 h-32 bg-blue-500 rounded-full dark:block opacity-40 blur-2xl bottom-20 right-10 animate-spin-slow" />
              <div className="absolute hidden w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-green-300 rounded-full dark:block opacity-30 blur-3xl top-1/2 left-1/2" />
            </div>
{/* Testimonial content */}
            <p className="mb-4 italic text-gray-700 dark:text-gray-50 ">“{t.quote}”</p>
            <div className="font-semibold text-green-700 dark:text-green-400">{t.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-200">{t.location}</div>
            <div className="text-lg text-yellow-400">★★★★★</div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  )
}

export default Testimonials