import React from "react";
import { Button } from "../ui/button";

interface SpaceFeature {
  name?: string;
  description: string;
}

interface StudioLocationFrameProps {
  title?: string;
  features?: SpaceFeature[];
  locationButton?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const StudioLocationFrame: React.FC<StudioLocationFrameProps> = ({
  title = "STUDIOS NETWORK",
  features = [],
  locationButton = "",
  backgroundColor = "bg-neutral-100",
  textColor = "text-black",
  className = "",
}) => {
  return (
    <div className={`w-full h-screen px-[1rem] md:px-[2rem] flex flex-col justify-center items-center ${backgroundColor} ${textColor} ${className}`}>
      <div>
        <h1 className="text-4xl font-[600]">{title}</h1>
        <div className="ml-12 text-xl">
          {features.map((feature, i) => (
            <ul key={i} className="flex items-center">
              <li className="list-disc text-2xl font-[600]">
                {feature.name} {feature.name && ":"}
              </li>
              <li className="text-xl font-[600]">{feature.description}</li>
            </ul>
          ))}
        </div>
      </div>
      {locationButton && (
        <div className="mt-40">
          <Button text={locationButton} />
        </div>
      )}
    </div>
  );
};

export default StudioLocationFrame;
