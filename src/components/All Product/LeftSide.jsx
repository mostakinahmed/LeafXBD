import React, { useState } from "react";

const LeftSide = () => {
  const [value, setValue] = useState(false);
  function toog() {
    setValue(!value);
    console.log(value);
  }

  return (
    <div>
      <div className="mr-4 ml-4">
        <button
          className="w-full mt-7 lg:hidden bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded "
          onClick={toog}
        >
          Filters
        </button>
      </div>

      {value && (
        <aside className="w-full lg:w-64 lg:grid p-4 mt-3  bg-white rounded shadow space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Category</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Laptops</span>
                </label>
                0
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Smartphones</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Accessories</span>
                </label>
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <div className="flex space-x-2 items-center">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border rounded px-2 py-1 text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Brand</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Apple</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Samsung</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Dell</span>
                </label>
              </li>
            </ul>
          </div>

          {/* Apply Filters Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded">
            Apply Filters
          </button>
        </aside>
      )}

      <aside className="w-full lg:w-64 hidden lg:grid p-4 bg-white rounded shadow space-y-6">
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Laptops</span>
              </label>
              0
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Smartphones</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Accessories</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Price Range</h3>
          <div className="flex space-x-2 items-center">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border rounded px-2 py-1 text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Brand</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Apple</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Samsung</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Dell</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded">
          Apply Filters
        </button>
      </aside>
    </div>
  );
};

export default LeftSide;
