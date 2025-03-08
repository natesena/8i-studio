import React from "react";
import StudioFrame from "./studio-frame";

const volumetricStudioFeatures = [
  "High-quality images by 150 dedicated 8K cameras",
  "Largest Volumetric Studio in the world",
  "Able to capture over 10 persons at once"
];

const VolumetricStudioFeatures = () => {
  return (
    <StudioFrame 
      title="Canon Kawasaki (VVS-K)" 
      infoList={volumetricStudioFeatures} 
      buttonText="KAWASAKI"
    />
  );
};

export default VolumetricStudioFeatures;
