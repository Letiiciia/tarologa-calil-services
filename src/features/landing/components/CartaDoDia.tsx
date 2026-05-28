"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/shared/hooks/useLanguage";
import type { Card } from "../../../../content/cards";
import { cards } from "../../../../content/cards";

type Phase = "idle" | "gathering" | "mixing" | "spreading" | "choosing" | "revealed";

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

  useEffect(() => {
    setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
  }, []);

  const handleShuffle = () => {
    if (phase !== "idle" && phase !== "choosing") return;
    setFlippedIndex(null);
    setSelectedCard(null);

    // Step 1: gather cards to center (600ms)
    setPhase("gathering");

    setTimeout(() => {
      // Step 2: mix (reshuffle data mid-animation) (1200ms)
      setPhase("mixing");
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 700);

    setTimeout(() => {
      // Step 3: mix again
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
    }, 1300);

    setTimeout(() => {
      // Step 4: spread back to fan (800ms)
      setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
      setPhase("spreading");
    }, 1900);

    setTimeout(() => {
      // Done — ready to choose
      setPhase("choosing");
    }, 2900);
  };

  const handleCardClick = (card: Card, index: number) => {
    if (phase !== "choosing") return;
    setFlippedIndex(index);
    setSelectedCard(card);
    setTimeout(() => setPhase("revealed"), 800);
  };

  const handleReset = () => {
    setPhase("idle");
    setSelectedCard(null);
    setFlippedIndex(null);
    setDisplayCards(embaralharCartas([...cards]).slice(0, 7));
  };

  // Base fan positions
  const fan = [
    { x: -60, y: 20, r: -30 },
    { x: -40, y: 10, r: -20 },
    { x: -20, y:  4, r: -10 },
    { x:   0, y:  0, r:   0 },
    { x:  20, y:  4, r:  10 },
    { x:  40, y: 10, r:  20 },
    { x:  60, y: 20, r:  30 },
  ];

  // Mixing positions: cards overlap in center with slight offsets
  const mixPositions = [
    { x: -12, y: -8,  r: -15 },
    { x:   8, y: -12, r:  10 },
    { x:  -6, y:  6,  r: -5  },
    { x:   0, y:  0,  r:  0  },
    { x:  10, y: -6,  r:  8  },
    { x:  -8, y:  10, r: -12 },
    { x:  14, y:  4,  r:  18 },
  ];

  const getTransform = (i: number, isFlipped: boolean) => {
    if (phase === "gathering") {
      // All cards move slowly to center, stacked
      return `translateX(calc(-50% + ${fan[i].x * 0.15}px)) translateY(${-fan[i].y * 0.3}px) rotate(${fan[i].r * 0.1}deg)`;
    }
    if (phase === "mixing") {
      const m = mixPositions[i];
      return `translateX(calc(-50% + ${m.x}px)) translateY(${m.y}px) rotate(${m.r}deg)`;
    }
    if (phase === "spreading") {
      return `translateX(calc(-50% + ${fan[i].x}px)) translateY(-${fan[i].y}px) rotate(${fan[i].r}deg)`;
    }
    // idle / choosing / revealed → fan
    return `
      translateX(calc(-50% + ${fan[i].x}px))
      translateY(-${fan[i].y}px)
      rotate(${fan[i].r}deg)
      ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
    `;
  };

  const getTransitionDuration = () => {
    if (phase === "gathering") return "0.65s";
    if (phase === "mixing")    return "0.55s";
    if (phase === "spreading") return "0.75s";
    return "0.6s";
  };

  const getTransitionTiming = () => {
    if (phase === "gathering") return "cubic-bezier(0.4, 0, 0.2, 1)";
    if (phase === "mixing")    return "cubic-bezier(0.4, 0, 0.6, 1)";
    if (phase === "spreading") return "cubic-bezier(0.34, 1.56, 0.64, 1)";
    return "cubic-bezier(0.4, 0, 0.2, 1)";
  };

  const getTransition = () => {
    if (phase === "gathering") return "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)";
    if (phase === "mixing")    return "transform 0.55s cubic-bezier(0.4, 0, 0.6, 1)";
    if (phase === "spreading") return "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)";
    return "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  const isShuffling = phase === "gathering" || phase === "mixing" || phase === "spreading";
  const whatsappHref = "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0";

  const subtitle = {
    idle: "Embaralhe as cartas e escolha uma para revelar sua mensagem",
    gathering: "Reunindo as cartas...",
    mixing: "Embaralhando...",
    spreading: "Espalhando as cartas...",
    choosing: "Toque em uma carta para revelar sua mensagem",
    revealed: "Sua mensagem foi revelada",
  }[phase];

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden text-center"
      style={{
        background: "linear-gradient(135deg, #1a0f2e 0%, #2d1568 50%, #1a0f2e 100%)",
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
        <p className="text-xs tracking-[3px] uppercase mb-3" style={{ color: "#E8B15C" }}>
          ✦ uma mensagem para você ✦
        </p>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">
          Carta do Dia
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
                const delay = phase === "spreading"
                  ? `${i * 60}ms`
                  : phase === "gathering"
                  ? `${(6 - i) * 40}ms`
                  : `${i * 30}ms`;

                return (
                  <div
                    key={`${card.id}-${i}`}
                    onClick={() => handleCardClick(card, i)}
                    className="absolute"
                    style={{
                      left: "50%",
                      bottom: 0,
                      width: "100px",
                      height: "160px",
                      transformOrigin: "bottom center",
                      transform: getTransform(i, isFlipped),
                      transitionProperty: "transform, box-shadow",
                      transitionDuration: `${getTransitionDuration()}, 0.2s`,
                      transitionTimingFunction: `${getTransitionTiming()}, ease`,
                      transitionDelay: delay,
                      cursor: phase === "choosing" ? "pointer" : "default",
                      zIndex: phase === "mixing"
                        ? i
                        : i === 3 ? 10 : i < 3 ? i : 7 - i,
                    }}
                  >
                    {/* Card face */}
                    <div
                      className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2"
                      style={{
                        background: "linear-gradient(135deg, #2d1568, #4a1942)",
                        border: "1px solid rgba(232,177,92,0.3)",
                        boxShadow: phase === "choosing"
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
                  </div>
                );
              })}
            </div>

            {/* Hint */}
            {phase === "choosing" && (
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
                Toque em uma carta para revelar
              </p>
            )}

            {/* Button */}
            {flippedIndex !== null ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: "#25D366", color: "#fff" }}
              >
                💬 Ressoou aí? Vem falar comigo
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
                ✨ {phase === "choosing" ? "Embaralhar novamente" : "Embaralhar cartas"}
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
              {lang === "en" ? selectedCard.name.en : selectedCard.name.pt}
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
                {lang === "en" ? selectedCard.meaning.en : selectedCard.meaning.pt}
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
                Essa mensagem ressoou com você? Quer aprofundar essa leitura em uma consulta personalizada.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-semibold text-sm py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#25D366", color: "#fff" }}
              >
                Ressoou aí? Vem falar comigo →
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs underline hover:opacity-80 transition-opacity"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Tirar outra carta
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
