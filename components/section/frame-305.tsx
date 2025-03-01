import React from "react";
import Image from "next/image";

interface Frame305Props {
  onNavigate: (section: string) => void;
}

const items = [
  "Black Box Theatre",
  "Comfy UI Workflows",
  "Pre-vis Storyboarding",
  "Proprietary LoRA Models",
  "AI Agents & Avatars",
  "Localization & Versioning",
];

const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-primary text-2xl hover:bg-primary/10 transition-colors rounded-md font-[400] border border-[#40FD8C] px-6 py-1">
      {text}
    </button>
  );
};

const Frame305: React.FC<Frame305Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto my-auto flex justify-center items-center relative w-full h-screen">
      {/* <div className="absolute top-8 right-8">
        <div onClick={() => onNavigate("hero")}>
          <Button text="Back to Home" />
        </div>
      </div> */}
      <div className="flex text-white items-start justify-between gap-8">
        <div className="w-7/12">
          <p className="mt-6 font-[600] text-2xl">Big Picture</p>
          <p className="text-2xl font-[200]">
            8i Studios is positioned to reshape creative production by merging
            human talent with AI-driven tools, offering a scalable,
            cost-effective, and innovative alternative to traditional production
            and post-production houses. With proprietary workflows, strategic
            partnerships, and a strong commitment to actor-driven content
            creation, 8i Studios is set to lead the next evolution of filmmaking
            and commercial production.
          </p>
        </div>
        <div className="flex flex-col items-end justify-end gap-6">
          <Button text="Generative Production" />
          <div className="text-right flex flex-col gap-3 text-3xl">
            {items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame305;
