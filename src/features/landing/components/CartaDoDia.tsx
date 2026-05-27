"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/shared/hooks/useLanguage";
import type { Card } from "../../../../content/cards";
import { cards, shuffleCards } from "../../../../content/cards";

type Phase = "idle" | "shuffling" | "choosing" | "revealed";

export function CartaDoDia() {
  const { lang } = useLanguage();

  const [phase, setPhase] = useState<Phase>("idle");
  const [displayCards, setDisplayCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Pick 7 random cards for the fan display
  useEffect(() => {
    const shuffled = shuffleCards(cards).slice(0, 7);
    setDisplayCards(shuffled);
  }, []);

  const handleShuffle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPhase("shuffling");
    setFlippedIndex(null);
    setSelectedCard(null);

    // Animate shuffle: reassign positions 3 times
    let count = 0;
    const interval = setInterval(() => {
      setDisplayCards(shuffleCards(cards).slice(0, 7));
      count++;
      if (count >= 3) {
        clearInterval(interval);
        setPhase("choosing");
        setIsAnimating(false);
      }
    }, 300);
  };

  const handleCardClick = (card: Card, index: number) => {
    if (phase !== "choosing" || isAnimating) return;
    setFlippedIndex(index);
    setSelectedCard(card);
    setTimeout(() => {
      setPhase("revealed");
    }, 700);
  };

  const handleReset = () => {
    setPhase("idle");
    setSelectedCard(null);
    setFlippedIndex(null);
    const shuffled = shuffleCards(cards).slice(0, 7);
    setDisplayCards(shuffled);
  };

  // Fan angles for 7 cards: spread from -30deg to +30deg
  const fanAngles = [-30, -20, -10, 0, 10, 20, 30];
  const fanTranslateX = [-60, -40, -20, 0, 20, 40, 60];
  const fanTranslateY = [20, 10, 4, 0, 4, 10, 20];

  const whatsappHref =
    "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0";

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden text-center"
      style={{
        background:
          "linear-gradient(135deg, #1a0f2e 0%, #2d1568 50%, #1a0f2e 100%)",
      }}
    >
      {/* Ambient glow */}
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
          ✦ uma mensagem para você ✦
        </p>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">
          Sua Carta do Dia
        </h2>
        <p className="text-sm sm:text-base mb-12" style={{ color: "rgba(255,255,255,0.55)" }}>
          {phase === "idle"
            ? "Embaralhe as cartas e escolha uma para revelar sua mensagem"
            : phase === "shuffling"
            ? "Embaralhando..."
            : phase === "choosing"
            ? "Toque em uma carta para revelar sua mensagem"
            : "Sua mensagem foi revelada"}
        </p>

        {/* ===== PHASE: idle / shuffling / choosing ===== */}
        {phase !== "revealed" && (
          <>
            {/* Fan of cards */}
            <div
              className="relative mx-auto mb-16"
              style={{ height: "240px", width: "320px" }}
            >
              {displayCards.map((card, i) => {
                const isFlipped = flippedIndex === i;
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
                      transform: `
                        translateX(calc(-50% + ${fanTranslateX[i]}px))
                        translateY(-${fanTranslateY[i]}px)
                        rotate(${fanAngles[i]}deg)
                        ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
                      `,
                      transition: isAnimating
                        ? "transform 0.25s ease"
                        : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: phase === "choosing" ? "pointer" : "default",
                      perspective: "1000px",
                      zIndex: i === 3 ? 10 : i < 3 ? i : 7 - i,
                    }}
                  >
                    {/* Card back face */}
                    <div
                      className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #2d1568, #4a1942)",
                        border: "1px solid rgba(232,177,92,0.3)",
                        boxShadow:
                          phase === "choosing"
                            ? "0 8px 24px rgba(0,0,0,0.5)"
                            : "0 4px 12px rgba(0,0,0,0.4)",
                        backfaceVisibility: "hidden",
                        transition: "box-shadow 0.2s",
                      }}
                    >
                      {/* Inner border decoration */}
                      <div
                        className="absolute inset-[6px] rounded-lg"
                        style={{
                          border: "1px solid rgba(232,177,92,0.12)",
                        }}
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

                    {/* Hover glow for choosing phase */}
                    {phase === "choosing" && (
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
                        style={{
                          boxShadow: "0 0 20px rgba(232,177,92,0.4)",
                          border: "1px solid rgba(232,177,92,0.6)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Hint */}
            {phase === "choosing" && (
              <p
                className="text-xs mb-6"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Toque em uma carta para revelar
              </p>
            )}

            {/* Button — muda para WhatsApp quando carta é clicada */}
            {flippedIndex !== null ? (
              <a
                href="https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{ background: "#25D366", color: "#fff" }}
              >
                💬 Ressoou aí? Vem falar comigo
              </a>
            ) : (
              <button
                onClick={phase === "idle" || phase === "choosing" ? handleShuffle : undefined}
                disabled={isAnimating}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all disabled:opacity-50"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(232,177,92,0.4)",
                  color: "#E8B15C",
                }}
              >
                ✨{" "}
                {phase === "choosing" ? "Embaralhar novamente" : "Embaralhar cartas"}
              </button>
            )}
          </>
        )}

        {/* ===== PHASE: revealed ===== */}
        {phase === "revealed" && selectedCard && (
          <div className="max-w-md mx-auto">
            {/* Card image */}
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

            {/* Card name */}
            <h3
              className="font-cinzel text-2xl font-bold mb-4"
              style={{ color: "#E8B15C" }}
            >
              {lang === "en" ? selectedCard.name.en : selectedCard.name.pt}
            </h3>

            {/* Card meaning */}
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
                {lang === "en"
                  ? selectedCard.meaning.en
                  : selectedCard.meaning.pt}
              </p>
            </div>

            {/* CTA box */}
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
                Essa mensagem ressoou com você? Carol pode aprofundar essa
                leitura em uma consulta personalizada.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-semibold text-sm py-3 px-4 rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "#25D366", color: "#fff" }}
              >
                Ressoou aí? Vem falar comigo →
              </a>
            </div>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="text-xs underline transition-opacity hover:opacity-80"
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
