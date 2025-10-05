import React from "react";
import { Link } from "react-router-dom";

export const RelatedProduct = ({ data }) => {
  return (
    <div className="w-auto lg:w-[400px] lg:bg-white shadow-lg rounded-lg lg:flex mt-4 lg:mt-0 ">
      <div className="w-full">
        <h1 className="p-3 shadow-sm text-2xl font-semibold text-blue-600 text-center">
          Related Product
        </h1>
        {data.map((element) => {
          console.log(element);
          
          // Flatten all specification arrays into a single array
          const flatSpecs = Object.values(element.specifications).flat();

          const limitedSpecs = flatSpecs.slice(0, 3);

          return (
            <Link to={`/product/${element.category}/${element.pID}`}>
              <div
                key={element._id}
                className="h-[130px] m-2 shadow-md flex items-center p-2 rounded-md transform transition-transform duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="w-[6rem] flex items-center justify-center">
                  <img
                    className="object-contain h-16 w-16"
                    src={element.images}
                    alt={element.name}
                  />
                </div>
                {/* Name + specs */}
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-lg truncate">
                    {element.name}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {limitedSpecs
                      .map((item) => `${item.key}: ${item.value}`)
                      .join(" | ")}
                  </p>
                  <h2>TK. {element.price}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
