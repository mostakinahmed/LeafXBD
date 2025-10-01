import React from "react";
import LeftSide from "../components/All Product/LeftSide";
import RightSide from "../components/All Product/RightSide";

const AllProduct = () => {
  return (
    <>
      <div className="max-w-[1370px] mt-[55px] mx-auto px-4 py-6 min-h-screen">
        <div className="flex flex-col md:pt-10  lg:flex-row gap-3">
          
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
