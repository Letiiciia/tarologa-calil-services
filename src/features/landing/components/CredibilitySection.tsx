"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

/**
 * CREDIBILITY SECTION
 *
 * OBJETIVO: Responder a pergunta inconsciente do cliente:
 * "POR QUE devo confiar em Carol?"
 *
 * NÃO é biografia ("sou mãe, viajante, artista...")
 * É PROVA ("8 anos, UNIFESP, especialista em LGBTIQA+...")
 *
 * Cada credencial tem emoji porque:
 * - Cores/símbolos processam rápido no cérebro
 * - Mais memorizável que texto puro
 * - Mantém tom humano e espiritual
 */

export function CredibilitySection() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].whois;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-20" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.image.src}
                alt={content.image.alt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge com core message */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-sm border-l-4 border-[#E8B15C]">
              <p className="font-cinzel text-sm italic text-[#4B5563] leading-relaxed">
                "{content.coreMessage}"
              </p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Title */}
            <div>
              <h2 className="font-cinzel text-5xl font-bold text-[#1B1A2E] mb-4">
                {content.title}
              </h2>
            </div>

            {/* Core message again - para emphasis */}
            <blockquote className="border-l-4 border-[#E8B15C] pl-6 py-4">
              <p className="font-cinzel text-xl italic text-[#5B2A86] font-semibold">
                "{content.coreMessage}"
              </p>
            </blockquote>

            {/* Credentials List */}
            <ul className="space-y-4">
              {content.credentials.map((cred, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  {/* Icon/Badge */}
                  <span className="text-3xl flex-shrink-0 mt-1">
                    {cred.icon}
                  </span>

                  {/* Text */}
                  <span className="font-cinzel text-[#4B5563] leading-relaxed pt-1">
                    {cred.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Approach section */}
            <div className="bg-white rounded-lg p-6 border border-[#7B3FA1]/20 mt-8">
              <h3 className="font-cinzel font-bold text-[#1B1A2E] mb-3">
                {lang === "pt"
                  ? "Como Carol trabalha:"
                  : lang === "es"
                  ? "Cómo trabaja Carol:"
                  : "How Carol works:"}
              </h3>
              <p className="font-cinzel text-[#4B5563] leading-relaxed">
                {content.approach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
