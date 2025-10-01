import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
        {data.map((product) => (
          <div className="bg-white rounded-xl w-[170px] lg:w-[220px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-[185px] sm:[190px] sm:p-7 pt-2 h-[170px] object-cover"
              src={product.images}
              alt="Samsung A56"
            />
            <div className="p-3">
              <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                Samsung A56
              </h2>
              <p className="text-gray-500 text-xs mb-2 line-clamp-2">
                Dimensions: 162.2 x 77.5 x 
              </p>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-indigo-600 font-bold">$540</span>
                <span className="text-green-600">Stock: 10</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
