import Image from "next/image";

export default function WhyIAGA() {
  const features = [
    "Studio-style workflow inspired by animation, game & VFX pipelines",
    "Focus on visual consistency, polish and production quality",
    "Designed for AVGC careers, not generic AI usage",
    "Mentored, outcome-driven learning approach",
  ];

  return (
    <section className=" py-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-100 mb-3">
          <Image
            src="/gemini.png"
            height={10}
            width={20}
            alt="gemini"
            className="w-4 h-4 text-primary"
          />
          <span className="text-sm font-bold">Why IAGA</span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Built like a real creative studio
          </h2>

          {/* Feature List */}
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Bullet */}
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-400 flex-shrink-0" />

                {/* Text */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
