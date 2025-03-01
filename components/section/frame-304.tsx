import React from "react";
import Image from "next/image";

interface Frame304Props {
  onNavigate: (section: string) => void;
}

const items = [
  "Talent Likeness Capture & Licensing",
  "LED Volume",
  "4D Volumetric & Gaussian Splat",
  "Motion Capture",
  "Photogrammetry",
];
const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-primary text-2xl hover:bg-primary/10 transition-colors rounded-md font-[400] border border-[#40FD8C] px-6 py-1">
      {text}
    </button>
  );
};

const Frame304: React.FC<Frame304Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto my-auto flex justify-center items-center relative w-full h-screen">
      {/* <div className="absolute top-8 right-8">
        <div onClick={() => onNavigate("hero")}>
          <Button text="Back to Home" />
        </div>
      </div> */}
      <div className="flex mt-80 text-white items-start justify-between gap-8">
        <div className="flex flex-col items-start justify-end gap-6">
          <Button text="VIRTUAL PRODUCTION" />
          <div className="text-left flex flex-col gap-3 text-3xl">
            {items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
        <div className="w-7/12">
          <p className="mt-6 font-[600] text-2xl">
            A New Era of Production Begins
          </p>
          <p className="text-2xl font-[200]">
            The 8i Generative Production Model marks a transformative moment in
            the media industry. By integrating video LoRA models, volumetric
            capture, and AI workflows, it bridges the gap between human talent
            and AI efficiency, creating an innovative and actor-driven
            production pipeline. Rather than replacing creativity, this approach
            enhances it, making it the most significant advancement in
            production since the advent of digital filmmaking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame304;
