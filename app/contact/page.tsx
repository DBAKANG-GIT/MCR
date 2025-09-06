"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";
import FAQ from "../component/layout/Faq";
import { toast } from "react-toastify";
import { useAnalytics } from "../hooks/useAnalytics";

export default function ContactPage() {
  const { trackContactFormSubmission } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+44",
    phone: "",
    message: "",
    cancellationPolicy: "",
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showPolicyDropdown, setShowPolicyDropdown] = useState(false);

  const countryCodes = [
    { code: "+44", country: "UK" },
    { code: "+1", country: "US" },
    { code: "+33", country: "FR" },
    { code: "+49", country: "DE" },
    { code: "+34", country: "ES" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", `${formData.countryCode} ${formData.phone}`);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("cancellationPolicy", formData.cancellationPolicy);

      const res = await fetch("https://formspree.io/f/xovnadej", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      });

      if (res.ok) {
        // Track successful form submission
        trackContactFormSubmission();
        
        toast("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+44",
          phone: "",
          message: "",
          cancellationPolicy: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error(error);
      toast("Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Content */}
          <div className="ml-3 lg:ml-0 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Contact Us
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">
                Ready To Talk?
              </h2>
              <h3 className="text-xl lg:text-2xl text-gray-600 font-medium">
                We are Here To Help You
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Fill out the enquiry form and one of our specialist team members
              will be in touch.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-none lg:bg-[#C7D9E9A1] w-full lg:w-1/2 lg:rounded-2xl p-6 lg:p-8 lg:shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-[#A3ABBB] bg-white text-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-[#A3ABBB] bg-white text-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone number
                </label>
                <div className="flex">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setShowCountryDropdown(!showCountryDropdown)
                      }
                      className="flex items-center px-4 py-3 border border-gray-200 border-r-0 rounded-l-lg bg-white hover:bg-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <span className="text-gray-700">
                        {formData.countryCode}
                      </span>
                      <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[100px]">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                countryCode: country.code,
                              }));
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-black  hover:bg-black first:rounded-t-lg last:rounded-b-lg"
                          >
                            {country.code} {country.country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 000-0000"
                    className="flex-1 px-4 py-3 border border-[#A3ABBB] bg-white text-black rounded-r-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Send us a message..."
                  rows={3}
                  className="w-full px-4 py-2 border border-[#A3ABBB] bg-white text-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Cancellation Policy Dropdown */}
              <div className="hidden lg:block lg:relative">
                <button
                  type="button"
                  onClick={() => setShowPolicyDropdown(!showPolicyDropdown)}
                  className="w-full flex items-center justify-between  border-none px-4 py-3 border border-[#A3ABBB] bg-transparent text-black rounded-lg hover:bg-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent  font-bold outline-none transition-all"
                >
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">
                      {formData.cancellationPolicy || "Cancellation Policy"}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {showPolicyDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {[
                      "Flexible - Free cancellation",
                      "Moderate - Partial refund",
                      "Strict - No refund",
                    ].map((policy) => (
                      <button
                        key={policy}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            cancellationPolicy: policy,
                          }));
                          setShowPolicyDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-black first:rounded-t-lg last:rounded-b-lg"
                      >
                        {policy}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-1/3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
}
