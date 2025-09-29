import React from "react";

export const FeatureText = ({ data }) => {
  console.log(data);

  return (
    <div className="text-center my-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Featured {data}
      </h2>
      <div className="mt-2 w-24 h-1 mx-auto bg-indigo-600 rounded-full"></div>
      <p className="mt-2 text-sm text-gray-500">
        Get Your Desired Product from Featured {data}!
      </p>
    </div>
  );
};
