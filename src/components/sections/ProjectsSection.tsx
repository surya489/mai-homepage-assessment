"use client";

import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SliderDots } from "@/components/ui/SliderDots";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", inline: "center" });
    setActiveIndex(index);
  };

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">
      <div className="w-full py-12 bg-transparent overflow-hidden">
        <div className="mx-auto w-full flex flex-col px-0">
          <AnimatedSection
            variant="fade-left"
            duration={1000}
            className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8"
          >
            <div className="flex flex-col">
              <SectionBadge>Real Work, Real Results</SectionBadge>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
                Explore Real UK Projects
              </h2>
              <span className="text-sm md:text-md text-gray-500 max-w-xl block">
                From loft conversions in Leeds to boiler installs in Bristol.
              </span>
            </div>
            <PrimaryButton href="https://www.myproject.ai/projects">
              Explore Projects
            </PrimaryButton>
          </AnimatedSection>

          <div
            ref={scrollRef}
            className="grid grid-flow-col md:grid-flow-row auto-cols-[85vw] sm:auto-cols-[45vw] md:auto-cols-auto md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x md:snap-none snap-mandatory pt-2 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scroll-smooth hide-scrollbar"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <SliderDots
            count={projects.length}
            activeIndex={activeIndex}
            onSelect={scrollToIndex}
            className="md:hidden mt-4"
          />
        </div>
      </div>
    </section>
  );
}
