import React, { useContext, useState } from "react";
import { DataContext } from "../Context Api/UserContext";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const AlsoLike = () => {
  const { productData } = useContext(DataContext);
  const products = [
    { name: "Product 1", price: "$20" },
    { name: "Product 2", price: "$30" },
    { name: "Product 3", price: "$25" },
    { name: "Product 4", price: "$40" },
    { name: "Product 5", price: "$22" },
    { name: "Product 6", price: "$28" },
    { name: "Product 7", price: "$24" },
    { name: "Product 8", price: "$35" },
  ];

  return (
    <div className="max-w-[1400px]  md:px-5 px-2 mx-auto">
      <div className="mt-5 overflow-hidden relative">
        <h2 className="lg:text-2xl text-xl text-gray-800 font-semibold mb-3">You May Also Like</h2>

        {/* Auto-scrolling row */}
        <div className="overflow-hidden">
          <div className= "flex gap-4 animate-scroll">
            {[...productData, ...productData].reverse().map((product) => (
              <Link
                key={product.pID + Math.random()}
                to={`/product/${product.category}/${product.pID}`}
                className="w-[190px]"
              >
                <ProductCard data={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
