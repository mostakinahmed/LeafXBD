import React, { useContext, useEffect, useState, useMemo } from "react";
import ProductCard from "../ProductCard";
import { DataContext } from "../Context Api/UserContext";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const FeatureProduct = () => {
  const { productData } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  // Featured Products
  const featuredData = useMemo(
    () => productData.filter((item) => item.status?.isFeatured),
    [productData],
  );

  // Responsive Items Count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) setVisibleItems(2);
      else if (width < 768) setVisibleItems(3);
      else if (width < 1024) setVisibleItems(4);
      else if (width < 1280) setVisibleItems(5);
      else setVisibleItems(6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredData.length - visibleItems);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    if (isPaused || featuredData.length <= visibleItems) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, featuredData.length, visibleItems]);

  return (
    <section className="relative max-w-[1390px] md:mt-6 mt-10 mb-2 font-sans lg:mx-auto mx-2 pb-5 rounded overflow-hidden ">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/10 px-3 md:py-6 mb-3 md:mb-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <h1 className="md:text-5xl text-2xl font-bold tracking-tight">
              <span className="text-slate-800">Featured</span>{" "}
              <span className="bg-gradient-to-r from-brand via-amber-500 to-purple-600 bg-clip-text text-transparent">
                Product
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

      {/* Slider */}
      <div
        className="relative z-10 group px-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {featuredData.map((product) => (
              <div
                key={product.pID}
                style={{ width: `${100 / visibleItems}%` }}
                className="flex-shrink-0 px-1 md:px-1.5"
              >
                <Link
                  to={`/${product.category}/${product.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
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
};

export default FeatureProduct;
