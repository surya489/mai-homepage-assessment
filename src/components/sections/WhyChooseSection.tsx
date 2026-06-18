"use client";

import { useEffect, useRef, useState } from "react";
import { traders } from "@/data/traders";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TraderCard } from "@/components/cards/TraderCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<1 | 3 | 5>(5);

  const getWrappedIndex = (index: number) =>
    (index + traders.length) % traders.length;

  const goToIndex = (index: number) => setActiveIndex(getWrappedIndex(index));

  useEffect(() => {
    const updateVisibleCount = () => {
      console.log(`${window.innerWidth}, window.innerWidth`);
      if (window.innerWidth < 780) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1300) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const visibleCards = traders.map((trader, index) => {
    const normalizedIndex =
      ((index - activeIndex + traders.length) % traders.length + traders.length) %
      traders.length;

    const relativeIndex =
      normalizedIndex > traders.length / 2
        ? normalizedIndex - traders.length
        : normalizedIndex;

    const maxVisibleDistance =
      visibleCount === 1 ? 0 : visibleCount === 3 ? 1 : 2;
    const isVisible = Math.abs(relativeIndex) <= maxVisibleDistance;

    const positions = [
      { x: -440, y: 110, zIndex: 10 },
      { x: -220, y: 50, zIndex: 20 },
      { x: 0, y: 0, zIndex: 30 },
      { x: 220, y: 50, zIndex: 20 },
      { x: 440, y: 110, zIndex: 10 },
    ];

    const position =
      visibleCount === 5
        ? positions[relativeIndex + 2] ?? positions[2]
        : visibleCount === 3
          ? relativeIndex === -1
            ? { x: -240, y: 50, zIndex: 20 }
            : relativeIndex === 1
              ? { x: 240, y: 50, zIndex: 20 }
              : { x: 0, y: 0, zIndex: 30 }
          : { x: 0, y: 0, zIndex: 30 };

    const opacity = isVisible ? (relativeIndex === 0 ? 1 : 0.92) : 0;
    const pointerEvents = isVisible ? ("auto" as const) : ("none" as const);

    return {
      trader,
      index,
      isVisible,
      translateX: isVisible ? position.x : relativeIndex < 0 ? -1600 : 1600,
      translateY: isVisible ? position.y : 0,
      opacity,
      zIndex: isVisible ? position.zIndex : 0,
      pointerEvents,
    };
  });

  return (
    <section className="relative w-full bg-[#F2F6FB] font-montserrat">
      <div className="px-3 py-16 sm:px-10 xl:px-24">
        <AnimatedSection className="px-4 text-center">
          <SectionBadge>TRUSTED BY HOMEOWNERS</SectionBadge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Why Choose MAI
          </h2>
          <p className="text-sm md:text-md text-gray-500 max-w-6xl mx-auto leading-relaxed">
            Every trader on MAI is verified, rated, and ready to work, so you
            get competitive bids from qualified professionals, not random
            strangers.
          </p>
        </AnimatedSection>

        <div className="mx-auto max-w-7xl">
          <div
            className="relative mx-auto h-[420px] sm:h-[500px] lg:h-[580px] w-full max-w-7xl overflow-hidden px-2 sm:px-6 lg:px-12 sm:overflow-visible"
            style={{
              touchAction: "none",
              cursor: "default",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
          >
            {visibleCards.map((card) => (
              <div
                key={card.trader.initials}
                className="absolute left-1/2 top-1/2 w-[220px] sm:w-[220px] lg:w-[240px] xl:w-[200px]"
                style={{
                  transform: `translate(calc(-50% + ${card.translateX}px), calc(-50% + ${card.translateY}px))`,
                  opacity: card.opacity,
                  zIndex: card.zIndex,
                  pointerEvents: card.pointerEvents,
                  willChange: "transform, opacity",
                  transition:
                    "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), z-index 0ms",
                }}
              >
                <TraderCard trader={card.trader} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous traders"
              onClick={() => goToIndex(activeIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-[#1F5CAC] text-2xl font-semibold transition hover:bg-gray-50"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next traders"
              onClick={() => goToIndex(activeIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-[#1F5CAC] text-2xl font-semibold transition hover:bg-gray-50"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PrimaryButton href="/">
            View All Traders
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
