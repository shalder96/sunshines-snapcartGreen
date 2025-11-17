import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

    const handleClick = (e) => {
    // Handle add to cart logic here
    e.preventDefault();
    console.log('Product added to cart');
  }

  
  return (
    <Link to={`/productDetails/${item.id}`}>
      <div className="relative overflow-hidden transition bg-white border border-green-200 shadow-md dark:border-gray-600 dark:bg-gray-900 rounded-2xl hover:shadow-lg">

        {/* Colorful Background Layer */}
        <div className="absolute top-0 left-0 z-0 w-full h-full border rounded-2xl bg-gradient-to-br from-green-50 via-transparent to-purple-50 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 opacity-30"></div>

        {/* Card Image */}
        <img
          src={item.image}
          alt={item.name}
          className="relative z-10 object-cover w-full h-48"
        />

        {/* Tag + Price */}
        <div className="relative z-10 flex items-center justify-between p-4">
          <span className="text-sm font-semibold text-green-600 dark:text-green-200 md:text-lg">
            {item.tag}
          </span>

          <span className="flex items-center justify-center text-sm font-semibold text-green-800 md:text-lg dark:text-green-400">
            <BsCurrencyRupee /> {item.price}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="relative z-10 my-2 text-lg font-medium text-center text-gray-800 dark:text-gray-200">
          {item.name}
        </h3>

        {/* Button */}
        <button
          onClick={handleClick}
          className="relative z-10 w-full py-2 font-semibold text-white transition bg-green-700 rounded-b-2xl hover:bg-green-800"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
