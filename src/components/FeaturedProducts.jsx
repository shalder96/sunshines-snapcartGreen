
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { PlantsContext } from '../contexts/PlantsContext';
import ProductCard from './ProductCard';




const FeaturedProducts = () => {
  const {plants} = useContext(PlantsContext);
  const [featuredProducts, setfeaturedProducts] = useState([]);


  useEffect(() => {
    const featured = plants.filter((p) => p.featured);
    setfeaturedProducts(featured.slice(0,10));
  },[])
  


  
  return (
    <section className="px-1.5 py-16 bg-green-50 dark:bg-black md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-green-800 dark:text-green-100 md:text-4xl">
          This Week’s Fresh Picks
        </h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          className="mySwiper"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
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
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log('swiper initialized')}
        >
          {featuredProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard index={index} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
