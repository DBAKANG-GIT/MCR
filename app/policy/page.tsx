// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// interface TermsSection {
//   id: string;
//   title: string;
//   preview: string;
//   content: string;
// }

// const termsData: TermsSection[] = [
//   {
//     id: "general",
//     title: "General information regarding the terms of use of our services",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Magna tristique magna ut mauris lacus mauris lacus mauris. Pellentesque mauris mauris lacus mauris lacus mauris. Magna ullamcorper felis molestie vitae neque lorem. Placerat mauris rhoncus suscipit mauris mauris lacus mauris lacus mauris.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//   },
//   {
//     id: "partners",
//     title: "Our partners",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "We work with trusted partners to provide you with the best accommodation services. Our partner network includes verified property owners, local service providers, and hospitality professionals who meet our quality standards. All partners undergo thorough vetting processes to ensure they align with our commitment to excellence and customer satisfaction.",
//   },
//   {
//     id: "electronic",
//     title: "Electronic communication",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "All electronic communications between you and MCR Getaways, including emails, notifications, and digital correspondence, are considered legally binding. We may send you service-related communications via email, SMS, or through our platform. You consent to receive electronic communications and agree that such communications satisfy any legal requirement for written notice.",
//   },
//   {
//     id: "alr",
//     title: "ALR obligations",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "As part of our commitment to regulatory compliance, we adhere to all applicable ALR (Accommodation Licensing Requirements) obligations. This includes maintaining proper licensing for all listed properties, ensuring compliance with local housing regulations, and providing transparent information about accommodation standards and safety measures.",
//   },
//   {
//     id: "limitation",
//     title: "Limitation and exclusion of liability",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "MCR Getaways limits its liability to the maximum extent permitted by law. We are not liable for indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim. This limitation applies regardless of the legal theory upon which the claim is based.",
//   },
//   {
//     id: "damage",
//     title: "Damage / security deposits",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "Security deposits may be required for certain accommodations to cover potential damages or additional cleaning costs. The deposit amount will be clearly stated at the time of booking. Deposits are typically held on your payment method and released within 7-14 days after checkout, provided no damages or additional charges are incurred. Any deductions will be itemized and communicated to you promptly.",
//   },
//   {
//     id: "passports",
//     title: "Passports, personal documents and visa requirements",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "You are responsible for ensuring you have valid travel documents, including passports and any required visas, for your intended destination. MCR Getaways is not responsible for any issues arising from invalid or insufficient travel documentation. We recommend checking visa requirements and passport validity well in advance of your travel dates. Some accommodations may require identification verification upon check-in.",
//   },
//   {
//     id: "customs",
//     title: "Customs and foreign exchange regulations",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "Travelers are responsible for complying with all customs and foreign exchange regulations of their destination country. This includes declaring items as required by local customs authorities and adhering to currency exchange limitations. MCR Getaways does not provide advice on customs regulations and recommends consulting official government sources or customs authorities for current requirements.",
//   },
//   {
//     id: "insurance",
//     title: "Travel insurance",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances such as trip cancellation, medical emergencies, or travel delays. MCR Getaways does not provide travel insurance and is not responsible for costs arising from events that would typically be covered by travel insurance. Please review your insurance policy carefully to understand coverage limitations and exclusions.",
//   },
//   {
//     id: "medical",
//     title: "Medical conditions and travel, health insurance",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "Guests with medical conditions should ensure they have appropriate health insurance and access to necessary medications during their stay. It is your responsibility to inform us of any accessibility requirements or medical needs that may affect your accommodation. We recommend consulting with healthcare providers before traveling and ensuring you have adequate health insurance coverage for your destination.",
//   },
//   {
//     id: "complaints",
//     title:
//       "Notice on the manner of submitting written complaint of the customer",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur. Eget quam mi tellus ultrices neque pharetra elit sit.",
//     content:
//       "Customer complaints should be submitted in writing via email to our customer service team at complaints@mcrgetaways.com. Please include your booking reference, detailed description of the issue, and any supporting documentation. We aim to acknowledge all complaints within 48 hours and provide a full response within 14 business days. For urgent matters during your stay, please contact our 24/7 support line for immediate assistance.",
//   },
// ];

// export default function TermsPage() {
//   const [expandedSections, setExpandedSections] = useState<string[]>([]);

