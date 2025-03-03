import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-screen relative flex bg-transparent text-white items-center justify-center select-none">
      {/* Top button */}
      <div className="absolute top-20 sm:top-12 pointer-events-auto">
        {/* <div onClick={() =  > onNavigate("ai-artists")}> */}
          <Button text="AI ARTISTS" onClick={() => onNavigate("ai-artists")} isHomePage={true} />
        {/* </div> */}
      </div>

      {/* Left button */}
      <div className="absolute left-8 sm:left-12 pointer-events-auto">
        {/* <div onClick={() => onNavigate("virtual-production")}> */}
          <Button text="VIRTUAL PRODUCTION" onClick={() => onNavigate("virtual-production")} isHomePage={true} />
        {/* </div> */}
      </div>

      {/* Center image */}
      <div className="relative w-[35rem] flex flex-col justify-center items-center gap-4 pointer-events-auto">
        <button onClick={() => onNavigate("hero")}>
          <Image
            src="/img/logo.png"
            alt="Center Image"
            width={100}
            height={20}
            className="w-64 h-fit cursor-pointer"
            priority
          />
        </button>
        <h1 className="mt-4 text-md">
          New York <span className="mx-6">|</span> Los Angles{" "}
          <span className="mx-6">|</span> Berlin <span className="mx-6">|</span>{" "}
          Tokyo
        </h1>
      </div>

      {/* Right button */}
      <div className="absolute right-8 sm:right-12 pointer-events-auto">
        {/* <div onClick={() => onNavigate("generative-production")}> */}
          <Button text="GENERATIVE PRODUCTION" onClick={() => onNavigate("generative-production")} isHomePage={true} />
        {/* </div> */}
      </div>

      {/* Bottom button */}
      <div className="absolute bottom-20 sm:bottom-12 pointer-events-auto">
        {/* <div onClick={() => onNavigate("directors")}> */}
          <Button text="DIRECTORS" onClick={() => onNavigate("directors")} isHomePage={true} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
