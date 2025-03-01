import React from 'react'
import Image from 'next/image'

const sources = [
  "4D Volumetric Library",
  "AI Workflows",
  "Custom LoRA Models",
  "Plug-ins & Players",
  "Web Components",
  "API s    &     SDKs",
];

const Frame307 = () => {
  return (
    <div className='w-screen h-screen relative text-white flex flex-col justify-center items-center'>
        <Image src="/img/Screen Recording Feb 18 2025.png" width={1024} height={1024} alt='background image' className='absolute top-0 w-screen h-screen left-0'/>
        <h1 className="text-4xl font-[600] relative z-10">Open Source Libraries</h1>

      <div className="min-h-[30rem] relative z-10 container grid grid-cols-3">
        {sources.map((source, i) => (
          <div
            className="flex flex-col items-center justify-center text-4xl font-[600]"
            key={i}
          >
            
            <h1 className="text-xl">{source}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Frame307