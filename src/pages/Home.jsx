import React from "react";
import HeroSection from "../components/Home/Hero.jsx";
import AutoScrollingText from "../components/Home/scroller.jsx";
import FeaturedCategory from "../components/FeatureCategory.jsx";
import { FeatureProduct } from "../components/ FeatureProduct.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AutoScrollingText />
      <FeaturedCategory />
      <FeatureProduct />
    </div>
  );
};
