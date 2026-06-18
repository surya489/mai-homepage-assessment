import { SITE_BASE } from "@/lib/constants";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: `/` },
  {
    label: "How It Works",
    href: `/`,
    children: [
      { label: "Project Owner", href: `/` },
      { label: "Trader", href: `/` },
      { label: "Intern", href: `/` },
    ],
  },
  { label: "Projects", href: `/` },
  { label: "Blogs", href: `/` },
  {
    label: "Mai Awards",
    href: `/`,
    children: [
      { label: "Awards", href: `/` },
      { label: "Sponsorship", href: `/` },
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
      href: `/`,
    },
    {
      label: "Send Proposals",
      href: `/`,
    },
    {
      label: "Apply Internship",
      href: `/`,
    },
  ];

export const loginItems = [
  {
    label: "Project Owner",
    href: "/",
  },
  {
    label: "Trader",
    href: "/",
  },
  {
    label: "Intern",
    href: "/",
  },
];

export const mobileQuickActions = [
  {
    label: "Post Project",
    href: `/`,
  },
  {
    label: "Apply Internship",
    href: `/`,
  },
  {
    label: "Send Proposals",
    href: `/`,
  },
];
