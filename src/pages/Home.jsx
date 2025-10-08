import React from "react";
import HeroSection from "../components/Home/Hero.jsx";
import AutoScrollingText from "../components/Home/scroller.jsx";
import FeaturedCategory from "../components/FeatureCategory.jsx";
import { FeatureProduct } from "../components/ FeatureProduct.jsx";
import { SlidingTicker } from "../components/Sliding.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AutoScrollingText />
      <FeaturedCategory />
      <FeatureProduct />
      {/* <SlidingTicker
        items={[
          "Samsung Galaxy A56",
          "iPhone 15 Pro",
          "OnePlus Nord 3",
          "Xiaomi Redmi Note 13",
          "Google Pixel 8",
          "Samsung Galaxy A56",
          "iPhone 15 Pro",
          "OnePlus Nord 3",
          "Xiaomi Redmi Note 13",
          "Google Pixel 8",
          "Samsung Galaxy A56",
          "iPhone 15 Pro",
          "OnePlus Nord 3",
          "Xiaomi Redmi Note 13",
          "Google Pixel 8",
          "Samsung Galaxy A56",
          "iPhone 15 Pro",
          "OnePlus Nord 3",
          "Xiaomi Redmi Note 13",
          "Google Pixel 8",
        ]}
      /> */}
    </div>
  );
};
