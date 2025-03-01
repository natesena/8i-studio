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
      <div className="absolute top-8 sm:top-20 pointer-events-auto">
        <div onClick={() => onNavigate("ai-artists")}>
          <Button text="AI ARTISTS" />
        </div>
      </div>

      {/* Left button */}
      <div className="absolute left-8 sm:left-20 pointer-events-auto">
        <div onClick={() => onNavigate("virtual-production")}>
          <Button text="VIRTUAL PRODUCTION" />
        </div>
      </div>

      {/* Center image */}
      <div className="relative w-[35rem] flex flex-col justify-center items-center gap-4 pointer-events-auto">
        <button onClick={() => onNavigate("hero")}>
          <Image
            src="/img/Kartel UI Vector.png"
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
      <div className="absolute right-8 sm:right-20 pointer-events-auto">
        <div onClick={() => onNavigate("generative-production")}>
          <Button text="GENERATIVE PRODUCTION" />
        </div>
      </div>

      {/* Bottom button */}
      <div className="absolute bottom-8 sm:bottom-20 pointer-events-auto">
        <div onClick={() => onNavigate("directors")}>
          <Button text="DIRECTORS" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
