"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/logo-1.svg"}
                  alt="MCR Getaways"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>

              {/* Properties Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  onBlur={() => setTimeout(closeDropdown, 150)}
                  className="flex items-center text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Our Properties
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Link
                      href="/properties/apartments"
                      className="block px-4 py-2 text-sm text-[#585F81] hover:bg-gray-50 hover:text-primary"
                      onClick={closeDropdown}
                    >
                      Apartments
                    </Link>
                    <Link
                      href="/properties/houses"
                      className="block px-4 py-2 text-sm text-[#585F81] hover:bg-gray-50 hover:text-primary"
                      onClick={closeDropdown}
                    >
                      Houses
                    </Link>
                    <Link
                      href="/properties/commercial"
                      className="block px-4 py-2 text-sm text-[#585F81] hover:bg-gray-50 hover:text-primary"
                      onClick={closeDropdown}
                    >
                      Commercial
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/landlords"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Landlords & Investors
              </Link>
              <Link
                href="/contact"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop Book Now Button */}
            <div className="hidden md:flex items-center">
              <button className="border border-primary  border-solid  text-primary  px-3 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Image src="/book-icon.svg" alt="Book" width={16} height={16} />
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[#585F81] hover:text-primary p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Image
                  src={"/logo-2.svg"}
                  alt="MCR Getaways"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="text-[#585F81] hover:text-primary p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 px-4 py-6 space-y-6">
                <Link
                  href="/"
                  className="block text-[#585F81] hover:text-primary text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-[#585F81] hover:text-primary text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/properties"
                  className="block text-[#585F81] hover:text-primary text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Our Properties
                </Link>

                <Link
                  href="/landlords"
                  className="block text-[#585F81] hover:text-primary text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Landlords & Investors
                </Link>
                <Link
                  href="/contact"
                  className="block text-[#585F81] hover:text-primary text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                {/* Mobile Book Now Button */}
                <div className="p-4 border-t border-gray-200">
                  <button
                    className="w-full bg-primary hover:bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
