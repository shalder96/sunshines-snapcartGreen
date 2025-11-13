// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const HeroSection = () => {

  const clickHandler = () => {}

  return (
    <div className="relative px-0 py-0 text-center text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect='fade'
        loop={true}
        autoplay={{delay: 5000}}
        pagination={{clickable: true}}
        className='w-full h-[80vh]'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Slide 1 Plants banner */}
      <SwiperSlide>
        <div 
          className="relative w-full h-full bg-center bg-no-repeat bg-cover"
          style={{backgroundImage: `url(https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold md:text-5xl">Nature’s Touch for Your Home</h2>
            <p className="max-w-xl mt-4 text-lg">Hand-picked plants that thrive indoors</p>
            <button 
              onClick={clickHandler}
              className="px-6 py-3 mt-6 font-semibold text-white transition bg-green-700 rounded-full hover:scale-101 hover:bg-green-800">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>

        {/* slide 2 Vegetables banner  */}
      <SwiperSlide>
        <div 
          className="relative w-full h-full bg-center bg-no-repeat bg-cover"
          style={{backgroundImage: `url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold md:text-5xl">Fresh From Farm, Straight to Your Fork</h2>
            <p className="max-w-xl mt-4 text-lg">Green veggies picked daily for your family’s health</p>
            <button 
              onClick={clickHandler}
              className="px-6 py-3 mt-6 font-semibold text-white transition bg-green-700 rounded-full hover:scale-101 hover:bg-green-800"
            >
              Order Fresh Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      
        {/* slide 3 fruits banner  */}
      <SwiperSlide>
        <div 
          className="relative w-full h-full bg-center bg-no-repeat bg-cover"
          style={{backgroundImage: `url(https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold md:text-5xl">Healthy Fruits, Healthy Life</h2>
            <p className="max-w-xl mt-4 text-lg">Fruits picked daily for your family’s health</p>
            <button 
              onClick={clickHandler}
              className="px-6 py-3 mt-6 font-semibold text-white transition bg-green-700 rounded-full hover:scale-101 hover:bg-green-800"
            >
              Order Fresh Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      
      ...
      </Swiper>
    </div>
    
  );
};
export default HeroSection;