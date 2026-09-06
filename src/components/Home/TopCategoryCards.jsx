import React, { useContext } from "react";
import { FiBox } from "react-icons/fi";
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";

const TopCategoryCards = () => {
  const { categoryData } = useContext(DataContext);

  return (
    <div className="max-w-[1400px] font-sans mx-auto mb-10 mt-5">
      {/* Header */}
      <div className=" md:mx-3.5 mb-4">
        <div className="relative overflow-hidden rounded border border-[#1976d2]/15 bg-gradient-to-r from-white via-blue-50 to-white">
          {/* Glow background effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1976d2]/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1976d2]/10 blur-3xl rounded-full"></div>

          <div className="relative px-3 md:py-3 py-1.5 flex items-center justify-between">
            {/* Left side */}
            <div className="flex items-center gap-3">
            
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <h1 className="md:text-5xl text-2xl font-bold tracking-tight">
                      <span className="text-slate-800">Top</span>{" "}
                      <span className="bg-gradient-to-r from-brand via-amber-500 to-purple-600 bg-clip-text text-transparent">
                        Category
                      </span>
                    </h1>
                  </div>
                </div>{" "}
               
                <div className="h-0.5 md:w-80 w-40 bg-gradient-to-r from-[#f66107ff] to-transparent rounded-full mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 border-l border-t border-blue-100 md:mx-3.5 mx-2 rounded overflow-hidden">
        {categoryData && categoryData.length > 0 ? (
          categoryData
            .filter((cat) => cat.topCategory === true)
            .slice(0, 20)
            .map((cat, index) => (
              <Link
                key={cat._id || index}
                to={`/${cat.catName.toLowerCase()}`}
                className="group w-full"
              >
                <div
                  className="
              bg-white
              flex flex-col items-center justify-center
              aspect-square
              text-center
              border-r border-b border-blue-100
              transition-all duration-300
              cursor-pointer px-2 py-1
              hover:bg-gradient-to-b
             
              hover:-translate-y-1
              hover:shadow-md
            "
                >
                  {/* ICON */}
                  <div className="h-10 w-11 lg:h-20 lg:w-20 mb-2 flex items-center justify-center rounded-xl transition-all duration-300">
                    {cat.catIcon ? (
                      <img
                        src={cat.catIcon}
                        alt={cat.catName}
                        className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <FiBox className="text-2xl lg:text-3xl text-[#1976d2]" />
                    )}
                  </div>

                  {/* TEXT */}
                  <span
                    className="
                min-h-[1.5rem]
                flex items-center justify-center
                text-[10px] md:text-[11px] lg:text-sm
                font-medium text-gray-700
                group-hover:text-brand 
                transition-colors
                leading-tight px-1
                line-clamp-2
              "
                  >
                    {cat.catName}
                  </span>
                </div>
              </Link>
            ))
        ) : (
          <div className="p-10 col-span-full text-center text-gray-400 font-medium">
            No Categories Found
          </div>
        )}
      </div>
    </div>
  );
};

export default TopCategoryCards;
