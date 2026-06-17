"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/shared/hooks/useLanguage";
import type { Card } from "../../../../content/cards";
import { cards } from "../../../../content/cards";
import { useTarotAnalytics } from "../hooks/useTarotAnalytics";

type Phase =
  | "idle"
  | "gathering"
  | "mixing"
  | "spreading"
  | "choosing"
  | "revealed";

function embaralharCartas(baralho: Card[]): Card[] {
  for (let i = baralho.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
  }
  return baralho;
}

export function CartaDoDia() {
  const { lang } = useLanguage();

  const [phase, setPhase] = useState<Phase>("idle");
  const [displayCards, setDisplayCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { onDrawStarted, onDrawCompleted, onCardSelected, onCtaClicked } =
    useTarotAnalytics();

  useEffect(() => {
    setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
  }, []);

  const handleShuffle = () => {
    if (phase !== "idle" && phase !== "choosing") return;
    setFlippedIndex(null);
    setSelectedCard(null);
    onDrawStarted();

    // Step 1: gather
    setPhase("gathering");

    setTimeout(() => {
      setPhase("mixing");
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 500);

    setTimeout(() => {
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 900);

    setTimeout(() => {
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 1200);

    setTimeout(() => {
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 1500);

    setTimeout(() => {
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
      setPhase("spreading");
    }, 1800);

    setTimeout(() => {
      setPhase("choosing");
      onDrawCompleted();
    }, 2800);
  };

  const handleCardClick = (card: Card, index: number) => {
    if (phase !== "choosing") return;
    setFlippedIndex(index);
    setSelectedCard(card);
    onCardSelected(card);
    setTimeout(() => setPhase("revealed"), 800);
  };

  const handleReset = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setPhase("idle");
    setSelectedCard(null);
    setFlippedIndex(null);
    setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
  };

  // Base fan positions
  const fan = [
    { x: -120, y: 20, r: -30 },
    { x: -80, y: 10, r: -20 },
    { x: -40, y: 4, r: -10 },
    { x: 0, y: 0, r: 0 },
    { x: 40, y: 4, r: 10 },
    { x: 80, y: 10, r: 20 },
    { x: 120, y: 20, r: 30 },
  ];

  const getCardAnimate = (i: number, isFlipped: boolean) => {
    if (phase === "gathering") {
      return {
        x: fan[i].x * 0.05,
        y: 0,
        rotate: fan[i].r * 0.05,
        scale: 1,
      };
    }
    if (phase === "mixing") {
      const seed = i * 137.5;
      const angle = ((seed % 360) * Math.PI) / 180;
      return {
        x: Math.cos(angle) * 35,
        y: Math.sin(angle) * 20 - 10,
        rotate: Math.sin(angle) * 45,
        scale: 0.95,
      };
    }
    if (phase === "spreading") {
      return {
        x: fan[i].x,
        y: fan[i].y,
        rotate: fan[i].r,
        scale: 1,
      };
    }
    return {
      x: fan[i].x,
      y: fan[i].y,
      rotate: fan[i].r,
      scale: isFlipped ? 1.05 : 1,
    };
  };

  const getCardTransition = (i: number) => {
    if (phase === "gathering") {
      return { type: "spring", stiffness: 260, damping: 22, delay: i * 0.03 };
    }
    if (phase === "mixing") {
      return { type: "spring", stiffness: 420, damping: 18, delay: i * 0.04 };
    }
    if (phase === "spreading") {
      return { type: "spring", stiffness: 200, damping: 14, delay: i * 0.06 };
    }
    return { type: "spring", stiffness: 140, damping: 18 };
  };

  const isShuffling =
    phase === "gathering" || phase === "mixing" || phase === "spreading";

  const whatsappHref = {
    pt: "https://wa.me/34639664590?text=Ol%C3%A1%20Carol!%20Vim%20pelo%20site%20e%20quero%20iniciar%20minha%20jornada.%20Gostaria%20de%20adquirir%20uma%20sess%C3%A3o%20com%20voc%C3%AA!",
    en: "https://wa.me/34639664590?text=Hi%20Carol!%20I%20came%20from%20your%20website%20and%20I%27d%20like%20to%20book%20a%20session%20with%20you!",
    es: "https://wa.me/34639664590?text=%C2%A1Hola%20Carol!%20Vine%20desde%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20adquirir%20una%20sesi%C3%B3n%20contigo!",
  }[lang];

  const t = {
    pt: {
      eyebrow: "✦ uma mensagem para você ✦",
      title: "Carta do Dia",
      subtitle: {
        idle: "Embaralhe as cartas e escolha uma para revelar sua mensagem",
        gathering: "Reunindo as cartas...",
        mixing: "Embaralhando...",
        spreading: "Espalhando as cartas...",
        choosing: "Toque em uma carta para revelar sua mensagem",
        revealed: "Sua mensagem foi revelada",
      },
      hint: "Toque em uma carta para revelar",
      whatsappAfterFlip: "💬 Ressoou aí? Vem falar comigo",
      shuffleAgain: "Embaralhar novamente",
      shuffle: "Embaralhar cartas",
      ctaText:
        "Essa mensagem ressoou com você? Quer aprofundar essa leitura em uma consulta personalizada.",
      ctaButton: "Ressoou aí? Vem falar comigo →",
      reset: "Tirar outra carta",
    },
    en: {
      eyebrow: "✦ a message for you ✦",
      title: "Card of the Day",
      subtitle: {
        idle: "Shuffle the cards and choose one to reveal your message",
        gathering: "Gathering the cards...",
        mixing: "Shuffling...",
        spreading: "Spreading the cards...",
        choosing: "Tap a card to reveal your message",
        revealed: "Your message has been revealed",
      },
      hint: "Tap a card to reveal",
      whatsappAfterFlip: "💬 Did it resonate? Let's talk",
      shuffleAgain: "Shuffle again",
      shuffle: "Shuffle cards",
      ctaText:
        "Did this message resonate with you? Want to deepen this reading in a personalized session?",
      ctaButton: "Did it resonate? Let's talk →",
      reset: "Draw another card",
    },
    es: {
      eyebrow: "✦ un mensaje para ti ✦",
      title: "Carta del Día",
      subtitle: {
        idle: "Mezcla las cartas y elige una para revelar tu mensaje",
        gathering: "Reuniendo las cartas...",
        mixing: "Mezclando...",
        spreading: "Extendiendo las cartas...",
        choosing: "Toca una carta para revelar tu mensaje",
        revealed: "Tu mensaje ha sido revelado",
      },
      hint: "Toca una carta para revelar",
      whatsappAfterFlip: "💬 ¿Resonó? Hablemos",
      shuffleAgain: "Mezclar de nuevo",
      shuffle: "Mezclar cartas",
      ctaText:
        "¿Este mensaje resonó contigo? ¿Quieres profundizar esta lectura en una consulta personalizada?",
      ctaButton: "¿Resonó? Hablemos →",
      reset: "Sacar otra carta",
    },
  }[lang];

  const subtitle = t.subtitle[phase];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden text-center"
      style={{
        background:
          "linear-gradient(135deg, #1a0f2e 0%, #2d1568 50%, #1a0f2e 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(232,177,92,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(200,162,255,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <p
          className="text-xs tracking-[3px] uppercase mb-3"
          style={{ color: "#E8B15C" }}
        >
          {t.eyebrow}
        </p>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">
          {t.title}
        </h2>
        <p
          className="text-sm sm:text-base mb-12 transition-all duration-500"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {subtitle}
        </p>

        {/* ===== FAN / SHUFFLE ===== */}
        {phase !== "revealed" && (
          <>
            {/* Cards container */}
            <div
              className="relative mx-auto mb-16"
              style={{ height: "260px", width: "340px" }}
            >
              {displayCards.map((card, i) => {
                const isFlipped = flippedIndex === i;

                return (
                  <motion.div
                    key={`${card.id}-${i}`}
                    onClick={() => handleCardClick(card, i)}
                    animate={getCardAnimate(i, isFlipped)}
                    transition={getCardTransition(i)}
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: 0,
                      width: "100px",
                      height: "160px",
                      transformOrigin: "bottom center",
                      marginLeft: "-50px",
                      cursor: phase === "choosing" ? "pointer" : "default",
                      zIndex:
                        phase === "mixing"
                          ? i
                          : i === 3
                            ? 10
                            : i < 3
                              ? i
                              : 7 - i,
                    }}
                  >
                    {/* Card face */}
                    <div
                      className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2"
                      style={{
                        background: "linear-gradient(135deg, #2d1568, #4a1942)",
                        border: "1px solid rgba(232,177,92,0.3)",
                        boxShadow:
                          phase === "choosing"
                            ? "0 8px 24px rgba(0,0,0,0.5)"
                            : "0 4px 12px rgba(0,0,0,0.4)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className="absolute inset-[6px] rounded-lg"
                        style={{ border: "1px solid rgba(232,177,92,0.12)" }}
                      />
                      <span className="text-2xl relative z-10">🔮</span>
                      <span
                        className="font-cinzel relative z-10"
                        style={{
                          fontSize: "0.45rem",
                          color: "rgba(232,177,92,0.4)",
                          letterSpacing: "1.5px",
                        }}
                      >
                        Taróloga Calil
                      </span>
                    </div>

                    {/* Hover glow */}
                    {phase === "choosing" && (
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow: "0 0 30px rgba(200,162,255,0.6)",
                          border: "1px solid rgba(200,162,255,0.7)",
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Hint */}
            {phase === "choosing" && (
              <p
                className="text-xs mb-6"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {t.hint}
              </p>
            )}

            {/* Button */}
            {flippedIndex !== null ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => selectedCard && onCtaClicked(selectedCard)}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: "#25D366", color: "#fff" }}
              >
                {t.whatsappAfterFlip}
              </a>
            ) : (
              <button
                onClick={handleShuffle}
                disabled={isShuffling}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(232,177,92,0.4)",
                  color: "#E8B15C",
                }}
              >
                ✨ {phase === "choosing" ? t.shuffleAgain : t.shuffle}
              </button>
            )}
          </>
        )}

        {/* ===== REVEALED ===== */}
        {phase === "revealed" && selectedCard && (
          <div className="max-w-md mx-auto">
            <div
              className="mx-auto mb-6 rounded-2xl overflow-hidden"
              style={{
                width: "160px",
                height: "240px",
                border: "1px solid rgba(232,177,92,0.5)",
                boxShadow: "0 12px 40px rgba(124,77,170,0.5)",
              }}
            >
              <img
                src={selectedCard.image}
                alt={selectedCard.name.pt}
                className="w-full h-full object-cover"
              />
            </div>

            <h3
              className="font-cinzel text-2xl font-bold mb-4"
              style={{ color: "#E8B15C" }}
            >
              {lang === "pt"
                ? selectedCard.name.pt
                : lang === "en"
                  ? selectedCard.name.en
                  : selectedCard.name.es}
            </h3>

            <div
              className="rounded-2xl p-5 mb-6 text-left"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {lang === "pt"
                  ? selectedCard.meaning.pt
                  : lang === "en"
                    ? selectedCard.meaning.en
                    : selectedCard.meaning.es}
              </p>
            </div>

            <div
              className="rounded-2xl p-5 mb-6"
              style={{
                background: "rgba(232,177,92,0.08)",
                border: "1px solid rgba(232,177,92,0.25)",
              }}
            >
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {t.ctaText}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => selectedCard && onCtaClicked(selectedCard)}
                className="block w-full text-center font-semibold text-sm py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#25D366", color: "#fff" }}
              >
                {t.ctaButton}
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs underline hover:opacity-80 transition-opacity"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {t.reset}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
