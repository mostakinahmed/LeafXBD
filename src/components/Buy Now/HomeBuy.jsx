"use client";
import { useState } from "react";

export function HomeBuy({ data }) {
  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[400px] w-full">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const total = (data.price * quantity).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed!\n\nCustomer: ${form.name}\nProduct: ${data.name}\nQuantity: ${quantity}\nTotal: $${total}`
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 items-center justify-center mx-2 lg:mr-4">
      <div className="bg-white rounded shadow overflow-hidden">
        {/* Product Section */}
        <div className="bg-gray-50 p-6 flex flex-col items-center justify-center">
          <img
            src={data.images}
            alt={data.name}
            className="rounded w-64 h-48 object-cover shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold">{data.name}</h2>
          <p className="text-gray-600 text-center mt-2 mb-4">
            {data.description}
          </p>
          <p className="text-xl font-bold text-blue-600 mb-4">${data.price}</p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              +
            </button>
          </div>

          <p className="mt-4 text-gray-800 font-medium">
            Total: <span className="text-blue-600 font-bold">${total}</span>
          </p>
        </div>

        {/* Customer Info Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-2 w-full"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-2 w-full"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg p-2 w-full"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <textarea
            placeholder="Delivery Address"
            className="border rounded-lg p-2 w-full h-20"
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg p-2"
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border rounded-lg p-2"
              required
              value={form.postal}
              onChange={(e) => setForm({ ...form, postal: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg mt-4 font-semibold transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
