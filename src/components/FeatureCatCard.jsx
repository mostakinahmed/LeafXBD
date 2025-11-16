import React from "react";

const categories = [
  {
    id: 1,
    name: "Laptop",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    id: 2,
    name: "Clothing",
    icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    id: 3,
    name: "Gaming",
    icon: "https://cdn-icons-png.flaticon.com/512/1015/1015087.png",
  },
  {
    id: 4,
    name: "Mobile",
    icon: "https://cdn-icons-png.flaticon.com/512/744/744920.png",
  },
  {
    id: 5,
    name: "Headphones",
    icon: "https://cdn-icons-png.flaticon.com/512/727/727240.png",
  },
  {
    id: 6,
    name: "Camera",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910760.png",
  },
  {
    id: 7,
    name: "Furniture",
    icon: "https://cdn-icons-png.flaticon.com/512/260/260107.png",
  },
  {
    id: 8,
    name: "Books",
    icon: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    id: 9,
    name: "Bikes",
    icon: "https://cdn-icons-png.flaticon.com/512/2972/2972100.png",
  },
  {
    id: 10,
    name: "Sports",
    icon: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
  },
  {
    id: 11,
    name: "Music",
    icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
  },
  {
    id: 12,
    name: "Art",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910743.png",
  },
  {
    id: 13,
    name: "Coffee",
    icon: "https://cdn-icons-png.flaticon.com/512/691/691783.png",
  },
  {
    id: 14,
    name: "Fruits",
    icon: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
  },
];

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

const CategoryCardsSlider = () => {
  return (
    <div className="max-w-[1370px] mx-auto px-4 mb-10 overflow-hidden relative">
      <div className="flex animate-slide gap-4 w-max">
        {/* Duplicate categories for smooth infinite sliding */}
        {[...categories, ...categories].map((cat, index) => (
          <div
            key={index}
            className={`rounded-xl cursor-pointer text-white font-semibold 
              flex flex-col items-center justify-center text-center 
              transition-all duration-300 ease-in-out transform hover:scale-[1.05] shadow-md hover:shadow-xl
              ${gradients[index % gradients.length]}
            `}
            style={{ flex: "0 0 165px", aspectRatio: "1 / 1" }}
          >
            <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-1" />
            <div className="text-sm sm:text-base px-2">{cat.name}</div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); } 
}

.animate-slide {
  animation: slide 60s linear infinite; 
}

        `}
      </style>
    </div>
  );
};

export default CategoryCardsSlider;
