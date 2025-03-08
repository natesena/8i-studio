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
      <div className="absolute top-32 sm:top-12 pointer-events-auto">
        <Button
          text="AI ARTISTS"
          onClick={() => onNavigate("ai-artists")}
          isHomePage={true}
        />
      </div>

      {/* Left button */}
      <div className="absolute left-4 sm:left-12 pointer-events-auto">
        <Button
          text="VIRTUAL PRODUCTION"
          onClick={() => onNavigate("virtual-production")}
          isHomePage={true}
        />
      </div>

      {/* Center image */}
      <div className="relative bottom-[5rem] md:bottom-0 w-[35rem] flex flex-col justify-center items-center gap-4 pointer-events-auto">
        <button onClick={() => onNavigate("hero")}>
          <h1 className="inter flex text-4xl md:text-7xl font-[900] text-[#40FD8C]">
            KARTEL <span className="ml-4 font-[300] text-white"> STUDIO</span>
          </h1>
        </button>
        <h1 className="mt-4 text-md">
          New York <span className="mx-6">|</span> Los Angles{" "}
          <span className="mx-6">|</span> Berlin <span className="mx-6">|</span>{" "}
          Tokyo
        </h1>
      </div>

      {/* Right button */}
      <div className="absolute right-4 sm:right-12 pointer-events-auto">
        <Button
          text="GENERATIVE PRODUCTION"
          onClick={() => onNavigate("generative-production")}
          isHomePage={true}
        />
      </div>

      {/* Bottom button */}
      <div className="absolute bottom-32 sm:bottom-12 pointer-events-auto">
        <Button
          text="DIRECTORS"
          onClick={() => onNavigate("directors")}
          isHomePage={true}
        />
      </div>
    </div>
  );
};

export default Hero;
