"use client";
import { useState } from "react";

export function HomeBuy({ data }) {
  // If no product data
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px] w-full">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  // Customer Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order placed!\n\nCustomer: ${form.name}\nProducts: ${data.length} items`
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items- px-2 lg:px-4">
      {/* ===========================
           MULTIPLE PRODUCTS HEADER
      ============================ */}
      <div className="bg-white w-full  rounded shadow p-4 mb-3">
        <h2 className="text-lg font-semibold border-b mb-3">
          Your Products
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-2 border rounded hover:bg-gray-50"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-18 h-18 p-1 object-contain rounded shadow"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                {/* <p className="text-gray-500 text-sm">{item.description}</p> */}
                <p className="text-blue-600 text-sm font-bold mt-1">
                  ${item.price.selling}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===========================
           CUSTOMER FORM
      ============================ */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full  rounded shadow p-4 space-y-4"
      >
        <h2 className="text-lg font-semibold mb-2">Customer Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded p-2 w-full"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded p-2 w-full"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="border rounded p-2 w-full"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Delivery Address"
          className="border rounded p-2 w-full h-20"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="border rounded p-2"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border rounded p-2"
            required
            value={form.postal}
            onChange={(e) => setForm({ ...form, postal: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded mt-4 font-semibold transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
