"use client"; // If using Next.js App Router

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bg-black w-[100vw] z-100 text-white bg-neutral- px-6 py-1 rounded-md bottom-0 left-1/2 transform -translate-x-1/2">
      <h1 className="text-md text-center">
        <Link href="/studios" className="hover:underline">
          Studios
        </Link>
        <span className="mx-6">|</span>
        <Link href="/open-source" className="hover:underline">
          Open - Source
        </Link>
        
        <span className="mx-6">|</span>
        <Link href="/ai-workflows" className="hover:underline">
          AI Workflows
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
