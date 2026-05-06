"use client";

import { Button } from "@/shared/ui/Button";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";
import styles from "./Hero.module.css";

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
  const { lang, mounted, setLanguage } = useLanguage();
  const languageOptions = ["pt", "en", "es"] as const;

  if (!mounted) return null; // Evita hydration mismatch

  const content = landingContent[lang].hero;

  const getLocalizedLabel = (key: "transformed" | "method" | "personalized") => {
    switch (key) {
      case "transformed":
        return lang === "pt"
          ? "100+ pessoas transformadas"
          : lang === "es"
          ? "100+ personas transformadas"
          : "100+ people transformed";
      case "method":
        return lang === "pt"
          ? "Método próprio"
          : lang === "es"
          ? "Método propio"
          : "Personal method";
      case "personalized":
        return lang === "pt"
          ? "100% personalizado"
          : lang === "es"
          ? "100% personalizado"
          : "100% personalized";
      default:
        return "";
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.languageSwitcher}>
        {languageOptions.map((language) => (
          <button
            key={language}
            type="button"
            onClick={() => setLanguage(language)}
            className={`${styles.languageOption} ${
              lang === language ? styles.languageOptionActive : ""
            }`}
            aria-pressed={lang === language}
          >
            {language.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Background decoration - elemento visual sutil */}
      <div className={styles.decoration}>
        <div className={`${styles.decorationCircle} ${styles.decorationCircleTop}`} />
        <div className={`${styles.decorationCircle} ${styles.decorationCircleBottom}`} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Text Content */}
          <div className={styles.textContent}>
            {/* Credibility Badge - instala confiança PRIMEIRO */}
            <div className={styles.badge}>
              <span className={styles.badgeText}>
                {content.badge}
              </span>
            </div>

            {/* Headline - simples, benefit-driven */}
            <h1 className={styles.headline}>
              {content.headline}
            </h1>

            {/* Subheadline - explica o método */}
            <p className={styles.subheadline}>
              {content.subheadline}
            </p>
            <p className={styles.supportingText}>{content.supportingText}</p>

            {/* CTA Buttons - primary + secondary */}
            <div className={styles.ctaWrapper}>
              <Button
                href={landingContent[lang].cta.primary.href}
                size="lg"
                className={styles.ctaButton}
              >
                {content.cta}
                <span className={styles.ctaArrow}>
                  →
                </span>
              </Button>
              <Button
                href={content.secondaryCta.href}
                size="lg"
                variant="ghost"
                className="ml-0 mt-4 sm:ml-4 sm:mt-0 text-amber-700 border border-amber-200 hover:bg-amber-50"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            {/* Trust signals - social proof rápido */}
            <div className={styles.trustSignals}>
              <div className={styles.avatarContainer}>
                {/* Avatares dos beneficiários (placeholder) */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={styles.avatar}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>{getLocalizedLabel("transformed")}</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img
                src={content.images.main}
                alt={content.images.alt}
                className={styles.image}
              />
            </div>

            {/* Decorative badges ao redor da imagem */}
            <div className={`${styles.decorativeBadge} ${styles.decorativeBadgeBottomLeft}`}>
              <p className={styles.decorativeBadgeText}>
                {getLocalizedLabel("method")}
              </p>
            </div>
            <div className={`${styles.decorativeBadge} ${styles.decorativeBadgeTopRight}`}>
              <p className={styles.decorativeBadgeText}>
                {getLocalizedLabel("personalized")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
