import React from "react";

export const Description = ({ data }) => {
  return (
    <div className="bg-white shadow-md px-6 py-5 rounded-md">
      <h1 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3">
        Product Description
      </h1>

      <div className="border-t border-gray-200 flex flex-col md:flex-row items-start pt-4 lg:pt-5 gap-8">
        {/* Description text */}
        <div className="flex-1">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Product image (right side on larger screens) */}
        <div className="w-full h-[11rem] md:w-1/3 flex justify-center">
          <img
            src={data.images}
            alt={data.name}
            className="w-40 sm:w-52 md:w-60 h-auto object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};
