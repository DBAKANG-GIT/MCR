// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const termsDocument = {
//   document_title: "Terms & Conditions",
//   current_as_of: "",
//   sections: [
//     {
//       id: 1,
//       title: "Scope",
//       points: [
//         "Stay does not create a tenancy or statutory security of tenure.",
//         "Rates may change without notice.",
//       ],
//     },MCR
//     {
//       id: 2,
//       title: "Agreement for Occupation",
//       points: [
//         "Occupation is personal to the guest; visitors are guest’s responsibility.",
//         "Booker must be 18+; bookings made as a consumer.",
//         "Provider may refuse any booking.",
//         "Check-in after 15:00 (unless stated otherwise); check-out by 11:00.",
//         "No-show by midnight without notice may be treated as cancellation.",
//         "Stay extensions subject to availability.",
//         "Over-occupancy may lead to moving/charging extra or requiring excess guests to leave.",
//         "Booking confirmed on full payment and confirmation email; payment methods include bank transfer, card, or as stated.",
//       ],
//     },
//     {
//       id: 3,
//       title: "Paying for your Accommodation",
//       points: [
//         "Full cleared funds due 30 days before arrival (unless stated otherwise).",
//         "Non-payment on time may cancel booking; deposit forfeited.",
//         "Late payment: interest under Late Payment of Commercial Debts Act 1998; £50 fee after 5 working days; risk of cancellation and forfeiture.",
//         "Security deposit: £150 for breakages/damages; not rent; can be charged up to 5 working days after stay; withheld if conditions breached (no illegal activity/pets/extra services charges; no damage; dispose rubbish and clean dishes; all charges paid; keys returned; no early/late departure; linens intact).",
//         "Deposit return: within 7 working days if no damages; itemized deductions if any.",
//         "Property must be left reasonable; extra cleaning may be charged.",
//         "No smoking inside; £200 specialist cleaning charge if evidence of smoking. Designated outdoor areas allowed if no nuisance.",
//         "Illegal drugs: reported to police; guest asked to leave; £200 charge.",
//         "No daily housekeeping by default; available at extra cost; linens/towels provided; towels/linens not to be removed.",
//         "Falsified bookings: forfeiture of payments and denial of check-in.",
//         "Pets only where approved; service animals allowed with documentation; guest liable for damages.",
//         "Deposits to secure dates are non-refundable unless cancelled 30+ days prior.",
//         "Payment methods: bank transfer, credit card, or as listed; confirmation email issued once processed.",
//       ],
//     },
//     {
//       id: 4,
//       title: "Cancellation or Changes to your booking by us",
//       points: [
//         "If we cancel/change, we’ll contact you ASAP and offer alternatives; if unacceptable, full refund within 14 days.",
//         "No liability for force majeure (e.g., natural disasters, pandemics, lockdowns, industrial disputes, terrorism).",
//         "Alterations by guest: additional expenses may apply; possible admin fee.",
//         "Free cancellation or modification up to 30 days before arrival (unless stated otherwise at booking).",
//         "If cancelled within 30 days: policy states “no fee,” but also states 50% refund if 7–30 days and no refund within 7 days.",
//         "No refunds for non-arrivals.",
//         "Credit card fees (1.4% of total) are not refunded even within free cancellation period.",
//       ],
//       notes:
//         "Clause 4.4 vs 4.5 contains a potential inconsistency; treat 4.5 as the detailed schedule unless overridden at booking.",
//     },
//     {
//       id: 5,
//       title: "Death, Personal Injury or Loss of Property",
//       points: [
//         "No liability for death/personal injury unless due to provider’s act/omission.",
//         "Use correct adaptors for non-UK appliances; fire risk responsibility.",
//         "Guests must safeguard personal property; provider not liable unless negligent.",
//         "Cars parked at owner’s risk.",
//         "Left property kept for 1 week or forwarded at guest’s expense.",
//       ],
//     },
//     {
//       id: 6,
//       title: "Keys",
//       points: [
//         "One set of keys issued unless agreed otherwise; lost keys lead to locksmith charge.",
//         "Lockouts requiring assistance: £150 administration fee.",
//         "Management retains keys and may access for services, inspection, repairs, or emergencies; reasonable prior notice where possible.",
//       ],
//     },
//     {
//       id: 7,
//       title: "Services",
//       points: [
//         "Not responsible for failure/interruption of utilities or disturbance from maintenance.",
//         "If reported fault is user error despite provided instructions: £50 call-out fee.",
//       ],
//     },
//     {
//       id: 8,
//       title: "Wireless Broadband Internet and Hardwire",
//       points: [
//         "Internet usually available but not guaranteed; not a contractual provision.",
//         "No liability for computer/data damage or data security; guests responsible for protection.",
//       ],
//     },
//     {
//       id: 9,
//       title: "Client's Obligations",
//       points: [
//         "No animals/birds/reptiles (unless approved/service animals per 3.1.11).",
//         "Provide childproofing where needed.",
//         "Do nothing to void/increase insurance.",
//         "No nuisance/illegal/immoral activity; quiet hours 23:00–07:00 may be enforced by council.",
//         "Leave property clean/in good repair; pay for damage beyond reasonable wear and tear.",
//         "Residential use only; no business use.",
//         "No alterations.",
//         "Indemnify owners/agents against losses/claims arising from agreement.",
//         "No assignment/subletting/sharing/lodgers.",
//         "Do not dispose of contents/furniture.",
//         "Nothing to be hung outside (e.g., flower pots, clothes).",
//         "Do not block drains or cause overflows.",
//         "Keep doors/windows locked; close windows when away or during bad weather.",
//         "Prevent condensation via ventilation/heating; keep bathroom extractors on.",
//         "Do not change locks or make duplicates.",
//         "Report issues promptly; do not self-repair.",
//         "Insure personal property at full replacement value.",
//         "Use equipment per instructions only.",
//         "Do not leave/store valuables in view.",
//         "No ball games inside or on grounds.",
//         "Do not exceed maximum occupancy.",
//         "Use cleaning products per instructions; keep out of children’s reach.",
//         "No portable cooking appliances/camping stoves.",
//       ],
//     },
//     {
//       id: 10,
//       title: "Termination of this Agreement",
//       points: [
//         "May be ended without notice if fees unpaid or conditions breached.",
//         "May be ended if client becomes bankrupt/under administration/judgment enforced.",
//         "Management may terminate at any time with written notice.",
//         "On end of stay: return all keys and give vacant possession.",
//       ],
//     },
//     {
//       id: 11,
//       title: "If you cancel your Booking",
//       points: [
//         "Cancellations must be in writing; effective on receipt.",
//         "Up to 30 days before arrival: no fee.",
//         "Later or no-show: total price charged.",
//         "Management may waive cancellation fees at their discretion.",
//       ],
//     },
//     {
//       id: 12,
//       title: "Health and Safety",
//       points: [
//         "Non-compliance may be a breach of contract and lead to being asked to leave.",
//         "Keep property free of hazards for staff/guests.",
//         "Booking and stay implies agreement to these terms.",
//       ],
//     },
//     {
//       id: 13,
//       title: "Data Protection and Privacy Policy",
//       points: [
//         "Personal data collected to meet operational/legal obligations under Data Protection Act 1998.",
//         "Company endorses and adheres to the Act’s principles.",
//         "GDPR-compliant processing of contact/payment/ID data; see website Privacy Policy for details.",
//       ],
//     },
//     {
//       id: 14,
//       title: "Complaints",
//       points: [
//         "Report complaints ASAP; management will try to resolve quickly.",
//         "If unresolved, write within 14 days after stay; reasonable efforts to resolve.",
//         "You may also complain to the booking agent.",
//       ],
//     },
//     {
//       id: 15,
//       title: "Jurisdiction and Governing Law",
//       points: [
//         "Governing law: England and Wales.",
//         "Exclusive jurisdiction: courts of England.",
//       ],
//     },
//     {
//       id: 16,
//       title: "Your Rights",
//       points: ["Your statutory rights are unaffected."],
//     },
//     {
//       id: 17,
//       title: "Interpretation",
//       definitions: {
//         "Managing agent/Us/We":
//           "MCR Limited, offering serviced properties on behalf of owners.",
//         Client: "Person arranging accommodation (may also be the guest).",
//         Guest:
//           "Person residing at the property, including all adult party members (may also be the client).",
//         Agreement: "This agreement.",
//         "House/Property":
//           "Accommodation managed by MCR Limited for the owner(s).",
//         Booking:
//           "Your offer to hire a property per this agreement after providing sufficient info via phone or website.",
//         Fee: "Rental and inclusive services, payable in advance.",
//         "Furniture and Appliances":
//           "Furniture and appliances usually found in the property plus any items agreed to be provided.",
//         "Inclusive Services":
//           "Weekly housekeeping and linen/towel change; electricity, gas, water, sewerage, council tax, TV licence.",
//         "Serviced Property":
//           "Fully furnished/equipped property with access via common areas; includes listed utilities, council tax, TV licence, and weekly cleaning/linen service.",
//       },
//     },
//   ],
// };

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
//             {termsDocument.document_title}
//           </h1>
//           <div className="text-gray-500 text-sm">
//             Current as of {termsDocument.current_as_of}
//           </div>
//         </div>

