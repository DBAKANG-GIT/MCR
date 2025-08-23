"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  MapPin,
  Star,
  Share,
  Heart,
  ChevronLeft as CalendarLeft,
  ChevronRight as CalendarRight,
  Calendar,
  Wifi,
  Thermometer,
  WashingMachine,
  Wind,
  Home,
  Car,
  Cigarette,
  PawPrint,
  Users,
} from "lucide-react";

export default function PropertyPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("10 July, 2025");
  const [checkOut, setCheckOut] = useState("18 July, 2025");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("August 2025");
  const [selecting, setSelecting] = useState<"checkIn" | "checkOut" | null>(
    null
  );
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreFacilities, setShowMoreFacilities] = useState(false);

  const images = [
    "/property-1.jpg",
    "/property-2.jpg",
    "/property-3.jpg",
    "/property-4.jpg",
    "/property-5.jpg",
    "/property-6.jpg",
    "/property-1.jpg",
  ];

  const facilities = [
    { icon: Home, name: "Shared Living Room" },
    { icon: Car, name: "Balcony" },
    { icon: Wifi, name: "WiFi" },
    { icon: Thermometer, name: "Heating" },
    { icon: WashingMachine, name: "Washing Machine" },
    { icon: Wind, name: "Air Conditioner" },
  ];

  const calendarDays = [
    ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null],
  ];

  const availabilityMonths = [
    { month: "Jan", price: "500€" },
    { month: "Feb", price: "500€" },
    { month: "Mar", price: "700€" },
    { month: "Apr", price: "700€" },
    { month: "May", price: "700€" },
    { month: "Jun", price: "700€" },
    { month: "Jul", price: "500€" },
    { month: "Aug", price: "600€" },
    { month: "Sep", price: "500€" },
    { month: "Oct", price: "500€" },
    { month: "Nov", price: "500€" },
    { month: "Dec", price: "500€" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Return to Homepage
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              One Port Street, Northern Quarter, Manchester.
            </h1>

            {/* Location and Rating */}
            <div className="flex items-center mb-6">
              <MapPin className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-gray-600 mr-4">
                Manchester, WD19 4AA, United Kingdom
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-current"
                  />
                ))}
                <span className="text-gray-600 ml-2">(294 reviews)</span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-6">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt="Property main image"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                {images.slice(1).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      selectedImage === index + 1
                        ? "border-cyan-500"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Property image ${index + 2}`}
                      width={100}
                      height={80}
                      className="w-full h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Price and Features */}
            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-4">
                £450
                <span className="text-lg font-normal text-gray-600">
                  /Bills included
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>4 bedrooms</span>
                <span>150 m²</span>
                <span>Private Bathroom</span>
                <span>Furnished</span>
                <span>Cleaning included</span>
                <span>Balcony</span>
                <span>Bed Linen/Towels</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  See the highlights of London via 2 classic modes of transport
                  on this half-day adventure. First, you will enjoy great views
                  of Westminster Abbey, the Houses of Parliament, and the London
                  Eye, as you meander through the historic streets on board a
                  vintage double decker bus.
                </p>
                {showMoreDescription && (
                  <p>
                    Continue to see St. Pauls Cathedral, Sir Christopher Wrens
                    architectural masterpiece, where Admirals Nelson and
                    Wellington are buried, and Princess Diana and Prince Charles
                    got married. Continue to the Tower of London, built nearly
                    1,000 years ago during the reign of William the Conqueror...
                  </p>
                )}
                <button
                  onClick={() => setShowMoreDescription(!showMoreDescription)}
                  className="text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  {showMoreDescription ? "Show less" : "Show more"} ↓
                </button>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Facilities
              </h2>
              <div className="flex flex-wrap gap-4">
                {facilities
                  .slice(0, showMoreFacilities ? facilities.length : 6)
                  .map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 rounded-full bg-[#F2F4F7] text-[#344054]"
                    >
                      <facility.icon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{facility.name}</span>
                    </div>
                  ))}
              </div>
              <button
                onClick={() => setShowMoreFacilities(!showMoreFacilities)}
                className="text-cyan-600 hover:text-cyan-700 font-medium mt-4"
              >
                {showMoreFacilities ? "Show less" : "Show more"} ↓
              </button>
            </div>

            {/* Availability */}
            <div className="flex flex-col lg:flex-row  items-center gap-6 lg:gap-[5rem] mb-8 w-full">
              <div className="space-y-2 w-full text-sm text-gray-600 mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Availability
                </h2>{" "}
                <p>
                  Available from:{" "}
                  <span className="font-medium">26th September 2025</span>
                </p>
                <p>
                  Minimum stay: <span className="font-medium">3 Months</span>
                </p>
                <p>
                  Maximum stay:{" "}
                  <span className="font-medium">Not detriment</span>
                </p>
                <p>
                  Calendar Updated:{" "}
                  <span className="font-medium">1 week ago</span>
                </p>
              </div>
              <div className="grid grid-cols-6 gap-1 w-full">
                {availabilityMonths.map((month, index) => (
                  <div
                    key={index}
                    className="text-center bg-gray-100 text-gray-400 rounded px-1 h-fit py-1"
                  >
                    <div className="text-[10px] text-gray-500">
                      {month.month}
                    </div>
                    <div className="text-[10px] font-medium">{month.price}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Landlord rules */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Landlord rules
              </h2>
              <div className="border border-gray-200 rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-sm bg-gray-50 rounded-lg px-4 p-2">
                    <Cigarette className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">
                      No smoking allowed
                    </span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-50 rounded-lg px-4 p-2">
                    <PawPrint className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">
                      Pets are not allowed
                    </span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-50 rounded-lg px-4 p-2">
                    <Users className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">
                      Overnight guests are allowed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Booking Request
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <Share className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Check In/Out */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check In:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={checkIn}
                      readOnly
                      className="w-full p-3 border text-black border-gray-300 rounded-lg bg-white cursor-pointer"
                      onClick={() => {
                        setShowCalendar(true);
                        setSelecting("checkIn");
                      }}
                    />
                    <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check Out:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={checkOut}
                      readOnly
                      className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white cursor-pointer"
                      onClick={() => {
                        setShowCalendar(true);
                        setSelecting("checkOut");
                      }}
                    />
                    <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Calendar */}
              {showCalendar && (
                <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => {
                        // Go to previous month
                        const [month, year] = currentMonth.split(" ");
                        const months = [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ];
                        let idx = months.indexOf(month);
                        let newYear = parseInt(year);
                        if (idx === 0) {
                          idx = 11;
                          newYear -= 1;
                        } else {
                          idx -= 1;
                        }
                        setCurrentMonth(`${months[idx]} ${newYear}`);
                      }}
                    >
                      <CalendarLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    <h4 className="font-medium text-gray-900">
                      {currentMonth}
                    </h4>
                    <button
                      onClick={() => {
                        // Go to next month
                        const [month, year] = currentMonth.split(" ");
                        const months = [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ];
                        let idx = months.indexOf(month);
                        let newYear = parseInt(year);
                        if (idx === 11) {
                          idx = 0;
                          newYear += 1;
                        } else {
                          idx += 1;
                        }
                        setCurrentMonth(`${months[idx]} ${newYear}`);
                      }}
                    >
                      <CalendarRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays[0].map((day, index) => (
                      <div
                        key={index}
                        className="text-xs text-gray-500 text-center py-2 font-medium"
                      >
                        {day}
                      </div>
                    ))}
                    {calendarDays.slice(1).map((week, weekIndex) =>
                      week.map((day, dayIndex) => (
                        <button
                          key={`${weekIndex}-${dayIndex}`}
                          className={`text-sm py-2 text-center rounded ${
                            (selecting === "checkIn" &&
                              day &&
                              day === parseInt(checkIn.split(" ")[0])) ||
                            (selecting === "checkOut" &&
                              day &&
                              day === parseInt(checkOut.split(" ")[0]))
                              ? "bg-cyan-500 text-white"
                              : day
                              ? "hover:bg-gray-100 text-gray-900"
                              : "text-gray-300"
                          }`}
                          disabled={!day}
                          onClick={() => {
                            if (!day) return;
                            // For demo, just update the day in the string, keep month/year static
                            if (selecting === "checkIn") {
                              setCheckIn(`${day} ${currentMonth}`);
                              setShowCalendar(false);
                              setSelecting(null);
                            } else if (selecting === "checkOut") {
                              setCheckOut(`${day} ${currentMonth}`);
                              setShowCalendar(false);
                              setSelecting(null);
                            }
                          }}
                        >
                          {day}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg mb-4">
                Confirm Booking
              </button>

              {/* Subtotal */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-cyan-500">£450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/map.png"
          alt="Property background"
          width={1920}
          height={600}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
