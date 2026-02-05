"use client";

import { cards, shuffleCards, deckInfo } from "@/content/cards";
import { useState, useEffect } from "react";

export default function CartaDoDiaPage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [stage, setStage] = useState<"name" | "shuffle" | "select" | "reveal">(
    "name",
  );
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [selectedCard, setSelectedCard] = useState<(typeof cards)[0] | null>(
    null,
  );
  const [isShuffling, setIsShuffling] = useState(false);

  const content = {
    pt: {
      title: "Carta do dia",
      namePrompt: "Digite seu nome:",
      namePlaceholder: "Seu nome...",
      shuffleButton: "Embaralhe",
      selectPrompt: "Selecione",
      revealTitle: "Sua Carta",
      backButton: "Tirar outra carta",
      deckInfoButton: "Sobre os Baralhos",
      menuHome: "Início",
      menuAbout: "Quem Sou Eu",
      menuCardOfDay: "Carta do Dia",
      menuConsultation: "Agendar Consulta",
      resonateButton: "Ressoou aí? Clique aqui",
      resonateSubtext: "Agende sua consulta",
    },
    en: {
      title: "Card of the day",
      namePrompt: "Enter your name:",
      namePlaceholder: "Your name...",
      shuffleButton: "Shuffle",
      selectPrompt: "Select",
      revealTitle: "Your Card",
      backButton: "Draw another card",
      deckInfoButton: "About the Decks",
      menuHome: "Home",
      menuAbout: "About Me",
      menuCardOfDay: "Card of the Day",
      menuConsultation: "Schedule Consultation",
      resonateButton: "Did it resonate? Click here",
      resonateSubtext: "Schedule your consultation",
    },
  };

  const handleShuffle = () => {
    if (userName.trim()) {
      setIsShuffling(true);
      setTimeout(() => {
        setShuffledCards(shuffleCards(cards));
        setIsShuffling(false);
        setStage("shuffle");
      }, 1500);
    }
  };

  const handleCardSelect = (card: (typeof cards)[0]) => {
    setSelectedCard(card);
    setStage("reveal");
  };

  const handleReset = () => {
    setUserName("");
    setStage("name");
    setSelectedCard(null);
    setShuffledCards(cards);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR MENU */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="25"
                    r="18"
                    fill="none"
                    stroke="url(#grad1-menu)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="30"
                    cy="55"
                    r="18"
                    fill="none"
                    stroke="url(#grad2-menu)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="70"
                    cy="55"
                    r="18"
                    fill="none"
                    stroke="url(#grad3-menu)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="grad1-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient
                      id="grad2-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient
                      id="grad3-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold">Taróloga Calil</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-medium">{content[language].menuHome}</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">🔮</span>
              <span className="font-medium">{content[language].menuAbout}</span>
            </a>
            <a
              href="/carta-do-dia"
              className="flex items-center gap-3 px-4 py-3 bg-violet-100 border-l-4 border-violet-600 transition-colors"
            >
              <span className="text-2xl">🎴</span>
              <span className="font-semibold text-violet-700">
                {content[language].menuCardOfDay}
              </span>
            </a>
            <a
              href="#consulta"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">📅</span>
              <span className="font-medium">
                {content[language].menuConsultation}
              </span>
            </a>
          </nav>

          {/* Menu Footer */}
          <div className="border-t px-4 py-4">
            <p className="text-sm text-gray-600 text-center">
              © 2026 Taróloga Calil
            </p>
          </div>
        </div>
      </aside>

      {/* HEADER */}
      <header className="flex items-center justify-between border-b px-4 py-3">
        {/* LEFT SIDE: Hamburger Menu + Logo + Name */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="25"
                r="18"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
              />
              <circle
                cx="30"
                cy="55"
                r="18"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="2"
              />
              <circle
                cx="70"
                cy="55"
                r="18"
                fill="none"
                stroke="url(#grad3)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Name */}
          <div className="font-semibold">Taróloga Calil</div>
        </div>

        {/* LANGUAGE SWITCHER */}
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("pt")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === "pt"
                ? "bg-violet-600 text-white"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === "en"
                ? "bg-violet-600 text-white"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            EN
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-8">
        {/* TITLE */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="text-4xl">🔮</span>
          <h1 className="text-center text-3xl font-semibold text-violet-700 font-[family-name:var(--font-cinzel)]">
            {content[language].title}
          </h1>
        </div>

        {/* NAME INPUT STAGE */}
        {stage === "name" && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-md">
              <label className="mb-3 block text-center text-lg font-medium text-zinc-700">
                {content[language].namePrompt}
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={content[language].namePlaceholder}
                className="w-full rounded-lg border-2 border-violet-300 px-4 py-3 text-center text-lg focus:border-violet-500 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleShuffle()}
              />
            </div>
            <button
              onClick={handleShuffle}
              disabled={!userName.trim() || isShuffling}
              className="rounded-full bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isShuffling ? "..." : content[language].shuffleButton}
            </button>
          </div>
        )}

        {/* SHUFFLE STAGE */}
        {stage === "shuffle" && (
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-xl font-medium text-violet-700">
              Olá, {userName}!
            </p>
            <div className="grid grid-cols-5 gap-3 max-w-lg">
              {shuffledCards.slice(0, 10).map((card, index) => (
                <button
                  key={index}
                  onClick={() => setStage("select")}
                  className="aspect-[2/3] rounded-lg bg-gradient-to-br from-violet-900 to-purple-800 shadow-lg hover:scale-105 transition-transform cursor-pointer border-2 border-violet-600"
                >
                  <div className="flex items-center justify-center h-full text-white opacity-30">
                    <span className="text-4xl">✨</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStage("select")}
              className="mt-4 rounded-full bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 transition-colors"
            >
              {content[language].shuffleButton}
            </button>
          </div>
        )}

        {/* SELECT STAGE */}
        {stage === "select" && (
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-xl font-medium text-violet-700">
              {content[language].selectPrompt}
            </p>
            <div className="grid grid-cols-5 gap-3 max-w-lg">
              {shuffledCards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleCardSelect(card)}
                  className="aspect-[2/3] rounded-lg bg-gradient-to-br from-violet-900 to-purple-800 shadow-lg hover:scale-110 hover:shadow-2xl transition-all cursor-pointer border-2 border-violet-600 relative group"
                >
                  <div className="flex items-center justify-center h-full text-white opacity-40 group-hover:opacity-60">
                    <span className="text-4xl">✨</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* REVEAL STAGE */}
        {stage === "reveal" && selectedCard && (
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-violet-700 font-[family-name:var(--font-cinzel)]">
              {selectedCard.name[language]}
            </h2>

            {/* Decorative Card Display */}
            <div className="relative w-full max-w-md">
              {/* Display the actual card image */}
              <img
                src={selectedCard.image}
                alt={selectedCard.name[language]}
                className="w-full aspect-[2/3] rounded-xl shadow-2xl border-4 border-violet-400 object-cover"
              />
            </div>

            {/* Card Meaning */}
            <div className="w-full max-w-md rounded-xl bg-violet-50 p-6 shadow-lg">
              <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-700 font-[family-name:var(--font-cinzel)]">
                {selectedCard.meaning[language]}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-md">
              {/* Main CTA - Schedule Consultation */}
              <a
                href="/agendamento"
                className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-white font-bold text-center hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg">
                    {content[language].resonateButton}
                  </span>
                  <span className="text-sm font-normal opacity-90">
                    {content[language].resonateSubtext}
                  </span>
                </div>
              </a>

              {/* Secondary Actions */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 text-sm text-violet-600 border-2 border-violet-600 rounded-full hover:bg-violet-50 transition-colors font-medium"
                >
                  {content[language].backButton}
                </button>
                <a
                  href="/"
                  className="px-6 py-2 text-sm text-gray-600 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
                >
                  {language === "pt" ? "Início" : "Home"}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* DECK INFO SECTION (only show on name stage) */}
        {stage === "name" && (
          <div className="mt-12 space-y-8">
            {/* About the Decks */}
            <div className="rounded-xl bg-violet-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-violet-700 font-[family-name:var(--font-cinzel)]">
                {deckInfo[language].title}
              </h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-700 font-[family-name:var(--font-cinzel)]">
                {deckInfo[language].description}
              </p>
            </div>

            {/* Video Section */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-violet-700 text-center font-[family-name:var(--font-cinzel)]">
                {deckInfo[language].videoTitle}
              </h3>
              <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-lg">
                <iframe
                  src={deckInfo[language].videoUrl}
                  title={deckInfo[language].videoTitle}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}
