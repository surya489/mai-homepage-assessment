"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { loginItems } from "@/data/navigation";
import { CloseIcon, ChevronRightIcon } from "@/components/layout/HeaderIcons";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

export function SignInModal({ open, onClose }: SignInModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{
        backdropFilter: "blur(6px)",
        background: "rgba(0,0,0,0.6)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-3xl"
        style={{
          background:
            "linear-gradient(160deg, #0a1628 0%, #0d1f3c 60%, #0a1628 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,63,107,0.5) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative z-10 p-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-white/8 border border-white/12"
            aria-label="Close sign in modal"
          >
            <CloseIcon className="w-3.5 h-3.5 text-gray-300" />
          </button>

          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-white/8 border border-white/12 overflow-hidden">
              <Image
                src={ASSETS.signInLogo}
                width={100}
                height={100}
                alt="MAI Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-white">Welcome back</h3>
            <p className="text-sm mt-0.5 text-white/45">
              Choose how you&apos;d like to sign in
            </p>
          </div>

          <div className="space-y-3">
            {loginItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl group transition-all cursor-pointer hover:brightness-125 border border-[rgba(59,130,246,0.3)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(255,255,255,0.03))",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0 bg-[#3b82f6]" />
                  <span className="font-semibold text-sm text-[rgba(147,197,253,1)]">
                    {item.label}
                  </span>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-[rgba(147,197,253,1)] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>

          <p className="text-center text-xs mt-5 text-white/30">
            Don&apos;t have an account?{" "}
            <Link
              href="https://project-owner.myproject.ai/project-owner/register"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[rgba(147,197,253,0.9)] hover:underline"
            >
              Register free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