//   const toggleSection = (sectionId: string) => {
//     setExpandedSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <main className="mx-auto px-2 py-16 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Privacy Policy
//           </h1>
//         </div>

//         {/* Terms Sections */}
//         <div className="space-y-6">
//           {termsData.map((section) => {
//             // On desktop, always expanded; on mobile, toggle
//             const isDesktop =
//               typeof window !== "undefined" && window.innerWidth >= 1024;
//             const isExpanded = isDesktop
//               ? true
//               : expandedSections.includes(section.id);

//             return (
//               <div
//                 key={section.id}
//                 className="border-b border-gray-200 lg:border-none pb-6"
//               >
//                 {/* Show toggle only on mobile */}
//                 <div className="block lg:hidden">
//                   <button
//                     onClick={() => toggleSection(section.id)}
//                     className="w-full text-left group focus:outline-none focus:ring-2 bg-[#F7F8F9] focus:ring-offset-2 rounded-lg p-2 -m-2"
//                   >
//                     <div className="flex flex-col items-center justify-between gap-4">
//                       <div className="flex-1 text-center">
//                         <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors">
//                           {section.title}
//                         </h2>
//                         <p className="text-gray-600 leading-relaxed">
//                           {section.preview}
//                         </p>
//                       </div>
//                       <div className="flex-shrink-0 mt-1">
//                         <div className="flex items-center gap-2 text-gray-600 ">
//                           <span className="text-sm font-medium">
//                             Show {isExpanded ? "less" : "more"}
//                           </span>
//                           <ChevronDown
//                             className={`w-4 h-4 transition-transform duration-200 ${
//                               isExpanded ? "rotate-180" : ""
//                             }`}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 </div>
//                 {/* Always show on desktop, toggle on mobile */}
//                 <div
//                   className={`transition-all duration-300 ${
//                     isExpanded
//                       ? "max-h-96 opacity-100 mt-4"
//                       : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100 lg:mt-4"
//                   }`}
//                 >
//                   <div className="text-gray-700 leading-relaxed pl-2 text-left">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors hidden lg:block">
//                       {section.title}
//                     </h2>
//                     <p className="text-gray-600 leading-relaxed hidden lg:block">
//                       {section.preview}
//                     </p>
//                     {section.content}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "../component/ui/button";

