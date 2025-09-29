import React from "react";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="bg-[#0B1E2D] text-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-bold text-3xl text-white">
          Tech Verge
        </Link>
        {/* <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Star Tech Logo" className="h-8" />
        </div> */}

        {/* Search */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white px-4 py-1 rounded-md border-2 border-amber-50 text-black focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="text-sm cursor-pointer"> Offers</div>
          <div className="text-sm cursor-pointer">⚡ Happy Hour</div>
          <div className="text-sm cursor-pointer"> Account</div>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium">
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
