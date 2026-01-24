import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioJoinCard() {
  const items = [
    "Cinematic AI video shots",
    "Social media & ad creatives",
    "Game-style visual frames",
    "Motion graphics clips",
    "Final campaign-style project",
  ];

  return (
    <div className=" py-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-2 px-4 mt-2 p-1 rounded-full border border-red-100 mb-2">
            <Image
              src="/gemini.png"
              height={10}
              width={30}
              alt="gemini"
              className="w-4 h-4 text-primary"
            />
            <span className="text-sm font-bold">Who should join</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
          Portfolio that looks studio-made
        </p>

        {/* List Items */}
        <div className="space-y-2 sm:space-y-3 ">
          {items.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-4 sm:p-5 bg-white border border-red-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5  group-hover:text-gray-600 transition-colors " />
              <span className=" text-sm sm:text-base font-medium">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
