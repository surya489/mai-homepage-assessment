export interface ProjectCard {
  id: string;
  category: string;
  title: string;
  location: string;
  timeline: string;
  status: string;
  image: string;
  hoverBorder: string;
  hoverShadow: string;
  delay?: number;
}

export const projects: ProjectCard[] = [
  {
    id: "1",
    category: "Worktops, Table Tops & Wall Cladding",
    title:
      "Blue Roma Quartzite",
    location: "East Riding of Yorkshire -England",
    timeline: "Flexible",
    status: "Active",
    image:
      "https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781281642529-Screenshot_2026-06-12_172223.png",
    hoverBorder: "hover:border-b-indigo-500",
    hoverShadow: "hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]",
  },
  {
    id: "2",
    category: "Worktops, Table Tops & Wall Cladding",
    title: "2no bedside cabinet tops. Dark emperador remnants needed",
    location: "Greater London -England",
    timeline: "Flexible",
    status: "Active",
    image:
      "https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781281642529-Screenshot_2026-06-12_172223.png",
    hoverBorder: "hover:border-b-rose-500",
    hoverShadow: "hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)]",
    delay: 150,
  },
  {
    id: "3",
    category: "Natural Stone Installation",
    title: "Emerald pearl granite utility top & upstand – template, supply & installation",
    location: "Greater London -England",
    timeline: "Flexible",
    status: "Active",
    image:
      "https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781281642529-Screenshot_2026-06-12_172223.png",
    hoverBorder: "hover:border-b-amber-500",
    hoverShadow: "hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)]",
    delay: 300,
  },
  {
    id: "4",
    category: "Worktops, Table Tops & Wall Cladding",
    title: "River White worktop",
    location: "Cornwall -England",
    timeline: "Flexible",
    status: "Active",
    image:
      "https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781281642529-Screenshot_2026-06-12_172223.png",
    hoverBorder: "hover:border-b-cyan-500",
    hoverShadow: "hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)]",
    delay: 450,
  },
];
