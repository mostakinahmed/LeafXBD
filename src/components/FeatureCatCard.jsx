import React from "react";

const categories = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  // You can add images/icons if needed
}));

const CategoryCards = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-lg shadow-md cursor-pointer flex items-center justify-center text-gray-700 font-medium hover:shadow-xl transition-shadow duration-300"
            style={{ aspectRatio: "1 / 1" }} // square card
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
