"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

/**
 * BENEFITS FLOW COMPONENT
 *
 * Este componente VENDE, não descreve.
 *
 * Diferença:
 * ❌ "Carol oferece: Tarot, coaching, reiki..." (feature dump)
 * ✅ "Você quer: Clareza, transformação, propósito..." (benefit-driven)
 *
 * Layout:
 * - Card por benefício = fácil de scannear
 * - Ícone + titulo + descrição = hierarquia clara
 * - Hover effect = feedback visual interativo
 */

export function BenefitsFlow() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].whatfor;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F7F1E8] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-[#1B1A2E]">
            {content.title}
          </h2>
          <p className="font-cinzel text-xl text-[#5B2A86] max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 rounded-2xl bg-white border border-gray-100 text-center"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl font-bold text-[#1B1A2E] mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-cinzel text-base leading-relaxed text-[#4B5563]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final line after benefits */}
        <div className="text-center mt-16">
          <p className="font-cinzel text-[#5B2A86] text-lg mb-6">
            {content.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
