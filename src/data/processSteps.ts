import { ASSETS } from "@/lib/constants";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Post Your Project",
    description:
      "Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond accurately.",
    image: ASSETS.processStep1,
  },
  {
    step: 2,
    title: "Receive Local Proposals",
    description:
      "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
    image: ASSETS.processStep2,
  },
  {
    step: 3,
    title: "Compare & Check Credentials",
    description:
      "Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.",
    image: ASSETS.processStep3,
  },
  {
    step: 4,
    title: "Finalise & Start the Work",
    description:
      "Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you've chosen the right professional.",
    image: ASSETS.processStep4,
  },
];
