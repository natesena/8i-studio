import React from "react";
import Image from "next/image";
const partners = [
  {
    name: "AL Talent Marketplace",
    img: "/images/about-us/kartel.png",
  },
  {
    name: "Creator Economy",
    img: "/images/about-us/lighthouse.png",
  },
  {
    name: "Custom LoRA Models",
    img: "/images/about-us/canon.png",
  },
  {
    name: "Digital Likeness",
    img: "/images/about-us/digital.png",
  },
  {
    name: "Virtual Production",
    img: "/images/about-us/zero.png",
    country: "US",
  },
  {
    name: "Virtual Production",
    img: "/images/about-us/volucap.png",
    country: "EU",
  },
];
const Partners = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-200 via-neutral-500 to-neutral-700 h-screen w-full mx-auto p-[1rem] md:p-[2rem] flex flex-col justify-evenly items-center">
      <h1 className="text-4xl font-[600]">Partners</h1>

      <div className="min-h-[30rem] container grid grid-cols-2 md:grid-cols-3">
        {partners.map((partner, i) => (
          <div
            className="flex flex-col items-center justify-center text-4xl font-[600]"
            key={i}
          >
            <Image
              src={partner.img}
              alt={partner.name}
              width={100}
              height={100}
              className="w-48"
            />
            <h1 className="text-lg">{partner.name}</h1>
            {partner.country && (
              <h1 className="text-sm ml-24 relative bottom-2 text-right">
                {partner.country}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
