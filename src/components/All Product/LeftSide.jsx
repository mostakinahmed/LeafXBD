import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context Api/UserContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const LeftSide = () => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat } = useParams();

  const [value, setValue] = useState(false);
  function toog() {
    setValue(!value);
  }

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 450) {
        setValue(true);
      } else {
        setValue(false);
      }
    };
    updateSize();
  }, []);

  // ---------------- Range ----------------
  const [selectedRange, setSelectedRange] = useState({
    min: "",
    max: "",
  });

  const handleRangeChange = (min, max) => {
    if (min || max) {
      setSelectedRange({ min: min, max: max });
    } else {
      setSelectedRange({ min: "", max: "" });
    }
  };

  // ---------------- CATEGORY ----------------
  const [selectedIds, setSelectedIds] = useState([]);
  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    }
  };
  // ---------------- BRAND UNIQUE FETCH ----------------
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  useEffect(() => {
    if (!productData) return;

    const brands = productData
      .filter((pro) => pro.brandName)
      .map((pro) => pro.brandName);

    const unique = [...new Set(brands)];
    setUniqueBrands(unique);
  }, [productData]);

  const handleBrandChange = (brand, checked) => {
    if (checked) {
      setSelectedBrand((prev) => [...prev, brand]);
    } else {
      setSelectedBrand((prev) => prev.filter((b) => b !== brand));
    }
  };

  // ---------------- APPLY BUTTON ----------------
  const applyBtn = () => {
    if (
      selectedBrand.length === 0 &&
      selectedIds.length === 0 &&
      selectedRange.min === "" &&
      selectedRange.max === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please select filter!",
        backdrop: `rgba(0,0,0,0.3)`,
        timer: 1000,
      });
      return;
    } else {
      // console.log({
      //   selectedCategories: selectedIds,
      //   selectedBrand: selectedBrand,
      //   selectedRange: selectedRange,
      // });
      filter();
      reset();
    }
  };

  const [data, setData] = useState(null);
  let filterData;
  //check category
  const filter = () => {
    if (selectedIds.length > 0) {
      filterData = productData.filter((p) => selectedIds.includes(p.category));
    } else {
      filterData = productData.filter((p) => cat.includes(p.category));
    }

    //check brand
    if (selectedBrand.length > 0) {
      filterData = filterData.filter((p) =>
        selectedBrand.includes(p.brandName)
      );
    }
    console.log(filterData);
  };
  //reset filter
  function reset() {
    setSelectedRange({
      min: "",
      max: "",
    });
    setSelectedIds([]);
    setSelectedBrand([]);
  }

  return (
    <div className=" bg-white rounded-md shadow">
      <div>
        <button
          className="w-full lg:hidden bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 "
          onClick={toog}
        >
          Filters
        </button>
      </div>

      {value && (
        <aside className="w-full lg:w-64 lg:flex-col p-4 mt-3 md:mt-0 md:space-y-6 space-y-3 ">
          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-semibold md:mb-3 mb-2">Price Range</h3>
            <div className="flex space-x-2 items-center">
              <input
                type="number"
                placeholder="Min"
                value={selectedRange.min}
                onChange={(e) =>
                  handleRangeChange(e.target.value, selectedRange.max)
                }
                className="w-1/2 border rounded px-2 py-1 text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={selectedRange.max}
                onChange={(e) =>
                  handleRangeChange(selectedRange.min, e.target.value)
                }
                className="w-1/2 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-row gap-7 md:gap-0 w-full ">
            {/* Category Filter */}
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-3">Category</h3>
              <ul className="space-y-2 text-gray-700 text-sm flex flex-col">
                {categoryData.map((cat) => (
                  <label
                    key={cat.catID}
                    className="inline-flex items-center cursor-pointer mr-6 whitespace-nowrap"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={selectedIds.includes(cat.catID)}
                      onChange={(e) =>
                        handleCheckboxChange(cat.catID, e.target.checked)
                      }
                    />
                    <span className="ml-2 whitespace-nowrap">
                      {cat.catName}
                    </span>
                  </label>
                ))}
              </ul>
            </div>

            {/* Brand Filter */}
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-3">Brand</h3>
              <ul className="space-y-2 text-gray-700 text-sm flex flex-col">
                {uniqueBrands.map((name) => (
                  <label
                    key={name}
                    className="inline-flex items-center cursor-pointer mr-6 whitespace-nowrap"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={selectedBrand.includes(name)}
                      onChange={(e) =>
                        handleBrandChange(name, e.target.checked)
                      }
                    />
                    <span className="ml-2 whitespace-nowrap">{name}</span>
                  </label>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={applyBtn}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded"
          >
            Apply Filters
          </button>
        </aside>
      )}
    </div>
  );
};

export default LeftSide;
