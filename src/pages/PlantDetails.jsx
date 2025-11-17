import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PlantsContext } from "../contexts/PlantsContext";
import { IoStar, IoStarHalf } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const { plants, currency } = useContext(PlantsContext);
  const [plantData, setPlantData] = useState(false);
  const [image, setImage] = useState("");

  // Convert id to number if your IDs are numeric
  const product = plants.find((p) => String(p.id) === String(id));

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

  const fetchProductData = async () => {
    plants.map((item) => {
      if (item.id === id) {
        setPlantData(item);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return productData ? (
    <section className="px-1.5 py-16 w-full bg-green-50 dark:bg-black min-h-screen">
      <div className="pt-10 transition-opacity duration-300 ease-in border-t-2 opacity-100">
        {/* -------------Product Data---------------  */}
        <div className="flex flex-row gap-12 md:flex-col">
          {/* ---------------Product Images--------------  */}
          <div className="flex flex-row flex-1 gap-3 md:flex-col-reverse">
            <div className="flex flex-col overflow-x-auto overflow-y-scroll md:justify-between md:flex-row justify-normal md:w-full w-[18.7%]">
              {plantData.image.map((item, index) => (
                <img
                  src={item}
                  onClick={() => setImage(item)}
                  key={index}
                  alt=""
                  className="w-full md:w-[24%] mb-3 flex-shrink cursor-pointer"
                />
              ))}
            </div>
            <div className="w-[80%] md:w-full">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>
          {/* -----------Product Imformation----------------  */}
          <div className="flex-1">
            <h1 className="mt-2 text-2xl font-medium">{plantData.name}</h1>
            <div className="flex items-center gap-1 mt-2 ">
              <img src={<IoStar />} alt="" className="w-3.5" />
              <img src={<IoStar />} alt="" className="w-3.5" />
              <img src={<IoStar />} alt="" className="w-3.5" />
              <img src={<IoStar />} alt="" className="w-3.5" />
              <img src={<IoStarHalf />} alt="" className="w-3.5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {plantData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {plantData.description}
            </p>
            <button className="px-8 py-3 text-sm text-white bg-black active:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetails;
