import React, { useContext, useEffect, useState } from "react";
import { HomeBuy } from "../components/Buy Now/HomeBuy.jsx";
import { RelatedProduct } from "../components/Product Details/RelatedProduct";
import { useParams } from "react-router-dom";
import {
  DataContext,
  UserContext,
} from "../components/Context Api/UserContext.jsx";

export const BuyNow = () => {
  const { categoryData, productData } = useContext(DataContext);

  const [items, setItems] = useState([]);

  // 👉 Load cart and merge product details
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const merged = cartItems
      .map((cartItem) => {
        const product = productData.find((p) => p.pID === cartItem.pID);
        if (!product) return null;

        return {
          ...product,
          qty: cartItem.qty || 1,
        };
      })
      .filter(Boolean);

    setItems(merged);
  }, [productData]);

  // 👉 Extract all categories from items (items = array)
  const categoryList = items.flatMap((item) =>
    Array.isArray(item.category) ? item.category : [item.category]
  );

  // 👉 Unique category list  
  const uniqueCategories = [...new Set(categoryList)];

  // 👉 Find related products (same category, not in cart)
  let relatedProducts = productData.filter(
    (item) =>
      uniqueCategories.includes(item.category) &&
      !items.some((cartItem) => cartItem.pID === item.pID)
  );

  // 👉 Random shuffle
  relatedProducts = relatedProducts.sort(() => Math.random() - 0.5);

  // 👉 Take 6 random items
  const allProductsInCategory = relatedProducts.slice(0, 6);

  return (
    <div className="max-w-[1400px] mx-auto flex mt-[60px] md:mt-[105px] mb-4">
      {/* Cart items +Checkout form */}
      <HomeBuy data={items} />

      {/* Related products */}
      <div className="hidden lg:flex">
        <RelatedProduct data={allProductsInCategory} />
      </div>
    </div>
  );
};
