'use client';

import Frame304 from "@/components/section/frame-304";
import Frame305 from "@/components/section/frame-305";
import Frame306 from "@/components/section/frame-306";
import Frame331 from "@/components/section/frame-331";
import Hero from "@/components/section/hero";
import R3FScene from "@/components/models/r3f-implementation";
import { Scene3D } from "@/components/models/Scene3D";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  console.log({activeSection})
  
  useEffect(() => {
    // Set initial section based on hash if present
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }

      // Listen for hash changes
      const handleHashChange = () => {
        const newHash = window.location.hash.replace("#", "");
        if (newHash) {
          setActiveSection(newHash);
        } else {
          setActiveSection("hero");
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  // Create a function to handle direct navigation
  const handleNavigation = (section: string) => {
    setActiveSection(section);
    if (typeof window !== 'undefined') {
      window.location.hash = section;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-neutral-900">
      {/* 3D Scene Layer - Full screen and always interactive */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* UI Layer - Transparent except for UI elements */}
      <div className="absolute inset-0 z-10">
        {activeSection === "hero" && <Hero onNavigate={handleNavigation} />}
        {activeSection === "virtual-production" && <Frame304 onNavigate={handleNavigation} />}
        {activeSection === "generative-production" && <Frame305 onNavigate={handleNavigation} />}
        {activeSection === "ai-artists" && <Frame306 onNavigate={handleNavigation} />}
        {activeSection === "directors" && <Frame331 onNavigate={handleNavigation} />}
      </div>
    </div>
  );
}
