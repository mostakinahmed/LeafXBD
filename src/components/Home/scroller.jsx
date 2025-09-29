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

      <div className="max-w-[1370px] mx-auto  shadow-sm flex items-center justify-between overflow-hidden bg-white py-2">
        <div
          className="inline-block whitespace-nowrap text-red-700 font-medium text-md animate-scroll"
          style={{
            animation: "scroll-left 25s linear infinite",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          <span className="mx-4">🔥 Big Sale Today</span>
          <span className="mx-4">🚚 Free Shipping</span>
          <span className="mx-4">🆕 New Arrivals</span>
          <span className="mx-4">🎁 Grab Yours Now!</span>
          <span className="mx-4">🔥 Big Sale Today</span>
          <span className="mx-4">🚚 Free Shipping</span>
          <span className="mx-4">🆕 New Arrivals</span>
          <span className="mx-4">🎁 Grab Yours Now!</span>
        </div>
      </div>
    </>
  );
};

export default AutoScrollingText;
