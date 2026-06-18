"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/data/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  links: NavLink[];
  variant?: "hero" | "solid";
  className?: string;
}

export function NavDropdown({
  links,
  variant = "hero",
  className,
}: NavDropdownProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {links.map((link, index) => {
        const hasChildren = Boolean(link.children?.length);

        return (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenIndex(index)}
            onMouseLeave={() => hasChildren && setOpenIndex(null)}
          >
            {hasChildren ? (
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all",
                  variant === "hero" ? "py-0.5" : ""
                )}
                style={{
                  color:
                    variant === "hero"
                      ? "rgba(255,255,255,0.92)"
                      : "rgba(255,255,255,0.82)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "white";
                  event.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color =
                    variant === "hero"
                      ? "rgba(255,255,255,0.92)"
                      : "rgba(255,255,255,0.82)";
                  event.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
                <ChevronDown
                  className={cn(
                    "transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                  height={14}
                  width={14}
                />
              </button>
            ) : (
              <Link href={link.href} rel="noopener noreferrer">
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all"
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "white";
                    event.currentTarget.style.background =
                      "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "rgba(255,255,255,0.82)";
                    event.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </span>
              </Link>
            )}

            {hasChildren && openIndex === index ? (
              <div
                className="absolute top-full left-0 min-w-[180px] rounded-2xl overflow-hidden z-50 py-2 mt-1 header-dropdown"
                style={{
                  background:
                    "linear-gradient(160deg, #0a1628 0%, #0d1f3c 60%, #0a1628 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                }}
              >
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center px-4 py-2.5 text-[14px] font-medium transition-all text-white/65 hover:bg-white/6"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
