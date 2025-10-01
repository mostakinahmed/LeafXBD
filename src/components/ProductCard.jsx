import React from "react";
import { Link } from "react-router-dom";

///product/:cat/:id
export const ProductCard = ({ data }) => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 pb-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-3">
        {data.map((product) => (
          <Link to={`/product/${product.category}/${product.pID}`}>
            <div className="bg-white rounded-xl w-[165px] lg:w-[160px] lg:h-[300px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-[185px] lg:[190px] lg:p-3 pt-2 h-[170px] object-cover"
                src={product.images}
                alt="Samsung A56"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 truncate">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-xs mb-2 line-clamp-2">
                  Dimensions: 162.2 x 77.5
                </p>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-indigo-600 font-bold">
                    ${product.price}
                  </span>
                  <span className="text-green-600">Stock: {product.stock}</span>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 rounded-md transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
