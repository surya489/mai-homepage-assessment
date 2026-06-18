"use client";

import { cn } from "@/lib/utils";

interface SliderDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export function SliderDots({
  count,
  activeIndex,
  onSelect,
  className,
}: SliderDotsProps) {
  return (
    <div className={cn("flex justify-center items-center gap-2", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to item ${index + 1}`}
          onClick={() => {
            onSelect(index);
            console.log("Slider dot clicked, index:", index);
          }}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            activeIndex === index
              ? "w-6 bg-[#1F5CAC]"
              : "w-2 bg-gray-300 hover:bg-gray-400"
          )}
        />
      ))}
    </div>
  );
}
