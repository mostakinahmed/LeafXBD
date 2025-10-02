import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const NavbarTop = () => {
  const [values, setValue] = useState(false);
  const toggle = () => {
    console.log("click", values);
    setValue(!values);
  };

  return (
    <div className="bg-[#0B1E2D] text-white py-2 shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto items-center justify-between px-4 hidden md:flex">
        <div>
          <Link to="/" className="font-bold text-3xl text-white">
            <img className="w-[140px] h-[50px]" src="/logo.png" alt="img" />
          </Link>
        </div>

        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white px-4 py-1 rounded-md border-2 border-amber-50 text-black focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/offer">
            <div className="text-md cursor-pointer font-semibold px-3 py-1 rounded-md border-2 border-red-600 text-white shadow-md animate-pulse hover:bg-red-600 hover:animate-none hover:brightness-110 transition">
              Offers
            </div>
          </Link>
          <div className="text-sm cursor-pointer">⚡ Happy Hour</div>
          <div className="text-sm cursor-pointer"> Account</div>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium">
            Wish List
          </button>
        </div>
      </div>

      <div className="bg-[#0B1E2D] w-full h-10 md:hidden flex items-center">
        <div className="text-xl font-semibold text-white">
          <Link to="/" className="font-bold text-3xl text-white">
            <img className="w-[120px] h-[40px]" src="/logo.png" alt="img" />
          </Link>
        </div>
        <Link to="/offer">
          <div
            className="text-md cursor-pointer ml-34 font-semibold px-2 rounded-md border-2 border-red-600 text-white shadow-md animate-pulse hover:bg-red-600 hover:animate-none hover:brightness-110 transition"
          >
            Offers
          </div>
        </Link>

        <div className="ml-auto mr-4 text-2xl" id="icon">
          <i className="ri-menu-3-line" onClick={toggle}></i>
        </div>
      </div>

      {values && (
        <div className="md:hidden">
          <nav className="ml-5">
            <h2 className="hover:bg-[#334652]">Home</h2>
            <h2 className="hover:bg-[#334652]">About</h2>

            <h2 className="hover:bg-[#334652]">account</h2>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarTop;
