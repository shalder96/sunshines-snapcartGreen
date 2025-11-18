import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PlantsContext } from "../contexts/PlantsContext";
import { IoStar, IoStarHalf } from "react-icons/io5";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, currency } = useContext(PlantsContext);
  const [previewImage, setPreviewImage] = useState();

  const [plantData, setPlantData] = useState(null);

  // Image array
  const images = plantData?.image || [];
  const [image, setImage] = useState(images.length > 0 ? images[0] : "");

  // Match product by ID
  const product = plants.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (product) {
      setPlantData(product);

      if (product.image && Array.isArray(product.image)) {
        setPreviewImage(product.image[0]);
      }
    }
  }, [product]);

  // If no product found
  if (!product) {
    return (
      <div className="p-6 text-center text-red-600">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <Link to="/" className="block mt-4 text-green-700 underline">
          Go back to Plants
        </Link>
      </div>
    );
  }

  const handleClick = () => {
    console.log("Product added to the cart");
  };

  // Still loading
  if (!plantData) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen px-6 py-16 bg-green-50 dark:bg-black">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex gap-10">
          {/* LEFT THUMNAIL  */}
          <div className="flex flex-col space-y-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setPreviewImage(img)}
                className={`w-28 h-28 object-cover rounded-lg cursor-pointer border 
              ${previewImage === img ? "border-green-600" : "border-gray-300"}`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex justify-center ">
            <img
              src={previewImage}
              className="object-cover w-full shadow-md rounded-2xl max-w-[450px] h-auto"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="mt-2 text-3xl font-medium text-green-900 dark:text-green-100">
            {plantData.name}
          </h1>

          {/* Star Ratings */}
          <div className="flex items-center gap-1 mt-2">
            <IoStar className="text-yellow-500" size={22} />
            <IoStar className="text-yellow-500" size={22} />
            <IoStar className="text-yellow-500" size={22} />
            <IoStar className="text-yellow-500" size={22} />
            <IoStarHalf className="text-yellow-500" size={22} />
            <p className="pl-2 text-yellow-500">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium text-green-800 dark:text-green-100">
            {currency}
            {plantData.price}
          </p>

          {/* Description */}
          <p className="mt-5 text-green-800 dark:text-green-100 md:w-4/5">
            {plantData.description}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleClick}
            className="w-full px-4 py-3 mt-8 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            Add to Cart
          </button>

          {/* Extra Details */}
          <div className="mt-6 space-y-2 text-sm text-green-800 dark:text-green-100">
            <ul className="list-disc">
              <li>100% organic plant</li>
              <li>Free replacement within 7 days</li>
              <li>Cash on delivery available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
