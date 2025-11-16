import { useState, useEffect } from "react";

export default function HorizontalAds() {
  const images = ["77.png", "66.png"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 sec slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1400px] lg:h-[150px] mx-auto px-4 mb-4 mt-2">
      <img
        src={images[index]}
        alt="Banner Ads"
        className="w-full object-contain rounded transition-all duration-500"
      />
    </div>
  );
}
