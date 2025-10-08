import React from "react";

export const Cart = () => {
  return (
    <div class="max-w-[1400px] lg:mt-[100px] mt-[85px] pt-5 mx-auto min-h-screen px-4">
      <div class="w-full rounded-md  shadow-lg bg-white p-5">
        <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

        {/* <!-- Cart Table --> */}
        <div class="overflow-x-auto">
          <table class="min-w-full text-left">
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-3 text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th class="px-4 py-3 text-sm font-semibold text-gray-600">
                  Product Name
                </th>
                <th class="px-4 py-3 text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th class="px-4 py-3 text-sm font-semibold text-gray-600">
                  Unit Price
                </th>
                <th class="px-4 py-3 text-sm font-semibold text-gray-600 text-right">
                  Total
                </th>
              </tr>
            </thead>

            <tbody class="divide-y">
              {/* <!-- Item 1 --> */}
              <tr>
                <td class="px-4 py-3">
                  <img
                    src="https://www.mobiledokan.com/media/tecno-spark-40-pro-bamboo-green-official-color-image.webp"
                    alt="Product"
                    class="w-20 h-20 object-cover rounded-lg"
                  />
                </td>
                <td class="px-4 py-3">
                  <p class="font-semibold">Tecno SPARK 40 Pro</p>
                  <p class="text-sm text-gray-500">Color: Moon Titanium</p>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center border rounded-md w-24">
                    <button class="px-2 text-gray-600 hover:bg-gray-100">
                      −
                    </button>
                    <input
                      type="text"
                      value="1"
                      class="w-10 text-center border-l border-r outline-none"
                    />
                    <button class="px-2 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </td>
                <td class="px-4 py-3">$19,450</td>
                <td class="px-4 py-3 text-right">$19,450</td>
              </tr>

              {/* <!-- Item 2 --> */}
              <tr>
                <td class="px-4 py-3">
                  <img
                    src="https://adminapi.applegadgetsbd.com/storage/media/large/ZTE-nubia-Neo-5G-Black-7212.jpg"
                    alt="Product"
                    class="w-20 h-20 object-cover rounded-lg"
                  />
                </td>
                <td class="px-4 py-3">
                  <p class="font-semibold">ZTE nubia Neo 5G (8/256GB)</p>
                  <p class="text-sm text-gray-500">Color: Yellow</p>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center border rounded-md w-24">
                    <button class="px-2 text-gray-600 hover:bg-gray-100">
                      −
                    </button>
                    <input
                      type="text"
                      value="1"
                      class="w-10 text-center border-l border-r outline-none"
                    />
                    <button class="px-2 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </td>
                <td class="px-4 py-3">$17,950</td>
                <td class="px-4 py-3 text-right">$17,950</td>
              </tr>
            </tbody>

            {/* <!-- Total Row --> */}
            <tfoot>
              <tr class="bg-gray-100 font-bold text-gray-900">
                <td colspan="4" class="px-4 py-3 text-right xl:pr-32 lg:pr-18">
                  Total
                </td>
                <td class="px-4 py-3 text-right">$37,400</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* <!-- Cart Summary --> */}
        <div className="flex justify-end">
          <div class="max-w-sm w-full px-1 pt-2">
            <h2 class="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              Order Summary
            </h2>

            <div class="flex justify-between text-gray-700 mb-2">
              <span>Sub-Total</span>
              <span class="font-semibold text-gray-900 mr-3">$37,400</span>
            </div>

            <div class="flex justify-between text-gray-700 mb-2">
              <span>Home Delivery</span>
              <span class="font-semibold text-red-500 mr-3">$60</span>
            </div>

            <div class="flex justify-between pb-2 bg-gray-100 text-gray-900 font-bold text-lg border-t pt-3 mt-3">
              <span className="ml-1 text-xl">Total</span>
              <span className="mr-3 text-xl">$37,460</span>
            </div>
          </div>
        </div>

        {/* <!-- Coupon / Voucher Section in One Row --> */}
        <div class="max-w-full bg-white shadow-lg rounded-md p-3 border border-gray-200 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
          <div className="">
            <input
              type="text"
              placeholder="Promo / Coupon Code"
              class="border border-gray-300 rounded-md p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button class="bg-blue-600 text-white px-5 ml-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter your gift voucher code"
              class="border border-gray-300 rounded-md p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button class="bg-green-600 text-white px-5 ml-5 py-2 rounded-md hover:bg-green-700 transition font-semibold whitespace-nowrap">
              Apply Voucher
            </button>
          </div>

          <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-bold whitespace-nowrap">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
