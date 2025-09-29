import React from "react";

const AllProduct = () => {
  return (
    <>
      <div className="max-w-[1370px] mt-25 mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Filter Sidebar */}
          <aside className="w-full lg:w-64 bg-white p-4 rounded shadow space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Category</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Laptops</span>
                  </label>
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

          {/* Right: Product Section */}
          <section className="w-full lg:w-3/4">
            <h2 className="text-lg bg-white p-1 pl-2 rounded-sm shadow-sm font-semibold mb-4">
              Products
            </h2>

            {/* Product Grid (replace with your dynamic product cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <div
                  key={product}
                  className="bg-white shadow p-4 rounded text-center"
                >
                  <div className="h-40 bg-gray-100 rounded mb-2"></div>
                  <h3 className="text-sm font-medium">Product {product}</h3>
                  <p className="text-gray-500 text-sm">৳ 999</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      ;
    </>
  );
};

export default AllProduct;
