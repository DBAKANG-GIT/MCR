"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useAnalytics } from "../../hooks/useAnalytics";

export default function Footer() {
  const { trackNewsletterSignup, trackSocialClick, trackPrivacyPolicyDownload } = useAnalytics();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        // Track successful newsletter signup
        trackNewsletterSignup("desktop"); // or "mobile" based on screen size
        toast.success(data.message || "success");
        setEmail("");
      } else {
        setStatus("error");
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      toast.error("Subscription failed. Please try again.");
    }
  };
  return (
    <footer className="relative bg-gradient-to-br from-[#1B1F21] via-[#2A2F35] to-[#1B1F21] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: "3s"}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative group">
            <Image
              src={"/footer-icon.svg"}
              alt="MCR Getaways"
              width={30}
              height={30}
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Email Subscription */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
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
                  className="w-full px-4 py-3 bg-[#131416]/80 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-300 text-white placeholder:text-gray-400"
                  required
                />
                <ArrowRight className="w-5 h-5 absolute right-5 top-4 text-gray-400" />
              </div>
              <button
                type="submit"
                className="group relative overflow-hidden ml-4 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-600 hover:to-primary text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">
                  {status == "loading" ? "Subscribing..." : "Subscribe Now"}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <Link
              href="/"
              className="group relative text-white hover:text-cyan-400 transition-all duration-300 px-3 py-2"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="group relative text-gray-400 hover:text-cyan-400 transition-all duration-300 px-3 py-2"
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/properties"
              className="group relative text-gray-400 hover:text-cyan-400 transition-all duration-300 px-3 py-2"
            >
              <span className="relative z-10">Properties</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/landlords"
              className="group relative text-gray-400 hover:text-cyan-400 transition-all duration-300 px-3 py-2"
            >
              <span className="relative z-10">Landlords & Investors</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group relative text-gray-400 hover:text-cyan-400 transition-all duration-300 px-3 py-2"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex justify-between items-center">
              {/* Left: Language and Legal */}
              <div className="flex items-center space-x-6">
                <button className="px-4 py-2 bg-primary text-white rounded-none">
                  English
                </button>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <a
                  href="/MCR_Getaways_Privacy_Notice.pdf"
                  download="MCR_Getaways_Privacy_Notice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPrivacyPolicyDownload()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy policy
                </a>
              </div>

              {/* Center: Social Icons */}
              <div className="flex space-x-4 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/socials/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/socials/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('Instagram')}
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/socials/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/socials/whatsapp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('TikTok')}
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/socials/tiktok.svg"
                    alt="TikTok"
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>

              {/* Right: Copyright */}
              <div className="text-gray-400">
                Non Copyrighted © 2025 MCR GETAWAYS
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
                <button
                  type="submit"
                  className="lg:ml-4 px-4 py-3 bg-primary hover:bg-cyan-600 text-white  rounded-md lg:rounded-[16px] transition-colors duration-400"
                >
                  {status == "loading" ? "subscribing" : "Subscribe Now"}
                </button>
              </form>
            </div>
          </div>
          {/* Social Icons */}
          {/* Center: Social Icons */}
          <div className="flex justify-center mb-3 space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"
              target="_blank"
              rel="noopener noreferrer"
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
            <Link
              href="/"
              className="block text-white hover:text-cyan-400 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              About us
            </Link>
            <Link
              href="/not-found"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Our Properties
            </Link>
            <Link
              href="/landlords"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Landlords & Investors
            </Link>
            <Link
              href="/contact"
              className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Section */}
          <div className="text-center mb-8">
            <h4 className="text-cyan-400 text-lg font-semibold mb-4">
              Stay in contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:info@mcrgetawaysltd.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                info@mcrgetawaysltd.com
              </a>
              <a
                href="tel:+447999737846"
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                +44 7999 737846
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center space-y-2 mb-8">
            <a
              href="/MCR_Getaways_Privacy_Notice.pdf"
              download="MCR_Getaways_Privacy_Notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              Privacy Policy
            </a>
            <Link
              href="/terms"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              Terms & Conditions
            </Link>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors py-1"
            >
              FAQs
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            Non Copyrighted © 2025 MCR GETAWAYS
          </div>
        </div>
      </div>
    </footer>
  );
}
