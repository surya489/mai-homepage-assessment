export interface DifferenceItem {
  number: string;
  numberColor: string;
  title: string;
  description: string;
  animationClass: string;
}

export const differenceItems: DifferenceItem[] = [
  {
    number: "01",
    numberColor: "#E8F3FF",
    title: "AI-Matched Traders",
    description:
      "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    animationClass:
      "border-b md:border-r",
  },
  {
    number: "02",
    numberColor: "#E8F9EE",
    title: "End-to-End Project Transparency",
    description:
      "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    animationClass:
      "border-b",
  },
  {
    number: "03",
    numberColor: "#FFF0F0",
    title: "Milestone-Secured Payments",
    description:
      "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.",
    animationClass:
      "border-b md:border-b-0 md:border-r",
  },
  {
    number: "04",
    numberColor: "#F3EBFF",
    title: "A Verified Community You Can Trust",
    description:
      "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.",
    animationClass: "border-b-0",
  },
];
