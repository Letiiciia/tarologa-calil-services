'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/shared/hooks/useLanguage'
import { cards } from '../../../../content/cards'

export function CartaDoDia() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [currentCard, setCurrentCard] = useState<typeof cards[0] | null>(null)
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Pick a random card on mount (client-side only to prevent hydration mismatch)
    const randomCard = cards[Math.floor(Math.random() * cards.length)]
    setCurrentCard(randomCard)
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleReveal = () => {
    setIsRevealed(true)
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#1a0f2e] via-[#2d1568] to-[#1a0f2e]">
      <div className="max-w-md mx-auto px-4 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-[#E8B15C] text-xs tracking-[3px] uppercase mb-4">
          ✦ uma mensagem para você ✦
        </p>

        {/* Title */}
        <h2 className="font-cinzel text-4xl font-bold text-white mb-2">
          Sua Carta do Dia
        </h2>

        {/* Subtitle */}
        <p className="text-white/60 mb-8">
          Deixe o tarot trazer uma mensagem para o seu momento atual
        </p>

        {/* Card Container with Flip Animation */}
        <div
          className="relative w-[140px] h-[220px] mb-6 transition-transform duration-600"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Card Back */}
          {!isRevealed && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2d1568] to-[#4a1942] border border-[#E8B15C]/30 flex flex-col items-center justify-center">
              <div className="text-3xl mb-2">🔮</div>
              <p className="font-cinzel text-[10px] text-[#E8B15C]">
                Taróloga Calil
              </p>
            </div>
          )}

          {/* Card Front */}
          {isRevealed && currentCard && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2d1568] to-[#4a1942] border border-[#E8B15C]/30 overflow-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <img
                src={currentCard.image}
                alt={currentCard.name.pt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Hint Text */}
        {!isRevealed && (
          <p className="text-white/40 text-xs mb-6">Toque na carta para revelar</p>
        )}

        {/* Button to Reveal */}
        {!isRevealed && (
          <button
            onClick={handleReveal}
            className="border border-[#E8B15C]/40 text-[#E8B15C] text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-[#E8B15C]/5 transition-colors"
          >
            ✨ Tirar minha carta
          </button>
        )}

        {/* Card Info - Revealed State */}
        {isRevealed && currentCard && (
          <div className="w-full">
            <h3 className="font-cinzel text-xl text-[#E8B15C] mb-4">
              {currentCard.name.pt}
            </h3>

            <p className="text-white/60 text-sm leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
              {currentCard.meaning.pt}
            </p>

            {/* CTA Box */}
            <div className="bg-[#E8B15C]/10 rounded-xl p-4 border border-[#E8B15C]/25">
              <p className="text-white/60 text-xs mb-4">
                Essa mensagem ressoou com você? Carol pode aprofundar essa leitura em uma consulta personalizada.
              </p>
              <a
                href="https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white font-semibold rounded-lg py-2.5 px-4 text-sm text-center hover:bg-[#25D366]/90 transition-colors"
              >
                Quero aprofundar com Carol →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
