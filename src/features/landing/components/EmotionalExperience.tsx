"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";
import { motion } from "framer-motion";

/**
 * EMOTIONAL EXPERIENCE COMPONENT
 *
 * Premium emotional bridge section between Hero and Benefits
 * Creates deep emotional connection and sets premium spiritual aesthetic
 *
 * Design philosophy:
 * - Cinematic and introspective
 * - Feminine and elegant
 * - Premium spiritual aesthetic with modern sensibility
 * - Emotional visual composition on right side
 * - Two-column layout (desktop) / stacked (mobile)
 */

export function EmotionalExperience() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].emotionalExperience;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F1E8] via-white to-[#F0E9DC] -z-20" />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 rounded-full filter blur-2xl opacity-20"
          style={{ background: 'radial-gradient(circle, #5B2A86 0%, #7B3FA1 30%, transparent 70%)' }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-32 h-32 rounded-full filter blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #E8B15C 0%, #F59E52 40%, transparent 70%)' }}
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full filter blur-xl opacity-25"
          style={{ background: 'radial-gradient(circle, #C8A2FF 0%, #7B3FA1 50%, transparent 70%)' }}
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={textVariants} className="space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1A2E] leading-tight">
                {content.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#5B2A86] font-light leading-relaxed">
                {content.subtitle}
              </p>
            </div>

            {/* Body Text */}
            <div className="space-y-6">
              {content.bodyText.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Elegant divider */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#E8B15C] to-transparent flex-1" />
              <div className="w-2 h-2 bg-[#E8B15C] rounded-full" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#E8B15C] to-transparent flex-1" />
            </div>
          </motion.div>

          {/* Right Column - Premium Visual Composition */}
          <motion.div variants={visualVariants} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main visual container with soft glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7F1E8] via-white to-[#F0E9DC] rounded-3xl shadow-2xl border border-[#7B3FA1]/20" />

              {/* Floating elements */}
              <div className="relative h-full p-8 flex flex-col justify-center items-center space-y-8">
                {/* Glowing Tarot Cards */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Tarot card stack with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5B2A86] to-[#E8B15C] rounded-xl blur-lg opacity-30 scale-110" />
                    <div className="relative bg-gradient-to-br from-[#F7F1E8] to-[#F0E9DC] rounded-xl p-4 shadow-lg border border-[#7B3FA1]/30">
                      <div className="text-4xl mb-2">🔮</div>
                      <div className="text-xs text-[#5B2A86] font-medium">Tarot</div>
                    </div>
                  </div>
                </motion.div>

                {/* Woman writing in journal */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8A2FF] to-[#7B3FA1] rounded-full blur-xl opacity-25 scale-125" />
                    <div className="relative bg-white rounded-full p-6 shadow-lg border border-[#C8A2FF]/50">
                      <div className="text-4xl">✍️</div>
                    </div>
                  </div>
                </motion.div>

                {/* Warm candlelight */}
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F59E52] to-[#E8B15C] rounded-full blur-lg opacity-40 scale-150" />
                    <div className="relative bg-gradient-to-t from-[#F7F1E8] to-[#F0E9DC] rounded-full p-4 shadow-lg border border-[#E8B15C]/50">
                      <div className="text-3xl">🕯️</div>
                    </div>
                  </div>
                </motion.div>

                {/* Mystical particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-16 right-12 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-20 left-8 w-1.5 h-1.5 bg-[#E8B15C] rounded-full opacity-70"
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 left-16 w-1 h-1 bg-[#C8A2FF] rounded-full opacity-80"
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>

              {/* Subtle corner decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#7B3FA1] rounded-tr-lg opacity-30" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E8B15C] rounded-bl-lg opacity-30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
