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
        max-w-[1360px] md:-mb-6 mx-auto rounded pb-5 overflow-hidden relative
        bg-gradient-to-r from-[#0f172a] via-[#1976d2] to-[#0b3d91]
        border border-white/10 shadow-xl
      "
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#1976d2]/25 rounded-full blur-3xl" />

        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#1e88e5]/25 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/10 p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-400/20">
            <FiHeart className="text-xl text-blue-300" />
          </div>

          <h3 className="text-lg font-bold text-white uppercase tracking-tight">
            You May Also Like
          </h3>
        </div>
      </div>

      {/* Products */}
      <div className="relative w-full group flex overflow-hidden">
        <div className="relative z-0 flex gap-2 w-max my-custom-scroll px-2">
          {[...productData, ...productData].map((product, index) => (
            <div
              key={`${product.pID}-${index}`}
              className="w-[180px] md:w-[230px] flex-shrink-0"
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
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1565c0] via-[#1e88e5] to-[#1976d2]" />
    </div>
  );
};

export default AlsoLike;