"use client";

import { differenceItems } from "@/data/difference";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function DifferenceSectionUpdate() {
    const { ref, isInView } = useInView({ threshold: 0.15 });

    return (
        <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
            <div className="py-12 overflow-hidden">
                <AnimatedSection className="text-center mb-10 px-4">
                    <SectionBadge>OUR DIFFERENCE</SectionBadge>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
                        Where Traders & Homeowners Both Win
                    </h2>
                    <p className="text-sm md:text-md text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        From first brief to final delivery. MAI gives you the tools, talent,
                        and transparency to build with confidence.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {differenceItems.map((item) => (
                                <div
                                    key={item.number}
                                    className={cn(
                                        "flex flex-col relative transition-all duration-[1200ms] ease-out border-b border-gray-200 p-6",
                                        item.animationClass,
                                        isInView
                                            ? "opacity-100 rotate-0 translate-x-0 translate-y-0 scale-100"
                                            : `opacity-0 ${item.cardAnimation}`
                                    )}
                                >
                                    <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
                                        <span
                                            className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] font-base opacity-90 z-0 select-none leading-none tracking-tighter"
                                            style={{ color: item.numberColor }}
                                        >
                                            {item.number}
                                        </span>
                                        <h3 className="text-[1.1rem] md:text-2xl font-bold text-gray-800 relative z-10 pt-6 md:pt-14">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
