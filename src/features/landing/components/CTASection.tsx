"use client";

import { Button } from "@/shared/ui/Button";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

/**
 * CTA SECTION = Seção de conversão final
 *
 * Lei de conversão:
 * 1. Single goal = só um objetivo (WhatsApp)
 * 2. Multiple paths = mas múltiplos caminhos para lá (direto + Instagram)
 * 3. Clear copy = texto diz exatamente o que acontece
 * 4. Low friction = clica, abre WhatsApp. Pronto.
 *
 * Por que Instagram como secondary?
 * - Visitor pode não estar pronto pra WhatsApp ainda
 * - Instagram mostra método em ação (social proof)
 * - Outro touchpoint antes de comentar (reduces regret)
 */

export function CTASection() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].cta;

  return (
    <section
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0f2e 0%, #2d1568 50%, #1a0f2e 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(232,177,92,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(200,162,255,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white mb-6">
          {content.headline}
        </h2>

        {/* Description */}
        <p className="font-cinzel text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          {content.subtext}
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            href={content.primary.href}
            size="lg"
            variant="secondary"
            className="text-white hover:bg-white/10 border"
              style={{ borderColor: "rgba(232,177,92,0.4)" }}
          >
            {content.primary.label}
            <span className="ml-2">💬</span>
          </Button>

          {/* Divider */}
          <span className="hidden sm:inline text-white" style={{ color: "rgba(255,255,255,0.35)" }}>|</span>

          {/* Secondary CTA */}
          {content.secondary && (
            <Button
              href={content.secondary.href}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border"
              style={{ borderColor: "rgba(232,177,92,0.4)" }}
            >
              {content.secondary.label}
              <span className="ml-2">📸</span>
            </Button>
          )}
        </div>
      </div>

      {/* Divider line */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <div className="h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 text-center">
        <p className="font-cinzel text-sm text-white mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
          {lang === "pt"
            ? "Carol Calil • Taróloga e Terapeuta Holística"
            : lang === "es"
              ? "Carol Calil • Tarotista y Terapeuta Holística"
              : "Carol Calil • Tarot Reader & Holistic Therapist"}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/tarologacalil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-colors text-sm"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@tarologacalil6735"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-colors text-sm"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            YouTube
          </a>
          <a
            href="https://api.whatsapp.com/message/AWE5FVFPURUMK1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-colors text-sm"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </section>
  );
}
