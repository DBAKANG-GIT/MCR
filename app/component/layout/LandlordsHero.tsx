"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandlordsHero() {
  return (
    <div className="relative flex  font-Jakarta items-center justify-center  px-4 min-h-[500px] md:min-h-[500px] lg:min-h-[500px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/landlord-1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl fontt-light  font-bold mb-6 leading-tight drop-shadow-lg">
          Designed to be Your Home Away From Home
        </h1>

        <div className="w-full flex justify-center items-center ">
          <Link href="/contact">
            <Button className="bg-[#E7C873] border-none  text-black  font-meduim px-10 py-2 text-lg rounded-full ">
              <span className="flex justify-center items-center ">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      {/* Overlay for darkening video for better text contrast */}
      <div className="absolute inset-0 bg-[#00000073] bg-opacity-40 z-5 pointer-events-none" />
    </div>
  );
}
