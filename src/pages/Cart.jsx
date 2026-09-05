import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion"; // 1. Import motion
import { CartContext } from "../components/Context Api/CartContext";
import { DataContext } from "../components/Context Api/UserContext";
import { useNavigate } from "react-router-dom";
import { IoClose, IoBagHandleOutline, IoArrowForward } from "react-icons/io5";
import { FiPackage, FiTruck, FiTag } from "react-icons/fi";

export const Cart = () => {
  const navigate = useNavigate();
  const { updateCart } = useContext(CartContext);
  const { productData } = useContext(DataContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

    const merged = cartItems
      .map((cartItem) => {
        const product = productData.find((p) => p.pID === cartItem.pID);
        if (!product) return null;
        if (cartItem?.category === "mobile-phone") {
          return {
            ...product,
            qty: cartItem.qty || 1,
            colors: cartItem.color,
            phone_price: cartItem.price,
            storage: cartItem.storage,
          };
        }
        return { ...product, qty: cartItem.qty || 1, colors: cartItem.color };
      })
      .filter(Boolean);
    setItems(merged);
  }, [productData]);

  {
    /* Calculate unit price safely based on category */
  }

  //for total price
  const totalPrice = items.reduce((sum, item) => {
    const isMobile = item?.category?.toLowerCase() === "mobile-phone";

    // Get the correct unit price based on category
    const unitPrice = isMobile
      ? Number(item?.phone_price || item?.price?.selling || 0)
      : Number(item?.price?.selling || 0);

    const qty = Number(item?.qty || 1);
    const discount = Number(item?.price?.discount || 0);

    // Calculate total for the current item (Price * Qty - Discount * Qty)
    const itemTotal = unitPrice * qty - discount * qty;

    return sum + itemTotal;
  }, 0);

  console.log(totalPrice);

  //total dis
  const totalDiscount = items.reduce((sum, item) => {
    const discount = Number(item?.price?.discount || 0);
    const qty = Number(item?.qty || 1);

    // Multiply discount by quantity for each item and add to sum
    return sum + discount * qty;
  }, 0);
  const onRemove = (pID) => {
    const updatedItems = items.filter((item) => item.pID !== pID);
    setItems(updatedItems);
    sessionStorage.setItem(
      "cart",
      JSON.stringify(
        updatedItems.map((item) => ({ pID: item.pID, qty: item.qty })),
      ),
    );
    updateCart();
  };

  const ProceedBtn = () => navigate("/checkout/purchase");

  console.log(items);

  const leftSideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-[1400px] lg:mt-[90px] font-sans mt-[40px] pt-5 mx-auto md:px-4 px-2 mb-60">
      <div className="flex bg-white shadow-xs flex-col lg:flex-row">
        {/* --- Left Side: Product List --- */}
        <div variants={leftSideVariants} className="flex-1">
          <div className="bg-white overflow-hidden border border-slate-200">
            {/* Table (Desktop) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      Product
                    </th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">
                      Color
                    </th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">
                      Quantity
                    </th>

                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">
                      Unit Price
                    </th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">
                      Subtotal
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className="group hover:bg-slate-50/50 transition-all"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 shrink-0 bg-white border border-slate-100 p-1 rounded">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-slate-800 line-clamp-1">
                              {item.name}
                            </span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-bold tracking-wider text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                                {item.pID}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="text-sm font-semibold uppercase text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                          {item.colors}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-center">
                        <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-md">
                          x{item.qty}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-center">
                        {item.category === "mobile-phone" ? (
                          <span className="text-sm font-bold text-slate-800">
                            ৳{item.phone_price.toLocaleString()}
                          </span>
                        ) : (
                          <span className="text-sm font-bold text-slate-800">
                            ৳{item.price.selling.toLocaleString()}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right font-black text-slate-900 text-sm">
                        ৳{/* Calculate unit price safely based on category */}
                        {(() => {
                          const isMobile =
                            item?.category?.toLowerCase() === "mobile-phone";
                          // Fallback safely if phone_price or selling price is missing
                          const unitPrice = isMobile
                            ? Number(item?.phone_price) ||
                              item?.price?.selling ||
                              0
                            : item?.price?.selling || 0;

                          const discount = item?.price?.discount || 0;
                          const qty = item?.qty || 1;

                          const totalPrice = unitPrice * qty - discount * qty;

                          return totalPrice.toLocaleString();
                        })()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => onRemove(item.pID)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                        >
                          <IoClose size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden divide-y divide-slate-100">
              {items.map((item, index) => (
                <div key={index} className="p-4 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 shrink-0 bg-white border border-slate-100 p-1 rounded-lg">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm tracking-wider text-slate-800 line-clamp-2 pr-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => onRemove(item.pID)}
                          className="text-slate-500 p-1"
                        >
                          <IoClose size={20} />
                        </button>
                      </div>
                      <div className="mt-3 flex justify-between items-end">
                        <span className="text-sm font-black text-slate-900">
                          ৳{(item.price.selling * item.qty).toLocaleString()}
                        </span>
                        <div className="bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-800">
                          Qty: {item.qty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {items.length === 0 && (
              <div className="py-20 flex flex-col items-center text-center px-6">
                <FiPackage size={32} className="text-slate-200 mb-4" />
                <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                  Your Bag is Empty
                </h2>
              </div>
            )}
          </div>
        </div>

        {/* --- Right Side: Order Summary --- */}
        {items.length > 0 && (
          <div className="lg:w-[400px]">
            <div className="bg-slate-900 p-8 text-white shadow-2xl sticky mt-10 md:mt-0 top-24">
              <h2 className="text-xl font-black md:mb-6 mb-3">Order Summary</h2>
              <div className="md:space-y-4 space-y-2">
                <div className="flex justify-between items-center text-slate-400 text-sm">
                  <span>Sub-Total</span>
                  <span className="text-white font-bold">৳{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 text-sm">
                  <span>Savings</span>
                  <span className="text-rose-400 font-bold">
                    -৳{totalDiscount}
                  </span>
                </div>
                <div className="md:pt-6 pt-3 md:mt-6 mt-4 border-t border-white/10">
                  <div className="flex justify-between items-end md:mb-8 mb-5">
                    <div>
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">
                        Total Payable
                      </p>
                      <p className="text-3xl font-black tracking-tighter">
                        ৳{totalPrice + 60}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={ProceedBtn}
                    className="group w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
