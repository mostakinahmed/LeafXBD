import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTruck, FiPackage, FiClock } from "react-icons/fi";

const statuses = [
  { title: "Pending", icon: <FiClock size={24} /> },
  { title: "Confirmed", icon: <FiPackage size={24} /> },
  { title: "Shipped", icon: <FiTruck size={24} /> },
  { title: "Delivered", icon: <FiCheckCircle size={24} /> },
];

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState("");
  const [currentStatus, setCurrentStatus] = useState(null);

  const handleTrack = () => {
    if (!orderId) return;

    // Fake status for demo, replace with API in real app
    const randomIndex = Math.floor(Math.random() * statuses.length);
    setCurrentStatus(randomIndex);
  };

  return (
    <div className="max-w-[1400px] lg:mt-[80px] mt-[47px] px-2 lg:px-4 mx-auto md:py-6 py-3">
      <div className="bg-white shadow p-6 rounded min-h-[calc(100vh-5rem)]">
        {/* Header */}
        <h1 className="md:text-xl text-lg bg-white shadow rounded p-2 h-11 font-bold text-gray-800 mb-6 flex items-center">
          Track Your Order
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Enter Order ID"
            className="flex-grow p-3 rounded shadow focus:outline-none border border-gray-300 focus:border-orange-400 transition"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button
            onClick={handleTrack}
            className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600 transition"
          >
            Track
          </button>
        </div>

        {/* Status Tracker */}
        {currentStatus !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center w-full max-w-3xl mx-auto"
          >
            <div className="relative flex items-center w-full">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2 z-0 rounded"></div>

              {statuses.map((status, index) => (
                <div
                  key={status.title}
                  className="relative flex flex-col items-center z-10 flex-1"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: index <= currentStatus ? 1 : 0.6 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 flex justify-center items-center rounded-full border-4 ${
                      index <= currentStatus
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                    } shadow`}
                  >
                    {status.icon}
                  </motion.div>
                  <span className="mt-2 text-center font-semibold text-gray-700">
                    {status.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded shadow p-6 mt-10 w-full max-w-md text-center"
            >
              <h2 className="text-xl font-bold mb-2">Order ID: {orderId}</h2>
              <p className="text-gray-600">
                Your current status is:{" "}
                <span className="font-semibold text-orange-500 text-xl">
                  {statuses[currentStatus].title}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
