"use client";
import Image from "next/image";

export default function CreatorJoinCard() {
  return (
    <div className="flex items-center justify-center py-4 relative">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
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

        <p className="text-gray-500 mb-2 ml-1">Designed for serious creators</p>

        {/* Cards */}
        <div className="space-y-4">
          {/* Animation & VFX students */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0">
                <Image
                  src="/whoshouldjoin/video.png"
                  alt="Animation"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Animation & VFX students
              </span>
            </div>
          </div>

          {/* Game art & design learners */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0">
                <Image
                  src="/whoshouldjoin/gameremote.png"
                  alt="Film"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Game art & design learners
              </span>
            </div>
          </div>

          {/* Film & ad content creators */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                <Image
                  src="/whoshouldjoin/scope.png"
                  alt="Film"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Film & ad content creators
              </span>
            </div>
          </div>

          {/* Creators who want studio-style workflow */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
                <Image
                  src="/whoshouldjoin/loop.png"
                  alt="Film"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Creators who want studio-style workflow
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Film Image - Floating */}
        <div className="flex justify-center mt-6 relative">
          <div className="absolute -bottom-8 opacity-60 animate-float-slow">
            <Image
              src="/wiggle.png"
              alt="Film Reel"
              width={60}
              height={60}
              className="object-contain grayscale"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(-15deg);
          }
          50% {
            transform: translateY(-8px) rotate(15deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
