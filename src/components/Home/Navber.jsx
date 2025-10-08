import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { CartContext } from "../Context Api/CartContext";

const NavbarTop = () => {
  //latest cart value from context
  const { cart } = useContext(CartContext);

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

        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white px-4 py-1 rounded-xs border-2 border-amber-50 text-black focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/offer">
            <div className="text-md cursor-pointer font-semibold px-3 rounded-md border-3 border-red-600 text-white shadow-md animate-pulse hover:bg-red-600 hover:animate-none hover:brightness-110 transition">
              Offers
            </div>
          </Link>

          <div className="text-sm cursor-pointer">⚡ Happy Hour</div>

          {/* Cart section */}
          <div className="relative text-gray-700">
            <Link to={`/checkout/cart`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M5 21h14"
                />
              </svg>
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-4 bg-blue-600 -right-3 text-white text-md font-bold px-1 py-0.2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          {/* <!-- Wishlist / Heart Icon --> */}
          <a href="#" className="text-gray-700  relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </a>

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
        {/* cart */}
        <div className="relative text-gray-700 px-3 ml-20">
          <Link to={`/checkout/cart`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M5 21h14"
              />
            </svg>
          </Link>

          <span className="absolute -top-3 bg-blue-600 -right-1 text-white text-xs font-bold px-1 py-0.2 rounded-full">
            4
          </span>
        </div>

        <Link to="/offer">
          <div className="text-md cursor-pointer  font-semibold mx-4 px-2 rounded-md border-2 border-red-600 text-white shadow-md animate-pulse hover:bg-red-600 hover:animate-none hover:brightness-110 transition">
            Offers
          </div>
        </Link>

        <div className="ml-auto mr-4 text-2xl" id="icon">
          <i className="ri-menu-3-line" onClick={toggle}></i>
        </div>
      </div>

      {values && (
        <div className="md:hidden bg-[#0B1E2D] shadow-lg rounded-b-lg mt-1">
          <nav className="flex flex-col divide-y divide-gray-700">
            <Link
              to="/"
              className="flex items-center px-5 py-4 text-white text-lg font-medium hover:bg-[#1A2B3B] transition duration-300 rounded-md"
            >
              <i className="ri-home-5-line mr-3 text-xl"></i> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center px-5 py-4 text-white text-lg font-medium hover:bg-[#1A2B3B] transition duration-300 rounded-md"
            >
              <i className="ri-information-line mr-3 text-xl"></i> About
            </Link>
            <Link
              to="/account"
              className="flex items-center px-5 py-4 text-white text-lg font-medium hover:bg-[#1A2B3B] transition duration-300 rounded-md"
            >
              <i className="ri-user-line mr-3 text-xl"></i> Account
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarTop;
