"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const barGroups = [
  [
    { height: "27%", color: "#003F6B" },
    { height: "56%", color: "#1E8AC9" },
    { height: "55%", color: "#6BB5DB" },
    { height: "34%", color: "#0BA560" },
  ],
  [
    { height: "58%", color: "#003F6B" },
    { height: "58%", color: "#1E8AC9" },
    { height: "49%", color: "#6BB5DB" },
    { height: "22%", color: "#0BA560" },
  ],
  [
    { height: "85%", color: "#003F6B" },
    { height: "27%", color: "#1E8AC9" },
    { height: "27%", color: "#6BB5DB" },
    { height: "44%", color: "#0BA560" },
  ],
  [
    { height: "71%", color: "#003F6B" },
    { height: "41%", color: "#1E8AC9" },
    { height: "58%", color: "#6BB5DB" },
    { height: "17%", color: "#0BA560" },
  ],
];

const ratings = ["3.7", "4.1", "4.5", "4.2", "4.5"];

export function DashboardCard() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [ratingIndex, setRatingIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setRatingIndex((prev) => (prev + 1) % ratings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer snap-center"
    >
      <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
        Dashboard
      </h3>
      <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
        Keep track of every job in one clean dashboard, from your first quote
        request to the final sign-off.
      </span>

      <div className="w-full max-w-[370px] flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-2xl button-card-shadow pb-2">
        <div className="w-full flex-1 mt-auto rounded-2xl bg-white border border-gray-100 shadow-[0_2px_25px_rgba(0,0,0,0.04)] p-4 flex flex-col pointer-events-none select-none relative h-56 xl:h-64">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[11px] font-bold text-gray-500">
              Project Overview
            </span>
            <div className="text-[9px] text-gray-500 font-medium px-2 py-1 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-1">
              This Year - 2026
              <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                <path d="M3 4L0 0H6L3 4Z" fill="#A0AEC0" />
              </svg>
            </div>
          </div>

          <div className="flex justify-end gap-3 w-full flex-wrap">
            {[
              ["#003F6B", "Posted Project"],
              ["#1E8AC9", "Active Project"],
              ["#6BB5DB", "Pending Project"],
              ["#0BA560", "Completed Project"],
            ].map(([color, label]) => (
              <div key={label} className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-[8px] font-medium text-gray-500">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-1 flex items-end justify-center gap-3 md:gap-4 border-l border-b border-gray-100 relative mb-1 px-4">
            <div className="absolute -left-2.5 top-0 text-[7px] text-gray-400 h-full flex flex-col justify-between pb-1 text-right">
              {["50", "40", "30", "20", "10", "0"].map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
            {barGroups.map((group, gi) => (
              <div
                key={gi}
                className="flex items-end gap-[2px] h-[100px] justify-around relative w-[36px] md:w-[56px] flex-shrink-0"
              >
                {group.map((bar, bi) => (
                  <div
                    key={bi}
                    style={{ height: bar.height, backgroundColor: bar.color }}
                    className="w-2.5 rounded-t-[3px] transition-all duration-500"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-evenly w-full text-[8px] text-gray-400 absolute bottom-1 left-0 right-0">
            {["Jan", "Feb", "Mar", "Apr"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] rounded-lg p-2.5 w-full max-w-72 z-10 border border-gray-50 transition-all duration-500">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-bold text-gray-700">Ratings</span>
            <span className="text-[8px] text-gray-400 bg-gray-50 px-1 py-0.5 rounded">
              All Time
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#FDBA31] text-[10px]">⭐</span>
            <span
              className={cn(
                "text-xs font-bold text-gray-800 transition-all duration-500"
              )}
            >
              {ratings[ratingIndex]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
