"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/lib/constants";
import { ctaLinks, loginItems, navLinks } from "@/data/navigation";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { SignInModal } from "@/components/layout/SignInModal";
import {
  ChevronRightIcon,
  CloseIcon,
  InternIcon,
  MenuIcon,
  PostProjectIcon,
  ProposalIcon,
  UserIcon,
} from "@/components/layout/HeaderIcons";
import { ChevronDown } from 'lucide-react';

import { cn } from "@/lib/utils";

const ctaIcons = [PostProjectIcon, ProposalIcon, InternIcon];

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

  const showHeroOverlay = isHomePage && !scrolledPastHero;
  const isFixed = scrolledPastHero || !isHomePage;

  useEffect(() => {
    if (!isHomePage) {
      setScrolledPastHero(false);
      return;
    }

    setScrolledPastHero(false);

    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setMenuOpen(false);
    setSignInDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!signInDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        signInRef.current &&
        !signInRef.current.contains(event.target as Node)
      ) {
        setSignInDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [signInDropdownOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const topRowStyle = showHeroOverlay
    ? {
      background:
        "linear-gradient(90deg, #0a1628 0%, #0d1f3c 100%)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(34px)",
      WebkitBackdropFilter: "blur(34px)",
    }
    : {
      background: "linear-gradient(90deg, #0a1628 0%, #0d1f3c 100%)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    };

  return (
    <>
      <header
        className={cn(
          "w-full top-0 z-50 font-montserrat",
          isFixed ? "fixed" : "sticky"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between pointer-events-auto z-55 relative ",
            showHeroOverlay
              ? "px-4 sm:px-10 xl:px-[117px] py-5"
              : "px-4 sm:px-10 xl:px-24 min-h-[88px] py-3"
          )}
          style={topRowStyle}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Myproject.ai home"
          >
            <Image
              src={ASSETS.logo}
              alt="Myproject.ai"
              width={2200}
              height={2200}
              priority
              className={cn(
                "h-auto brightness-0 invert",
                showHeroOverlay
                  ? "w-16 md:w-20 lg:w-24 2xl:w-28"
                  : "w-[5.5rem] md:w-24 xl:w-28"
              )}
            />
          </Link>

          {/* {showHeroOverlay ? (
            <NavDropdown
              links={navLinks}
              variant="hero"
              className="hidden lg:flex"
            />
          ) : (
            <div
              className={cn(
                "hidden lg:flex flex-1 max-w-md mx-6 transition-all duration-500",
                isHomePage
                  ? scrolledPastHero
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                  : "opacity-100 translate-y-0 pointer-events-auto"
              )}
            >
              <HeaderSearch isHeader />
            </div>
          )} */}

          <div
            className={cn(
              "hidden lg:flex flex-1 max-w-md mx-6 transition-all duration-500",
              isHomePage
                ? scrolledPastHero
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
                : "opacity-100 translate-y-0 pointer-events-auto"
            )}
          >
            <HeaderSearch isHeader />
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0" ref={signInRef}>
            <div className="relative">
              <button
                type="button"
                onClick={() => setSignInDropdownOpen((open) => !open)}
                className="flex items-center gap-2.5 cursor-pointer px-3 py-2 rounded-full transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "rgba(255,255,255,0.13)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
                aria-expanded={signInDropdownOpen}
                aria-haspopup="true"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #1E8AC9, #003F6B)",
                  }}
                >
                  <UserIcon size={16} />
                </div>
                <span className="text-white font-semibold text-sm">Sign In</span>
                <ChevronDown className={cn(
                  "text-white/40 transition-transform duration-200",
                  signInDropdownOpen && "rotate-180"
                )}
                  height={14}
                  width={14}
                />
              </button>

              {signInDropdownOpen ? (
                <div
                  className="absolute right-0 top-[calc(100%+8px)] min-w-[220px] rounded-2xl overflow-hidden z-50 py-2 header-dropdown"
                  style={{
                    background:
                      "linear-gradient(160deg, #0a1628 0%, #0d1f3c 60%, #0a1628 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {loginItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 text-[14px] font-medium text-white/65 hover:bg-white/6 transition-colors"
                      onClick={() => setSignInDropdownOpen(false)}
                    >
                      {item.label}
                      <ChevronRightIcon className="w-4 h-4 text-white/35" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <HeaderSearch isMobile />
            <button
              type="button"
              onClick={() => setSignInOpen(true)}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              aria-label="Sign in"
            >
              <UserIcon size={16} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="text-white focus:outline-none cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <CloseIcon className="w-7 h-7" />
              ) : (
                <MenuIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        <div
          className="hidden lg:flex items-center justify-between px-6 sm:px-10 xl:px-24 h-11 backdrop-blur-md border-b border-white/10"
          style={{
            background:
              "linear-gradient(90deg, rgba(5, 12, 28, 0.45) 0%, rgba(10, 22, 40, 0.45) 100%)",
          }}
        >
          <NavDropdown links={navLinks} variant="solid" />

          <div className="flex items-center gap-2">
            {ctaLinks.map((cta, index) => {
              const Icon = ctaIcons[index] ?? PostProjectIcon;

              return (
                <div key={cta.label} className="flex items-center gap-2">
                  <Link
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 rounded-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    {"shortLabel" in cta ? (
                      <>
                        <span className="hidden 2xl:inline">{cta.label}</span>
                        <span className="2xl:hidden">{cta.shortLabel}</span>
                      </>
                    ) : (
                      cta.label
                    )}
                  </Link>
                  {index < ctaLinks.length - 1 ? (
                    <div
                      style={{
                        width: "1px",
                        height: "16px",
                        background: "rgba(255,255,255,0.12)",
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSignInClick={() => setSignInOpen(true)}
      />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
