import React, { useContext, useMemo, useState } from "react";

import { DataContext } from "../components/Context Api/UserContext.jsx";

import { FiSearch, FiX, FiShoppingBag, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Comparison = () => {
  const { productData } = useContext(DataContext);
  const navigate = useNavigate();
  // ============================================================
  // TWO PRODUCT SLOTS
  // ============================================================

  const [selectedProducts, setSelectedProducts] = useState([null, null]);

  // Search query for each product column
  const [searchQueries, setSearchQueries] = useState(["", ""]);

  // Which search dropdown is currently open
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ============================================================
  // SELECT PRODUCT
  // ============================================================

  const handleSelectProduct = (index, product) => {
    const updatedProducts = [...selectedProducts];

    updatedProducts[index] = product;

    setSelectedProducts(updatedProducts);

    // Clear search after selection
    const updatedQueries = [...searchQueries];

    updatedQueries[index] = "";

    setSearchQueries(updatedQueries);

    setActiveDropdown(null);
  };

  // ============================================================
  // REMOVE PRODUCT
  // ============================================================

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...selectedProducts];

    updatedProducts[index] = null;

    setSelectedProducts(updatedProducts);

    const updatedQueries = [...searchQueries];

    updatedQueries[index] = "";

    setSearchQueries(updatedQueries);

    setActiveDropdown(null);
  };

  // ============================================================
  // SEARCH PRODUCT
  // ============================================================

  const getFilteredProducts = (index) => {
    const query = searchQueries[index]?.trim().toLowerCase();

    if (!query) return [];

    if (!productData || !Array.isArray(productData)) {
      return [];
    }

    return productData.filter((product) => {
      if (!product?.name) return false;

      const matchesName = product.name.toLowerCase().includes(query);

      // Don't allow the same product in both columns
      const alreadySelectedInOtherColumn = selectedProducts.some(
        (selectedProduct, selectedIndex) =>
          selectedIndex !== index && selectedProduct?.pID === product.pID,
      );

      return matchesName && !alreadySelectedInOtherColumn;
    });
  };

  const allSpecifications = useMemo(() => {
    const categoryMap = new Map();

    selectedProducts.filter(Boolean).forEach((product) => {
      Object.entries(product.specifications || {}).forEach(
        ([category, specifications]) => {
          if (!categoryMap.has(category)) {
            categoryMap.set(category, new Set());
          }

          if (Array.isArray(specifications)) {
            specifications.forEach((spec) => {
              if (spec?.key) {
                categoryMap.get(category).add(spec.key);
              }
            });
          }
        },
      );
    });

    return Array.from(categoryMap.entries()).map(([category, keys]) => ({
      category,
      keys: Array.from(keys),
    }));
  }, [selectedProducts]);

  // ============================================================
  // GET SPECIFICATION VALUE
  // ============================================================

  const getSpecificationValue = (product, specKey) => {
    if (!product) {
      return "-";
    }

    const specifications = product.specifications || {};

    for (const specs of Object.values(specifications)) {
      if (!Array.isArray(specs)) continue;

      const found = specs.find((spec) => spec?.key === specKey);

      if (found) {
        return found.value || "-";
      }
    }

    return "-";
  };

  // ============================================================
  // HANDLE SEARCH CHANGE
  // ============================================================

  const handleSearchChange = (index, value) => {
    const updatedQueries = [...searchQueries];

    updatedQueries[index] = value;

    setSearchQueries(updatedQueries);

    setActiveDropdown(index);
  };

  // ============================================================
  // PRODUCT URL
  // ============================================================

  const shopNow = (product) => {
    if (!product) return "#";

    const productName = product.name?.replace(/\s+/g, "-").toLowerCase();

    navigate(`/${product.category}/${productName}`);
    // return `/${product.category}/${productName}`;
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 font-sans">
      {/* ======================================================
          PAGE TITLE
      ====================================================== */}

      <div className="mb-7">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Compare Products
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Compare two products and find the differences between their
          specifications.
        </p>
      </div>

      {/* ======================================================
          COMPARISON TABLE
      ====================================================== */}

      <div className="overflow-x-auto bg-white border border-slate-200 rounded">
        <table className="w-full min-w-[950px] border-collapse">
          {/* ==================================================
              HEADER
          ================================================== */}

          <thead>
            <tr>
              {/* ==============================================
                  LEFT INFORMATION COLUMN
              ============================================== */}

              <th
                className="
                  w-[260px]
                  p-6
                  border-b
                  border-r
                  border-slate-200
                  bg-slate-50/70
                  align-top
                  text-left
                "
              >
                <div className="sticky top-0">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#F66107]/10
                      text-[#F66107]
                      flex
                      items-center
                      justify-center
                      mb-4
                    "
                  >
                    <FiShoppingBag size={19} />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Compare Products
                  </h3>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Select two products to compare their specifications,
                    features, and differences.
                  </p>

                  {/* Selected count */}

                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500">
                      Selected
                    </span>

                    <span className="text-[11px] font-black text-[#F66107]">
                      {selectedProducts.filter(Boolean).length}
                      /2
                    </span>
                  </div>
                </div>
              </th>

              {/* ==================================================
                  TWO PRODUCT COLUMNS
              ================================================== */}

              {selectedProducts.map((product, index) => {
                const filteredProducts = getFilteredProducts(index);

                return (
                  <th
                    key={index}
                    className="
                        w-[340px]
                        p-5
                        border-b
                        border-r
                        border-slate-200
                        align-top
                        relative
                        font-normal
                      "
                  >
                    {/* ========================================
                          SEARCH BOX
                      ======================================== */}

                    <div className="relative mb-4">
                      <FiSearch
                        size={15}
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                            pointer-events-none
                          "
                      />

                      <input
                        type="text"
                        placeholder="Search product..."
                        value={searchQueries[index]}
                        onFocus={() => {
                          if (searchQueries[index].trim()) {
                            setActiveDropdown(index);
                          }
                        }}
                        onChange={(e) =>
                          handleSearchChange(index, e.target.value)
                        }
                        className="
                            w-full
                            h-10
                            pl-9
                            pr-9
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-xs
                            font-medium
                            text-slate-700
                            placeholder:text-slate-400
                            outline-none
                            transition
                            focus:border-[#F66107]
                            focus:ring-2
                            focus:ring-[#F66107]/10
                          "
                      />

                      {/* Clear search */}

                      {searchQueries[index] && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...searchQueries];

                            updated[index] = "";

                            setSearchQueries(updated);

                            setActiveDropdown(null);
                          }}
                          className="
                              absolute
                              right-3
                              top-1/2
                              -translate-y-1/2
                              text-slate-400
                              hover:text-slate-700
                              cursor-pointer
                            "
                        >
                          <FiX size={14} />
                        </button>
                      )}

                      {/* ======================================
                            SEARCH DROPDOWN
                        ====================================== */}

                      {activeDropdown === index &&
                        searchQueries[index].trim() !== "" && (
                          <div
                            className="
                                absolute
                                top-12
                                left-0
                                w-full
                                bg-white
                                border
                                border-slate-200
                                rounded-xl
                                shadow-xl
                                overflow-hidden
                                z-50
                              "
                          >
                            {filteredProducts.length > 0 ? (
                              <div className="max-h-60 overflow-y-auto">
                                {filteredProducts.map((p) => (
                                  <button
                                    key={p.pID}
                                    type="button"
                                    onClick={() =>
                                      handleSelectProduct(index, p)
                                    }
                                    className="
                                          w-full
                                          flex
                                          items-center
                                          gap-3
                                          p-3
                                          text-left
                                          hover:bg-[#FDF2EC]
                                          border-b
                                          border-slate-100
                                          last:border-0
                                          transition
                                          cursor-pointer
                                        "
                                  >
                                    {/* Product image */}

                                    <div
                                      className="
                                            w-10
                                            h-10
                                            rounded-lg
                                            bg-slate-50
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                          "
                                    >
                                      <img
                                        src={p.images?.[0]}
                                        alt={p.name}
                                        className="
                                              w-full
                                              h-full
                                              object-contain
                                              p-1
                                            "
                                      />
                                    </div>

                                    {/* Product information */}

                                    <div className="min-w-0 flex-1">
                                      <p className="text-xs font-bold text-slate-800 truncate">
                                        {p.name}
                                      </p>

                                      <p className="text-[11px] text-slate-500 mt-1">
                                        ৳{p.price?.selling || "N/A"}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            ) : (
                              <div className="p-6 text-center">
                                <FiSearch
                                  size={22}
                                  className="mx-auto mb-2 text-slate-300"
                                />

                                <p className="text-xs text-slate-400">
                                  No products found
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                    </div>

                    {/* ========================================
                          SELECTED PRODUCT
                      ======================================== */}

                    {product ? (
                      <div className="flex flex-col min-h-[330px]">
                        {/* Product image */}

                        <div
                          className="
                              relative
                              h-40
                              rounded-xl
                              bg-slate-50
                              border
                              border-slate-100
                              flex
                              items-center
                              justify-center
                              p-3
                              mb-4
                            "
                        >
                          <img
                            src={product.images?.[0]}
                            alt={product.name}
                            className="
                                max-h-full
                                max-w-[190px]
                                object-contain
                                mix-blend-multiply
                              "
                          />
                        </div>

                        {/* Product name */}

                        <h4
                          className="
                              text-sm
                              font-bold
                              text-slate-900
                              line-clamp-2
                              min-h-[40px]
                              mb-2
                            "
                        >
                          {product.name}
                        </h4>

                        {/* Brand */}

                        {product.brandName && (
                          <p className="text-[11px] text-slate-400 mb-2">
                            {product.brandName}
                          </p>
                        )}

                        {/* Price */}

                        <div className="mb-4">
                          <span className="text-lg font-black text-slate-900">
                            ৳{product.price?.selling || "N/A"}
                          </span>

                          {product.price?.regular && (
                            <span className="text-xs text-slate-400 line-through ml-2">
                              ৳{product.price.regular}
                            </span>
                          )}
                        </div>

                        {/* Buttons */}

                        <div className="flex gap-2 md:gap-10 mt-auto md:mx-10">
                          <button
                            type="button"
                            onClick={() => handleRemoveProduct(index)}
                            className="
                                flex-1
                                h-9
                                px-3
                                rounded-full
                                border
                                border-slate-300
                                text-slate-700
                                text-xs
                                font-bold
                                hover:bg-slate-50
                                transition
                                cursor-pointer
                              "
                          >
                            Remove
                          </button>

                          <button
                            onClick={() => shopNow(product)}
                            className="
                                flex-1
                                h-9
                                px-3
                                rounded-full
                                text-white
                                text-xs
                                font-bold
                                flex
                                items-center
                                justify-center
                                gap-1
                                shadow-sm
                                hover:opacity-90
                                transition
                              "
                            style={{
                              backgroundColor: "#F66107",
                            }}
                          >
                            <FiShoppingBag size={13} />
                            Shop Now
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* ======================================
                            EMPTY PRODUCT
                        ====================================== */

                      <div
                        className="
                            min-h-[330px]
                            flex
                            flex-col
                            items-center
                            justify-center
                          "
                      >
                        <div
                          className="
                              w-16
                              h-16
                              rounded-full
                              bg-slate-100
                              flex
                              items-center
                              justify-center
                              text-slate-400
                            "
                        >
                          <FiPlus size={24} />
                        </div>

                        <p className="text-xs font-semibold text-slate-500 mt-4">
                          Add a product
                        </p>

                        <p className="text-[11px] text-slate-400 mt-1">
                          Search above to compare
                        </p>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* ==================================================
              SPECIFICATIONS
          ================================================== */}

          <tbody>
            {allSpecifications.length > 0 ? (
              allSpecifications.map(({ category, keys }) => (
                <React.Fragment key={category}>
                  {/* ========================================
                        CATEGORY HEADER
                    ======================================== */}

                  <tr>
                    <td
                      colSpan={3}
                      className="
                          px-5
                          py-3
                          bg-slate-100
                          border-b
                          border-slate-200
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.12em]
                          text-slate-500
                        "
                    >
                      {category}
                    </td>
                  </tr>

                  {/* ========================================
                        SPECIFICATION ROWS
                    ======================================== */}

                  {keys.map((key) => (
                    <tr
                      key={`${category}-${key}`}
                      className="
                          border-b
                          border-slate-200
                          hover:bg-slate-50/60
                          transition
                        "
                    >
                      {/* LEFT SPECIFICATION NAME */}

                      <td
                        className="
                            w-[260px]
                            p-4
                            border-r
                            border-slate-200
                            bg-slate-50/30
                            align-top
                          "
                      >
                        <span className="text-xs font-bold text-slate-600">
                          {key}
                        </span>
                      </td>

                      {/* PRODUCT VALUES */}

                      {selectedProducts.map((product, index) => {
                        const value = getSpecificationValue(product, key);

                        return (
                          <td
                            key={index}
                            className="
                                  w-[340px]
                                  p-4
                                  border-r
                                  border-slate-200
                                  align-top
                                  text-xs
                                  leading-relaxed
                                "
                          >
                            {product ? (
                              <span
                                className={
                                  value === "-"
                                    ? "text-slate-300"
                                    : "text-slate-700 font-medium"
                                }
                              >
                                {value}
                              </span>
                            ) : (
                              <span className="text-slate-300">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              /* ==============================================
                  NO SPECIFICATIONS YET
              ============================================== */

              <tr>
                <td colSpan={3} className="py-16 text-center">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-3
                      text-slate-400
                    "
                  >
                    <FiSearch size={22} />
                  </div>

                  <p className="text-sm font-semibold text-slate-600">
                    Select products to compare
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Choose two products from the search boxes above.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
