import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AdsButton from "./AdsButton";

const HeroProductAds = ({ products }) => {
  const [index, setIndex] = useState(0);
  const adProducts = products.slice(0, 5); // pick top 5 products

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adProducts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [adProducts.length]);

  return (
    <div className="relative w-full h-[160px] lg:h-[180px] xl:h-[200px] shadow-sm bg-white flex items-center justify-center rounded-md overflow-hidden">
      {adProducts.map((product, i) => (
        <div
          key={product.pID}
          className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            i === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Link
            to={`/product/${product.category}/${product.pID}`}
            className="flex items-center bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 w-[330px] lg:w-[430px]"
          >
            <img
              src={product.images}
              alt={product.name}
              className="h-44 w-40 object-contain p-4 transition-transform duration-500 hover:scale-105"
            />

            {/* ------------for small / large------------------- */}
            <div className="flex flex-col justify-between flex-1 pt-3 pb-3">
              <div>
                <h2 className="xl:text-lg lg:text-md font-bold text-black">
                  {product.name}
                </h2>
                <p className="text-red-600 font-semibold text-lg">
                  TK. {product.price}
                </p>
              </div>

              <div className="w-full lg:mt-5">
                <button className="mt-2 w-full lg:w-[9rem] xl:w-full bg-green-600 text-white px-3  py-2 rounded-md font-semibold text-sm uppercase hover:scale-105 hover:bg-green-700 shadow-md">
                  Buy Now
                </button>
                <AdsButton />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroProductAds;
