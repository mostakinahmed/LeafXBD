import React from "react";
import HeroSection from "../components/Home/Hero.jsx";
import AutoScrollingText from "../components/Home/scroller.jsx";
import FeaturedProductsHeading from "../components/Home/FeatureProduct.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AutoScrollingText />
      <FeaturedProductsHeading />
    </div>
  );
};
