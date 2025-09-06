"use client";

import { useState } from "react";
import { useAnalytics } from "../../hooks/useAnalytics";

export function WhatsAppButton() {
  const { trackWhatsAppClick } = useAnalytics();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-4 left-4 flex items-center space-x-2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="text-sm bg-gray-800 text-white px-3 py-1 rounded shadow-lg">
          Send a message
        </span>
      )}
      <a
        href="https://wa.me/qr/JCJCODZXZ2RKN1"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick()}
        className="p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Send a message on WhatsApp"
        title="Send a message on WhatsApp"
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.737 5.579 2.137 7.979L0 32l8.375-2.123C11.388 31.353 13.7 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.09 23.733c-.306.613-1.76 1.076-2.473 1.15-.633.072-1.402.099-4.795-1.85-4.05-2.375-6.676-6.525-6.872-6.843-.197-.319-1.65-2.2-1.65-4.195 0-1.995.935-2.986 1.268-3.396.333-.41.725-.513.963-.513.238 0 .48.003.686.012.222.009.52-.084.81.613.306.722 1.043 2.499 1.134 2.676.09.178.154.386.029.62-.125.235-.19.38-.376.576-.187.196-.398.45-.57.6-.187.163-.383.34-.165.668.219.327.975 1.605 2.093 2.598 1.434 1.275 2.638 1.67 2.964 1.854.326.184.517.154.705-.092.188-.245.808-.94 1.025-1.26.217-.319.435-.272.726-.163.292.109 1.845.873 2.166 1.031.32.157.532.24.613.374.082.135.082.78-.225 1.394z" />
        </svg>
      </a>
    </div>
  );
}
