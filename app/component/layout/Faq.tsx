"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your booking up to 24 hours before check-in for a full refund. Cancellations made within 24 hours of check-in are subject to a one-night charge. Please contact our support team for assistance with cancellations.",
  },
  {
    id: 2,
    question: "How do I check in to my accommodation?",
    answer:
      "Check-in instructions will be sent to your email 24 hours before your arrival. Most properties offer self-check-in with keyless entry systems or lockboxes for your convenience.",
  },
  {
    id: 3,
    question: "What amenities are included in the properties?",
    answer:
      "All properties include basic amenities such as Wi-Fi, linens, towels, and kitchen essentials. Specific amenities vary by property and are listed in each property description.",
  },
  {
    id: 4,
    question: "Is there a minimum stay requirement?",
    answer:
      "Most properties have a minimum stay of 2-3 nights, though this can vary depending on the location and season. Weekend bookings may have different minimum stay requirements.",
  },
  {
    id: 5,
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team 24/7 through our contact form, email at info@mcrgetawaysltd.com, or by calling +44 7999 737846. We're here to help with any questions or concerns.",
  },
  {
    id: 6,
    question: "Are pets allowed in the accommodations?",
    answer:
      "Pet policies vary by property. Some accommodations are pet-friendly while others are not. Please check the property details or contact us directly to confirm pet policies for your chosen accommodation.",
  },
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]); // First item expanded by default

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-[5rem] mt-5 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Everything you need to know about our accommodations and billing.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => {
          const isExpanded = expandedItems.includes(item.id);

          return (
            <div key={item.id} className=" p-4 bg-gray-100  rounded-lg">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-4 text-left rounded-lg px-2 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-2 pb-2">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
