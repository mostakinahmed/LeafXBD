import React, { useContext, useEffect, useState } from "react";
import { DataContext, UserContext } from "../Context Api/UserContext";

const BannerSection = () => {
  // const { categoryData, productData } = useContext(DataContext);
  const images = [
    "ads banner 2.png",
    "https://i.ibb.co.com/MDT9fKxy/2.png",
    "https://www.startech.com.bd/image/cache/catalog/home/banner/2025/starlink-in-store-activation-offer-web-banner-982x500.webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto mt-[35px]  md:mt-[70px] lg:mt-[80px] px-2 lg:px-4 pt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Main Banner */}
      {/* //search box */}
      <div className="w-full max-w-md md:hidden ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pr-12 pl-4 py-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          {/* Search Icon Right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 cursor-pointer hover:text-black transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
            />
          </svg>
        </div>
      </div>
      <div className="md:col-span-2 ">
        <img
          src={images[index]}
          alt="Banner"
          className="w-full  md:h-[263px] lg:h-[350px] xl:h-[475px] h-[210px] rounded transition-all duration-500"
        />
      </div>
      {/* Right Sideboxes */}
      <div className="space-y-3 lg:space-y-3 xl:space-y-2">
        {/* Compare Box */}

        {/* <HeroAds products={productData} /> */}

        <img
          src="right side.png"
          alt="Career Banner"
          className="w-full h-auto rounded"
        />

        <img
          src="right side 2.png"
          alt="Career Banner"
          className="w-full h-auto rounded"
        />
      </div>
      {/* Info Cards Section */}
      <div className="hidden md:flex col-span-1 md:col-span-3 flex-col md:flex-row gap-3 justify-between text-gray-700">
        {/* Card 1 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            1K+ Sold
          </h4>
          <p className="text-md text-gray-500 mt-1">
            Trusted by customers nationwide
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            Fast Delivery
          </h4>
          <p className="text-md text-gray-500 mt-1">Anywhere in Bangladesh</p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            24/7 Support
          </h4>
          <p className="text-md text-gray-500 mt-1">Live chat & hotline</p>
        </div>
      </div>
      {/* Info Cards Section (Headings Only) */}
      <div className="flex flex-col gap-3 text-gray-700 md:hidden">
        {/* Row 1: Card 1 & Card 2 */}
        <div className="flex flex-row md:flex-row gap-3">
          <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-[20px] font-semibold text-indigo-600">
              1K+ Sold
            </h4>
          </div>

          <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-[20px] font-semibold text-indigo-600">
              Fast Delivery
            </h4>
          </div>
        </div>

        {/* Row 2: Card 3 */}
        <div className="flex justify-center">
          <div className="bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center w-full md:w-1/2">
            <h4 className="text-[20px] font-semibold text-indigo-600">
              24/7 Support
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
