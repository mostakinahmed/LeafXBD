import React, { useContext } from "react";
import { HomeBuy } from "../components/Buy Now/HomeBuy.jsx";
import { RelatedProduct } from "../components/Product Details/RelatedProduct";
import { useParams } from "react-router-dom";
import {
  DataContext,
  UserContext,
} from "../components/Context Api/UserContext.jsx";

export const BuyNow = () => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat, id } = useParams();

  // //find specific product
  const product = productData.find((item) => item.pID === id);

  // //find all same cat product for related product
  const allProductsInCategory = productData
    .filter((item) => item.category === cat && item.pID !== id)
    .slice(0, 6); // take maximum 5 products

  return (
    <div className="max-w-[1400px] mx-auto flex mt-[120px] px-2 mb-4">
      <HomeBuy data={product} />
      <div className=" hidden lg:flex">
        <RelatedProduct data={allProductsInCategory} />
      </div>
    </div>
  );
};
