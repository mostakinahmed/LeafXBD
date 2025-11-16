import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="overflow-hidden">
          <img
            className="w-full h-[170px] object-contain transform transition-transform duration-500 hover:scale-110"
            src={data.images}
            alt={data.name}
          />
        </div>
        <div className="p-3">
          <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 truncate">
            {data.name}
          </h2>
          <p className="text-gray-500 text-xs mb-2 line-clamp-2">
            Dimensions: 162.2 x 77.5
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-indigo-600 font-bold">${data.price}</span>
            <span className="text-green-600">Stock: {data.stock}</span>
          </div>
        </div>
        <Link to={`/product/${data.category}/${data.pID}/buynow`}>
          <button className="w-full bg-[#fe741d] hover:bg-indigo-800 text-white text-sm py-2 transition duration-300">
            Add to cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
