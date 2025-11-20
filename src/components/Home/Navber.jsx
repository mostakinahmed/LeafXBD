import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { CartContext } from "../Context Api/CartContext";
import ProfileMenu from "../ProfileNavberIcon";
import { DataContext } from "../Context Api/UserContext";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { Profile } from "../ProfileNav";
import { FiTruck } from "react-icons/fi"; // Track icon

const NavbarTop = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [values, setValue] = useState(false);
  const [sBar, setSbar] = useState(false);
  const toggle = () => setValue(!values);
  const [searchIcon, setSearchIcon] = useState(true);
  const [catData, setCatData] = useState([]);

  const { categoryData, productData } = useContext(DataContext);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (values) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [values]);

  //filter cat lis
  useEffect(() => {
    const catChanged = () => {
      if (!categoryData || !productData) return;

      const productCategories = productData.map((p) => p.category);

      const data = categoryData.filter((cat) =>
        productCategories.includes(cat.catID)
      );

      setCatData(data);
    };

    catChanged();
  }, [categoryData, productData]);

  //for home sBox control
  const location = useLocation();
  useEffect(() => {
    setSbar(false);
    if (location.pathname === "/home") {
      setSearchIcon(false);
    } else {
      setSearchIcon(true);
    }
  }, [location]);

  return (
    <div className="bg-white text-black py-1 border-b sticky top-0 z-50">
      {/* ======= DESKTOP NAV ======= */}
      <div className="max-w-[1400px] mx-auto items-center justify-between px-4 hidden md:flex">
        {/* Logo */}
        <div>
          <Link to="/home">
            <img
              className="w-[100px] h-[45px]"
              src="/logo full final.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* SEARCH WRAPPER (Centered Dropdown) */}
        <div className=" w-1/2 bg-green-600 ">
          <SearchBar />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          {/* Offers Button */}
          <Link to="/offer">
            {" "}
            <div className="px-3 py-1 rounded font-semibold shadow-md text-white animate-pulse bg-red-600 hover:text-black hover:animate-none transition">
              {" "}
              Offers{" "}
            </div>{" "}
          </Link>

          {/* Track Order Icon */}
          <div
            onClick={() => navigate("/track-order")}
            className="mt-1 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-300 flex items-center justify-center"
            title="Track Order"
          >
            <FiTruck
              size={25}
              className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative border border-transparent hover:border-gray-300 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-300 flex items-center justify-center">
            <Link to="/checkout/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 hover:text-orange-500 transition-colors duration-300"
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
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          {/* Profile Menu */}
          <Profile />
        </div>
      </div>

      {/* ======= MOBILE NAV ======= */}
      <div className="bg-white  w-full h-10 md:hidden flex items-center justify-between px-3">
        <div className="text-3xl cursor-pointer mr-16" onClick={toggle}>
          <i
            className={
              values
                ? "ri-close-line rounded-3xl bg-gray-200 text-black text-3xl"
                : "ri-menu-3-line text-black"
            }
          ></i>
        </div>

        <Link to="/home" className="w-1/3">
          <img
            className="h-[40px] ml-10"
            src="/logo full final.png"
            alt="Logo"
          />
        </Link>

        <div className="flex w-1/3 items-center space-x-2  justify-end">
          {/* Search Icon */}
          <div className="">
            {searchIcon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                onClick={() => setSbar((prev) => !prev)} // call search function
                className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
                />
              </svg>
            )}
          </div>
          <div
            onClick={() => navigate("/track-order")}
            className="mt-1 cursor-pointer border border-transparent hover:border-gray-300 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-300 flex items-center justify-center"
            title="Track Order"
          >
            <FiTruck
              size={25}
              className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
            />
          </div>
          {/* /profile show */}
          <Profile />

          {/* Cart Icon */}
          {/* <div className=" relative ml-3">
            <Link to="/checkout/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 hover:text-black transition"
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
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div> */}
        </div>

        {/* Search Icon Right */}
      </div>
      {sBar && (
        <div className="mx-2 mt-3">
          <SearchBar />
        </div>
      )}

      {/* ======= SIDEBAR + OVERLAY ======= */}
      {values && (
        <>
          {/* Overlay */}
          <div
            className="fixed w-full h-full inset-12 bg-gray-100/10 backdrop-blur-xs z-40"
            onClick={() => setValue(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-12 left-0 h-full w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
              values ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" bg-gray-200 p-1 text-gray-800 font-semibold px-4">
              Category List:
            </div>
            <nav className="flex flex-col">
              {catData?.map((cat, index) => (
                <Link
                  key={index}
                  to={`/product/${cat.catID}`}
                  className="flex items-center px-5 py-2 text-gray-800 border-b border-gray-300 text-md font-medium hover:bg-gray-200"
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
