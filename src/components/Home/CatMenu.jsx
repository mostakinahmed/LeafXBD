import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context Api/UserContext";

const CategoryMenu = () => {
  const { categoryData } = useContext(DataContext);
  return (
    <div className="bg-white shadow w-full hidden md:flex">
      <div className="max-w-[1400px] pl-2 mx-auto py-2">
        <div className="flex flex-nowrap lg:flex-nowrap lg:overflow-x-auto overflow-x-auto sm:flex-wrap sm:overflow-visible lg:gap-5 lg:ml-2 xl:ml-3 text-sm font-medium text-gray-700">
          {categoryData.map((cat, index) => (
            <Link
              key={index}
              to={`/product/${cat.catID}`}
              className="relative group text-gray-700 hover:text-blue-600 font-semibold lg:text-[15px] whitespace-nowrap pr-3"
            >
              {cat.catName}
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
