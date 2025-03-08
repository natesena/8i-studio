import React from "react";
import StudioFrame from "./studio-frame";

const spatialStudioInfo = [
  "Spatial Studio is the first 4D Human Synthesis Studio.",
  "Production Facilities: Sound Studio, 8i Volumetric Capture, DNE Gaussian Face Capture, Gaussian Full Body Scan, Vicon Motion Capture, Sound Booth, Podcast Studio, GreenScreen Stage, LED Wall, Camera & Light Packages (Sony F Series), Live Streaming Broadcast, Production Studio."
];

const SpatialStudioInfo = () => {
  return (
    <StudioFrame 
      title="Spatial Studios (Santa Monica, CA)" 
      infoList={spatialStudioInfo} 
      buttonText="LOS ANGELES"
    />
  );
};

export default SpatialStudioInfo;
