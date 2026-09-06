import { useContext, useEffect, useState, useRef } from "react";
import { FiZap, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function NewArrivals() {
  const { productData } = useContext(DataContext);
  const [newArrivalData, setNewArrivalData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Logic to handle dynamic visible items based on screen width
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(2);
      else if (width < 768) setVisibleItems(3);
      else if (width < 1024) setVisibleItems(4);
      else if (width < 1280) setVisibleItems(5);
      else setVisibleItems(6);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const data = productData.filter((item) => item.status?.isNewArrival);
    setNewArrivalData(data);
  }, [productData]);

  // Prevent sliding past the end
  const maxIndex = Math.max(0, newArrivalData.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex, visibleItems]);

  return (
    <section
      className="max-w-[1390px] font-sans  mb-6 lg:mx-auto pb-3 mx-2 bg-cover bg-center bg-no-repeat"
     
    >
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/10 md:p-4 px-2  mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <h1 className="md:text-5xl text-2xl font-bold tracking-tight">
              <span className="text-slate-800">New</span>{" "}
              <span className="bg-gradient-to-r from-brand via-amber-500 to-purple-600 bg-clip-text text-transparent">
                Arrival
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Left Outline Button */}
          <button
            onClick={prevSlide}
            className="md:w-8 md:h-8 w-7 h-7  rounded-full bg-black flex items-center justify-center text-white hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Right Solid Black Button */}
          <button
            onClick={nextSlide}
            className="md:w-8 md:h-8 w-7 h-7  rounded-full bg-black flex items-center justify-center text-white hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Slider Container */}
      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)} // Pause on mobile touch
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="overflow-hidden px-1">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              // 2. The movement percentage now adapts to visibleItems
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {newArrivalData.map((product) => (
              <div
                key={product.pID}
                // 3. Changed w-full to w-1/2 for mobile
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex-shrink-0 px-1 md:px-1.5"
              >
                <Link
                  key={product.pID}
                  to={`/${product.category}/${product.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`} // Replace spaces with hyphens in the URL
                  aria-label={`View details for ${product.name}`}
                >
                  <ProductCard data={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
