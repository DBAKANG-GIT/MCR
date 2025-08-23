import Image from "next/image";
import { Button } from "../component/ui/button";
import { LandlordsInvestorsSection } from "../component/layout/LandlordsInvestorsSection";
import Link from "next/link";
import FAQ from "../component/layout/Faq";
export default function About() {
  return (
    <main className="bg-white">
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landlord-1.jpg"
            alt="United Kingdom skyline"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better texdddddt readability */}
          <div className="absolute inset-0 bg-[#0000009f] bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10  lg:w-[80%] text-center text-white px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl
          font-bold mb-4"
          >
            <span className=" pb-2">
              Landlords & Property investment in Manchester
            </span>
          </h1>
          <Button className="px-5 border-none py-4 rounded-2xl">
            Learn More
          </Button>
        </div>
      </section>
      <LandlordsInvestorsSection />
      <section className="max-w-6xl mx-auto px-4 py-16 ">
        {/* Main Content */}
        <div className="flex flex-col gap-10 lg:flex-row  items-center">
          {/* Image */}
          <div className=" w-full ">
            <Image
              width={400}
              height={400}
              src="/landlord-2.jpg"
              alt="Manchester city center with historic buildings"
              className="w-full h-[400px] lg:h-[400px] object-cover  "
            />
          </div>

          {/* Content */}
          <div className=" flex flex-col justify-center text-center lg:text-left font-Jakarta space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Property Care & Maintenance
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our professional team ensures your property is well-maintained.
              Regular inspections and professional cleaning keep your asset in
              excellent condition.{" "}
            </p>

            <div className="flex justify-center lg:justify-start w-full">
              <Link href="/landlords">
                <button className="text-[#4364A0]  px-5 py-2 bg-[#E8EFFC] font-meduim rounded-full  transition-colors duration-200 flex items-center gap-2">
                  Contact us{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row  mt-[8rem] items-center">
          {/* Image */}
          <div className=" flex flex-col justify-center text-center lg:text-left font-Jakarta space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Guaranteed Rent
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our professional team ensures your property is well-maintained.
              Regular inspections and professional cleaning keep your asset in
              excellent condition.
            </p>

            <div className="flex justify-center lg:justify-start w-full">
              <Link href="/Contact">
                <button className="text-[#4364A0]  px-5 py-2 bg-[#E8EFFC] font-meduim rounded-full  transition-colors duration-200 flex items-center gap-2">
                  Contact us{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full ">
            <Image
              width={400}
              height={400}
              src="/landlord-3.jpg"
              alt="Manchester city center with historic buildings"
              className="w-full h-[400px] lg:h-[400px] object-cover  "
            />
          </div>

          {/* Content */}
        </div>
      </section>
      <FAQ />
    </main>
  );
}
