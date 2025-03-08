import React from "react";
import StudioFrame from "./studio-frame";

const zeroSpaceInfo = [
  "ZeroSpace Studios",
  "ZeroSpace is a next-gen production & creative studio specializing in the integration of digital, virtual, and live content.",
  "Production Facilities: fixed-install LED ICVFX stage, Vicon motion capture stage, head and full-body photogrammetry, volumetric capture stage, 40,000 sq. ft.",
  "ZeroSpace is actively developing content, groundbreaking creative IP, and proprietary technology.",
];

const ZeroSpace = () => {
  return (
    <StudioFrame 
      title="ZeroSpace Studio" 
      infoList={zeroSpaceInfo} 
      buttonText="NEW YORK" 
    />
  );
};

export default ZeroSpace;
