"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1B1F21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src={"/footer-icon.svg"}
            alt="MCR Getaways"
            width={30}
            height={30}
            className="h-20 w-auto"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Email Subscription */}
          <div className="flex justify-center mb-8">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center max-w-sm w-full"
            >
              <div className="relative flex flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-[#131416] border border-[#818B9D30] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />{" "}
                <ArrowRight className="w-5 h-5 absolute right-5 top-5" />
              </div>
            </form>
            <button className="ml-4 px-4 py-3 bg-primary hover:bg-cyan-600 text-white rounded-[16px] transition-colors duration-400">
              Subscribe Now
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="#"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Properties
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Landlords & Investors
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex justify-between items-center">
              {/* Left: Language and Legal */}
              <div className="flex items-center space-x-6">
                <button className="px-4 py-2 bg-primary text-white rounded-none">
                  English
                </button>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy policy
                </a>
              </div>

              {/* Center: Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/socials/facebook.svg"
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/socials/linkedin.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/socials/instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/socials/whatsapp.svg"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/socials/tiktok.svg"
                    alt="TikTok"
                    width={40}
                    height={40}
                  />
                </a>
              </div>

              {/* Right: Copyright */}
              <div className="text-gray-400">
                Non Copyrighted © 4025 MCR GETAWAYS
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Subscription Section */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe now to the newsletter
            </h3>
            <div className="flex flex-col gap-3 justify-center mb-8">
              <form
                onSubmit={handleSubscribe}
                className="flex items-center max-w-sm w-full"
              >
                <div className="relative flex flex-col gap-2 flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#131416] border border-[#818B9D30] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />{" "}
                  <ArrowRight className="w-5 h-5 hidden lg:block absolute right-5 top-5" />
                </div>
              </form>
              <button className="lg:ml-4 px-4 py-3 bg-primary hover:bg-cyan-600 text-white  rounded-md lg:rounded-[16px] transition-colors duration-400">
                Subscribe Now
              </button>
            </div>
          </div>
          {/* Social Icons */}
          {/* Center: Social Icons */}
          <div className="flex justify-center mb-3 space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/socials/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/socials/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/socials/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/socials/whatsapp.svg"
                alt="WhatsApp"
                width={40}
                height={40}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/socials/tiktok.svg"
                alt="TikTok"
                width={40}
                height={40}
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="text-center space-y-4 mb-8">
            <a
              href="#"
              className="block text-white hover:text-cyan-400 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              About us
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Our Properties
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Landlords & Investors
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Contact Us
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center mb-8">
            <h4 className="text-cyan-400 text-lg font-semibold mb-4">
              Stay in contact
            </h4>
            <div className="space-y-2">
              <p className="text-gray-300">info@mcrgetawaysltd.com</p>
              <p className="text-gray-300">+44 7999 737846</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center space-y-2 mb-8">
            <a
              href="policy"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              FAQs
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            Non Copyrighted © 4025 MCR GETAWAYS
          </div>
        </div>
      </div>
    </footer>
  );
}
