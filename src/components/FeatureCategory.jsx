import React from "react";
import FeatureCatCard from "./FeatureCatCard";
import { FeatureText } from "./Home/FeatureText";

const FeaturedCategory = () => {
  return (
    <>
      <div className="-mt-2 lg:-mt-0">
        <FeatureText data="Shop by Category" />
        <FeatureCatCard />
      </div>
    </>
  );
};

export default FeaturedCategory;
