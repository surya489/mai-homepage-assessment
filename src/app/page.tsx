import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StoneOffcutsSection } from "@/components/sections/StoneOffcutsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ToolkitSection />
      <ProcessSection />
      <ProjectsSection />
      <StoneOffcutsSection />
      <WhyChooseSection />
      <BlogSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