//         {/* Terms Sections */}
//         <div className="space-y-6">
//           {termsDocument.sections.map((section) => {
//             // On desktop, always expanded; on mobile, toggle
//             const isDesktop =
//               typeof window !== "undefined" && window.innerWidth >= 1024;
//             const isExpanded = isDesktop
//               ? true
//               : expandedSections.includes(section.id?.toString());

//             // Definitions section
//             if (section.definitions) {
//               return (
//                 <div
//                   key={section.id}
//                   className="border-b border-gray-200 lg:border-none pb-6 mt-10"
//                 >
//                   <h2 className="text-xl font-semibold text-gray-900 mb-3">
//                     {section.title}
//                   </h2>
//                   <dl className="pl-4">
//                     {Object.entries(section.definitions).map(([term, def]) => (
//                       <div key={term} className="mb-3">
//                         <dt className="font-semibold text-gray-800">{term}</dt>
//                         <dd className="text-gray-700 ml-4">{def}</dd>
//                       </div>
//                     ))}
//                   </dl>
//                 </div>
//               );
//             }

//             // Section with points
//             return (
//               <div
//                 key={section.id}
//                 className={`border-b border-gray-200 lg:border-none pb-6${
//                   section.id === 11 ? " mt-10" : ""
//                 }`}
//               >
//                 {/* Show toggle only on mobile */}
//                 <div className="block lg:hidden">
//                   <button
//                     onClick={() => toggleSection(section.id?.toString())}
//                     className="w-full text-left group focus:outline-none focus:ring-2 bg-[#F7F8F9] focus:ring-offset-2 rounded-lg p-2 -m-2"
//                   >
//                     <div className="flex flex-col items-center justify-between gap-4">
//                       <div className="flex-1 text-center">
//                         <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors">
//                           {section.title}
//                         </h2>
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
//                     {section.points && (
//                       <ul className="list-decimal ml-6 space-y-2">
//                         {section.points.map((point, idx) => (
//                           <li key={idx}>{point}</li>
//                         ))}
//                       </ul>
//                     )}
//                     {section.notes && (
//                       <div className="text-xs text-gray-500 mt-2">
//                         {section.notes}
//                       </div>
//                     )}
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

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h1>

        <div className="space-y-6">
          <Section title="1. Scope">
            <p>
              1.1. Your stay with us is not intended to confer exclusive
              possession on either the client or guest nor to create the
              relationship of landlord and tenant between MCR Limited and either
              the client or the guest. Neither the client nor the guest will be
              entitled to any tenancy, or any short assured or assured tenancy,
              or to any statutory protection under the Housing Act 1988, or to
              any other statutory security of tenure now or upon the
              determination of this agreement.
            </p>
            <p>1.2. Rates are subject to change without notice.</p>
          </Section>

          <Section title="2. Agreement for Occupation">
            <p>
              2.1. The managing agent permit the client to occupy the property,
              such occupation being by the guest personally only and to use the
              owners&quot; furniture and effects for the accommodation period.
              All visitors to the property are the responsibility of the guest.
            </p>
            <p>
              2.2. You must be 18 years or over when you book your
              accommodation. Your booking is made as a consumer and you
              acknowledge that no liability can be accepted for any losses
              suffered or incurred by you.
            </p>
            <p>
              2.3. We reserve the right to refuse to accept any booking for
              whatever reason.
            </p>
            <p>
              2.4. You may arrive at your accommodation after 3pm (except if it
              is stated different) on the start day of your booking and, unless
              otherwise agreed, you must leave by 11am on the last day. If you
              fail to arrive by midnight on the day of the start date and do not
              advise us of a late arrival we may treat the booking as being
              cancelled by you.
            </p>
            <p>
              2.5. If you want to increase your length of stay then we will do
              everything possible subject to availability of accommodation to
              find something suitable for you. It must be borne in mind that
              this may not always be possible.
            </p>
            <p>
              2.6. If the number of people permitted to occupy a property is
              exceeded (which would be in breach of Health and Safety
              Regulations) we reserve the right to move excess occupants and
              charge for additional properties or require the excess occupants
              to vacate the property.
            </p>
            <p>
              2.7. Your booking is confirmed upon receipt of full payment, and
              we will send you a confirmation email detailing your stay. No
              contract will exist until the booking is confirmed. Payment can be
              made via bank transfer, credit card, or other accepted methods, as
              stated in the confirmation email.
            </p>
          </Section>

          <Section title="3. Paying for your Accommodation">
            <p>3.1. The client will pay to the managing agent:</p>
            <p>
              3.1.1. Cleared funds must be received 30 days before arrival date
              in full. All prices advised to you are inclusive of booking fees
              and charges except if it is stated otherwise.
            </p>
            <p>
              3.1.2. Should payment not reach us within the required time we
              reserve the right to cancel any bookings made and any deposit paid
              will be forfeit.
            </p>
            <p>
              3.1.3. If the client fails to pay the managing agent any sums that
              are payable under this agreement when due, the client will pay the
              managing agent, on demand, interest on the unpaid sum in
              accordance with the Late Payment of Commercial Debts (Interest)
              Act 1998 (as amended) from the date payment is due until the
              managing agent receives payment in full cleared funds both before
              and after any judgement. If payment is not received within 5
              working days of the due date, a late payment fee of £50 will be
              charged. Continued non-payment may result in the cancellation of
              the booking, and any deposit or advance payment will be forfeited.
            </p>
            <p>
              3.1.4. A £150.00 deposit covering breakages and damages is
              required. This can be charged up to five (5) working days after
              the guests stayed in the property. The deposit is NOT applied
              towards payment for the accommodation and only charged provided
              the following provisions are not met:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                No charges are incurred due to illegal activity, pets or
                additional services rendered
              </li>
              <li>
                No damage is done to property or its contents during the stay.
              </li>
              <li>
                All debris, rubbish and discards are placed in rubbish bin, and
                soiled dishes are placed in the dishwasher and cleaned.
              </li>
              <li>
                All charges accrued during the stay are paid prior to departure.
              </li>
              <li>All keys are left where instructed to.</li>
              <li>NO early arrival or late departure.</li>
              <li>NO linens are lost or damaged.</li>
            </ul>
            <p>
              Any security deposit will be returned within 7 working days of the
              end of your stay, provided no damages have been incurred. Should
              there be any damages or necessary deductions, you will be notified
              within this period with an itemized list of charges.
            </p>
            <p>
              3.1.5. We expect the property to be left in a reasonable state on
              departure. If, at our discretion, additional cleaning is required
              on departure, the cost of this cleaning will be charged as an
              additional charge.
            </p>
            <p>
              3.1.6. From the 1st July 2007 the UK legislation provides that
              smoking is not permitted in serviced properties. Smokers must
              vacate the building should they wish to smoke. Smoking is
              prohibited within the property. Guests caught smoking inside the
              property will incur a £200 charge for specialist cleaning.
              However, smoking is permitted in designated outdoor areas such as
              balconies or garden spaces, provided it does not cause a nuisance
              to other guests or neighbours.
            </p>
            <p>
              3.1.7. Where there is evidence of guests smoking within the
              property, we reserve the right to charge £200 for specialist
              cleaning.
            </p>
            <p>
              3.1.8. Anyone found using or under the influence of illegal drugs
              or substances classified under the Misuse of Drugs act (1971) will
              be reported to the police and asked to leave the premises. Any
              evidence or suspicion of drug use on our premises will also be
              reported immediately to the police and there will be a charge of
              £200.00.
            </p>
            <p>
              3.1.9. No daily housekeeping service is provided – While linens
              and bath towels are included in the unit, daily maid service is
              not included in the rental rate. However, it is available at an
              additional rate. We suggest you bring beach towels. We do not
              permit towels or linens to be taken from the property.
            </p>
            <p>
              3.1.10. Falsified Bookings – Any booking obtained under false
              pretense will be subject to forfeiture of advance payment, deposit
              and/or rental money, and the party will not be permitted to check
              in.
            </p>
            <p>
              3.1.11. Pets are permitted in rental units where approved.
              However, exceptions may be made for service animals, provided the
              appropriate documentation is submitted at the time of booking. Any
              damage caused by service animals will be the responsibility of the
              guest. NO smoking within the property. The renter is not evicted
              by the owner (or representative of the owner) or the local law
              enforcement.
            </p>
            <p>
              3.1.12. Any deposits paid to secure bookings dates will not be
              refunded unless booking is cancelled 30 days prior to arrival.
            </p>
            <p>
              3.2. Payment Methods: Payments can be made via bank transfer,
              credit card, or any other method listed in the confirmation email.
              Once the payment is processed and confirmed, a booking
              confirmation will be issued via email, confirming your stay and
              all related details.
            </p>
          </Section>

          <Section title="4. Cancellation or Changes to your booking by us">
            <p>
              4.1. In the unlikely event we have to cancel or make a change to
              your accommodation we will use all reasonable efforts to contact
              you as soon as possible to explain what has happened and to inform
              you of the cancellation or the change. If possible we will offer
              alternatives but should these alternatives be unacceptable to you
              the booking will be treated as cancelled and we will refund any
              money you have paid to us within 14 days of any cancellation.
            </p>
            <p>
              4.2. We shall not be liable for changes, cancellations or any
              other effect on your booking due to events beyond our control
              (force majeure). In these Conditions &quot;force majeure&quot;
              means any event or consequences thereof which could not have been
              reasonably avoided, by us even with the exercise of all due care.
              Such events may include war or threat of war, civil strife,
              terrorist activity, industrial dispute, natural or manmade
              disaster, fire, adverse weather conditions and all similar events
              outside our control. Force majeure events include but are not
              limited to natural disasters, pandemics, government-mandated
              lockdowns, industrial disputes, and acts of terrorism. In the
              event of such circumstances, MCR Limited will use all reasonable
              efforts to contact you, but no liability will be accepted for
              cancellations caused by such events.
            </p>
            <p>
              4.3. If you wish to alter your booking, we will use our best
              efforts to accommodate your requirements, however, you will be
              obliged to pay any additional expenses incurred as a result of
              alteration. In addition, we may charge, at our discretion, an
              amendment fee to cover the necessary administrative costs
              incurred.
            </p>
            <p>
              4.4. If cancelled or modified up to 30 days before date of
              arrival, no fee will be charged except if it is stated any
              different at the time of booking.
            </p>
            <p>
              4.5. If cancelled within 30 days of the arrival date, no fee will
              be charged. If cancelled between 7-30 days before the arrival
              date, a 50% refund will be issued. For cancellations made within 7
              days of the stay, no refund will be issued.
            </p>
            <p>4.6. No refunds will be made for non-arrivals.</p>
            <p>
              4.7 If you cancel within the free cancellation period, you will
              not be refunded 1.4% (of the total booking) credit card fees which
              is included in the price when you made the booking.
            </p>
          </Section>

          <Section title="5. Death, Personal Injury or Loss of Property">
            <p>
              5.1. We shall have no liability to you for the death or personal
              injury to you or any members of your party unless this results
              from an act or omission on our part.
            </p>
            <p>
              5.2. Any guest using their own electrical appliances (hairdryers,
              curlers, tongs, shavers, personal computers, personal stereos etc)
              must use the appropriate adaptor. Non-UK plugs used without the
              appropriate adaptor/transformer are a serious fire risk. Please
              ensure that all heated appliances are switched off and stored
              safely before leaving the property. Guests found to be in breach
              of this rule may be asked to leave with immediate effect.
            </p>
            <p>
              5.3. You must take all necessary steps to safeguard your personal
              property and we accept no liability to you in respect of damage
              to, or loss of, such property unless caused by negligence on our
              part.
            </p>
            <p>
              5.4. Cars and their contents are parked at owners&quot; risk.
              Please ensure that cars are locked and possessions are left out of
              sight.
            </p>
            <p>
              5.5. Property left in the property will be kept for 1 week after
              departure or forwarded at the guest&quot;s expense.
            </p>
          </Section>

          <Section title="6. Keys">
            <p>
              6.1. Unless otherwise agreed, the owners will issue to the client
              or guest one set of keys to the property. If at any time the
              client or guest loses the keys, they must notify us as soon as
              possible and we will instruct a locksmith to change the
              lock/key(s) and charge the client or guest.
            </p>
            <p>
              6.2. If the guest locks him or herself out of the property and
              requires the owners assistance to re-enter the property, we
              reserve the right to charge an administration fee of £150.00.
            </p>
            <p>
              6.3. The managing agent will retain keys to the property and will
              access the property to provide the services set out in the
              agreement and any necessary maintenance and also to inspect the
              property and carry out repairs to the structure, roof, exterior or
              any services, appliances or equipment therein. We reserve the
              right to enter the property at any reasonable time during your
              stay for essential maintenance or if we suspect damage have been
              caused or in case of any emergency. We will make reasonable
              efforts to contact you before entering the property.
            </p>
          </Section>

          <Section title="7. Services">
            <p>
              7.1. We cannot be held responsible for any failure or interruption
              to services to the property, for example, gas, water and
              electricity, or for any damage, disturbance or noise caused as a
              result of maintenance work being carried out in any part of the
              building.
            </p>
            <p>
              7.2. Should a guest or client report that a service or an
              appliance is faulty and subsequent inspection confirms that the
              appliance was not faulty, but was not being operated properly by
              the guest, and where usage instructions have been provided, a
              maintenance call-out fee of £50 will apply.
            </p>
          </Section>

          <Section title="8. Wireless Broadband Internet and Hardwire">
            <p>
              Wireless Broadband Internet is usually available at our
              properties, however, the owners and managing agent will not be
              liable for loss of this service due to connection, environmental
              or human error and no support service is available. For this
              reason, wireless broadband internet is not a contractual
              provision. The managing agent do not assume any responsibility for
              any damage to your computer or the data contained on it, nor the
              security of any data transferred over the internet. Guests are
              responsible for the protection of their computers from loss of
              data, unauthorised access or viruses.
            </p>
          </Section>

          <Section title="9. Client's Obligations">
            <p>9.1. The client will guarantee that any guest will:</p>
            <p>
              9.1.1. Not keep any animals, insects, birds or reptiles in the
              property.
            </p>
            <p>
              9.1.2. When guests with small children occupy the property, the
              guest undertakes to provide all suitable childproofing safety
              equipment.
            </p>
            <p>
              9.1.3. Not to do or permit any act that would make any insurance
              policy on the property void or voidable or increase the premium.
            </p>
            <p>
              9.1.4. Not to do anything that may cause a nuisance or annoyance
              to the owners or to any other occupier or guest of adjoining
              properties or do anything at the property that is illegal or
              immoral. Noise disturbance after 11pm and before 7am can be
              reported to the local Council.
            </p>
            <p>
              9.1.5. Ensure that at the end of this agreement the property is
              cleared of the guest&quot;s effects and left in good repair and
              clean condition and make good, pay for the repair or replace of
              such items of the fixtures, furniture, furnishings and other
              effects as shall be broken, lost, damaged, or destroyed save as
              for reasonable wear and tear excluding matters covered by
              insurance.
            </p>
            <p>
              9.1.6. Use the Property for residential purposes only and not for
              any business use.
            </p>
            <p>9.1.7. Not make any alterations to the property.</p>
            <p>
              9.1.8. Indemnify and keep the owners fully and effectively
              indemnified against all losses, claims, demands, actions,
              proceedings, damages, costs of expenses or other liability or
              right arising in any way from this agreement.
            </p>
            <p>
              9.1.9. Not assign, underlet, sub-licence, charge or part with
              possession of whole or any part of the property, take in lodgers
              or share occupation of the property with any person in any way.
            </p>
            <p>
              9.1.10. Not sell, loan, charge or otherwise dispose of or part
              with possession of any of the contents located at the property
              including without limitation the owners&quot; furniture and
              effects.
            </p>
            <p>
              9.1.11. Not hang on the outside of the property any flower pot or
              similar object or any clothes or other articles.
            </p>
            <p>
              9.1.12. Not block or put noxious or damaging substances into the
              sinks, baths and lavatory cisterns or waste or soil pipes in the
              property or allow them to overflow.
            </p>
            <p>
              9.1.13. Not leave the entrance door or windows to the property
              open but to ensure that all door and window locks are properly
              engaged at all times. All windows must be closed when not in the
              property or during bad weather.
            </p>
            <p>
              9.1.14. To take all reasonable precautions to prevent condensation
              by keeping the Property adequately ventilated and heated.
              Extractor fans located in the bathrooms and en-suites must be
              switched on at all times to prevent damage to the property.
            </p>
            <p>
              9.1.15. Not change any lock to the property or have any duplicate
              keys made.
            </p>
            <p>
              9.1.16. To report any plumbing, electrical or general problem to
              the owners as soon as is practicably possible and to desist from
              attempting to remedy such problem on their own.
            </p>
            <p>
              9.1.17. To maintain properly insured to their full replacement
              value all of the client&apos;s and/or guest&apos;s personal
              property which is kept either at the property or on the
              guest&apos;s person.
            </p>
            <p>
              9.1.18. To use all equipment provided at the Property strictly in
              accordance with its operating instructions and not for any purpose
              other than its intended use.
            </p>
            <p>
              9.1.19. Not to leave or store any valuable personal possessions
              anywhere in the property where they can be easily viewed by third
              parties.
            </p>
            <p>
              9.1.20. Not to play ball games inside or within the grounds of the
              property.
            </p>
            <p>
              9.1.21. To ensure that the number of people occupying the property
              does not at any time exceed the maximum number of permitted
              occupants as set out in your booking of the relevant property.
            </p>
            <p>
              9.1.22. To use any cleaning products, liquids, tablets strictly in
              accordance with their usage instructions and to ensure that such
              products are kept out of reach of children. The managing agent
              accept no liability for mis-use of products supplied.
            </p>
            <p>
              9.1.23. Not to install any portable cooking appliances, camping
              stoves or similar items in the property.
            </p>
          </Section>

          <Section title="10. Termination of this Agreement">
            <p>
              10.1. This agreement may be ended by the managing agent without
              notice:
            </p>
            <p>
              10.1.1. If the accommodation fee is not paid on the payment day or
              if the client is in breach of any of the conditions
            </p>
            <p>
              10.1.2. If the client becomes bankrupt, has an administration
              order made against him or her or has a judgment enforced or
              entered against him or her.
            </p>
            <p>
              10.2. The managing agent may also terminate this agreement at any
              time on giving the client written notice.
            </p>
            <p>
              10.3. The client will at the end of the accommodation period
              return to the managing agent all keys to the property and give the
              managing agent vacant possession of the property.
            </p>
          </Section>

          <Section title="11. If you cancel your Booking">
            <p>
              11.1. Any cancellation must be notified to us in writing. The day
              we receive your written notification of cancellation is the date
              on which your booking is cancelled. If cancelled or modified up to
              30 days before date of arrival, no fee will be charged.
            </p>
            <p>
              11.2. If cancelled or modified later or in case of no-show, the
              total price of the reservation will be charged.
            </p>
            <p>
              11.3. The managing agent may, as its own discretion, waive its
              rights to cancellation fees.
            </p>
          </Section>

          <Section title="12. Health and Safety">
            <p>
              12.1. We want your stay to be as comfortable as possible. Failure
              to comply with this statement may be considered as a breach of
              contract and the guest being asked to leave.
            </p>
            <p>
              12.2. Guests should keep the property free of hazardous objects at
              all times and not to leave it in a condition that would make it
              unsafe for our housekeepers, staff, guests or themselves to use.
            </p>
            <p>
              12.3. By making a booking and staying in one of our properties you
              agree to abide by these terms and conditions.
            </p>
          </Section>

          <Section title="13. Data Protection and Privacy Policy">
            <p>
              13.1. The managing agent is required to gather certain personal
              data about clients for the purposes of satisfying operational and
              legal obligations. This personal data will be subject to the
              appropriate legal safeguards as specified in the Data Protection
              Act 1998.
            </p>
            <p>
              13.2. The managing agent fully endorse and adhere to the eight
              principles of the Data Protection Act. These principles specify
              the legal conditions that must be satisfied in relation to
              obtaining, handling, processing, transportation and storage of
              personal data.
            </p>
            <p>
              13.3. We use your personal data in compliance with GDPR
              regulations. This data includes your contact details, payment
              information, and any identification required for booking. For more
              details on how your data is stored and processed, please refer to
              our Privacy Policy, available on our website.
            </p>
          </Section>

          <Section title="14. Complaints">
            <p>
              14.1. All complaints should be notified as soon as possible to the
              managing agent and we will do our best to resolve them in a timely
              manner.
            </p>
            <p>
              14.2. If you are still not satisfied then within 14 days of the
              end of your stay, you should put your comments in writing to our
              address and we will use all reasonable efforts to resolve the
              matter as quickly as possible.
            </p>
            <p>
              14.3. You can also complain to the booking agent you used for your
              property reservation.
            </p>
          </Section>

          <Section title="15. Jurisdiction and Governing Law">
            <p>
              These terms and conditions are governed by the law of England and
              Wales. In the event of a dispute, you will be subject to the
              exclusive jurisdiction of the courts of England.
            </p>
          </Section>

          <Section title="16. Your Rights">
            <p>
              Your statutory rights are not affected by anything contained
              within these Terms and Conditions of Hire.
            </p>
          </Section>

          <Section title="17. Interpretation">
            <p>
              In this Agreement the following words and phrases shall have the
              following meanings unless the context otherwise requires:
            </p>
            <p>
              &quot;Managing agent&quot; &quot;Us&quot; or &quot;We&quot; refers
              to MCR Limited offering serviced properties on behalf of the
              property owners.
            </p>
            <p>
              &quot;Client&quot; is the person who arranges the accommodation –
              they could also be the guest.
            </p>
            <p>
              &quot;Guest&quot; is the person who resides at the property
              including all adult members of your party – they could also be the
              client.
            </p>
            <p>&quot;Agreement&quot; means this agreement;</p>
            <p>
              &quot;House or property&quot; – is an accommodation managed by MCR
              Limited on behalf of the owner(s)
            </p>
            <p>
              &quot;Booking&quot; means an offer from you to us to hire one of
              our properties on the terms of this agreement following your
              provision of sufficient information to enable us to complete our
              telephone or Website provisional booking process.
            </p>
            <p>
              &quot;Fee&quot; is the rental for the property and inclusive
              services which is payable in advance.
            </p>
            <p>
              &quot;Furniture and Appliances&quot; means such furniture and
              appliances usually found within the property and any other items,
              which we agree to provide;
            </p>
            <p>
              &quot;Inclusive Services&quot; means housekeeping service once per
              week, linen and towel change once per week, use of electricity,
              gas, water, sewerage, council tax, TV license.
            </p>
            <p>
              The term &quot;Serviced Property&quot; means the following: – A
              fully furnished and equipped property, accessed by corridors,
              stairwells and any common part of the building, inclusive of gas,
              electricity, water, drainage and sewerage, Council Tax, TV
              license, a once per week cleaning and linen service.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-custom-gold" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-4 text-gray-700 space-y-2">{children}</div>}
    </div>
  );
}
