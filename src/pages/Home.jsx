import React from "react";
import HeroSection from "../components/Home/Hero.jsx";
import AutoScrollingText from "../components/Home/scroller.jsx";
import FeaturedCategory from "../components/FeatureCategory.jsx";
import { FeatureProduct } from "../components/FeatureProduct.jsx";
import { SlidingTicker } from "../components/Sliding.jsx";
import HorizontalAds from "../components/Home/HorizontalAds.jsx";
import FlashSale from "../components/Home/FlashSale.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <AutoScrollingText /> */}
      <FeaturedCategory />
      <FlashSale />
      <FeatureProduct />
      <HorizontalAds />
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
