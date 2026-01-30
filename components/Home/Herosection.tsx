"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import InfoCard from "../ui/InfoCard";
import CategoryTag from "../ui/CategoryTag";
import { ArrowRight, Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "AI Audio & Music",
    src: "/videos/brainai.mp4",
    thumb: "/videos/heart.png",
  },
  {
    id: 2,
    title: "Prompt Engineering",
    src: "/videos/handai.mp4",
    thumb: "/videos/ai.png",
  },
  {
    id: 3,
    title: "AI Video Creation",
    src: "/videos/singai.mp4",
    thumb: "/videos/music.png",
  },
  {
    id: 4,
    title: "AI Image Generation",
    src: "/videos/videoeditingai.mp4",
    thumb: "/videos/computer.png",
  },
];

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const duplicated = [...videos, ...videos];

  const categories = [
    { icon: "/videomoviereel.png", label: "Film & VFX" },
    { icon: "/gamedevelopment.png", label: "Game Art" },
    { icon: "/aisearchicon.png", label: "AI Workflow" },
  ];

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

  const handlePlay = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (playingIndex === index) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

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
    <section className="relative w-full flex flex-col px-3 pt-3 md:p-6">
      {/* Hero Section - Upper Part */}
      <div className="relative flex-[0.4] md:flex-[0.7] flex flex-col overflow-hidden rounded-2xl mb-3 md:mb-4">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/bgherosection.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col md:py-8">
          {/* Top Badge */}
          <div className="w-full max-w-2xl mt-8 mx-auto px-6 md:px-8">
            <span className="text-white text-xs md:text-sm font-medium tracking-wide">
              New AI Program
            </span>
          </div>

          {/* Main Content - Centered */}
          <div className="flex-1 w-full max-w-2xl mx-auto px-6 md:px-8 flex items-center justify-center">
            <div className=" flex flex-col w-full space-y-3 mt-4 md:space-y-4">
              {/* Heading */}
              <h1 className="text-white font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl ">
                AI For Graphics & <br />
                Video
                <span className="text-[#EE4A62]"> For Creators</span>
              </h1>

              {/* Description */}
              <p className="text-white/90 max-w-md text-md md:text-sm leading-relaxed">
                Designed for animation, game art, film & VFX creators who want
                cinematic visuals and production-grade output.
              </p>

              {/* Categories */}
              <div className="flex flex-wrap justify-start mt-4 gap-1 md:gap-2">
                {categories.map((cat, i) => (
                  <CategoryTag key={i} icon={cat.icon} label={cat.label} />
                ))}
              </div>

              {/* Info Cards */}
              <div className="flex gap-2.5 mt-4 md:gap-3 justify-start">
                <InfoCard
                  value="₹ 30,000"
                  label="Course Fee"
                  originalValue="₹ 60,000"
                />
                <InfoCard value="2 Months" label="Duration" />
              </div>

              {/* CTA */}
              <div className="w-full mt-4 mb-4">
                <Button
                  className="bg-[#EE4A62] hover:bg-[#d93f55] py-5 md:py-5 w-full text-xs md:text-sm"
                  onClick={() =>
                    document
                      .getElementById("admissions")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Talk to a Counsellor
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section - Lower Part */}
      {/* <div className="relative flex-[0.35] md:flex-[0.3] bg-white rounded-2xl mt-4 px-3 ">
        <div className="max-w-md mx-auto h-full flex flex-col">
          */}
      <div className="w-full flex justify-center ">
        <div className="bg-white rounded-2xl px-4 py-2 max-w-lg w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 mb-3">
            <Image src="/gemini.png" width={18} height={18} alt="gemini" />
            <span className="font-semibold text-sm">Artwork</span>
          </div>
          {/* Badge */}

          <h2 className="text-xs md:text-base lg:text-lg mb-2 md:mb-3 text-black font-semibold">
            What premium output looks like:
          </h2>

          {/* Video Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-2 md:gap-2.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 flex-1"
          >
            {duplicated.map((video, i) => (
              <div
                key={`${video.id}-${i}`}
                className="snap-center shrink-0 w-[175px] md:w-[150px] lg:w-[170px]"
              >
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer h-[130px]"
                  onClick={() => handlePlay(i)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={video.src}
                    muted
                    className="w-full h-full object-cover"
                    poster={video.thumb}
                  />

                  {/* Overlay */}
                  {playingIndex !== i && (
                    <>
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 flex  items-center justify-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                          <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-black ml-0.5" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 text-white font-poppins text-[9px] md:text-[10px] font-bold">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
