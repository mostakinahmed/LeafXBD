import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context Api/UserContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const { productData } = useContext(DataContext);
  const [search, setSearch] = useState("");

  //for instant show
  const filtered = search
    ? productData.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  //for submit and new page
  function searchPage() {
    console.log("submit: ", search);
  }
  // clear searech when route ch
  const location = useLocation();
  useEffect(() => {
    setSearch(""); // clear search box
  }, [location.pathname]);

  return (
    <div>
      {/* SEARCH WRAPPER (Centered Dropdown) */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              searchPage();
            }
          }}
          className="w-full bg-white px-4 py-1.5 md:py-1 rounded-xs border-2 border-[#f4813a] text-black focus:outline-none"
        />

        {/* Search Icon Right */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          onClick={searchPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 cursor-pointer hover:text-black transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
          />
        </svg>

        {/* SEARCH DROPDOWN */}
        {search && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-full bg-white border shadow-md rounded-md max-h-90 overflow-y-auto z-50">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <Link
                  key={p.pID}
                  to={`/product/${p.category}/${p.pID}`}
                  onClick={() => setSearch("")}
                  className="flex items-center gap-8 px-3 py-1 border-b border-gray-300 hover:bg-gray-100"
                >
                  <img
                    src={p.images}
                    alt={p.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>{p.name}</span>
                </Link>
              ))
            ) : (
              <p className="px-3 py-2 text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
