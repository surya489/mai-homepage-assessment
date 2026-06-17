import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function PrimaryButton({
  href,
  children,
  className,
  external = true,
  type = "button",
  disabled,
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full hover:bg-[#164a8a] transition-colors",
    disabled && "opacity-50 cursor-not-allowed hover:bg-[#1F5CAC]",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
