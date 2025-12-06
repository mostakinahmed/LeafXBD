import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/Context Api/CartContext";
import { DataContext } from "../components/Context Api/UserContext";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();

  const { updateCart } = useContext(CartContext);
  const { productData } = useContext(DataContext);
  const [items, setItems] = useState([]); // merged cart items

  // Load cart from localStorage and merge with productData
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const merged = cartItems
      .map((cartItem) => {
        const product = productData.find((p) => p.pID === cartItem.pID);
        if (!product) return null;

        return {
          ...product,
          qty: cartItem.qty || 1,
        };
      })
      .filter(Boolean);

    setItems(merged);
  }, [productData]);

  // Calculate total price
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price.selling * item.qty,
    0
  );

  const totalDiscount = items.reduce(
    (sum, item) => sum + item.price.discount,
    0
  );

  // Remove item from cart
  const onRemove = (pID) => {
    const updatedItems = items.filter((item) => item.pID !== pID);
    setItems(updatedItems);
    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedItems.map((item) => ({ pID: item.pID, qty: item.qty }))
      )
    );

    //update navber
    updateCart();
  };

  //proceed button handler
  const ProceedBtn = () => {
    navigate("/checkout/purchase");
  };
  return (
    <div className="max-w-[1400px] lg:mt-[86px] mt-[40px] pt-5 mx-auto md:px-4 px-2">
      <div className="w-full rounded min-h-screen shadow bg-white p-2 lg:p-3">
        <h1 className="lg:text-lg font-bold text-black lg:mb-3 mb-2">Shopping Cart</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left table-auto w-full whitespace-nowrap">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Product Name
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600 ">
                  Action
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Unit Price
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Discount
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600 text-right">
                  Total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {/* Empty Cart Message */}
              {items.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-5">
                    Your cart is empty.
                  </td>
                </tr>
              )}

              {/* Cart Items */}
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="lg:w-18 lg:h-18 py-1 lg:py-0 object-contain rounded"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <p className="  ">{item.name}</p>
                  </td>

                  <td>
                    <button
                      onClick={() => onRemove(item.pID)}
                      className="text-red-600 text-2xl ml-5 p-2 hover:bg-red-200 rounded"
                    >
                      <IoClose />
                    </button>
                  </td>

                  <td className="px-4 py-3">
                    <p className=" ml-5">{item.qty}</p>
                  </td>

                  <td className="px-4 py-3">{item.price.selling}</td>

                  <td className="px-4 py-3">{item.price.discount || 0}</td>

                  <td className="px-4 py-3 text-right">
                    ${item.price.selling * item.qty - item.price.discount}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Table Footer Total */}
            {items.length > 0 && (
              <tfoot className="w-full">
                <tr className="bg-gray-100 font-bold text-gray-900 w-full">
                  <td colSpan="5" className="px-4 py-3 text-right w-full">
                    Total
                  </td>
                  <td className="px-4 py-3 text-right">{totalPrice}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Order Summary */}
        {items.length > 0 && (
          <div className="flex justify-end mt-6">
            <div className="max-w-sm w-full px-3 pb-1 pt-2 bg-white shadow rounded border border-gray-200">
              <h2 className="lg:text-lg  text-black font-bold mb-4 border-b pb-2">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Sub-Total</span>
                <span className="font-semibold text-gray-900">
                  {totalPrice}
                </span>
              </div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Discount</span>
                <span className="font-semibold text-red-500">
                  {totalDiscount}
                </span>
              </div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Delivery Charge</span>
                <span className="font-semibold text-red-500">$60</span>
              </div>

              <div className="flex justify-between lg:pb-2 pb-1 bg-gray-100 text-gray-900 font-bold text-lg border-t lg:pt-3 pt-1 mt-3">
                <span className="ml-1">Total</span>
                <span className="mr-1">{totalPrice + 60}</span>
              </div>

              <button
                onClick={() => ProceedBtn()}
                className="w-full mt-5 mb-2 py-2 bg-blue-600 text-white rounded-xs hover:bg-blue-800 transition font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
