import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((product) => (
        <div
          key={product.id} // Assuming your product data has an 'id' field
          className="bg-white shadow p-4 rounded text-center"
        >
          <Link to={`/product/${product.cat}/${product.id}`}>
            {/* Product Image (Replace with actual image if available) */}
            <div className="h-40 bg-gray-100 rounded mb-2"></div>

            {/* Product Name */}
            <h3 className="text-sm font-medium">{product.name}</h3>

            {/* Product Price (or another relevant data) */}
            <p className="text-gray-500 text-sm">৳ {product.email}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
