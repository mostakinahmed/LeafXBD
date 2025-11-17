import ProductCard from "../components/ProductCard";
import { DataContext } from "../components/Context Api/UserContext";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SearchResult() {
  const { productData } = useContext(DataContext);
  const { keyword } = useParams();

  console.log(keyword);

  const filtered = productData.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mt-[35px] lg:mt-[80px] mx-auto lg:px-4 px-2 py-6 min-h-screen">
      {/* Header */}
      <h1 className="md:text-xl text-lg bg-white shadow rounded p-2 h-11 font-bold text-gray-800 mb-3">
        Search : <span className="text-orange-500">{keyword}</span>
      </h1>

      {/* Results List */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((product) => (
            <Link to={`/product/${product.category}/${product.pID}`}>
              <ProductCard data={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
