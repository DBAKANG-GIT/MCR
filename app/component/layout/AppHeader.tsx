"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen
      ? "hidden"
      : originalOverflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg w-screen lg:sticky top-0 shadow-lg border-b border-white/20 z-50 transition-all duration-300">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMobileMenu}
              >
                <Image
                  src={"/logo-1.svg"}
                  alt="MCR Getaways"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/properties"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Property</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/landlords"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Landlords & Investors</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Desktop Book Now Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/properties"
                className="group relative overflow-hidden border border-primary text-primary px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:text-white hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <Image
                  src="/book-icon.svg"
                  alt="Book"
                  width={16}
                  height={16}
                  loading="lazy"
                  className="relative z-10"
                />
                <span className="relative z-10 font-medium">Book Now</span>
              </Link>
            </div>

            {/* Mobile + Tablet menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-[#585F81] hover:text-primary p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Transition */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className={`relative lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay fade (background) */}
        <div
          onClick={closeMobileMenu}
          className={`fixed inset-0 bg-[#000000a3] bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-in menu */}
        <aside
          className={`fixed z-50 inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Mobile menu"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex items-center"
              >
                <Image
                  src={"/logo-2.svg"}
                  alt="MCR Getaways"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </Link>

              <button
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
                className="text-[#585F81] hover:text-primary p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 px-4 py-6 space-y-6 overflow-auto">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block text-[#585F81] hover:text-primary text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block text-[#585F81] hover:text-primary text-lg font-medium"
              >
                About Us
              </Link>
              <Link
                href="/properties"
                onClick={closeMobileMenu}
                className="block text-[#585F81] hover:text-primary text-lg font-medium"
              >
                Our Properties
              </Link>
              <Link
                href="/landlords"
                onClick={closeMobileMenu}
                className="block text-[#585F81] hover:text-primary text-lg font-medium"
              >
                Landlords & Investors
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block text-[#585F81] hover:text-primary text-lg font-medium"
              >
                Contact Us
              </Link>

              {/* Mobile Book Now Link */}
              <div className="p-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 rounded-lg bg-primary text-white font-medium"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
