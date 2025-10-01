import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Link, useParams } from "react-router-dom";
import { DataContext, UserContext } from "../Context Api/UserContext";

const RightSide = () => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [catName, setCatName] = useState("cat Name");

  //filter catName to show dom
  useEffect(() => {
    if (cat) {
      const result = categoryData.find((item) => item.catID === cat);
      console.log(result);

      if (result && result.catName) {
        setCatName(result.catName);
      } else {
        setCatName("Unknown Category"); // optional fallback
      }
    }
  }, [cat, categoryData]);

  useEffect(() => {
    // Filter products based on the category
    if (cat) {
      const filtered = productData.filter(
        (product) => product.category === cat
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData); // If no category, show all products
    }
  }, [cat, productData]);

  return (
    <section className="w-full ">
      <h2 className="text-lg bg-white text-center p-1 pl-1 rounded-sm shadow-sm font-semibold mb-4">
        {catName}
      </h2>

      {/* Check if there are filtered products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-30 text-xl text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid gap-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 lg:gap-3">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.category}/${product.pID}`}>
              <ProductCard data={product} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default RightSide;
