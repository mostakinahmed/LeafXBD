import { img } from "framer-motion/client";
import React, { useContext, useEffect, useState } from "react";
import { FiZap } from "react-icons/fi"; // Feather icon
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function FlashSale() {
  const { productData } = useContext(DataContext);
  const [flashData, setFlashData] = useState([]);

  useEffect(() => {
    const data = productData.filter((item) => item.status.isFlashSale);
    setFlashData(data);
  }, [productData]);

  return (
    <section className=" max-w-[1370px] bg-gray-800 pb-3 xl:mx-auto mx-2 lg:mx-4 rounded">
      <div className="w-full flex items-center justify-between rounded-t bg-gray-800 text-white px-4 py-3 shadow-md animate-bounce ">
        <div className="">
          <h3 className="lg:flex hidden text-lg font-semibold items-center gap-2">
            <FiZap className="text-xl" />
            Flash Sale / Hot Deals
          </h3>
          <h3 className="lg:hidden text-lg font-semibold flex items-center gap-2">
            <FiZap className="text-xl" />
            Flash Sale
          </h3>
        </div>

        <div className="text-sm flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-md font-semibold shadow">
          <span>Ends in:</span>
          <strong>03:12:45</strong>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto lg:px-4 px-2 pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-4 gap-3">
        {flashData.slice(0, 6).map((product) => (
          <Link
            key={product.pID}
            to={`/product/${product.category}/${product.pID}`}
          >
            <ProductCard data={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}

// bg-[#fe741d]
