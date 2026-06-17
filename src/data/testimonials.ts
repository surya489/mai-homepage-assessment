export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  borderHover: string;
  quoteHover: string;
  animationClass?: string;
  delay: number;
  hoverClass?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!",
    name: "Athikur Rahman",
    location: "Birmingham",
    borderHover: "hover:border-blue-600",
    quoteHover: "group-hover:text-blue-600",
    hoverClass: "hover:lg:rotate-[5deg]",
    delay: 0,
  },
  {
    quote:
      "Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!",
    name: "B.S. Uberai",
    location: "London",
    borderHover: "hover:border-yellow-500",
    quoteHover: "group-hover:text-yellow-500",
    hoverClass: "hover:lg:rotate-[-5deg]",
    delay: 150,
  },
  {
    quote:
      "Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it.",
    name: "James",
    location: "Leeds",
    borderHover: "hover:border-rose-500",
    quoteHover: "group-hover:text-rose-500",
    hoverClass: "hover:lg:-rotate-[-5deg]",
    delay: 300,
  },
  {
    quote:
      "Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible.",
    name: "Ricardo Angelo Marcella",
    location: "Manchester",
    borderHover: "hover:border-cyan-400",
    quoteHover: "group-hover:text-cyan-400",
    hoverClass: "hover:lg:-rotate-[5deg]",
    delay: 450,
  },
];
