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
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gray-900">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-xl border border-amber-100 bg-white hover:border-amber-300 hover:shadow-lg hover:bg-amber-50 transition-all duration-300 cursor-pointer"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-amber-100 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {benefit.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 h-1 w-8 bg-amber-300 rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Final line after benefits */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            {content.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
