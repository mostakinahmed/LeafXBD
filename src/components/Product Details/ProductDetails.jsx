import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context Api/UserContext";
import Specification from "../Product Details/Specification.jsx";
import { RelatedProduct } from "./RelatedProduct.jsx";
import { Description } from "./Description.jsx";
import { CartContext } from "../Context Api/CartContext.jsx";

const ProductDetail = () => {
  //for cart value change. call func
  const { addToCart } = useContext(CartContext);

  const { categoryData, productData } = useContext(DataContext);
  const { cat, id } = useParams();

  //find specific product
  const product = productData.find((item) => item.pID === id);

  //find current pro cat
  const CurrCat = categoryData.find((item) => item.catID === cat);

  //find all same cat product for related product
  const allProductsInCategory = productData
    .filter((item) => item.category === cat && item.pID !== id)
    .slice(0, 6); // take maximum 5 products

  if (!product) {
    return <div>Product not found</div>;
  }

 

  return (
    <>
      <div className="min-h-screen pb-5">
        {/* Top section for general view */}
        <section className="max-w-[1400px] mt-[3rem] lg:mt-[4rem] p-3 px-5 mx-auto">
          <div className="flex flex-col md:flex-row mt-10 justify-between gap-4">
            {/* Left side: Product Image */}
            <div className="flex-1 w-full rounded-md bg-white h-full lg:h-[400px] lg:w-[800px] ">
              <img
                src={product.images}
                alt={product.name}
                className=" w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Right side: Product Details */}
            <div className="flex-1 bg-white lg:h-[400px] lg:w-[800px] shadow-md px-4 pb-5 pt-2 rounded-md">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>

              <p className="text-xl text-gray-500 mb-1">
                Type: {CurrCat.catName}
              </p>
              <p className="text-xl text-gray-500 mb-35">SKU: {product.pID}</p>

              {/* ✅ Availability Status */}
              <p className="text-xl mb-1">
                Availability:{" "}
                {product.stock > 0 ? (
                  <span className="text-green-600 font-semibold">In Stock</span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Out of Stock
                  </span>
                )}
              </p>

              <p className="text-2xl font-semibold text-gray-800 mb-6">
                TK: {product.price}.00
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product.pID, product.name)}
                  disabled={product.stock <= 0}
                  className={`w-full md:w-auto py-2 px-6 rounded-lg shadow focus:outline-none transition 
        ${
          product.stock > 0
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
                >
                  Add to Cart
                </button>

                <Link to={`/product/${product.category}/${product.pID}/buynow`}>
                  <button
                    disabled={product.stock <= 0}
                    className={`w-full md:w-auto py-2 px-6 rounded-lg shadow focus:outline-none transition 
        ${
          product.stock > 0
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-full lg:max-w-[1400px] mx-auto px-5 flex flex-col lg:flex-row lg:gap-4">
          {/* main Specification */}
          <div className="lg:w-full xl:w-full">
            <Specification data={product} />
          </div>

          {/* Related Product */}
          <RelatedProduct data={allProductsInCategory} />
        </section>

        {/* description */}
        <section className="max-w-[1400px] mt-2 lg:mt-2 p-3 px-5 mx-auto">
          <Description data={product} />
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
