import React from "react";

const CreatorNetwork = () => {
  return (
    <div className="w-full bg-neutral-100 h-screen px-[1rem] md:px-[2rem] flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-[600]">Creator Network</h1>
        <h1 className="mt-2 text-xl font-[600]">
          New York <span className="mx-2">|</span> Los Angles{" "}
          <span className="mx-2">|</span> Berlin <span className="mx-2">|</span>{" "}
          Tokyo
        </h1>
      </div>
    </div>
  );
};

export default CreatorNetwork;
