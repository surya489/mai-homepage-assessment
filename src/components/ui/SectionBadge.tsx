import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-2 md:mb-3 block",
        className
      )}
    >
      {children}
    </span>
  );
}
