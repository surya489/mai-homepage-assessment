import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DifferenceSectionUpdate } from "@/components/sections/DifferenceSectionUpdate";
import { Footer } from "@/components/layout/Footer";

export default function DifferencePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <DifferenceSectionUpdate />
      <Footer />
    </main>
  );
}
