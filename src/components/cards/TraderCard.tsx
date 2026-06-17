import type { Trader } from "@/data/traders";
import { cn } from "@/lib/utils";

interface TraderCardProps {
  trader: Trader;
  mobile?: boolean;
}

export function TraderCard({ trader, mobile }: TraderCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-md transition duration-300 hover:shadow-lg",
        mobile
          ? "min-w-[230px] max-w-[230px] h-[350px]"
          : "w-full h-[360px] lg:h-[420px]"
      )}
    >
      <div
        aria-label={`Initials for trader ${trader.firstName} ${trader.lastName}`}
        role="img"
        className="flex h-full w-full items-center justify-center rounded-xl bg-gray-300 text-4xl font-bold text-[#003F6B]"
      >
        {trader.initials}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-xl bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] px-3 py-5 text-center text-white">
        <p className="text-base font-semibold capitalize">
          {trader.firstName} {trader.lastName}
        </p>
      </div>
    </div>
  );
}
