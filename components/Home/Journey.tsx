import Image from "next/image";

export default function JourneyCard() {
  return (
    <div className=" flex items-center justify-center py-4">
      <div className="w-full max-w-md">
        {/* Header */}

        <div className="inline-flex items-center gap-2 px-4 mt-2 p-1 rounded-full border border-red-100 mb-2">
          <Image
            src="/gemini.png"
            height={10}
            width={30}
            alt="gemini"
            className="w-4 h-4 text-primary"
          />
          <span className="text-sm font-bold">Your journey</span>
        </div>
        <p className="text-gray-500 mb-2 text-md font-poppins">
          Designed for serious creators
        </p>

        {/* Journey Cards */}
        <div className="space-y-4">
          {/* Week 1 */}
          <div className="bg-[#EE4A62] rounded-3xl p-6 shadow-lg">
            <div className="text-white/90 text-sm font-medium mb-2">Week 1</div>
            <h2 className="text-white text-lg font-semibold leading-tight">
              Understanding AI + Visual foundations
            </h2>
          </div>

          {/* Week 2 */}
          <div className="border border-[#EE4A62] bg-[#EE4A62] rounded-3xl p-6 shadow-lg">
            <div className="text-white/90 text-sm font-medium mb-2">Week 2</div>
            <h2 className="text-white text-lg font-semibold leading-tight">
              Controlled graphics & video output
            </h2>
          </div>

          {/* Week 3 */}
          <div className="border border-[#EE4A62] bg-[#EE4A62] rounded-3xl p-6 shadow-lg">
            <div className="text-white/90 text-sm font-medium mb-2">Week 3</div>
            <h2 className="text-white text-lg font-semibold leading-tight">
              Portfolio-ready creator
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
