import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context Api/UserContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const LeftSide = ({ onFilter }) => {
  const { categoryData, productData } = useContext(DataContext);
  const { cat } = useParams();

  const [catData, setCatData] = useState([]);
  const [value, setValue] = useState(false);
  const [selectedRange, setSelectedRange] = useState({ min: "", max: "" });
  const [selectedIds, setSelectedIds] = useState([]);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const toog = () => setValue(!value);

  useEffect(() => {
    setValue(window.innerWidth > 450);
  }, []);

//for cat show
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
  useEffect(() => {
    if (!productData) return;

    let brands;
    if (selectedIds.length === 0) {
      brands = productData
        .filter((p) => p.category === cat)
        .map((p) => p.brandName);
    } else {
      brands = productData
        .filter((p) => selectedIds.includes(p.category))
        .map((p) => p.brandName);
    }

    setUniqueBrands([...new Set(brands)]);
  }, [cat, selectedIds, productData]);

  const handleRangeChange = (min, max) => {
    setSelectedRange({ min, max });
  };

  const handleCheckboxChange = (id, checked) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    }
  };

  const handleBrandChange = (brand, checked) => {
    if (checked) {
      setSelectedBrand((prev) => [...prev, brand]);
    } else {
      setSelectedBrand((prev) => prev.filter((b) => b !== brand));
    }
  };

  const reset = () => {
    Swal.fire({
      icon: "warning",
      title: "Reset All Filters!",
      html: "<p class='text-gray-700'>All your filter selections have been cleared.</p>",
      backdrop: `rgba(0,0,0,0.5)`,
      timer: 1000,
      showConfirmButton: false,
      scrollbarPadding: false,
      timerProgressBar: true,
      customClass: {
        popup: "rounded-xl p-6 bg-white shadow-lg",
        title: "text-xl font-bold text-indigo-600",
        htmlContainer: "text-center text-gray-700",
        icon: "text-yellow-500",
      },
    });
    setSelectedRange({ min: "", max: "" });
    setSelectedIds([]);
    setSelectedBrand([]);
  };

  const filter = () => {
    if (!productData) return;

    let filterData = productData;

    // CATEGORY FILTER
    if (selectedIds.length > 0) {
      filterData = filterData.filter((p) => selectedIds.includes(p.category));
    } else if (cat) {
      filterData = filterData.filter((p) => p.category === cat);
    }

    // BRAND FILTER
    if (selectedBrand.length > 0) {
      filterData = filterData.filter((p) =>
        selectedBrand.includes(p.brandName)
      );
    }

    // PRICE FILTER
    if (selectedRange.min !== "" || selectedRange.max !== "") {
      filterData = filterData.filter((p) => {
        const price = Number(p.price);
        const minCheck =
          selectedRange.min === "" || price >= Number(selectedRange.min);
        const maxCheck =
          selectedRange.max === "" || price <= Number(selectedRange.max);
        return minCheck && maxCheck;
      });
    }

    // Pass filtered data to parent callback
    onFilter?.(filterData);
  };

  // const applyBtn = () => {
  //   if (
  //     selectedBrand.length === 0 &&
  //     selectedIds.length === 0 &&
  //     selectedRange.min === "" &&
  //     selectedRange.max === ""
  //   ) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Please select filter!",
  //       backdrop: `rgba(0,0,0,0.3)`,
  //       timer: 1000,
  //     });
  //     return;
  //   }

  //   filter();
  //   reset();
  // };

  // Auto filter whenever selection changes
  useEffect(() => {
    filter();
  }, [selectedBrand, selectedIds, selectedRange, cat]);

  return (
    <div className="bg-white rounded-md shadow">
      <div>
        <button
          className="w-full lg:hidden bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2"
          onClick={toog}
        >
          Filters
        </button>
      </div>

      {value && (
        <aside className="w-full lg:w-64 lg:flex-col p-4 mt-3 md:mt-0 md:space-y-6 space-y-3">
          {/* PRICE FILTER */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
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

          <div className="flex flex-row gap-7 md:gap-0 w-full">
            {/* CATEGORY */}
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-3">Category</h3>
              <ul className="space-y-2 text-gray-700 text-sm flex flex-col">
                {catData.map((cat) => (
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

            {/* BRAND */}
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

          {/* RESET BTN */}
          <button
            onClick={reset}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded"
          >
            Reset
          </button>
        </aside>
      )}
    </div>
  );
};

export default LeftSide;
