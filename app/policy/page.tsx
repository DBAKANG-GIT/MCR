"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TermsSection {
  id: string;
  title: string;
  preview: string;
  content: string;
}

const termsData: TermsSection[] = [
  {
    id: "general",
    title: "General information regarding the terms of use of our services",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Magna tristique magna ut mauris lacus mauris lacus mauris. Pellentesque mauris mauris lacus mauris lacus mauris. Magna ullamcorper felis molestie vitae neque lorem. Placerat mauris rhoncus suscipit mauris mauris lacus mauris lacus mauris.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: "partners",
    title: "Our partners",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "We work with trusted partners to provide you with the best accommodation services. Our partner network includes verified property owners, local service providers, and hospitality professionals who meet our quality standards. All partners undergo thorough vetting processes to ensure they align with our commitment to excellence and customer satisfaction.",
  },
  {
    id: "electronic",
    title: "Electronic communication",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "All electronic communications between you and MCR Getaways, including emails, notifications, and digital correspondence, are considered legally binding. We may send you service-related communications via email, SMS, or through our platform. You consent to receive electronic communications and agree that such communications satisfy any legal requirement for written notice.",
  },
  {
    id: "alr",
    title: "ALR obligations",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "As part of our commitment to regulatory compliance, we adhere to all applicable ALR (Accommodation Licensing Requirements) obligations. This includes maintaining proper licensing for all listed properties, ensuring compliance with local housing regulations, and providing transparent information about accommodation standards and safety measures.",
  },
  {
    id: "limitation",
    title: "Limitation and exclusion of liability",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "MCR Getaways limits its liability to the maximum extent permitted by law. We are not liable for indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim. This limitation applies regardless of the legal theory upon which the claim is based.",
  },
  {
    id: "damage",
    title: "Damage / security deposits",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "Security deposits may be required for certain accommodations to cover potential damages or additional cleaning costs. The deposit amount will be clearly stated at the time of booking. Deposits are typically held on your payment method and released within 7-14 days after checkout, provided no damages or additional charges are incurred. Any deductions will be itemized and communicated to you promptly.",
  },
  {
    id: "passports",
    title: "Passports, personal documents and visa requirements",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "You are responsible for ensuring you have valid travel documents, including passports and any required visas, for your intended destination. MCR Getaways is not responsible for any issues arising from invalid or insufficient travel documentation. We recommend checking visa requirements and passport validity well in advance of your travel dates. Some accommodations may require identification verification upon check-in.",
  },
  {
    id: "customs",
    title: "Customs and foreign exchange regulations",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "Travelers are responsible for complying with all customs and foreign exchange regulations of their destination country. This includes declaring items as required by local customs authorities and adhering to currency exchange limitations. MCR Getaways does not provide advice on customs regulations and recommends consulting official government sources or customs authorities for current requirements.",
  },
  {
    id: "insurance",
    title: "Travel insurance",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances such as trip cancellation, medical emergencies, or travel delays. MCR Getaways does not provide travel insurance and is not responsible for costs arising from events that would typically be covered by travel insurance. Please review your insurance policy carefully to understand coverage limitations and exclusions.",
  },
  {
    id: "medical",
    title: "Medical conditions and travel, health insurance",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "Guests with medical conditions should ensure they have appropriate health insurance and access to necessary medications during their stay. It is your responsibility to inform us of any accessibility requirements or medical needs that may affect your accommodation. We recommend consulting with healthcare providers before traveling and ensuring you have adequate health insurance coverage for your destination.",
  },
  {
    id: "complaints",
    title:
      "Notice on the manner of submitting written complaint of the customer",
    preview:
      "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
    content:
      "Customer complaints should be submitted in writing via email to our customer service team at complaints@mcrgetaways.com. Please include your booking reference, detailed description of the issue, and any supporting documentation. We aim to acknowledge all complaints within 48 hours and provide a full response within 14 business days. For urgent matters during your stay, please contact our 24/7 support line for immediate assistance.",
  },
];

export default function TermsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto px-2 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {termsData.map((section) => {
            // On desktop, always expanded; on mobile, toggle
            const isDesktop =
              typeof window !== "undefined" && window.innerWidth >= 1024;
            const isExpanded = isDesktop
              ? true
              : expandedSections.includes(section.id);

            return (
              <div
                key={section.id}
                className="border-b border-gray-200 lg:border-none pb-6"
              >
                {/* Show toggle only on mobile */}
                <div className="block lg:hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left group focus:outline-none focus:ring-2 bg-[#F7F8F9] focus:ring-offset-2 rounded-lg p-2 -m-2"
                  >
                    <div className="flex flex-col items-center justify-between gap-4">
                      <div className="flex-1 text-center">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors">
                          {section.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {section.preview}
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center gap-2 text-gray-600 ">
                          <span className="text-sm font-medium">
                            Show {isExpanded ? "less" : "more"}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                {/* Always show on desktop, toggle on mobile */}
                <div
                  className={`transition-all duration-300 ${
                    isExpanded
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100 lg:mt-4"
                  }`}
                >
                  <div className="text-gray-700 leading-relaxed pl-2 text-left">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors hidden lg:block">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed hidden lg:block">
                      {section.preview}
                    </p>
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
