import React from "react";
import StudioLocationFrame from "./studio-location-frame";

const veniceCreativeSpace = [
  {
    description:
      "A creative space designed for effortless flow — from original idea to production to publish — tailored for the creator economy.",
  },
  {
    name: "Production Facilities",
    description:
      "Video-enabled podcast studios, streaming rooms, photography studios, editing bays & test kitchens.",
  },
];

const StudioLighthouseVenice = () => {
  return (
    <StudioLocationFrame 
      title="Lighthouse  (Venice, California)"
      features={veniceCreativeSpace}
      locationButton="LOS ANGELES"
    />
  );
};

export default StudioLighthouseVenice;
