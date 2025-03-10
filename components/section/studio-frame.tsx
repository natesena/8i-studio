import React from "react";
import { Button } from "../ui/button";

interface StudioFrameProps {
  title: string;
  infoList: string[];
  buttonText: string;
  backgroundColor?: string;
  textColor?: string;
  titleSize?: string;
  listItemSize?: string;
  buttonPosition?: "top" | "bottom" | "center";
  className?: string;
}

const StudioFrame: React.FC<StudioFrameProps> = ({ 
  title, 
  infoList, 
  buttonText,
  backgroundColor = "bg-neutral-100",
  textColor = "text-black",
  titleSize = "text-5xl",
  listItemSize = "text-lg",
  buttonPosition = "bottom",
  className = ""
}) => {
  return (
    <div className={`w-full ${backgroundColor} ${textColor} h-screen px-[1rem] md:px-[2rem] flex flex-col justify-center items- ${className}`}>
      {buttonPosition === "top" && (
        <div className="mb-10">
          <Button text={buttonText} isHomePage={false} />
        </div>
      )}
      
      <div>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl`}>{title}</h1>
        <ul className="list-disc ml-10 font-[600]">
          {infoList.map((info, i) => (
            <li key={i} className={listItemSize}>{info}</li>
          ))}
        </ul>
      </div>

      {buttonPosition === "center" && (
        <div className="my-10">
          <Button text={buttonText} isHomePage={false} />
        </div>
      )}

      {buttonPosition === "bottom" && (
        <div className="mt-40 w-full flex items-center justify-center uppercase">
          <Button text={buttonText} isHomePage={false} />
        </div>
      )}
    </div>
  );
};

export default StudioFrame;
