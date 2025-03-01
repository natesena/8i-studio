import React from "react";
import Image from "next/image";

interface Frame306Props {
  onNavigate: (section: string) => void;
}

const names = [
  "Dor Brothers",
  "King Mkr",
  "Midjourney Man",
  "Nem Perez",
  "Lovis Oden",
  "Luka Tsler",
  "Shane3D",
  "Blair Vermette",
];

const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-primary text-2xl hover:bg-primary/10 transition-colors rounded-md font-[400] border border-[#40FD8C] px-6 py-1">
      {text}
    </button>
  );
};

const Frame306: React.FC<Frame306Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto relative w-full h-screen flex text-white items-center justify-between gap-8">
      {/* <div className="absolute top-8 right-8">
        <div onClick={() => onNavigate("hero")}>
          <Button text="Back to Home" />
        </div>
      </div> */}
      <div className="w-7/12">
        <Button text="AI ARTISTS" />
        <p className="mt-6 font-[600] text-2xl">Big Picture</p>
        <p className="text-2xl">
          8i Studios is positioned to reshape creative production by merging
          human talent with AI-driven tools, offering a scalable,
          cost-effective, and innovative alternative to traditional production
          and post-production houses. With proprietary workflows, strategic
          partnerships, and a strong commitment to actor-driven content
          creation, 8i Studios is set to lead the next evolution of filmmaking
          and commercial production.
        </p>
      </div>
      <div className="text-center flex flex-col gap-2 text-3xl">
        {names.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Frame306;
