"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export default function Error404() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#2a2a2a] flex flex-col justify-center items-center p-4 md:p-8 font-inter">
      <div className="max-w-5xl flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <Image
            src={"/man.png"}
            alt="Nancheez Estates Astronaut"
            width={480}
            height={480}
            className="mx-auto my-8 lg:my-0 transform rotate-[-10deg] scale-x-[-1]"
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-base text-primary font-semibold tracking-wide mb-2 uppercase">
            Page Not Found
          </h2>
          <h1 className="text-7xl lg:text-8xl font-bold mb-4 text-[#333333]">
            404
          </h1>
          <p className="text-lg lg:text-xl mb-4 max-w-md">
            Oops, it looks like this page has taken a wrong turn. Let’s get you
            back on track.
          </p>
          <div className="hidden lg:block w-full relative">
            <div className="absolute left-[-40%] top-[-80px] w-[180%] border-b border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md flex flex-col items-center mt-8 lg:mt-12">
        <p className="text-sm text-[#75757A] lg:text-base mb-6 text-center">
          Try refreshing your browser or return to our homepage to continue
          exploring.
        </p>
        <Link href="/" passHref>
          <Button className="bg-primary hover:bg-[#a17f3a] text-white font-semibold py-3 px-6 rounded shadow-md transition-all">
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
