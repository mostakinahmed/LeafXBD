import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    cat: "laptop",
    name: "John Doe",
    email: "johndoe@example.com",
    age: 29,
    isActive: true,
  },
  {
    id: 2,
    cat: "laptop",
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    cat: "laptop",
    name: "Sam Green",
    email: "samgreen@example.com",
    age: 23,
    isActive: true,
  },
  {
    id: 4,
    cat: "power",
    name: "Emily White",
    email: "emilywhite@example.com",
    age: 41,
    isActive: false,
  },
  {
    id: 5,
    cat: "desktop",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    age: 30,
    isActive: true,
  },
];

const RightSide = () => {
  const { cat } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the category
    if (cat) {
      const filtered = data.filter((product) => product.cat === cat);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data); // If no category, show all products
    }
  }, [cat, data]);

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
