import { services } from "@/data/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function ServicesSection() {
  const duplicatedServices = [...services, ...services];

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-12 overflow-hidden">
        <AnimatedSection
          variant="fade-down"
          delay={500}
          className="text-center mb-10 px-4"
        >
          <SectionBadge>GET ANY HOME REPAIR DONE</SectionBadge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Looking For A Service?
          </h2>
          <span className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto block">
            From a dripping tap to a full loft conversion find the right{" "}
            <span className="text-[#1F5CAC]">verified tradesperson</span> for
            any job.
          </span>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={500}>
          <div className="relative w-full overflow-hidden marquee">
            <div className="flex gap-5 w-max marquee-track">
              {duplicatedServices.map((service, index) => (
                <ServiceCard key={`${service.slug}-${index}`} service={service} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <PrimaryButton href="/">
              View All Services
            </PrimaryButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
