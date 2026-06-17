"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const hiddenClasses: Record<AnimationVariant, string> = {
  "fade-up": "opacity-0 translate-y-10",
  "fade-down": "opacity-0 -translate-y-10",
  "fade-left": "opacity-0 -translate-x-10",
  "fade-right": "opacity-0 translate-x-10",
  scale: "opacity-0 scale-90",
  none: "opacity-0",
};

const visibleClasses: Record<AnimationVariant, string> = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-down": "opacity-100 translate-y-0",
  "fade-left": "opacity-100 translate-x-0",
  "fade-right": "opacity-100 translate-x-0",
  scale: "opacity-100 scale-100",
  none: "opacity-100",
};

export function AnimatedSection({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView ? visibleClasses[variant] : hiddenClasses[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
