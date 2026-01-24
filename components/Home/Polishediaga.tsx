"use client";
import Image from "next/image";

export default function Polishediaga() {
  return (
    <div className="py-6 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating Remote Image */}
        <div className="absolute top-16 right-2 z-20 animate-float">
          <Image
            src="/gameremoteshade.png"
            alt="Remote"
            width={50}
            height={50}
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Header Badge */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-100 mb-2 bg-white/70 backdrop-blur-xl">
            <Image src="/gemini.png" height={16} width={16} alt="gemini" />
            <span className="text-sm font-bold">Difference</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 relative z-10">
          Raw AI vs Studio Polish
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 relative z-10">
          {/* Raw AI */}
          <div className="relative rounded-2xl overflow-hidden border shadow-xl bg-white/55 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-white/25" />
            <div className="relative z-10 p-4 md:p-6">
              <h3 className="text-md md:text-lg font-poppins text-gray-700 mb-3">
                Raw AI Output
              </h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/aipolish.png"
                  width={400}
                  height={300}
                  alt="Raw AI Output"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* IAGA Polished */}
          <div className="relative rounded-2xl overflow-hidden border shadow-xl bg-white/55 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-white/25" />
            <div className="relative z-10 p-4 md:p-6">
              <h3 className="text-md md:text-lg font-poppins text-gray-700 mb-3">
                IAGA Polished
              </h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/iagapolish.png"
                  width={400}
                  height={300}
                  alt="IAGA Polished"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-md md:text-lg relative z-10">
          This is the difference workflow makes.
        </p>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(-2deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
