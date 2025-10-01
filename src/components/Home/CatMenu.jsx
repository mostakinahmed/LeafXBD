import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context Api/UserContext";

const CategoryMenu = () => {

  const { categoryData } = useContext(DataContext);
  return (
    <div className="bg-white shadow-md w-full">
      <div className="max-w-[1400px] pl-2 mx-auto py-2">
        <div className="flex flex-nowrap  lg:flex-nowrap lg:overflow-x-auto overflow-x-auto sm:flex-wrap sm:overflow-visible gap-3 lg:gap-5 lg:ml-2 xl:ml-3 text-sm font-medium text-gray-700">
          {categoryData.map((cat, index) => (
            <Link
              key={index}
              to={`/product/${cat.catID}`}
              className="hover:text-indigo-600 text-black font-semibold whitespace-nowrap"
            >
              {cat.catName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
