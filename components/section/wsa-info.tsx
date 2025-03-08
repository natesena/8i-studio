import React from "react";
import StudioFrame from "./studio-frame";

const wsaInfo = [
  "ZeroSpace is a next-gen production & creative studio specializing in the integration of digital, virtual, and live content.",
  "Production Facilities: fixed-install LED ICVFX stage, Vicon motion capture stage, head and full-body photogrammetry, volumetric capture stage, 40,000 sq. ft.",
  "ZeroSpace is actively developing content, groundbreaking creative IP, and proprietary technology."
];

const WsaInfo = () => {
  return (
    <StudioFrame 
      title="WSA (NYC)" 
      infoList={wsaInfo} 
      buttonText="NEW YORK" 
    />
  );
};

export default WsaInfo;
