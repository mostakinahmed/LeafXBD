import React, { useContext } from "react";
import { FeatureText } from "./Home/FeatureText";
import ProductCard from "./ProductCard";
import { DataContext } from "./Context Api/UserContext";
import { Link } from "react-router-dom";

export const FeatureProduct = () => {
  const { categoryData, productData } = useContext(DataContext);

  return (
    <div>
      <FeatureText data="All Product" />

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"></div> */}
      <div className="max-w-[1400px] mx-auto px-4 pb-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-3">
        {productData.map((product) => (
          <Link to={`/product/${product.category}/${product.pID}`}>
            <ProductCard data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
