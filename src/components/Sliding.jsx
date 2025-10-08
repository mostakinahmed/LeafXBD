import React from "react";

export const SlidingTicker = ({ items }) => {
  return (
    <div className="max-w-[1370px] mx-auto overflow-hidden w-full bg-gray-100 py-2 relative">
      <div className="flex animate-slide whitespace-nowrap">
        {/* Duplicate items to make smooth infinite scroll */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-block mx-6 px-4 py-1 bg-indigo-600 text-white rounded-md"
          >
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
