import React, { useContext, useEffect, useState } from "react";
import { FeatureText } from "./Home/FeatureText";
import ProductCard from "./ProductCard";
import { DataContext } from "./Context Api/UserContext";
import { Link } from "react-router-dom";

export const FeatureProduct = () => {
  const { productData } = useContext(DataContext);

  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth; // get current width dynamically

      if (width >= 1280) {
        // xl screens
        setVisibleProducts(productData.slice(0, 16));
      } else if (width >= 1024) {
        // lg screens
        setVisibleProducts(productData.slice(0, 12));
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
  }, [productData]); // run again if productData changes

  return (
    <div>
      <FeatureText data="Featured Product" />

      <div className="max-w-[1400px] mx-auto lg:px-4 px-2 pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        {visibleProducts.map((product) => (
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
