import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const categories = [
    "Desktop",
    "Laptop",
    "Component",
    "Monitor",
    "Power",
    "Phone",
    "Tablet",
    "Office Equipment",
    "Camera",
    "Security",
    "Networking",
    "Software",
    "Server & Storage",
    "Accessories",
  ];

  return (
    <div className="bg-white shadow-md w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <div className="flex flex-nowrap lg:flex-nowrap lg:overflow-x-auto overflow-x-auto sm:flex-wrap sm:overflow-visible gap-2 lg:gap-4 text-sm font-medium text-gray-700">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/product/${cat.toLowerCase()}`}
              className="hover:text-indigo-600 text-black font-semibold whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
