"use client";

import { FormEvent, useMemo, useState } from "react";
import { STONE_FORM_STORAGE_KEY } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface StoneSubmission {
  projectTitle: string;
  stoneType: string;
  description: string;
  budget: number;
  submittedAt: string;
}

const steps = [
  {
    number: "1",
    bg: "bg-[#1A4CFF]/20",
    title: "Post Your Project",
    description: "Describe what you need, add dimensions, set your budget.",
  },
  {
    number: "2",
    bg: "bg-[#FF4D6D]/20",
    title: "Get Matched Instantly",
    description: "MAI finds sellers with matching offcuts in the UK.",
  },
  {
    number: "3",
    bg: "bg-[#FF9500]/20",
    title: "Buy Safely & Save",
    description: "Secure payment, verified sellers, up to 70% cheaper.",
  },
];

function getBudgetColor(value: number) {
  const ratio = (value - 300) / (25000 - 300);
  const hue = 220 - ratio * 40;
  return `hsl(${hue}, 90%, 30%)`;
}

export function StoneOffcutsSection() {
  const [projectTitle, setProjectTitle] = useState("");
  const [stoneType, setStoneType] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(300);
  const [submitted, setSubmitted] = useState(false);

  const budgetColor = useMemo(() => getBudgetColor(budget), [budget]);
  const budgetPercent = ((budget - 300) / (25000 - 300)) * 100;
  const isValid = projectTitle.trim() && stoneType.trim() && description.trim();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isValid) return;

    const submission: StoneSubmission = {
      projectTitle: projectTitle.trim(),
      stoneType: stoneType.trim(),
      description: description.trim(),
      budget,
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(
      sessionStorage.getItem(STONE_FORM_STORAGE_KEY) || "[]"
    ) as StoneSubmission[];
    sessionStorage.setItem(
      STONE_FORM_STORAGE_KEY,
      JSON.stringify([submission, ...existing])
    );

    setSubmitted(true);
  };

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <AnimatedSection
            variant="fade-left"
            duration={1000}
            className="w-full lg:w-5/12"
          >
            <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">
              Stone Offcuts Marketplace
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              Submit Your Project. Let MAI Find Your Perfect Stone.
            </h2>
            <p className="text-sm md:text-md text-[#667588] max-w-6xl leading-relaxed">
              Discover discounted stone offcuts on MAI, connecting you with
              verified UK sellers for secure, budget-friendly options.
            </p>

            <div className="flex flex-col space-y-8 mt-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div
                    className={cn(
                      "w-[42px] h-[42px] rounded-xl font-bold flex items-center justify-center shrink-0 text-sm",
                      step.bg
                    )}
                  >
                    {step.number}
                  </div>
                  <div className="mt-0.5">
                    <h4 className="text-[17px] font-bold text-gray-600 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-[14px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            variant="fade-right"
            delay={300}
            duration={1000}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-12">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0BA560]/10 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
                    Project Submitted Successfully!
                  </h3>
                  <p className="text-gray-500 text-[15px] max-w-md mx-auto">
                    Your stone offcut project has been saved. MAI will match you
                    with verified UK sellers based on your requirements.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setProjectTitle("");
                      setStoneType("");
                      setDescription("");
                      setBudget(300);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1F5CAC] text-white text-[14px] font-medium hover:bg-[#164a8a] transition-colors"
                  >
                    Submit Another Project
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#333333] mb-3">
                    Find Your Perfect Stone Offcut
                  </h3>
                  <p className="text-gray-500 text-[15px] mb-8">
                    Set your offcut budget and MAI does the rest
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter project name"
                          value={projectTitle}
                          onChange={(e) => setProjectTitle(e.target.value)}
                          className="px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] placeholder:text-gray-400"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
                          Stone Type
                        </label>
                        <input
                          type="text"
                          placeholder="Select stone type"
                          value={stoneType}
                          onChange={(e) => setStoneType(e.target.value)}
                          className="px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
                        Project Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="px-5 py-2.5 rounded-2xl border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] resize-none placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="text-[17px] font-bold text-gray-900 mb-6 block">
                        Budget Range
                      </label>
                      <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-3 px-1">
                        <span>£300 (minimum)</span>
                        <span>£25,000 (maximum)</span>
                      </div>
                      <div className="relative w-full h-[8px] bg-gray-200 rounded-full mb-8">
                        <div
                          className="absolute top-0 left-0 h-full rounded-full transition-colors duration-200"
                          style={{
                            width: `${budgetPercent}%`,
                            backgroundColor: budgetColor,
                          }}
                        />
                        <input
                          type="range"
                          min={300}
                          max={25000}
                          step={1}
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="absolute -top-3 left-0 w-full h-8 opacity-0 cursor-pointer z-20"
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] border border-white rounded-full shadow-md z-10 pointer-events-none flex items-center justify-center scale-110"
                          style={{
                            left: `calc(${budgetPercent}% - 9px)`,
                            backgroundColor: budgetColor,
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-0">
                        <span
                          className="text-4xl font-extrabold transition-colors duration-200"
                          style={{ color: budgetColor }}
                        >
                          £
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={budget}
                          onChange={(e) => {
                            const val = Number(e.target.value.replace(/\D/g, ""));
                            if (!Number.isNaN(val))
                              setBudget(Math.min(25000, Math.max(300, val)));
                          }}
                          className="text-4xl font-extrabold text-center bg-transparent outline-none border-b-2 transition-colors duration-200 w-36"
                          style={{
                            color: budgetColor,
                            borderColor: budgetColor,
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid}
                      className={cn(
                        "w-full py-2.5 rounded-full text-[15px] shadow-md transition-all duration-200",
                        isValid
                          ? "bg-[#1F5CAC] text-white hover:bg-[#164a8a] cursor-pointer"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      )}
                    >
                      Post Your Stones Project Now
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
