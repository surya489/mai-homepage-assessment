"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSETS, SITE_BASE } from "@/lib/constants";
import {
  mobileQuickActions,
  navLinks,
  type NavLink,
} from "@/data/navigation";
import {
  ChevronRightIcon,
  CloseIcon,
  UserIcon,
} from "@/components/layout/HeaderIcons";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}

function MobileNavLink({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  if (link.children?.length) {
    return (
      <div className="space-y-1">
        <p className="px-3 py-2 text-sm font-semibold text-[#003F6B]">
          {link.label}
        </p>
        {link.children.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-[#003F6B]/80 hover:bg-[#003F6B]/5 transition-colors"
          >
            {child.label}
            <ChevronRightIcon className="w-4 h-4 text-[#003F6B]/35" />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClose}
      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#003F6B] hover:bg-[#003F6B]/5 transition-colors"
    >
      {link.label}
      <ChevronRightIcon className="w-4 h-4 text-[#003F6B]/35" />
    </Link>
  );
}

export function MobileNav({ open, onClose, onSignInClick }: MobileNavProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      style={{
        backdropFilter: "blur(4px)",
        background: "rgba(0,20,50,0.45)",
      }}
      onClick={onClose}
    >
      <div
        className="fixed top-0 right-0 w-[min(20rem,100vw)] h-full flex flex-col shadow-2xl mobile-nav-panel"
        style={{
          background: "#ffffff",
          borderLeft: "1px solid rgba(0,63,107,0.12)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,119,182,0.08) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div
          className="flex items-center justify-between px-5 py-4 shrink-0"
          style={{ borderBottom: "1px solid rgba(0,63,107,0.09)" }}
        >
          <Image
            src={ASSETS.logoBlue}
            alt="MAI"
            width={2290}
            height={2240}
            className="h-14 w-auto object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all"
            style={{
              background: "rgba(0,63,107,0.07)",
              border: "1px solid rgba(0,63,107,0.15)",
            }}
            aria-label="Close menu"
          >
            <CloseIcon className="w-3.5 h-3.5 text-[#003F6B]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 space-y-5 relative z-10">
          <button
            type="button"
            onClick={() => {
              onSignInClick();
              onClose();
            }}
            className="w-full flex items-center gap-3 p-4 rounded-2xl cursor-pointer group transition-all duration-200 text-left"
            style={{
              background: "linear-gradient(135deg, #EBF5FF, #DCEEFA)",
              border: "1px solid rgba(0,63,107,0.15)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #1E8AC9, #003F6B)",
                border: "1px solid rgba(0,63,107,0.2)",
              }}
            >
              <UserIcon size={26} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-[#003F6B]">
                Sign In / Register
              </p>
              <span className="text-xs mt-0.5 text-[#003F6B]/55 block">
                Access your MAI account
              </span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-[#003F6B]/40 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div style={{ height: "1px", background: "rgba(0,63,107,0.09)" }} />

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1 text-[#003F6B]/45">
              Navigate
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <MobileNavLink key={link.label} link={link} onClose={onClose} />
              ))}
            </div>
          </div>

          <div style={{ height: "1px", background: "rgba(0,63,107,0.09)" }} />

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3 px-1 text-[#003F6B]/45">
              Quick Actions
            </div>
            <div className="space-y-1">
              {mobileQuickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#003F6B] hover:bg-[#003F6B]/5 transition-colors"
                >
                  {action.label}
                  <ChevronRightIcon className="w-4 h-4 text-[#003F6B]/35" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="px-4 py-4 shrink-0 flex gap-2"
          style={{ borderTop: "1px solid rgba(0,63,107,0.09)" }}
        >
          <Link
            href={`${SITE_BASE}/contact-us`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all text-white"
            style={{
              background: "linear-gradient(135deg, #003F6B, #1E8AC9)",
              border: "1px solid rgba(0,63,107,0.2)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
