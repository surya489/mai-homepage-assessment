import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isInView: boolean;
}

export function TestimonialCard({
  testimonial,
  isInView,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "w-[85vw] sm:w-auto shrink-0 snap-center group bg-white rounded-[24px] p-5 flex flex-col shadow-2xl transition-all duration-[1200ms] ease-out border-b-4 border-transparent scale-75 h-full",
        testimonial.borderHover,
        testimonial.hoverClass,
        isInView
          ? "opacity-100 scale-100 lg:translate-x-0 lg:translate-y-0 lg:rotate-0"
          : "opacity-0"
      )}
      style={{ transitionDelay: `${testimonial.delay}ms` }}
    >
      <div className="flex-grow">
        <span
          className={cn(
            "text-6xl text-gray-800 font-serif leading-none h-6 block transition-colors duration-700",
            testimonial.quoteHover
          )}
        >
          &ldquo;
        </span>
        <span className="text-gray-700 text-md mb-6 block mt-3">
          {testimonial.quote}
        </span>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <div>
          <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
            {testimonial.name}
          </h4>
          <span className="text-gray-500 text-xs sm:text-sm">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
}
