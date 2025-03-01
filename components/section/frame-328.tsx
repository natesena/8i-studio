import React from "react";
import Image from "next/image";

const sources = [
  "4D Volumetric Library",
  "AI Workflows",
  "Custom LoRA Models",
  "Plug-ins & Players",
  "Web Components",
  "API s    &     SDKs",
];

const Frame328 = () => {
  return (
    <div className="w-screen h-screen relative text-white flex flex-col justify-center items-center">
      <Image
        src="/img/Open Source 2.1.png"
        width={1024}
        height={1024}
        alt="background image"
        className="absolute top-0 w-screen h-screen left-0"
      />
      <h1 className="text-4xl text-center font-[600] relative z-10">
      VOLUMETRIC + GAUSSIAN <br /> SPLAT 4D PLAYER
      </h1>
    </div>
  );
};

export default Frame328;
