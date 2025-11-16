import React from "react";
import HeroSection from "../components/Home/Hero.jsx";
import AutoScrollingText from "../components/Home/scroller.jsx";
import FeaturedCategory from "../components/FeatureCategory.jsx";
import { FeatureProduct } from "../components/FeatureProduct.jsx";
import HorizontalAds from "../components/Home/HorizontalAds.jsx";
import FlashSale from "../components/Home/FlashSale.jsx";
import AllProduct from "../components/Home/AllProduct.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <AutoScrollingText /> */}
      <FeaturedCategory />
      <FlashSale />
      <FeatureProduct />
      <HorizontalAds />
      <AllProduct />
    </div>
  );
};
