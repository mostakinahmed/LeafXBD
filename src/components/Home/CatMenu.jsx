import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiCpu,
  FiZap,
  FiChevronDown,
  FiShoppingBag,
  FiLayers,
} from "react-icons/fi";
import CategoryDropdown from "./CategoryDropdown";

const CategoryMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // Close custom menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const customMenus = [
    {
      id: "robotics",
      title: "Robotics",
      icon: <FiCpu />,
      subCats: ["Arduino", "ESP32", "Sensors", "Motors", "Robotics Kits"],
    },
  ];

  return (
    <nav className="bg-white  shadow w-full hidden md:flex h-11  sticky top-0 z-[80] ">
      <div className="xl:max-w-[1380px] w-full mx-auto flex justify-between items-center px-4">
        {/* --- LEFT SECTION: Primary Navigation --- */}
        <div className="flex items-center h-full">
          <CategoryDropdown />
        </div>

        {/* --- MIDDLE SECTION: Trending / Direct Links --- */}
        <div className="flex-grow flex items-center xl:gap-8 lg:gap-4 ml-8">
          <Link
            to="/electronics"
            className="flex items-center gap-2  hover:text-[#1976d2] font-medium text-sm  tracking-wider transition-all"
          >
            <FiLayers className="text-[#1976d2] opacity-90" />
            IoT & Electronics
          </Link>
          <Link
            to="/kids-zone"
            className="flex items-center gap-2  hover:text-[#1976d2] font-medium text-sm  tracking-wider transition-all"
          >
            <FiShoppingBag className="text-[#1976d2] opacity-90" />
            Kids Zone
          </Link>
          <Link
            to="/daily-accessories"
            className="flex items-center gap-2  hover:text-[#1976d2] font-medium text-sm  tracking-wider transition-all"
          >
            <FiZap className="text-orange-500 animate-pulse" />
            Daily Accessories
          </Link>
        </div>

        {/* --- RIGHT SECTION: Clickable Custom Niche Dropdowns --- */}
        <div className="items-center h-full hidden" ref={menuRef}>
          {customMenus.map((menu) => {
            const isMenuOpen = activeMenu === menu.id;

            return (
              <div key={menu.id} className="relative flex items-center h-full">
                {/* Clickable Toggle Button */}
                <button
                  onClick={() => setActiveMenu(isMenuOpen ? null : menu.id)}
                  className={`flex items-center gap-2 px-5 h-full text-[13px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isMenuOpen
                      ? "text-[#1976d2] bg-blue-50/50"
                      : "text-slate-700 hover:text-[#1976d2]"
                  }`}
                >
                  <span className="text-base text-[#1976d2]">{menu.icon}</span>
                  {menu.title}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Individual Niche Dropdown Panel */}
                <div
                  className={`absolute top-full right-0 w-56 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] py-4 rounded-b-xl border-t-2 border-[#1976d2] transition-all duration-300 origin-top z-50 ${
                    isMenuOpen
                      ? "opacity-100 scale-y-100 visible"
                      : "opacity-0 scale-y-95 invisible pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col">
                    <li className="px-6 pb-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                        Categories
                      </p>
                    </li>
                    {menu.subCats.map((sub) => (
                      <li key={sub}>
                        <Link
                          to={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMenu(null)}
                          className="block px-6 py-2.5 text-[12px] font-bold uppercase tracking-tight text-slate-600 hover:text-[#1976d2] hover:bg-blue-50 transition-all border-l-4 border-transparent hover:border-[#1976d2]"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenu;
