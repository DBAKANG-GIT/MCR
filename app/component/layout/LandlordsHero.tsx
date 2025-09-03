"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandlordsHero() {
  return (
    <div className="relative flex font-Jakarta items-center justify-center px-4 min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 transition-transform duration-1000"
        src="/landlord-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-5 pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-yellow-500/20 rounded-full blur-xl animate-float" style={{animationDelay: "2s"}}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto w-full flex flex-col items-center justify-center animate-fade-in-up">
        <h1 className="text-4xl lg:text-6xl font-light mb-8 leading-tight drop-shadow-2xl">
          <span className="block">Designed to be Your</span>
          <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent font-medium animate-gradient">
            Home Away From Home
          </span>
        </h1>

        <div className="w-full flex justify-center items-center animate-fade-in-up" style={{animationDelay: "0.3s"}}>
          <Link href="/contact">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-[#E7C873] to-yellow-400 hover:from-yellow-400 hover:to-amber-500 border-none text-black font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-110 animate-pulse-glow">
              <span className="flex justify-center items-center relative z-10">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
