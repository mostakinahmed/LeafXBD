import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="h-7 flex items-center">
          {data.price.discount > 0 && (
            <div className="inline-block px-5 mt-4 -ml-3 bg-[#fe741d] rounded-xl">
              <span className="text-white text-xs font-semibold">
                Save: {data.price.discount} Tk
              </span>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <img
            className="w-full h-[165px] p-2 mt-1 object-contain transform transition-transform duration-500 hover:scale-110"
            src={data.images[0]}
            alt={data.name}
          />
        </div>
        <div className="px-3 pt-1">
          <span className="text-white px-1 -ml-6 bg-green-500 rounded-2xl text-xs font-semibold ">
            <span className="ml-5">stock in</span>
          </span>
          <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 truncate">
            {data.name}
          </h2>

          <div className="flex items-center justify-between -mt-2 lg:-mt-1">
            <span className="text-red-600  font-bold lg:text- text-lg">
              {data.price.selling - (data.price.discount || 0) || 0}{" "}
              <span className="-ml-1">৳</span>
            </span>
            {data.price.discount > 0 && (
              <span className="text-gray-600 font-semibold line-through">
                {data.price.selling} <span className="-ml-1">৳</span>
              </span>
            )}
          </div>
        </div>
        <Link to={`/product/${data.category}/${data.pID}/buynow`}>
          <button className="w-full  bg-[#fe741d] hover:bg-indigo-800 text-white text-sm py-2 transition duration-300">
            Buy Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
