"use client";

import Image from "next/image";
import { processSteps } from "@/data/processSteps";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-12 bg-transparent overflow-hidden">
        <div className="mx-auto w-full px-4 xl:px-8 text-center flex flex-col items-center">
          <AnimatedSection variant="fade-down" className="mb-12">
            <SectionBadge>SIMPLE PROCESS</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              How To Find Verified Traders
            </h2>
            <span className="text-sm md:text-md text-gray-500 block">
              Find trusted professionals in 4 simple steps
            </span>
          </AnimatedSection>

          <div ref={ref} className="relative w-full mt-12">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gray-200 hidden md:block" />
              <div
                className={cn(
                  "absolute top-12 left-[12.5%] h-px bg-gradient-to-r from-[#0C7A56] to-[#CBECE2] hidden md:block transition-all duration-[2000ms] ease-out",
                  isInView ? "w-[75%] opacity-100" : "w-0 opacity-0"
                )}
              />
              <div className="absolute top-12 bottom-[10%] left-1/2 -translate-x-1/2 w-px bg-gray-200 md:hidden z-0" />
              <div
                className={cn(
                  "absolute top-12 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#0C7A56] to-[#CBECE2] md:hidden transition-all duration-[2000ms] ease-out z-0",
                  isInView ? "h-[75%] opacity-100" : "h-0 opacity-0"
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "flex flex-col items-center relative transition-all duration-1000 ease-out",
                    isInView
                      ? "opacity-100 translate-y-0 md:translate-x-0"
                      : "opacity-0 -translate-y-20 md:translate-y-0 md:-translate-x-20"
                  )}
                  style={{ transitionDelay: `${200 + index * 250}ms` }}
                >
                  <div className="relative w-24 h-24 rounded-full mx-auto mb-6 shrink-0 z-10 group">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={2200}
                        height={2200}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-0 -right-1 w-6 h-6 bg-[#0C7A56] text-white rounded-full flex items-center justify-center text-[12px] font-bold shadow-md">
                      {step.step}
                    </div>
                  </div>
                  <div className="px-3 bg-[#F2F6FB] md:bg-transparent py-3 md:py-0 rounded-xl md:rounded-none">
                    <h4 className="text-[17px] font-bold text-[#333333] mb-3 leading-snug">
                      {step.title}
                    </h4>
                    <span className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed max-w-[360px] mx-auto block">
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "mt-16 flex justify-center w-full transition-all duration-1000 ease-out",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "1400ms" }}
          >
            <PrimaryButton href="https://www.myproject.ai/post-a-project">
              Post Your Project Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
