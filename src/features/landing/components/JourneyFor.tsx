"use client";

import { useState } from "react";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";
import { motion } from "framer-motion";

/**
 * JOURNEY FOR COMPONENT
 *
 * Premium emotional section designed to:
 * - Create deep emotional connection
 * - Deepen identification with visitor
 * - Establish premium, cinematic aesthetic
 * - Transition from Hero to Benefits
 *
 * Design philosophy:
 * - Cinematic and introspective
 * - Feminine and elegant
 * - Premium spiritual aesthetic with modern sensibility
 * - Soft animations and immersive experience
 */

export function JourneyFor() {
  const { lang, mounted } = useLanguage();
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  if (!mounted) return null;

  const content = landingContent[lang].journeyFor;

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="jornada"
      className="relative py-10 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Soft warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F1E8] via-white to-[#F0E9DC] -z-20" />

      {/* Subtle floating particles background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, #E8B15C 0%, #F59E52 30%, transparent 70%)",
          }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full filter blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, #7B3FA1 0%, #5B2A86 40%, transparent 70%)",
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full filter blur-3xl opacity-5 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, #C8A2FF 0%, #A03C78 20%, transparent 60%)",
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content container with animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8 sm:space-y-12"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-[#7B3FA1]/30 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-cinzel text-sm sm:text-base font-medium text-[#5B2A86]">
                ✨ {content.badge}
              </span>
            </div>
          </motion.div>

          {/* Main Title - Elegant Serif */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1A2E] leading-tight">
              {content.title}
            </h2>
          </motion.div>

          {/* Body Text - Clean Sans-serif with strong hierarchy */}
          <motion.div variants={itemVariants} className="space-y-6 text-center">
            {content.bodyText.map((paragraph, idx) => (
              <p
                key={idx}
                className="font-cinzel text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-light"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Divider - subtle visual break */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-4"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#E8B15C] to-transparent rounded-full" />
          </motion.div>

          {/* Emotional Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-8"
          >
            {content.cards.map((card, idx) => {
              const isFlipped = flipped[idx] || false;

              return (
                <div
                  key={idx}
                  className="aspect-square sm:aspect-auto sm:h-80 cursor-pointer"
                  onClick={() => toggleFlip(idx)}
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* Front - Icon and Title Only */}
                    <div
                      className="absolute w-full h-full rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center text-center border border-[#E8D5F5]"
                      style={{
                        backfaceVisibility: "hidden",
                        background:
                          "linear-gradient(145deg, #F7F0FF 0%, #EDE4F8 50%, #F0E9DC 100%)",
                      }}
                    >
                      <div className="text-4xl sm:text-6xl mb-3 sm:mb-6">
                        {card.icon}
                      </div>
                      <h3 className="font-cinzel text-sm sm:text-xl font-bold text-[#3D1A6E]">
                        {card.title}
                      </h3>
                    </div>

                    {/* Back - Description */}
                    <div
                      className="absolute w-full h-full rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center text-center bg-[#F7F1E8] border border-gray-100"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="font-cinzel text-xs sm:text-base leading-relaxed text-[#4B5563]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Closing message - optional */}
          {content.closingLine && (
            <motion.div
              variants={itemVariants}
              className="text-center pt-4 sm:pt-8"
            >
              <p className="text-gray-600 text-base sm:text-lg italic">
                {content.closingLine}
              </p>
            </motion.div>
          )}

          {/* CTA Button */}
          {/* <div className="text-center mt-10">
            <a
              href="https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all border hover:bg-white/10"
              style={{
                background: "transparent",
                borderColor: "rgba(232,177,92,0.4)",
              }}
            >
              Quero começar minha jornada →
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
