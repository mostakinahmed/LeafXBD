import React from "react";
import LeftSide from "../components/All Product/LeftSide";
import RightSide from "../components/All Product/RightSide";

const AllProduct = () => {
  return (
    <>
      <div className="max-w-[1400px] md:mt-[55px] mt-[47px] mx-auto md:py-6 py-3 min-h-screen">
        <div className="flex flex-col md:mx-4 mx-2 lg:pt-6 lg:flex-row gap-3">
          
          {/* Left: Filter Sidebar */}
          <LeftSide />

          {/* Right: Product Section */}
          <RightSide />
        </div>
      </div>
      ;
    </>
  );
};

export default AllProduct;
