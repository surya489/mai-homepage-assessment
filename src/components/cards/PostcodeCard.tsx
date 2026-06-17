"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

const users = [
  { alt: "Devon Lane", src: ASSETS.user1 },
  { alt: "Eleanor Pena", src: ASSETS.user2 },
  { alt: "Robert Fox", src: ASSETS.user3 },
  { alt: "Wade Warren", src: ASSETS.user4 },
];

const pinPositions = [
  { left: "90%", bottom: "50%" },
  { left: "60%", bottom: "70%" },
  { left: "40%", bottom: "40%" },
  { left: "75%", bottom: "30%" },
];

export function PostcodeCard() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [activeUser, setActiveUser] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveUser((prev) => (prev + 1) % users.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  const pin = pinPositions[activeUser];

  return (
    <div
      ref={ref}
      className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col snap-center"
    >
      <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
        Search With Postcode
      </h3>
      <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
        Find tradespeople near you, just enter your county and browse verified,
        rated tradespeople in your area.
      </span>

      <div className="flex-1 mt-auto overflow-hidden flex select-none h-56">
        <div className="hidden md:flex w-[45%] flex-col justify-center gap-2.5 p-3 z-10 bg-white relative">
          {users.map((user, index) => (
            <div
              key={user.alt}
              className="flex items-center gap-2.5 w-full px-2 py-1.5 rounded-xl border border-gray-100 bg-white shadow-[0_1px_5px_rgba(0,0,0,0.02)] transition-transform duration-700"
              style={{
                transform:
                  index === activeUser ? "translateY(-4px) scale(1.02)" : "translateY(0)",
                zIndex: index === activeUser ? 2 : 1,
              }}
            >
              <Image
                src={user.src}
                alt={user.alt}
                width={2200}
                height={2200}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="relative w-full md:w-[55%] flex-1 flex items-center justify-center">
          <div className="w-full h-52 relative bg-[#EAF5F0] rounded-2xl overflow-hidden">
            <Image
              src={ASSETS.mapImage}
              alt="Map"
              width={2200}
              height={2200}
              className="w-full h-full object-cover transition-all duration-700 scale-140"
            />
            <div
              className="absolute w-6 h-6 -translate-x-1/2 translate-y-1/2 transition-all duration-1000 ease-in-out"
              style={{ left: pin.left, bottom: pin.bottom }}
            >
              <Image
                src={ASSETS.mapPin}
                alt="Pin"
                width={2400}
                height={2400}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
