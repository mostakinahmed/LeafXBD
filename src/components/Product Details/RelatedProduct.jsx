import React from "react";
import { useParams } from "react-router-dom";

export const RelatedProduct = () => {
  const {cat} = useParams();
  console.log(cat);

  return (
    <div className="w-auto lg:w-[400px] lg:bg-white shadow-lg rounded-lg lg:flex mt-4 lg:mt-0">
      <div className="w-full">
        <h1 className=" p-3 shadow-sm text-2xl font-semibold text-blue-600 text-center">
          Related Product
        </h1>

        <div className="w-auto] h-[160px] m-2 bg-amber-400"></div>
        <div className="w-auto] h-[160px] m-2 bg-amber-400"></div>
        <div className="w-auto] h-[160px] m-2 bg-amber-400"></div>
        <div className="w-auto] h-[160px] m-2 bg-amber-400"></div>
      </div>
    </div>
  );
};
