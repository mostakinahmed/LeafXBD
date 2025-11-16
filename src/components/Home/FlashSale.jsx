import React from "react";
import { FiZap } from "react-icons/fi"; // Feather icon

export default function FlashSale() {
  const products = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (99 + i * 25).toFixed(2),
    img: `https://via.placeholder.com/400x300?text=Product+${i + 1}`,
  }));

  return (
    <section className=" max-w-[1370px] bg-red-200 pb-3 mx-4 lg:mx-auto rounded">
      <div className="w-full flex items-center justify-between rounded-t bg-red-500 text-white px-4 py-3 shadow-md">
        <div className="">
          <h3 className="lg:flex hidden text-lg font-semibold items-center gap-2">
            <FiZap className="text-xl" />
            Flash Sale / Hot Deals
          </h3>
          <h3 className="lg:hidden text-lg font-semibold flex items-center gap-2">
            <FiZap className="text-xl" />
            Flash Sale
          </h3>
        </div>

        <div className="text-sm flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-md font-semibold shadow">
          <span>Ends in:</span>
          <strong>03:12:45</strong>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mx-3 gap-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded shadow p-3 text-center hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-36 w-full object-cover rounded"
            />
            <div className="mt-2 text-sm font-medium">{p.title}</div>
            <div className="mt-1 text-indigo-600 font-semibold">${p.price}</div>
            <button className="mt-2 w-full text-sm py-1 border rounded hover:bg-indigo-600 hover:text-white transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
