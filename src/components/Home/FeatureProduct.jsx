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
    </div>
  );
};

export default FeatureProduct;
