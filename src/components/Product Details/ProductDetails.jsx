import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context Api/UserContext";
import Specification from "../Product Details/Specification.jsx";
import { RelatedProduct } from "./RelatedProduct.jsx";
import { Description } from "./Description.jsx";

const ProductDetail = () => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat, id } = useParams();

  //find specific product
  const product = productData.find((item) => item.pID === id);

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
            <div className="flex-1  bg-white shadow-md px-4 pb-5 pt-1 rounded-md ">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-500 mb-6">
                Category: {product.category}
              </p>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                ৳ {product.price}
              </p>

              {/* Product Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Specifications:
              </h3>
              {/* <ul className="list-disc pl-6 text-gray-700 mb-6">
            {product.specs.map((spec, index) => (
              <li key={index} className="text-sm">
                {spec}
              </li>
            ))}
          </ul> */}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 focus:outline-none">
                  Add to Cart
                </button>
                <button className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700 focus:outline-none">
                  Buy Now
                </button>
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
          <Description data={product}/>
        </section>

      </div>
    </>
  );
};

export default ProductDetail;
