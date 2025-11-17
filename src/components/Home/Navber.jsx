import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { CartContext } from "../Context Api/CartContext";
import ProfileMenu from "../ProfileNavberIcon";
import { DataContext } from "../Context Api/UserContext";

const NavbarTop = () => {
  const { cart } = useContext(CartContext);
  const { categoryData } = useContext(DataContext);

  const [values, setValue] = useState(false);
  const toggle = () => setValue(!values);

  // Disable background scroll when sidebar is open
  useEffect(() => {
    if (values) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [values]);


  return (
    <div className="bg-white text-black py-1 shadow-md sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="max-w-[1400px] mx-auto items-center justify-between px-4 hidden md:flex">
        <div>
          <Link to="/home">
            <img
              className="w-[100px] h-[45px]"
              src="/logo full final.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white px-4 py-1 rounded-xs border-2 border-[#f4813a] text-black focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/offer">
            <div className="px-3 py-1 border-2 border-red-600 rounded-md font-semibold shadow-md text-black animate-pulse hover:bg-red-600 hover:text-white hover:animate-none transition">
              Offers
            </div>
          </Link>
          <div className="text-sm cursor-pointer">⚡ Happy Hour</div>

          <div className="relative text-gray-700">
            <Link to="/checkout/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M5 21h14"
                />
              </svg>
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-4 -right-3 bg-blue-600 text-white text-md font-bold px-1 py-0.2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <ProfileMenu />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-white w-full h-10 md:hidden flex items-center justify-between px-3">
        <div className="text-3xl cursor-pointer mr-10" onClick={toggle}>
          <i className={values ? "ri-close-line rounded-3xl bg-gray-200 text-3xl" : "ri-menu-3-line"}></i>
        </div>

        <Link to="/home" className="w-[110px] mb-">
          <img className="h-[40px]" src="/logo full final.png" alt="Logo" />
        </Link>

        <div className="relative text-gray-700 px-3">
          <Link to="/checkout/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M5 21h14"
              />
            </svg>
          </Link>

          {cart.length > 0 && (
            <span className="absolute -top-3 -right-1 bg-blue-600 text-white text-xs font-bold px-1 py-0.2 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* Sidebar & Overlay */}
      {values && (
        <>
          {/* Overlay */}
          <div
            className="fixed w-full h-full inset-12 bg-gray-50/10 backdrop-blur-xs z-40 transition-opacity duration-300"
            onClick={() => setValue(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-12 w-1/2 left-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
              values ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="flex flex-col divide-y divide-gray-700 mt-1">
              {categoryData &&
                Array.isArray(categoryData) &&
                categoryData.map((cat, index) => (
                  <Link
                    to="/home"
                    className="flex items-center px-5 py-2  text-lg font-medium hover:bg-[#1A2B3B] transition duration-300"
                    onClick={() => setValue(false)}
                  >
                    {cat.catName}
                  </Link>
                ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarTop;
