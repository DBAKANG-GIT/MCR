"use client";

import { useState } from "react";
import { MapPin, Users, Calendar, ArrowDown } from "lucide-react";
import Image from "next/image";
import { LandlordsInvestorsSection } from "./component/layout/LandlordsInvestorsSection";
import { LandlordsHero } from "./component/layout/LandlordsHero";
import Link from "next/link";

function SearchForm() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [dates, setDates] = useState("");

  return (
    <div className="w-full hidden lg:block max-w-6xl mx-auto px-4 py-8 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
      <div className="glass backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/30 p-8 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#7BBCB0]">
              <MapPin className="w-5 h-5" />
              <label htmlFor="location-input" className="text-sm font-medium text-gray-700">
                Location
              </label>
            </div>
            <input
              id="location-input"
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
              <label htmlFor="guests-input" className="text-sm font-medium text-gray-700">
                Guests
              </label>
            </div>
            <input
              id="guests-input"
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
              <label htmlFor="dates-input" className="text-sm font-medium text-gray-700">
                Check In/Check Out
              </label>
            </div>
            <input
              id="dates-input"
              type="text"
              placeholder="Add dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full text-gray-600 placeholder-gray-400 border-0 focus:outline-none text-sm"
            />
          </div>

          {/* Check Availability Button */}
          <div className="mt-4 md:mt-0">
            <button className="group relative overflow-hidden w-full bg-gradient-to-r from-[#7BBCB0] to-cyan-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
              <span className="relative z-10">Check Availability</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
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
      <div className="flex flex-col font-Jakarta lg:flex-row items-center justify-center lg:items-center lg:justify-between mb-12 gap-8 animate-fade-in-up" style={{animationDelay: "1s"}}>
        <div className="lg:w-1/2">
          <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-light text-gray-900 leading-tight">
            Find Your <span className="lg:text-gradient font-bold">Future</span>
            <br />
            <span className="lg:text-gradient font-bold animate-gradient">Home</span> Today.
          </h2>
        </div>
        <div className="lg:w-1/2 flex flex-col text-center lg:text-left items-start lg:items-end">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Explore a world of possibilities. Working away or need a place to
            stay, find your dream stay and every trip feel like home.
          </p>
        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Scroll to bottom of page"
          className="group flex items-center gap-2 text-gray-500 rounded-full p-4 animate-bounce-slow bg-gradient-to-r from-[#F5F6FF] to-blue-50 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowDown className="w-6 h-6 text-[#4364A0] group-hover:animate-pulse" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image */}
        <div className="w-full lg:w-1/2 animate-fade-in-up" style={{animationDelay: "1.2s"}}>
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <Image
              width={600}
              height={400}
              loading="lazy"
              src="/day-1.webp"
              alt="Manchester city center with historic buildings"
              className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium">Manchester City Center</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left font-Jakarta space-y-6 animate-fade-in-up" style={{animationDelay: "1.4s"}}>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 relative">
            We are in <span className="text-gradient-premium animate-gradient">Manchester</span>
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            Ready to own your dream home or invest in your future? We are here
            to guide you every step of the way. Lets explore opportunities, make
            informed decisions, and create a brighter tomorrow, together!
          </p>

          <p className="text-gray-600 leading-relaxed">
            Introducing a masterpiece in modern living to Manchester&apos;s creative
            district, the iconic Northern Quarter. A vibrant neighborhood of
            cultural, creative and digital innovation, the Northern Quarter
            calls for a residential offering to keep pace with the demands of
            its inhabitants.
          </p>

          <div className="flex justify-center lg:justify-start w-full">
            <Link href="/properties" className="w-full lg:w-[200px]">
              <button className="group relative overflow-hidden text-[#4364A0] w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#E8EFFC] to-blue-100 font-medium rounded-full transition-all duration-300 gap-2 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
                <span className="relative z-10">See More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "4s"}}></div>
      </div>
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px] py-12 lg:py-3">
          {/* Left Content */}
          <div className="flex-1 flex text-center lg:text-left flex-col justify-center lg:block font-Jakarta lg:pr-12 mb-8 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl lg:w-[450px] sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              <span className="relative inline-block">
                Where Your Dreams 
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-full transform scale-x-0 animate-shimmer"></div>
              </span>
              <br />
              <span className="text-gradient-premium animate-gradient">Find a Home</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 lg:max-w-lg animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              Ready to own your dream home or invest in your future? We are here
              to guide you every step of the way. Lets explore opportunities,
              make informed decisions, and create a brighter tomorrow, together!
            </p>
            <div className="animate-fade-in-up" style={{animationDelay: "0.4s"}}>
              <Link href="/properties">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 animate-pulse-glow">
                  <span className="relative z-10">Browse Properties</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full animate-fade-in-scale" style={{animationDelay: "0.6s"}}>
            <div className="flex gap-4 relative">
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
                <Image
                  width={600}
                  height={400}
                  src={"/header-1.webp"}
                  alt="Modern living room with couple looking at tablet"
                  className="w-[200px] md:w-full h-[500px] lg:w-[600px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float" style={{animationDelay: "1s"}}>
                <Image
                  width={600}
                  height={400}
                  src={"/header-2.webp"}
                  alt="Modern living room with couple looking at tablet"
                  className="w-[200px] md:w-full h-[500px] lg:w-[600px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-15 animate-pulse" style={{animationDelay: "1s"}}></div>
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
