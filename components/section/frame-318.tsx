import React from "react";
import StudioLocationFrame from "./StudioLocationFrame";

const creativeSpace = [
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

const Frame318 = () => {
  return (
    <StudioLocationFrame 
      title="Lighthouse  (Brooklyn, NY)"
      features={creativeSpace}
      locationButton="NEW YORK"
    />
  );
};

export default Frame318;