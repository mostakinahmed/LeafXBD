import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Link, useParams } from "react-router-dom";
import { DataContext, UserContext } from "../Context Api/UserContext";

const RightSide = () => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

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
      <h2 className="text-lg bg-white text-center p-1 mr-4 ml-4 pl-1 rounded-sm shadow-sm font-semibold mb-4">
        {cat}
      </h2>

      {/* Check if there are filtered products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-30 text-xl text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid lg:grid-cols-6 grid-cols-2 ml-4 lg:gap-2">
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
