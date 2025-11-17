import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDropdown, IoMdArrowDropdown } from "react-icons/io";
import { FaPagelines } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import useTheme from "../contexts/theme";
import plantsOffer from "../data/plantsOffer.json";
import ProductCard from "../components/ProductCard";
import { PlantsContext } from "../contexts/PlantsContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Plants = () => {
  const { plants, search, showSearch } = useContext(PlantsContext);
  const { themeMode } = useTheme();

  const [showFilter, setShowFilter] = useState(false);
  const [filterPlants, setFilterPlants] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [sortOpen, setSortOpen] = useState(false); //Sortmenu arrow logic

  // Toggle selected categories
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Filter function (pure)
  const applyFilter = (items) => {
    if (!items) return [];

    let filtered = [...items];
    
    // 1. Apply search filter (if active)
  if (showSearch && search) {
    const q = search.toLowerCase();
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
  }

     // 2. Apply category filter (only if user selected categories)
  if (category.length > 0) {
    filtered = filtered.filter((item) =>
      category.includes(item.category)
    );
  }

  return filtered;
  };

  // Sort function (pure)
  const applySort = (items) => {
    const sorted = [...items];

    if (sortType === "low-high") {
      return sorted.sort((a, b) => a.price - b.price);
    }

    if (sortType === "high-low") {
      return sorted.sort((a, b) => b.price - a.price);
    }

    return sorted; // "relevant"
  };

  // Main sync logic
  useEffect(() => {
    if (!plants || plants.length === 0) return;

    let updated = [...plants];

    updated = applyFilter(updated);
    updated = applySort(updated);

    setFilterPlants(updated);
  }, [plants, category, sortType, search, showSearch]);

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

      {/* Lower part  */}
      <div className="flex flex-row mt-6">
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
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Orchids"}
                    onChange={toggleCategory}
                  />{" "}
                  Orchids
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Indoor Plants"}
                    onChange={toggleCategory}
                  />{" "}
                  Indoor Plants
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Medicinal Plants"}
                    onChange={toggleCategory}
                  />{" "}
                  Medicinal Plants
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Flowering Plants"}
                    onChange={toggleCategory}
                  />{" "}
                  Flowering Plants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION UI  */}
        <div className="flex-1">

              {/* Header Bar  */}
          <div className="flex items-center justify-between w-full h-16 px-4 mb-4 text-base">
            <h1 className="flex items-center gap-4 text-xl font-semibold text-green-800 md:text-2xl dark:text-green-100">
              ALL PLANTS <FaPagelines />
            </h1>
            <SearchBar />
            {/* Product Sort  */}
            <div className="relative" onClick={() => setSortOpen(!sortOpen)}>
              <select
                onFocus={() => setSortOpen(true)}
                onBlur={() => setSortOpen(false)}
                onChange={(e) => setSortType(e.target.value)}
                className="p-2 pr-12 text-sm text-green-800 bg-green-100 border-2 border-green-300 appearance-none focus:outline-none dark:text-green-100 md:text-lg dark:bg-gray-900"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Price (Low to High)</option>
                <option value="high-low">Sort by: Price (High to Low)</option>
              </select>
              <span className="absolute pt-1 -translate-y-1/2 pointer-events-none right-3 top-1/2">
                <IoMdArrowDropdown
                  size={24}
                  className={`text-green-800 dark:text-green-100 transition-transform duration-300 ease-in-out ${
                    sortOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
          </div>

          {/* Map Products  */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
            {filterPlants.map((item, index) => (
              <ProductCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plants;
