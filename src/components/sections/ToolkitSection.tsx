"use client";

import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SliderDots } from "@/components/ui/SliderDots";
import { DashboardCard } from "@/components/cards/DashboardCard";
import { PostcodeCard } from "@/components/cards/PostcodeCard";
import { WriteWithAiCard } from "@/components/cards/WriteWithAiCard";
import { useSlider } from "@/hooks/useSlider";

const cards = [
  { id: "dashboard", component: DashboardCard },
  { id: "postcode", component: PostcodeCard },
  { id: "ai", component: WriteWithAiCard },
];

export function ToolkitSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useSlider(scrollRef);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-12 overflow-hidden">
        <AnimatedSection className="text-center mb-10 px-4" delay={300}>
          <SectionBadge>YOUR MAI TOOLKIT</SectionBadge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Unlock Powerful Tools After Sign Up
          </h2>
          <span className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto block">
            Everything You Need to{" "}
            <span className="text-[#1F5CAC]">Hire the Right Tradesperson</span>
          </span>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[85vw] md:auto-cols-[55vw] lg:auto-cols-[420px] xl:auto-cols-[400px] 2xl:grid-flow-row 2xl:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden 2xl:overflow-visible snap-x 2xl:snap-none snap-mandatory hide-scrollbar"
        >
          {cards.map(({ id, component: Card }) => (
            <Card key={id} />
          ))}
        </div>

        <SliderDots
          count={3}
          activeIndex={activeIndex}
          onSelect={scrollToIndex}
          className="flex md:hidden mt-5"
        />
      </div>
    </section>
  );
}
