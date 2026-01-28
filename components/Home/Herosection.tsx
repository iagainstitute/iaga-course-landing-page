"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import InfoCard from "../ui/InfoCard";
import CategoryTag from "../ui/CategoryTag";
import { ArrowRight, CirclePlay } from "lucide-react";

const HeroSection: React.FC = () => {
  const categories = [
    { icon: "/videomoviereel.png", label: "Film & VFX" },
    { icon: "/gamedevelopment.png", label: "Game Art" },
    { icon: "/aisearchicon.png", label: "AI Workflow" },
  ];

  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/bgherosection.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Top Bar - Pinned to Top */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-md font-medium tracking-wide">
            New AI Program
          </span>
          {/* <Image src="/videoediting.png" alt="icon" width={25} height={25} /> */}
          <CirclePlay className="text-white" />
        </div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-8 flex-1 flex items-center justify-center pb-8">
        <div className="text-center flex flex-col items-center w-full">
          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AI For Graphics & Video{" "}
            <span className="text-[#EE4A62]">For Creators</span>
          </h1>

          {/* Description */}
          <p className="py-4 text-white/90 max-w-md">
            Designed for animation, game art, film & VFX creators who want
            cinematic visuals and production-grade output.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-1 mt-6">
            {categories.map((cat, i) => (
              <CategoryTag key={i} icon={cat.icon} label={cat.label} />
            ))}
          </div>

          {/* Info Cards */}
          <div className="flex gap-4 mt-6 justify-center">
            <InfoCard
              value="₹ 30,000"
              label="Course Fee"
              originalValue="₹ 60,000"
            />
            <InfoCard value="2 Months" label="Duration" />
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-3 max-w-xs w-full items-center">
            <Button
              className="bg-[#EE4A62] hover:bg-[#d93f55] py-6 w-full"
              onClick={() =>
                document
                  .getElementById("admissions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Talk to a Counsellor
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            {/* <span className="text-white text-sm">Enroll Now</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
