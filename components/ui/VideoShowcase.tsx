"use client";

import { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const videos = [
  { id: 1, title: "AI Audio & Music", src: "/videos/brainai.mp4" },
  { id: 2, title: "Prompt Engineering", src: "/videos/handai.mp4" },
  { id: 3, title: "AI Video Creation", src: "/videos/singai.mp4" },
  { id: 4, title: "AI Image Generation", src: "/videos/videoeditingai.mp4" },
];

const VideoShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const duplicated = [...videos, ...videos];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.scrollWidth / duplicated.length;
      const index = Math.round(el.scrollLeft / cardWidth) % videos.length;
      setActiveIndex(index);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [duplicated.length]);

  // const handlePlay = (index: number) => {

  //   // pehle sab videos stop
  //   videoRefs.current.forEach((v) => {
  //     if (v) {
  //       v.pause();
  //       v.currentTime = 0;
  //     }
  //   });

  //   const video = videoRefs.current[index];
  //   if (!video) return;

  //   video.play();
  //   setPlayingIndex(index);
  // };

  const handlePlay = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    // 👉 same video pe dubara click → OFF
    if (playingIndex === index) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    // 👉 kisi aur video pe click → pehle sab band
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });

    currentVideo.play();
    setPlayingIndex(index);
  };

  return (
    <section className="w-full bg-background py-4">
      <div className="max-w-7xl mx-auto ">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 mt-2 p-1 rounded-full border border-red-100 mb-2">
          <Image
            src="/gemini.png"
            height={10}
            width={30}
            alt="gemini"
            className="w-4 h-4 text-primary"
          />
          <span className="text-sm font-bold">Artwork</span>
        </div>

        <h2 className="text-md md:text-3xl mb-2">
          What premium output looks like
        </h2>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {duplicated.map((video, i) => (
            <div
              key={`${video.id}-${i}`}
              className="snap-center shrink-0 w-[220px] md:w-[260px]"
            >
              <div
                className="relative overflow-hidden rounded-xl aspect-16/10 cursor-pointer"
                onClick={() => handlePlay(i)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={video.src}
                  muted
                  className="w-full h-full object-cover"
                />

                {/* Overlay (jab tak play na ho) */}
                {playingIndex !== i && (
                  <>
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 fill-black ml-0.5" />
                      </div>
                    </div>
                  </>
                )}

                <div className="absolute bottom-3 left-3 text-white font-poppins text-md font-bold ">
                  {video.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
