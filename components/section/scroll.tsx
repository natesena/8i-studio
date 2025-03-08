"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';

export default function Scroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Services data
  const services = [
    {
      title: "CINEMA GRADE DIGITAL LIKENESS CAPTURE",
      description: "Includes personalized voice + (2D 3D 4D) motion and emotion capture",
      mediaType: "image",
      mediaLabel: "Digital Likeness Capture"
    },
    {
      title: "PERSONAL LoRA MODELS (PVT AI IMAGE & VIDEO GENERATOR)",
      description: "With a single text prompt you can create unlimited images of yourself Customized AI model trained using your proprietary LoRA data set",
      mediaType: "3d",
      mediaLabel: "AI Image Generator"
    },
    {
      title: "PERSONALIZED 3D & GAME AVATARS",
      description: "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
      mediaType: "video",
      mediaLabel: "Game Avatars"
    },
    {
      title: "Licensing",
      description: "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
      mediaType: "image",
      mediaLabel: "Licensing Options"
    }
  ];

  // Transform for header - make it disappear more gradually
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  
  // Control when cards appear - only after title is gone
  const cardsVisibility = useTransform(scrollYProgress, [0.15, 0.16, 0.9, 1], [0, 1, 1, 0]);
  
  // Calculate the horizontal progress - now with better timing
  const x = useTransform(scrollYProgress, [0.15, 0.9], ["5%", "-75%"]);

  return (
    <>
      <Head>
        <title>Production Services</title>
        <meta name="description" content="Production Services - Talent Capture / Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={containerRef} className="relative bg-neutral-200 text-neutral-900 h-[500vh] max-w-screen border border-black overflow-hidden">
        {/* Fixed header */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight">Production Services</h1>
            <h2 className="text-2xl md:text-4xl font-light mb-16 tracking-wide">Talent Capture / Product</h2>
            <div className="animate-bounce">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mx-auto">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 13.75L12 19.25L6.75 13.75"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18.25V4.75"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Fixed scroll container - only visible between specific scroll points */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen flex items-center overflow-hidden"
          style={{ opacity: cardsVisibility }}
        >
          <motion.div 
            className="flex space-x-24 pl-full relative"
            style={{ x }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-16 border border-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="max-w-6xl min-h-[30rem] w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
                  whileInView={{ 
                    y: [50, 0],
                    opacity: [0, 1] 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: false, margin: "-20%" }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Content section */}
                    <div className="p-10 md:p-12 flex-1">
                      <span className="inline-block py-1 px-4 rounded-full bg-neutral-100 text-neutral-600 text-sm font-semibold mb-6">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{service.title}</h3>
                      <p className="text-lg text-neutral-600 leading-relaxed mb-8">{service.description}</p>
                      <div className="mt-auto">
                        <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    {/* Media section */}
                    <div className="md:w-2/5 h-64 md:h-auto relative bg-neutral-100 flex items-center justify-center">
                      {service.mediaType === "image" && (
                        <div className="p-8 text-center">
                          <div className="w-full h-64 md:h-80 bg-neutral-200 rounded-lg flex items-center justify-center">
                            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <p className="mt-4 text-neutral-500">{service.mediaLabel}</p>
                        </div>
                      )}
                      
                      {service.mediaType === "video" && (
                        <div className="p-8 text-center">
                          <div className="w-full h-64 md:h-80 bg-neutral-200 rounded-lg flex items-center justify-center">
                            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <p className="mt-4 text-neutral-500">{service.mediaLabel}</p>
                        </div>
                      )}
                      
                      {service.mediaType === "3d" && (
                        <div className="p-8 text-center">
                          <div className="w-full h-64 md:h-80 bg-neutral-200 rounded-lg flex items-center justify-center">
                            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                          </div>
                          <p className="mt-4 text-neutral-500">{service.mediaLabel}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div 
          className="fixed bottom-8 left-0 w-full flex justify-center gap-4 z-20"
          style={{ opacity: cardsVisibility }}
        >
          {services.map((_, index) => (
            <motion.div 
              key={index}
              className="w-16 h-2 rounded-full overflow-hidden bg-neutral-300"
            >
              <motion.div
                className="h-full bg-neutral-800"
                style={{
                  scaleX: useTransform(
                    scrollYProgress,
                    [
                      0.15 + (index * 0.75 / services.length), 
                      0.15 + ((index + 1) * 0.75 / services.length)
                    ],
                    [0, 1]
                  ),
                  transformOrigin: "left"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}