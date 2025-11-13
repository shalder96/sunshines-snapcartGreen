import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { IoIosArrowDropdown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";

import useTheme from "../contexts/theme";
// import plantProducts from '../data/products.json'
import plantsOffer from "../data/plantsOffer.json";
import { ShopContext } from "../contexts/ShopContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Plants = () => {
  const { products } = useContext(ShopContext);
  const { themeMode } = useTheme();
  const [showFilter, setShowFilter] = useState(false);
  const API = "https://www.fruityvice.com/api/fruit/all";

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchPlantProducts = async () => {
  //     try {
  //       const response = await axios.get(API)
  //       setPlants(response.data.data)
  //       console.log("Raw API response:", response);
  //     } catch (error) {
  //       console.error("Error fetching plant data:", error);

  //     } finally{
  //       setLoading(false)
  //     }
  //   }
  //   fetchPlantProducts();
  // }, [])

  // if(loading) return <div className="mt-4 text-center text-black dark:text-white">🌱 Loading plants...</div>;

  // const handleAddToCart = (name) => {
  //   alert(`🪴 ${name} added to cart!`);
  // };

  return (
    <section className="px-1.5 py-16 w-full bg-green-50 dark:bg-black min-h-screen">
      {/* // Offer Swiper JS */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        navigation
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-40 py-8 max-w-8xl"
      >
        {plantsOffer.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt="offer"
              className="object-cover w-full h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className="mt-4 bg-green-800" />

      {/* Lower part  */}
      <div className="flex flex-row">
        {/* LEFT SECTION FILTER  */}
        <div className="flex flex-col gap-4">
          {/* first filter box  */}
          <div className="p-6 text-green-800 dark:text-green-100">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 my-2 text-xl font-semibold cursor-pointer md:cursor-default"
            >
              FILTERS{" "}
              <IoIosArrowDropdown
                size={22}
                className={`md:hidden transition-all duration-200 ${
                  showFilter ? "-rotate-90" : ""
                }`}
              />
            </p>
            {/* Category filter  */}
            <div
              className={`border border-green-400 dark:border-green-900 p-4 mt-6 ${
                showFilter ? "" : "hidden"
              } md:block`}
            >
              <p className="mb-3 text-sm font-medium tracking-wide">
                CATEGORIES
              </p>
              <div className="flex flex-col gap-2 text-sm font-normal tracking-wider">
                <p className="flex gap-2">
                  <input type="checkbox" className="w-3" value={"Orchids"} />{" "}
                  Orchids
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Indoor Plants"}
                  />{" "}
                  Indoor Plants
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Medicinal Plants"}
                  />{" "}
                  Medicinal Plants
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Flowering Plants"}
                  />{" "}
                  Flowering Plants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION UI  */}
      </div>

      {/* Sort/Filter options */}

      {/* <Box className="px-4 py-12 bg-green-50 dark:bg-black">
      <Typography 
        variant="h4" 
        align="center" 
        fontWeight="bold" 
        sx={{color: themeMode === 'dark'? "#bbf7d0" : "green"}}  
        gutterBottom
      >
        🌿 Green Collection — Indoor & Medicinal Plants
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          mt: 6,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {plants.map((plant) => (
          <Card key={plant.id} sx={{ boxShadow: 3, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image={plant.image || plant.data.image_url || "https://via.placeholder.com/300x180?text=No+Image"}
              alt={plant.name || plant.attributes.name}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {plant.name || plant.attributes.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {plant.tag || plant.attributes.description?.substring(0, 80) || "No description"}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1, color: 'green' }}>
                {plant.price || "₹99.00" }
              </Typography>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => handleAddToCart(plant.name || plant.attributes.name)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box> */}
    </section>
  );
};

export default Plants;
