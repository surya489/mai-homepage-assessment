"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { SliderDots } from "@/components/ui/SliderDots";
import { useInView } from "@/hooks/useInView";
import { ASSETS } from "@/lib/constants";
import { useSlider } from "@/hooks/useSlider";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useSlider(scrollRef);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", inline: "center" });
    setActiveIndex(index);
  };

  return (
    <section
      className="relative overflow-hidden px-3 sm:px-10 xl:px-24 w-full font-montserrat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${ASSETS.ctaBg})`,
      }}
    >
      <div className="relative z-10 mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-10 items-start">
          <AnimatedSection
            variant="fade-left"
            className="w-full lg:w-4/12 flex flex-col items-start text-white flex-shrink-0"
          >
            <span className="text-md uppercase mb-4 text-[#BFEEFF]">
              What People Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
              The Proof Is In The Pudding
            </h2>
            <span className="text-gray-300 mb-6 md:mb-10 max-w-lg text-md block">
              Tradespeople are winning, homeowners are relieved. Don&apos;t take
              our word for it, here&apos;s what real MAI users across the UK
              have to say.
            </span>
          </AnimatedSection>

          <div ref={ref} className="w-full lg:w-8/12">
            <div
              ref={scrollRef}
              className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto overflow-y-hidden sm:overflow-visible pb-4 pt-4 px-4 -mx-4 sm:pb-0 sm:pt-0 sm:px-0 sm:mx-0 snap-x snap-mandatory sm:snap-none hide-scrollbar items-stretch"
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  isInView={isInView}
                />
              ))}
            </div>

            <SliderDots
              count={testimonials.length}
              activeIndex={activeIndex}
              onSelect={scrollToIndex}
              className="flex sm:hidden mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
