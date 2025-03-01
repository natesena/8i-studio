import React from "react";
import StudioLocationFrame from "./StudioLocationFrame";

const londonCreativeSpace = [
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

const Frame320 = () => {
  return (
    <StudioLocationFrame 
      title="Lighthouse  (London, England)"
      features={londonCreativeSpace}
      locationButton="LONDON"
    />
  );
};

export default Frame320;
