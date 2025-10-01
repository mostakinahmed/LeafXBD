import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import ProductCard from "./ProductCard"; // or adapt your card component

const HeroProductAds = ({ products }) => {
  const [index, setIndex] = useState(0);

  const adProducts = products.slice(0, 5); // pick top 5 products

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adProducts.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, [adProducts.length]);

  return (
    <div className="w-full h-[220px] shadow-sm bg-white flex items-center justify-center relative rounded-md overflow-hidden">
      {adProducts.map((product, i) => (
        <div
          key={product.pID}
          className={`absolute transition-all duration-700 ease-in-out w-full h-full flex items-center ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to={`/product/${product.category}/${product.pID}`}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-lg flex flex-row shadow-l px-2">
              <img
                src={product.images || "https://via.placeholder.com/300"}
                alt={product.title}
                className="h-50 w-40 mr-3 object-contain mb-4 pt-6 transition-all duration-500 hover:scale-105"
              />
              <div className="relative w-50 ml-auto bg-white border-1 border-red-600 rounded-lg mx-1 mt-2 mb-2 shadow-lg">
                <h2 className="text-md font-bold mt-5 ml-2">{product.name}</h2>
                <p className="text-primary font-semibold ml-2">
                  TK. {product.price}
                </p>

                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md font-bold text-sm uppercase animate-pulse hover:scale-105 hover:bg-red-700 transition-all duration-300 shadow-lg">
                  Limited Time Offer
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroProductAds;
