import React, { useContext, useEffect, useState, useMemo } from "react";
import { FeatureText } from "./FeatureText";
import ProductCard from "../ProductCard";
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";

export const FeatureProduct = () => {
  const { productData } = useContext(DataContext);
  const [visibleProducts, setVisibleProducts] = useState([]);

  // Memoize featured products to avoid recalculation on every render
  const featuredData = useMemo(
    () => productData.filter((item) => item.status.isFeatured),
    [productData]
  );

  // Update visible products based on screen width
  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setVisibleProducts(featuredData.slice(0, 16));
      } else if (width >= 1024) {
        setVisibleProducts(featuredData.slice(0, 12));
      } else {
        setVisibleProducts(featuredData.slice(0, 8));
      }
    };

    // Initial run
    updateVisibleProducts();

    // Listen to window resize
    window.addEventListener("resize", updateVisibleProducts);

    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, [featuredData]);

  return (
    <div>
      {/* Section Title */}
      <FeatureText data="Featured Product" />

      {/* Product Grid */}
      <div className="max-w-[1400px] mx-auto lg:px-4 px-2 pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-4 gap-3">
        {visibleProducts
          .slice() // shallow copy for safe reverse
          .reverse()
          .map((product) => (
            <Link
              key={product.pID}
              to={`/product/${product.category}/${product.pID}`}
            >
              <ProductCard data={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
