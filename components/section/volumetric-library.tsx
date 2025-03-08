import React from "react";
import Image from "next/image";


const VolumetricLibrary = () => {
  return (
    <div className="w-screen h-screen relative text-white flex flex-col justify-center items-center">
      <Image
        src="/images/Player 1 (1).png"
        width={1024}
        height={1024}
        alt="background image"
        className="absolute top-0 w-screen h-screen left-0"
      />
      <div className="relative z-10">
      <h1 className="text-4xl text-center font-[600] ">
      VOLUMETRIC  LIBRARY
      </h1>
      <p className="text-xl text-center font-[600]">2000+ VOLUMETRIC  VIDEOS
     <br /> 500+ GAUSIAN SPLAT ENVIRONMENTS</p>
      </div>
    </div>
  );
};

export default VolumetricLibrary;
