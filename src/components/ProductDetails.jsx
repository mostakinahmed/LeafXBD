import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context Api/UserContext";

const productData2 = [
  {
    id: 1,
    name: "Super Laptop 2024",
    cat: "laptop",
    price: 99999,
    description:
      "A high-performance laptop for professionals and gamers with state-of-the-art hardware.",
    specs: ["16GB RAM", "Intel i9 Processor", "1TB SSD", "NVIDIA RTX 3080 GPU"],
    image: "https://via.placeholder.com/600x400?text=Super+Laptop+2024",
  },
  {
    id: 2,
    name: 'UltraMonitor 24"',
    cat: "monitor",
    price: 35000,
    description:
      "24-inch 4K UltraHD monitor with HDR10 support and high refresh rate for ultimate gaming.",
    specs: ["4K UltraHD", "HDR10 support", "144Hz refresh rate"],
    image: "https://cdn.mos.cms.futurecdn.net/xLRc37Zm4xKwEDqJHS5fhE.jpg",
  },
  // Add more products as needed
];

const ProductDetail = () => {
  const { categoryData, productData } = useContext(DataContext);

  const { id } = useParams();
  console.log(id);

  const product = productData.find((item) => item.pID === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="max-w-[1400px] mt-[3rem] lg:mt-[4rem] p-3 px-5 mx-auto  min-h-screen">
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-4">
        {/* Left side: Product Image */}
        <div className="flex-1 w-full  bg-white h-full lg:h-[400px] lg:w-[800px] ">
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
          <p className="text-xl text-gray-500 mb-6">Category: {product.category}</p>
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
  );
};

export default ProductDetail;
