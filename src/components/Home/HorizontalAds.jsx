import { useState, useEffect } from "react";

export default function HorizontalAds() {
  const images = ["77.png", "66.png"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1400px] h-full lg:h-[150px]  mx-auto lg:px-4 px-2 md:mb-4 md:mt-2">
      <img
        src={images[index]}
        alt="Banner Ads"
        className="w-full h-full object-contain  transition-all duration-500"
      />
    </div>
  );
}
