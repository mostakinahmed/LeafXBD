import React from "react";
import FeatureCatCard from "./FeatureCatCard";
import { FeatureText } from "./Home/FeatureText";

const FeaturedCategory = () => {
  return (
    <>
      <FeatureText data="Category" />
      <FeatureCatCard />
    </>
  );
};

export default FeaturedCategory;
