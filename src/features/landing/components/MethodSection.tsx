"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

export function MethodSection() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].method;

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#5B2A86] font-semibold">
            Método
          </p>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-[#1B1A2E] mt-4">
            {content.title}
          </h2>
          <p className="mt-5 text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            {content.intro}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-[#7B3FA1]/20 bg-gradient-to-br from-white via-[#F7F1E8]/30 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5B2A86] via-[#E8B15C] to-[#5B2A86] opacity-70" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#C8A2FF]/20 text-[#5B2A86] font-bold text-xl mb-4 shadow-sm border border-[#7B3FA1]/30">
                  {step.title[0]}
                </div>
                <h3 className="font-semibold text-xl text-[#1B1A2E] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
