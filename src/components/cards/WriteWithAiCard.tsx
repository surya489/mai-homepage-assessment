"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

const aiText =
  "This project involves renovating an existing kitchen to enhance functionality, layout efficiency, and overall aesthetics. The space measures roughly 12x15 feet...";

export function WriteWithAiCard() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [displayText, setDisplayText] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isInView) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= aiText.length) {
        setDisplayText(aiText.slice(0, index));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    const positions = [
      { x: 0, y: 0 },
      { x: 40, y: 20 },
      { x: 80, y: 10 },
      { x: 120, y: 30 },
    ];
    let i = 0;
    const interval = setInterval(() => {
      setCursorPos(positions[i % positions.length]);
      i += 1;
    }, 1500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col snap-center"
    >
      <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
        Write With AI
      </h3>
      <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
        Not sure how to describe your project? Our AI helps you write a clear,
        detailed brief in seconds. Just answer a few questions, we do the rest.
      </span>

      <div className="flex-1 mt-auto rounded-2xl p-5 flex flex-col justify-center pointer-events-none select-none relative overflow-hidden h-56 xl:h-64">
        <div className="w-full bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-4 text-[11px] text-gray-600 font-medium tracking-wide">
          Modern Kitchen Renovation
        </div>
        <div className="w-full h-[100px] bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[10px] sm:text-[11px] text-gray-500 leading-relaxed overflow-hidden">
          {displayText}
        </div>
        <div className="flex justify-end items-center mt-2">
          <div className="bg-[#EBF7FF] border border-[#CAE6FA] text-[#0077C8] px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,119,200,0.12)]">
            <span className="text-[#0077C8] text-[13px] animate-pulse">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM8.00065 4.33325 10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z" />
              </svg>
            </span>
            Write with MAI AI
          </div>
        </div>
        <div
          className="absolute left-3 bottom-3 w-10 h-10 z-20 pointer-events-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) scale(1)`,
          }}
        >
          <Image
            src={ASSETS.aiCursor}
            alt="cursor"
            width={2200}
            height={2200}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
