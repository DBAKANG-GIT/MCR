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
      {/* Desktop Navbar */}
      <nav className="bg-white lg:sticky top-0 w-full shadow-sm border-b border-gray-100 z-50">
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

              <Link
                href="/properties"
                className="text-[#585F81] hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Property
              </Link>

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
              <Link
                href="/properties"
                className="border border-primary border-solid text-primary px-3 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Image
                  src="/book-icon.svg"
                  alt="Book"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
        // outer wrapper controls pointer-events to prevent clicks when closed
        className={`relative md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay fade (under the menu) */}
        <div
          onClick={closeMobileMenu}
          className={`relativ einset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-in menu (on top of overlay) */}
        <aside
          className={`fixed z-50  inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300  ${
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
