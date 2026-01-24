import Image from "next/image";

const processes = [
  {
    title: "Design Polish",
    image: "/process/Design1.jpg",
  },
  {
    title: "AI Generation",
    image: "/process/Design2.jpg",
  },
  {
    title: "Video Editing",
    image: "/process/Design3.jpg",
  },
  {
    title: "Final Output",
    image: "/process/Design4.jpg",
  },
];

export default function ProcessGrid() {
  return (
    <section className="mt-6 bg-[url('/groupgrid.png')] bg-cover bg-center py-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-100 mb-2">
          <Image
            src="/gemini.png"
            height={10}
            width={30}
            alt="gemini"
            className="w-4 h-4 text-primary"
          />
          <span className="text-sm font-bold">Process</span>
        </div>

        <p className="text-gray-600 mb-6 text-base">
          AI + Industry pipeline AI Generation
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {processes.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-md font-poppins font-bold leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
