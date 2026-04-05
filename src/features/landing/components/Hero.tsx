"use client";

import { Button } from "@/shared/ui/Button";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

/**
 * HERO COMPONENT
 *
 * Por que este design?
 * 1. Badge de credibilidade ACIMA da headline = instala confiança antes do pitch
 * 2. Headline em CAPS mental = fala do BENEFÍCIO não de Carol
 * 3. Imagem profissional = prova que Carol existe e é real
 * 4. CTA singular e destacado = reduz fricção (não oferece 5 opções)
 *
 * APRENDIZADO: Componente recebe dados via `landingContent`, não hardcoda
 * Se textos mudam em content.ts, Hero automaticamente atualiza
 */

export function Hero() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null; // Evita hydration mismatch

  const content = landingContent[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden pt-20 pb-16">
      {/* Background decoration - elemento visual sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Credibility Badge - instala confiança PRIMEIRO */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm border border-amber-100 hover:border-amber-300 transition-colors">
              <span className="text-sm text-amber-700 font-medium">
                {content.badge}
              </span>
            </div>

            {/* Headline - simples, benefit-driven */}
            <h1 className="font-cinzel text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              {content.headline}
            </h1>

            {/* Subheadline - explica o método */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {content.subheadline}
            </p>

            {/* CTA Button - primary, singular, destacado */}
            <div className="pt-4">
              <Button
                href={landingContent[lang].cta.primary.href}
                size="lg"
                className="group animate-in fade-in duration-700"
              >
                {content.cta}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </div>

            {/* Trust signals - social proof rápido */}
            <div className="pt-4 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {/* Avatares dos beneficiários (placeholder) */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 border-2 border-white flex items-center justify-center text-xs font-bold text-amber-700"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>
                {lang === "pt"
                  ? "100+ pessoas transformadas"
                  : "100+ people transformed"}
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.images.main}
                alt={content.images.alt}
                className="w-full h-auto object-cover aspect-square sm:aspect-auto"
              />
            </div>

            {/* Decorative badges ao redor da imagem */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-amber-100">
              <p className="text-sm font-semibold text-amber-700">
                {lang === "pt" ? "Método próprio" : "Personal method"}
              </p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-amber-100">
              <p className="text-sm font-semibold text-amber-700">
                {lang === "pt" ? "100% personalizado" : "100% personalized"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
