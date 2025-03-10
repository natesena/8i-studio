"use client"; // If using Next.js App Router

import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="fixed bg-black w-[100vw] z-100 text-white bg-neutral- px-2 sm:px-6 py-1 rounded-md bottom-0 left-1/2 transform -translate-x-1/2">
      <h1 className="text-[14px] sm:text-base md:text-lg text-center">
        <Link href="/studios" className="relative inline-block no-underline after:absolute after:content-[''] after:bg-[#40FD8C] after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2">
          Studios
        </Link>
        <span className="mx-2 sm:mx-6">|</span>
        <Link href="/open-source" className="relative inline-block no-underline after:absolute after:content-[''] after:bg-[#40FD8C] after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2">
          Open - Source
        </Link>
        <span className="mx-2 sm:mx-6">|</span>
        <Link href="/ai-workflows" className="relative inline-block no-underline after:absolute after:content-[''] after:bg-[#40FD8C] after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2">
          AI Workflows
        </Link>
        <span className="mx-2 sm:mx-6">|</span>
        <a 
          href="mailto:Luke@kartel.ai"
          className="relative inline-block no-underline after:absolute after:content-[''] after:bg-[#40FD8C] after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2"
        >
          Contact
        </a>
      </h1>
    </div>
  );
};

export default Footer;
