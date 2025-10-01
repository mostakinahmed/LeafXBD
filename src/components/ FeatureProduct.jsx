import React, { useContext } from "react";
import { FeatureText } from "./Home/FeatureText";
import ProductCard from "./ProductCard";
import { DataContext } from "./Context Api/UserContext";

export const FeatureProduct = () => {
  const { categoryData, productData } = useContext(DataContext);

  return (
    <div>
      <FeatureText data="All Product" />

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"></div> */}

      <ProductCard data={productData} />
    </div>
  );
};
