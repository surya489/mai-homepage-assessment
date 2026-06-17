import Image from "next/image";
import type { ServiceCategory } from "@/data/services";

interface ServiceCardProps {
  service: ServiceCategory;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center min-w-[120px] md:min-w-[140px]">
      <div className="w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white">
        <Image
          src={service.image}
          alt={service.name}
          width={2300}
          height={2300}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="mt-3 text-xs md:text-base font-medium text-gray-700 text-center max-w-[140px]">
        {service.name}
      </span>
    </div>
  );
}
