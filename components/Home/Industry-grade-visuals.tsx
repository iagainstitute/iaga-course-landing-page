import Image from "next/image";

export default function IndustryGradeVisuals() {
  const categories = [
    {
      title: "Motion Graphics",
      image: "/industryvisual/Frame1.png",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Ad Films",
      image: "/industryvisual/Frame2.png",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Cinematic shots",
      image: "/industryvisual/Frame3.png",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Game Visuals",
      image: "/industryvisual/Frame4.png",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden ">
      {/* 🔹 Badge (NO grid behind this) */}
      <div className="relative z-20 inline-flex items-center gap-2 px-4 py-1 mt-4  rounded-full border border-red-100 bg-background/90 backdrop-blur-md">
        <Image
          src="/gemini.png"
          height={10}
          width={30}
          alt="gemini"
          className="w-4 h-4 text-primary"
        />
        <span className="text-sm font-bold">What you will create</span>
      </div>

      {/* 🔹 Background Grid Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/groupgrid.png"
          alt="Background Grid"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 sm:py-14 lg:py-20">
        {/* Header */}
        <div className="mb-2 sm:mb-12">
          <p className="text-lg sm:text-lg text-gray-700 ">
            Industry-grade visuals
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl aspect-video cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Color Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.gradient} mix-blend-overlay`}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Title */}
              <div className="relative h-full flex items-end p-3 mt-2 sm:p-5 lg:p-7">
                <h3 className="text-md font-poppins text-white font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        {/* <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Create professional-quality visuals with cutting-edge AI technology.
            From dynamic motion graphics to immersive game environments.
          </p>
        </div> */}
      </div>
    </section>
  );
}