export default function PrivacyNoticeComponent() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left py-2"
        onClick={() => toggleSection(title)}
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {activeSection === title ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {activeSection === title && (
        <div className="mt-4 text-gray-700 space-y-2">{children}</div>
      )}
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>

        <div className="mb-8">
          <Button>
            <a
              href="docs/privacy-notice.pdf"
              download="privacy-notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Privacy Notice (PDF)
            </a>
          </Button>
        </div>

        <div className="space-y-6">
          <Section title="Contact details">
            <p>+44 7999 737846</p>
            <p>Email: Info@mcrgetawaysltd.com</p>
          </Section>

          <Section title="What information we collect, use, and why">
            <h3 className="font-semibold mb-2">
              For providing and improving products and services:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Gender</li>
              <li>Payment details</li>
              <li>Transaction data</li>
              <li>Usage data</li>
              <li>Special requests, preferences for room setup</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For operation of client or customer accounts:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Purchase or service history</li>
              <li>Account information</li>
              <li>Information used for security purposes</li>
              <li>Marketing preferences</li>
              <li>Technical data</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For information updates or marketing purposes:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Profile information</li>
              <li>Marketing preferences</li>
              <li>Purchase or account history</li>
              <li>Website and app user journey information</li>
              <li>IP addresses</li>
            </ul>

            <h3 className="font-semibold mb-2">
              To comply with legal requirements:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Name</li>
              <li>Contact information</li>
              <li>Identification documents</li>
              <li>Client account information</li>
              <li>
                Any other personal information required to comply with legal
                obligations
              </li>
            </ul>

            <h3 className="font-semibold mb-2">To protect client welfare:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact information</li>
              <li>Client account information</li>
              <li>Emergency contact details</li>
              <li>Health information</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For dealing with queries, complaints or claims:
            </h3>
            <ul className="list-disc pl-5">
              <li>Names and contact details</li>
              <li>Address</li>
              <li>Payment details</li>
              <li>Account information</li>
              <li>Purchase or service history</li>
              <li>Photographs</li>
              <li>Customer or client accounts and records</li>
              <li>Information relating to health and safety</li>
              <li>Correspondence</li>
            </ul>
          </Section>

          <Section title="Lawful bases and data protection rights">
            <p className="mb-4">
              Our lawful bases for collecting and using your personal
              information include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Contract</li>
              <li>Legitimate interests</li>
              <li>Legal obligation</li>
              <li>Vital interests</li>
            </ul>
            <p className="mb-4">Your data protection rights include:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To make a data protection rights request, please contact us using
              the contact details at the top of this privacy notice.
            </p>
          </Section>

          <Section title="Where we get personal information from">
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
              <li>Suppliers and service providers</li>
            </ul>
          </Section>

          <Section title="How long we keep information">
            <h3 className="font-semibold mb-2">MCR Retention Policy</h3>

            <h4 className="font-semibold mb-2">Purpose</h4>
            <p>
              This retention policy outlines how MCR manages personal
              information collected from clients, employees, and other
              stakeholders. The policy ensures compliance with data protection
              regulations and promotes transparency.
            </p>

            <h4 className="font-semibold mb-2">Retention Schedule</h4>

            <h5 className="font-semibold mb-2">Booking Information</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Names, contact details,
                payment information, stay history.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after the last
                booking.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with tax regulations and to
                resolve any potential disputes.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">
              Customer Feedback and Complaints
            </h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Survey responses,
                complaints records.
              </li>
              <li>
                <strong>Retention Period:</strong> 2 years.
              </li>
              <li>
                <strong>Reason:</strong> To improve service quality and monitor
                ongoing issues.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Marketing Data</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Email addresses for
                newsletters, promotional materials.
              </li>
              <li>
                <strong>Retention Period:</strong> Until consent is withdrawn or
                2 years from the last engagement.
              </li>
              <li>
                <strong>Reason:</strong> To maintain accurate marketing lists
                and comply with data protection regulations.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">CCTV Footage</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Video recordings for
                security purposes.
              </li>
              <li>
                <strong>Retention Period:</strong> 30 days.
              </li>
              <li>
                <strong>Reason:</strong> For security and safety compliance.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Contractual Agreements</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Terms of service, rental
                agreements.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after the contract
                ends.
              </li>
              <li>
                <strong>Reason:</strong> To address any legal claims that may
                arise.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Legal Documents</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Incident reports, legal
                claims.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after resolution.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with legal obligations.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">
              Employee Information (if applicable)
            </h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Personal details, payroll
                information.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after employment
                ends.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with employment law and
                potential disputes.
              </li>
            </ul>

            <h4 className="font-semibold mb-2">Review and Deletion</h4>
            <p>
              MCR will regularly review its retention schedule to ensure
              compliance with legal requirements. Personal information that is
              no longer necessary will be securely deleted or anonymized.
            </p>

            <h4 className="font-semibold mb-2">Data Security</h4>
            <p>
              All retained information will be stored securely, with access
              limited to authorized personnel only. Appropriate technical and
              organizational measures will be implemented to protect personal
              data.
            </p>

            <h4 className="font-semibold mb-2">Policy Review</h4>
            <p>
              This retention policy will be reviewed annually or as necessary to
              accommodate changes in legal requirements or business practices.
            </p>
          </Section>

          <Section title="Who we share information with">
            <ul className="list-disc pl-5">
              <li>Insurance companies, brokers or other intermediaries</li>
              <li>Professional or legal advisors</li>
              <li>Regulatory authorities</li>
              <li>
                Organisations we&apos;re legally obliged to share personal
                information with
              </li>
            </ul>
          </Section>

          <Section title="How to complain">
            <p className="mb-4">
              If you have any concerns about our use of your personal data, you
              can make a complaint to us using the contact details at the top of
              this privacy notice.
            </p>
            <p className="mb-4">
              If you remain unhappy with how we&apos;ve used your data after
              raising a complaint with us, you can also complain to the ICO.
            </p>
            <p className="font-semibold">The ICO&apos;s address:</p>
            <p>Information Commissioner&apos;s Office</p>
            <p>Wycliffe House</p>
            <p>Water Lane</p>
            <p>Wilmslow</p>
            <p>Cheshire</p>
            <p>SK9 5AF</p>
            <p className="mt-4">Helpline number: 0303 123 1113</p>
            <p>
              Website:{" "}
              <a
                href="https://www.ico.org.uk/make-a-complaint"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ico.org.uk/make-a-complaint
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
