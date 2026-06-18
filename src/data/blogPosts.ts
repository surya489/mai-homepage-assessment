import { ASSETS } from "@/lib/constants";

export interface BlogPost {
  title: string;
  slug: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Window Sill Replacement: Costs, Mistakes & Best Options in the UK",
    slug: "window-sill-replacement-costs-mistakes-best-options-uk",
    image: ASSETS.blog1,
  },
  {
    title: "Stone Sill Care to Keep Window Sills Strong and Stylish",
    slug: "stone-sill-care-window-sills",
    image: ASSETS.blog2,
  },
  {
    title: "How to Detect and Fix Window Sill Installation Errors?",
    slug: "detect-fix-window-sill-installation-errors",
    image: ASSETS.blog3,
  },
  {
    title: "Simple & Best Window Sill Decor Ideas for You",
    slug: "window-sill-decor-ideas",
    image: ASSETS.blog4,
  },
  {
    title: "How to Become a Plumber in the UK? Latest Guide",
    slug: "how-to-become-plumber-uk",
    image: ASSETS.blog5,
  },
  {
    title: "Why Do Some Pay a Lower Dishwasher Installation Cost Than Others?",
    slug: "dishwasher-installation-cost",
    image: ASSETS.blog6,
  },
];
