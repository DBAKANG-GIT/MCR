"use client";

import { useState } from "react";
import { MapPin, Users, Calendar, ArrowDown } from "lucide-react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { LandlordsInvestorsSection } from "./component/layout/LandlordsInvestorsSection";
import { LandlordsHero } from "./component/layout/LandlordsHero";
import Link from "next/link";

function SearchForm() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [dates, setDates] = useState("");

  return (
    <div className="w-full hidden lg:block max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#7BBCB0]">
              <MapPin className="w-5 h-5" />
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>
            </div>
            <input
              type="text"
              placeholder="Search For A Destination"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-gray-600 placeholder-gray-400 border-0 focus:outline-none text-sm"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#7BBCB0]">
              <Users className="w-5 h-5" />
              <label className="text-sm font-medium text-gray-700">
                Guests
              </label>
            </div>
            <input
              type="text"
              placeholder="How many Guests?"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full text-gray-600 placeholder-gray-400 border-0 focus:outline-none text-sm"
            />
          </div>

          {/* Check In/Check Out */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#7BBCB0]">
              <Calendar className="w-5 h-5" />
              <label className="text-sm font-medium text-gray-700">
                Check In/Check Out
              </label>
            </div>
            <input
              type="text"
              placeholder="Add dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full text-gray-600 placeholder-gray-400 border-0 focus:outline-none text-sm"
            />
          </div>

          {/* Check Availability Button */}
          <div className="mt-4 md:mt-0">
            <button className="w-full bg-[#7BBCB0] hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// location

function LocationSection() {
  return (
    <section className="py-16 px-4 max-w-8xl mx-auto">
      {/* Header Section */}
      <div className="flex  flex-col font-Jakarta  lg:flex-row items-center justify-center lg:items-center lg:justify-between mb-12 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-lightt text-gray-900 leading-tight">
            Find Your <span className="lg:text-[#4364A0] ">Future</span>
            <br />
            <span className="lg:text-[#4364A0]">Home</span> Today.
          </h2>
        </div>
        <div className="lg:w-1/2  flex flex-col  text-center lg:text-left items-start lg:items-end">
          <p className="text-gray-600 text-lg lleading-relaxed mb-4">
            Explore a world of possibilities. Working away or need a place to
            stay, find your dream stay and every trip feel like home.
          </p>
        </div>

        <div
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 text-gray-500 rounded-full p-4 animate-bounce-slow bg-[#F5F6FF] cursor-pointer "
        >
          <ArrowDown className="w-6 h-6 text-[#4364A0]  " />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image */}
        <div className=" w-full lg:w-1/2">
          <Image
            width={600}
            height={400}
            loading="lazy"
            src="/day-1.webp"
            alt="Manchester city center with historic buildings"
            className="w-full h-[400px] lg:h-[500px] object-cover  "
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2  flex flex-col justify-center text-center lg:text-left font-Jakarta space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            We are in Manchester
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Ready to own your dream home or invest in your future? We are here
            to guide you every step of the way. Lets explore opportunities, make
            informed decisions, and create a brighter tomorrow, together!
          </p>

          <p className="text-gray-600 leading-relaxed">
            Introducing a masterpiece in modern living to Manchesters creative
            district, the iconic Northern Quarter. A vibrant neighbourhood of
            cultural, creative and digital innovation, the Northern Quarter
            calls for a residential offering to keep pace with the demands of
            its inhabitants.
          </p>

          <div className="flex justify-center lg:justify-start w-full">
            <Link href="/properties" className="w-full lg:w-[200px]">
              <button className="text-[#4364A0]  w-full flex items-center justify-center px-5 py-2 bg-[#E8EFFC] font-meduim rounded-full  transition-colors duration-200  gap-2">
                See More
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px] py-12 lg:py-3">
          {/* Left Content */}
          <div className="flex-1 flex text-center lg:text-left flex-col justify-center lg:block font-Jakarta lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl   lg:w-[450px] sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Where Your Dreams Find a Home
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
              Ready to own your dream home or invest in your future? We are here
              to guide you every step of the way. Lets explore opportunities,
              make informed decisions, and create a brighter tomorrow, together!
            </p>
            <Link href="/properties">
              <button className="bg-primary hover:bg-cyan-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-200 text-base">
                Browse Properties
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1  w-full">
            <div className="flex gap-2">
              <Image
                width={600}
                height={400}
                src={"/header-1.webp"}
                alt="Modern living room with couple looking at tablet"
                className="w-[200px] h-[500px] lg:w-[600px] lg:h-[600px]  object-cover"
                priority
                fetchPriority="high"
              />
              <Image
                width={600}
                height={400}
                src={"/header-2.webp"}
                alt="Modern living room with couple looking at tablet"
                className="w-[200px] h-[500px] lg:w-[600px]  lg:h-[600px]  object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <SearchForm />
        <LocationSection />
      </div>
      <LandlordsInvestorsSection />
      <LandlordsHero />
    </section>
  );
}
