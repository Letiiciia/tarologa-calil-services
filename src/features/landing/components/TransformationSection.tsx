"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

export function TransformationSection() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].transformation;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F7F1E8] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-[#1B1A2E] mb-5">
              {content.title}
            </h2>
            <p className="text-lg text-[#4B5563] max-w-3xl leading-relaxed">
              {content.text}
            </p>
          </div>

          <div className="rounded-3xl border border-[#7B3FA1]/20 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {content.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#C8A2FF]/20 text-[#5B2A86] font-semibold shadow-sm border border-[#7B3FA1]/30">
                    {idx + 1}
                  </span>
                  <span className="text-[#4B5563] leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
