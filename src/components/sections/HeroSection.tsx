"use client";

import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/constants";
import { CheckCircleIcon } from "@/components/ui/CheckCircleIcon";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const stats = [
  "200K+ Trusted Traders",
  "Transparent Bidding System",
  "11K Monthly Active Users",
];

export function HeroSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full text-white font-montserrat"
    >
      <div className="w-full h-full flex items-center justify-center">
        <video
          src={ASSETS.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003F6B4D]" />
        <div className="absolute inset-0 bg-[#00000026]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3 z-10 px-4 pt-24 sm:pt-20 lg:pt-4">
          <div
            className={cn(
              "w-full pt-4 transition-all duration-1000 ease-out",
              mounted && isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="font-bold text-white flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-2 leading-tight text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                We Find You The
              </span>
              <TypewriterText />
            </h1>
            <span className="text-xs sm:text-sm md:text-lg font-light text-white text-center max-w-xl block mt-3">
              Find Local Trusted Tradespeople in Minutes
            </span>
          </div>

          <div
            className={cn(
              "w-full flex flex-col items-center gap-4 pt-4 transition-all duration-1000 ease-out",
              mounted && isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-gray-200 max-w-4xl">
              {stats.map((stat) => (
                <div key={stat} className="flex items-center gap-2">
                  <CheckCircleIcon className="text-gray-300" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
