import React, { useContext } from "react";
import { DataContext } from "../Context Api/UserContext";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const AlsoLike = () => {
  const { productData } = useContext(DataContext);

  if (!productData || productData.length === 0) return null;

  return (
    <div
      className="
        max-w-[1360px] md:-mb-6 mx-auto rounded pb-6 overflow-hidden relative
        shadow-md border border-[#F8CDB8]
      "
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #FDF2EC 60%, #FCE8DE 100%)",
      }}
    >
      {/* Header Section */}
      <div className="relative z-10 flex items-center justify-between px-6 py-3.5 mb-5 border-b border-[#F8CDB8]/60 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
        

              <h2 className="text-lg lg:text-xl font-bold text-black">
            You May Also Like
          </h2>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative w-full group flex overflow-hidden px-4">
        <div className="relative z-0 flex gap-3 w-max my-custom-scroll">
          {[...productData, ...productData].map((product, index) => (
            <div
              key={`${product.pID}-${index}`}
              className="w-[180px] md:w-[230px] flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <Link
                to={`/${product.category}/${product.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <ProductCard data={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[3px]" 
        style={{ background: "linear-gradient(to right, transparent, #F66107, transparent)" }}
      />
    </div>
  );
};

export default AlsoLike;