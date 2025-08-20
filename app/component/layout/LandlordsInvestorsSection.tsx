"use client";

import React from "react";

export function LandlordsInvestorsSection() {
  return (
    <div className="bg-[#F5F6FF] w-screen py-16 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-5xl font-light text-black mb-4">
        Landlords & <span className="text-[#4364A0]">Investors</span>
      </h2>
      <p className="max-w-6xl font-light text-[#727272] text-lg mb-8">
        Whether you own a single rental property or a growing real estate
        portfolio, our tailored services help you maximize returns while
        minimizing stress. From professional tenant placement and rent
        collection to strategic market insights and property maintenance, we
        provide end-to-end solutions designed to protect your investment and
        boost profitability. Partner with us to simplify property management,
        reduce vacancies, and make smarter, data-driven investment decisions—so
        you can enjoy passive income with confidence.
      </p>
      <button className="text-[#4364A0] px-5 py-2 bg-[#E8EFFC] font-medium rounded-full transition-colors duration-200 flex items-center gap-2">
        Become a partner
      </button>
    </div>
  );
}
