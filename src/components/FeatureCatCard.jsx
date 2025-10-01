import React from "react";

const categories = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  // You can add images/icons if needed
}));

const CategoryCards = () => {
  function getGradientByIndex(index) {
    const gradients = [
      "bg-gradient-to-br from-pink-500 to-red-400",
      "bg-gradient-to-br from-indigo-500 to-purple-500",
      "bg-gradient-to-br from-green-400 to-emerald-500",
      "bg-gradient-to-br from-blue-500 to-cyan-400",
      "bg-gradient-to-br from-yellow-400 to-amber-500",
      "bg-gradient-to-br from-teal-500 to-lime-400",
      "bg-gradient-to-br from-rose-500 to-pink-400",
      "bg-gradient-to-br from-orange-500 to-yellow-400",
    ];
    return gradients[index % gradients.length];
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={`
          rounded-xl cursor-pointer text-white font-semibold 
          flex flex-col items-center justify-center text-center 
          transition-all duration-300 ease-in-out transform hover:scale-[1.05] shadow-md hover:shadow-xl
          ${getGradientByIndex(index)}
        `}
            style={{ aspectRatio: "1 / 1" }}
          >
            <div className="text-2xl sm:text-3xl mb-1">{cat.icon}</div>
            <div className="text-sm sm:text-base px-2">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
