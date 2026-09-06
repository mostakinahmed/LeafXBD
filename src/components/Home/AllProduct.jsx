import React, { useContext, useEffect, useState } from "react";
import { FeatureText } from "../Home/FeatureText";
import ProductCard from "../ProductCard";
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiZap, FiChevronRight } from "react-icons/fi";

export default function AllProduct() {
  const { productData } = useContext(DataContext);

  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth; // get current width dynamically

      if (width >= 1024) {
        // lg screens
        setVisibleProducts(productData.slice(0, 18));
      } else {
        // md/sm/xs
        setVisibleProducts(productData.slice(0, 8));
      }
    };

    // run on mount
    updateVisibleProducts();

    // listen for resize
    window.addEventListener("resize", updateVisibleProducts);
    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, [productData]);

  return (
    <div className="max-w-[1400px] mx-auto mt-5 lg:px-4 px-2 ">
      {/* Section Title */}
      <div className="flex items-center justify-between   font-sans  md:p-3  py-2  mb-3">
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/10 ">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <h1 className="md:text-5xl text-2xl font-bold tracking-tight">
                <span className="text-slate-800">All</span>{" "}
                <span className="bg-gradient-to-r from-brand via-amber-500 to-purple-600 bg-clip-text text-transparent">
                  Product
                </span>
              </h1>
            </div>
          </div>

       
        </div>

        {/* View All Button */}
        <Link
          to="/all-products"
          className="flex items-center gap-1 text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-white border border-slate-900 hover:bg-slate-900 px-3 py-1.5 md:px-5 md:py-2 rounded-full transition-all duration-300"
        >
          View All
        </Link>
      </div>

      <div className="pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:gap-2.5 gap-2">
        {visibleProducts.slice(0, 18).map((product) => (
          <Link
            key={product.pID}
            to={`/${product.category}/${product.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`} // Replace spaces with hyphens in the URL
            aria-label={`View details for ${product.name}`}
          >
            <ProductCard data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
