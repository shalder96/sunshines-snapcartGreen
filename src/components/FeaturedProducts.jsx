
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { ShopContext } from '../contexts/ShopContext';




const FeaturedProducts = () => {
  const {products} = useContext(ShopContext);
  const [featuredProducts, setfeaturedProducts] = useState([]);


  useEffect(() => {
    const featured = products.filter((p) => p.featured);
    setfeaturedProducts(featured.slice(0,10));
  },[])
  
  const handleClick = (e) => {
    // Handle add to cart logic here
    e.preventDefault();
    console.log('Product added to cart');
  }

  
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
              <div className="overflow-hidden transition bg-white border border-green-200 shadow-md dark:border-gray-600 dark:bg-gray-900 rounded-2xl hover:shadow-lg">
                {/* Colorful Background Layer */}
                <div className="absolute top-0 left-0 z-0 w-full h-full border rounded-2xl bg-gradient-to-br from-green-50 via-transparent to-purple-50 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 opacity-30">
                </div>

                {/* Card content  */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-48"
                />
                <div className="flex items-center justify-between p-4">
                  <div className="text-sm font-semibold text-green-600 dark:text-green-200">
                    {item.tag}
                  </div>
                  
                  <p className="mt-2 font-semibold text-green-800 dark:text-green-400">
                    {item.price}
                  </p>
                </div>
                <h3 className="my-2 text-lg font-medium text-center text-gray-800 dark:text-gray-200">
                    {item.name}
                </h3>
                <button
                  onClick={handleClick}
                  className="w-full py-2 font-semibold text-white transition bg-green-700 rounded-b-2xl hover:bg-green-800">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
