"use client";

import VirtualProduction from "@/components/section/virtual-production";
import GenerativeProduction from "@/components/section/generative-production";
import AiArtist from "@/components/section/ai-artist";
import Directors from "@/components/section/directors";
import Hero from "@/components/section/hero";
// import R3FScene from "@/components/models/r3f-implementation";
import { Scene3D } from "@/components/models/Scene3D";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Set initial section based on hash if present
    if (typeof window !== "undefined") {
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
    if (typeof window !== "undefined") {
      window.location.hash = section;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-neutral-900">
      {/* 3D Scene Layer - Fixed full-height background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Scene3D />
      </div>

      {/* UI Layer - Scrollable content */}
      <main className="relative w-full h-full z-10">
        {activeSection === "hero" && <Hero onNavigate={handleNavigation} />}
        {activeSection === "virtual-production" && (
          <VirtualProduction onNavigate={handleNavigation} />
        )}
        {activeSection === "generative-production" && (
          <GenerativeProduction onNavigate={handleNavigation} />
        )}
        {activeSection === "ai-artists" && (
          <AiArtist onNavigate={handleNavigation} />
        )}
        {activeSection === "directors" && (
          <Directors onNavigate={handleNavigation} />
        )}
      </main>
    </div>
  );
}
