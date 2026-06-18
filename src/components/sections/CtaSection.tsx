"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function CtaSection() {
  return (
    <section className="relative px-6 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">
      <div className="w-full py-12 overflow-hidden">
        <AnimatedSection duration={1000}>
          <div className="w-full h-64 md:h-80 md:rounded-4xl rounded-3xl overflow-hidden relative">
            <Image
              src={ASSETS.constructionBg}
              alt="Construction background"
              fill
              className="object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 text-center w-full md:max-w-2xl px-4 z-10">
              <h3 className="text-white text-2xl md:text-4xl font-bold">
                Ready To Get Started?
              </h3>
              <p className="text-white text-sm md:text-base">
                Have 10 minutes? Check out our case studies. We&apos;ve been in
                the industry for more than a decade. So there&apos;s lots of
                exciting stuff in here.
              </p>
              <PrimaryButton className="bg-[#fff] !text-black hover:bg-[#fff]" href="https://www.myproject.ai/signup">
                Sign Up Now
              </PrimaryButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
