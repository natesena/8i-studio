import React from "react";
import StudioFrame from "./StudioFrame";

const humanSynthesisStudioInfo = [
  "4D Human Synthesis Studio.",
  "4D Volumetric Capture",
  "Production Facilities:  Sound Studio, 8i Volumetric Capture, DNE Gaussian Face Capture, Gaussian Full boy scan, Vicon Motion Capture, Sound Booth, Podcast Studio, GreenScreen Stage, LED Wall, Camera & Light Packages (sony f series), Live Streaming Broadcast, production studio."
];

const Frame316 = () => {
  return (
    <StudioFrame 
      title="RMC  Softbank -IMAGICA Shinagawa Production Center" 
      infoList={humanSynthesisStudioInfo} 
      buttonText="Tokyo"
    />
  );
};

export default Frame316;
