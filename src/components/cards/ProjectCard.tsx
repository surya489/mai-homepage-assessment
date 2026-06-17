"use client";

import Image from "next/image";
import type { ProjectCard as ProjectCardType } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectCardType;
}

function LocationIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="text-lg shrink-0 stroke-[0.8]"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Location_On">
        <g>
          <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
          <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
        </g>
      </g>
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "snap-center bg-white rounded-3xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] cursor-pointer flex flex-col transition-all duration-500 ease-out will-change-transform border-b-[4px] border-b-transparent h-full",
        project.hoverBorder,
        project.hoverShadow,
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      )}
      style={{ transitionDelay: `${project.delay ?? 0}ms` }}
    >
      <div className="flex flex-col flex-grow">
        <div className="relative w-full h-[220px] rounded-t-3xl overflow-hidden shrink-0 bg-gray-100 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-[#0BA560] px-3 py-1 text-white text-[11px] font-semibold tracking-wide">
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <span className="text-[#0F7BA2] text-[11px] font-medium uppercase tracking-wider mb-1">
            {project.category}
          </span>
          <h3 className="text-[19px] font-bold text-[#333333] line-clamp-1 mb-2">
            {project.title}
          </h3>
          <div className="mt-auto">
            <div className="h-px w-full bg-gray-100 mb-4" />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-gray-400 min-w-0">
                <LocationIcon />
                <span className="text-sm font-medium text-[#6788AA] truncate">
                  {project.location}
                </span>
              </div>
              <div className="font-bold text-[#008000] text-[14px] shrink-0">
                {project.timeline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
