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
    <section className="relative py-20 sm:py-32 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white mb-6">
          {lang === "pt"
            ? "Pronto para encontrar suas respostas?"
            : lang === "es"
            ? "¿Listo para encontrar tus respuestas?"
            : "Ready to find your answers?"}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-amber-50 mb-12 max-w-2xl mx-auto leading-relaxed">
          {content.footer}
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            href={content.primary.href}
            size="lg"
            variant="secondary"
            className="min-w-fit"
          >
            {content.primary.label}
            <span className="ml-2">💬</span>
          </Button>

          {/* Divider */}
          <span className="hidden sm:inline text-white text-opacity-40">|</span>

          {/* Secondary CTA */}
          {content.secondary && (
            <Button
              href={content.secondary.href}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/30"
            >
              {content.secondary.label}
              <span className="ml-2">📸</span>
            </Button>
          )}
        </div>

        {/* Safety message - reduces friction */}
        <p className="text-sm text-amber-100 italic">
          {lang === "pt"
            ? "Sem obrigação. Sem compromisso. Apenas uma conversa sincera."
            : lang === "es"
            ? "Sin obligación. Sin compromiso. Solo una conversación sincera."
            : "No obligation. No commitment. Just a genuine conversation."}
        </p>
      </div>

      {/* Divider line */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <div className="h-px bg-white/20" />
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 text-center">
        <p className="text-sm text-amber-100 mb-4">
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
            className="text-amber-100 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@tarologacalil6735"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100 hover:text-white transition-colors text-sm"
          >
            YouTube
          </a>
          <a
            href="https://api.whatsapp.com/message/AWE5FVFPURUMK1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100 hover:text-white transition-colors text-sm"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </section>
  );
}
