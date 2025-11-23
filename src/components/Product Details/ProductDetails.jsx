import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context Api/UserContext";
import Specification from "../Product Details/Specification.jsx";
import { RelatedProduct } from "./RelatedProduct.jsx";
import { Description } from "./Description.jsx";
import { CartContext } from "../Context Api/CartContext.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

  //for imge gallery
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="min-h-screen pb-5">
        {/* Top section for general view */}
        <section className="max-w-[1400px] mt-[9px] lg:mt-[50px] p-3 md:px-5 px-2 mx-auto">
          <div className="flex  flex-col md:flex-row mt-10 justify-between gap-3">
            {/* Left side: Product Image */}
            <div className="flex-1 bg-white flex  rounded-md shadow">
              {/* Vertical Thumbnails */}
              <div className="flex flex-col gap-2 border-r px-3 py-1 justify-center overflow-y-auto max-h-[400px]">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-20 h-20 p-1 object-contain rounded-md cursor-pointer border-2 ${
                      idx === currentIndex
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative bg-white rounded-md  h-[400px] flex items-center justify-center">
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 rounded-md"
                />

                {/* Optional arrows for main image */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentIndex(
                          currentIndex === 0
                            ? product.images.length - 1
                            : currentIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/90"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex(
                          currentIndex === product.images.length - 1
                            ? 0
                            : currentIndex + 1
                        )
                      }
                      className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/90"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Right side: Product Details */}
            <div className="flex-1 bg-white lg:h-[400px] lg:w-[800px] shadow px-4 pb-5 pt-2 rounded-md">
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
                TK: {product?.price?.selling ?? "0"}.00
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product.pID, product.name)}
                  disabled={product.stock <= 0}
                  className={`w-full md:w-auto py-2 px-6 rounded-md shadow focus:outline-none transition 
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
                    className={`w-full md:w-auto py-2 px-6 rounded-md shadow focus:outline-none transition 
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

        <section className="max-w-full lg:max-w-[1400px] mx-auto md:px-5 px-2 flex flex-col lg:flex-row lg:gap-3">
          {/* main Specification */}
          <div className="lg:w-full xl:w-full">
            <Specification data={product} />
          </div>

          {/* Related Product */}
          <RelatedProduct data={allProductsInCategory} />
        </section>

        {/* description */}
        <section className="max-w-[1400px] p-3 md:px-5 px-2 mx-auto">
          <Description data={product} />
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
