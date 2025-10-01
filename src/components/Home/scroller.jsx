import React from "react";

// Inline styles for animation
const marqueeStyle = `
@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
`;

const AutoScrollingText = () => {
  return (
    <>
      {/* Inject the animation CSS directly */}
      <style>{marqueeStyle}</style>

      <div className="max-w-auto ml-4 mr-4 lg:max-w-[1370px] lg:ml-4 lg:mr-4 xl:w-full xl:ml-56 mx-auto overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-2 px-4 shadow-md rounded-md  backdrop-blur-sm bg-opacity-80">
        <div
          className="flex items-center animate-marquee whitespace-nowrap text-blue-700 font-semibold text-sm sm:text-base tracking-wide"
          style={{
            animation: "marquee 25s linear infinite",
          }}
        >
          <span className="mx-6">Big Sale Today</span>
          <span className="mx-6">Free Shipping</span>
          <span className="mx-6">New Arrivals</span>
          <span className="mx-6">Grab Yours Now!</span>
          <span className="mx-6">Big Sale Today</span>
          <span className="mx-6">Free Shipping</span>
          <span className="mx-6">New Arrivals</span>
          <span className="mx-6">Grab Yours Now!</span>
        </div>
      </div>
    </>
  );
};

export default AutoScrollingText;
