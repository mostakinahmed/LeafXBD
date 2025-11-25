import React from "react";
import { Link } from "react-router-dom";

export const RelatedProduct = ({ data }) => {
  return (
    <div className="w-auto lg:w-[400px] bg-white lg:bg-white shadow rounded-lg lg:flex mt-3 lg:mt-0 ">
      <div className="w-full">
        <h1 className="p-3 shadow-sm text-2xl font-semibold text-gray-700 text-center">
          Related Product
        </h1>
        {data.map((element) => {
          // Flatten all specification arrays into a single array
          const flatSpecs = Object.values(element.specifications).flat();

          const limitedSpecs = flatSpecs.slice(0, 3);

          return (
            <Link to={`/product/${element.category}/${element.pID}`}>
              <div
                key={element._id}
                className="h-[155px] max-w-[400px] m-2 mt-3 shadow-sides flex flex-col justify-between pt-2 transform transition-transform duration-300 hover:scale-105"
              >
                {/* Top section: Image + Name + Specs + Price */}
                <div className="flex">
                  {/* Image */}
                  <div className="w-[6rem] flex items-center justify-center">
                    <img
                      className="object-contain h-16 w-16"
                      src={element.images[0]}
                      alt={element.name}
                    />
                  </div>

                  {/* Name + Specs + Price */}
                  <div className="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-semibold text-lg truncate">
                        {element.name}
                      </h2>
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {limitedSpecs
                          .map((item) => `${item.key}: ${item.value}`)
                          .join(" | ")}
                      </p>
                    </div>

                    <h2 className="text-lg font-semibold">
                      TK. {element?.price?.selling ?? "0.00"}
                    </h2>
                  </div>
                </div>

                {/* Bottom section: Buy Now button */}

                <Link to={`/product/${element.category}/${element.pID}/buynow`}>
                  <button className="w-full bg-green-600 text-white py-1 text-sm hover:bg-green-700 transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
