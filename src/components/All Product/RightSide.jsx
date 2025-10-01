import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import { DataContext, UserContext } from "../Context Api/UserContext";


const RightSide = () => {
  const { useData, productData, apiData } = useContext(DataContext);
  const { cat } = useParams();
  console.log(apiData);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the category
    if (cat) {
      const filtered = apiData.filter((product) => product.cat === cat);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(apiData); // If no category, show all products
    }
  }, [cat, apiData]);

  return (
    <section className="w-full lg:w-3/4">
      <h2 className="text-lg bg-white  pl-3 rounded-sm shadow-sm font-semibold mb-4">
        {cat}
      </h2>

      {/* Check if there are filtered products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-30 text-xl text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductCard data={filteredProducts} />
        </div>
      )}
    </section>
  );
};

export default RightSide;
