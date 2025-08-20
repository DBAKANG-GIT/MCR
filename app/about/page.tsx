import Image from "next/image";
import { Button } from "../component/ui/button";
import { LandlordsHero } from "../component/layout/LandlordsHero";
export default function About() {
  return (
    <main className="bg-white">
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-1.png"
            alt="United Kingdom skyline"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better texdddddt readability */}
          <div className="absolute inset-0 bg-[#0000009f] bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className=" pb-2">About MCR Gateaway</span>
          </h1>
          <Button className="px-5 border-none py-4 rounded-2xl">
            Browse Properties
          </Button>
        </div>
      </section>
      <section className="flex justify-center items-start flex-col max-w-6xl  mx-auto  p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center  text-black lg:text-left mb-8">
          MCR Gateaway
        </h2>
        <p className="text-lg text-[#595959] mb-8">
          MCR Getaway was established in 2025 with a vision of delivering
          affordable yet well-designed properties to the serviced accommodation
          market. Since its inception, the company has experienced consistent
          growth throughout 2025, continually expanding its portfolio with
          additional properties.
        </p>
        <p className="text-lg text-[#595959] mb-8">
          As we look to the future, we are committed to further expansion
          Manchester and Lincolnshire, and we are excited to welcome new team
          members to support this vision. Our focus remains on providing
          high-quality accommodations that meet the diverse needs of our clients
          while enhancing their overall experience
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 ">
        {/* Main Content */}
        <div className="flex flex-col gap-10 lg:flex-row  items-center">
          {/* Image */}
          <div className=" w-full ">
            <Image
              width={400}
              height={400}
              src="/about-2.png"
              alt="Manchester city center with historic buildings"
              className="w-full h-[400px] lg:h-[400px] object-cover  "
            />
          </div>

          {/* Content */}
          <div className=" flex flex-col justify-center text-center lg:text-left font-Jakarta space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Service Accommodation and breakfast{" "}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Cozy rooms, thoughtful touches, and warm hospitality. Our serviced
              accommodations offer the perfect blend of comfort and convenience{" "}
            </p>

            <p className="text-gray-600 leading-relaxed">
              Each one of our properties is ideally situated to provide easy
              access to local attractions, restaurants, and business centers,
              allowing you to make the most of your visit.
            </p>

            <div className="flex justify-center lg:justify-start w-full">
              <button className="text-[#4364A0]  px-5 py-2 bg-[#E8EFFC] font-meduim rounded-full  transition-colors duration-200 flex items-center gap-2">
                Book a stay
              </button>
            </div>
          </div>
        </div>
      </section>
      <LandlordsHero />
    </main>
  );
}
