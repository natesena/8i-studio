import React from "react";

const Frame332 = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-200 via-neutral-500 to-neutral-700 h-screen w-full mx-auto p-[1rem] md:p-[2rem] flex flex-col justify-evenly items-center">
      <h1 className="text-4xl font-[600]">About us</h1>

      <div className="min-h-[30rem] container grid grid-cols-3">
      {
        [1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center justify-center text-4xl font-[600]">
            Seb Webber
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Frame332;
