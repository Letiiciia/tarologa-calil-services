"use client";

import { Button } from "@/shared/ui/Button";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";
import { getLocalizedLabel } from "../HeroService";
import styles from "./Hero.module.css";


export function Hero() {
  const { lang, mounted, setLanguage } = useLanguage();
  const languageOptions = ["pt", "en", "es"] as const;

  if (!mounted) return null; 

  const content = landingContent[lang].hero;

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
            {/* <div className={styles.badge}>
              <span className={styles.badgeText}>
                {content.badge}
              </span>
            </div> */}

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
                className="ml-0 mt-4 sm:ml-4 sm:mt-0 text-[#5B2A86] border border-[#7B3FA1]/30 hover:bg-[#C8A2FF]/10"
              >
                {content.secondaryCta.label}
              </Button>
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
                {getLocalizedLabel(lang, "method")}
              </p>
            </div>
            <div className={`${styles.decorativeBadge} ${styles.decorativeBadgeTopRight}`}>
              <p className={styles.decorativeBadgeText}>
                {getLocalizedLabel(lang, "personalized")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
