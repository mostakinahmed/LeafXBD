import React, { useContext, useEffect, useState } from "react";
import HeroAds from "./HeroAds.jsx";
import { DataContext, UserContext } from "../Context Api/UserContext";

const BannerSection = () => {
  const { categoryData, productData } = useContext(DataContext);
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
    <div className="max-w-[1400px] mx-auto  mt-[80px] lg:mt-[95px] px-4 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Banner */}
      <div className="md:col-span-2">
        <img
          src={images[index]}
          alt="Banner"
          className="w-full lg:h-[468px] h-[180px] rounded transition-all duration-500"
        />
      </div>

      {/* Right Sideboxes */}
      <div className="space-y-4">
        {/* Compare Box */}

        <HeroAds products={productData} />

        {/* Career Banner */}
        <img
          src="https://i.ibb.co.com/mCwgXfJc/4.png"
          alt="Career Banner"
          className="w-full h-auto rounded"
        />
      </div>

      {/* Info Cards Section */}
      <div className="col-span-1 md:col-span-3  flex flex-col md:flex-row gap-4 justify-between text-gray-700">
        {/* Card 1 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            1M+ Sold
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
    </div>
  );
};

export default BannerSection;
