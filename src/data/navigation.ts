import { SITE_BASE } from "@/lib/constants";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: `${SITE_BASE}/` },
  {
    label: "How It Works",
    href: `${SITE_BASE}/how-it-works/project-owner`,
    children: [
      { label: "Project Owner", href: `${SITE_BASE}/how-it-works/project-owner` },
      { label: "Trader", href: `${SITE_BASE}/how-it-works/trader` },
      { label: "Intern", href: `${SITE_BASE}/how-it-works/intern` },
    ],
  },
  { label: "Projects", href: `${SITE_BASE}/projects` },
  { label: "Blogs", href: `${SITE_BASE}/blogs` },
  {
    label: "Mai Awards",
    href: `${SITE_BASE}/awards`,
    children: [
      { label: "Awards", href: `${SITE_BASE}/awards` },
      { label: "Sponsorship", href: `${SITE_BASE}/awards/sponsorship` },
    ],
  },
];

export const ctaLinks: {
  label: string;
  shortLabel?: string;
  href: string;
}[] = [
  {
    label: "Post a Project",
    shortLabel: "Post",
    href: `${SITE_BASE}/post-a-project`,
  },
  {
    label: "Send Proposals",
    href: `${SITE_BASE}/projects`,
  },
  {
    label: "Apply Internship",
    href: `${SITE_BASE}/projects`,
  },
];

export const loginItems = [
  {
    label: "Project Owner",
    href: "https://project-owner.myproject.ai/project-owner/login",
  },
  {
    label: "Trader",
    href: "https://trader.myproject.ai/trader/login",
  },
  {
    label: "Intern",
    href: "https://intern.myproject.ai/intern/login",
  },
];

export const mobileQuickActions = [
  {
    label: "Post Project",
    href: `${SITE_BASE}/post-a-project`,
  },
  {
    label: "Apply Internship",
    href: `${SITE_BASE}/projects`,
  },
  {
    label: "Send Proposals",
    href: `${SITE_BASE}/projects`,
  },
];
