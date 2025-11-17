import React, { useContext } from "react";
import { CartContext } from "../components/Context Api/CartContext";
import { DataContext } from "../components/Context Api/UserContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { productData } = useContext(DataContext);

  // Map cart items to full product details
  const data = cart
    .map((cartItem) => {
      const product = productData.find((p) => p.pID === cartItem.pID);
      if (!product) return null; // in case productData doesn't have this product
      return {
        ...product,
        qty: cartItem.qty || 1, // attach the cart quantity
      };
    })
    .filter(Boolean); // remove nulls

  // Calculate total price
  const totalPrice = data.reduce(
    (sum, item) => sum + (item.price || 0) * item.qty,
    0
  );

  return (
    <div className="max-w-[1400px] lg:mt-[86px] mt-[40px] pt-5 mx-auto min-h-screen md:px-4 px-2">
      <div className="w-full rounded-md shadow-lg bg-white p-5">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Product Name
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                  Unit Price
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-600 text-right">
                  Total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {data.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-5">
                    Your cart is empty.
                  </td>
                </tr>
              )}

              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">
                    <img
                      src={item.images || "https://via.placeholder.com/80"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold">{item.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center border rounded-md w-24">
                      <button className="px-2 text-gray-600 hover:bg-gray-100">
                        −
                      </button>
                      <input
                        type="text"
                        value={item.qty}
                        readOnly
                        className="w-10 text-center border-l border-r outline-none"
                      />
                      <button className="px-2 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3">${item.price}</td>
                  <td className="px-4 py-3 text-right">
                    ${item.price * item.qty}
                  </td>
                </tr>
              ))}
            </tbody>

            {data.length > 0 && (
              <tfoot>
                <tr className="bg-gray-100 font-bold text-gray-900">
                  <td colSpan="4" className="px-4 py-3 text-right">
                    Total
                  </td>
                  <td className="px-4 py-3 text-right">${totalPrice}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Cart Summary / Checkout */}
        {data.length > 0 && (
          <div className="flex justify-end mt-6">
            <div className="max-w-sm w-full px-3 pb-1 pt-2 bg-white shadow rounded-md  border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Sub-Total</span>
                <span className="font-semibold text-gray-900">
                  ${totalPrice}
                </span>
              </div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Home Delivery</span>
                <span className="font-semibold text-red-500">$60</span>
              </div>

              <div className="flex justify-between pb-2 bg-gray-100 text-gray-900 font-bold text-lg border-t pt-3 mt-3">
                <span>Total</span>
                <span>${totalPrice + 60}</span>
              </div>

              <button className="w-full mt-5 py-2 bg-blue-600 text-white rounded-xs hover:bg-blue-800 transition font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
