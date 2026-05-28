"use client";

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

  if (!mounted) return null;

  const content = landingContent[lang].journeyFor;

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="jornada" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Soft warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F1E8] via-white to-[#F0E9DC] -z-20" />

      {/* Subtle floating particles background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full filter blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #E8B15C 0%, #F59E52 30%, transparent 70%)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full filter blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #7B3FA1 0%, #5B2A86 40%, transparent 70%)' }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full filter blur-3xl opacity-5 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, #C8A2FF 0%, #A03C78 20%, transparent 60%)' }}
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
          <motion.div variants={itemVariants} className="flex justify-center pt-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#E8B15C] to-transparent rounded-full" />
          </motion.div>

          {/* Emotional Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-8 auto-rows-fr"
          >
            {content.cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-full flex flex-col"
              >
                {/* Card container */}
                <div className="relative flex flex-col h-full p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#7B3FA1]/20 shadow-lg hover:shadow-[0_0_30px_rgba(200,162,255,0.6)] transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8A2FF]/30 to-[#7B3FA1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />

                  {/* Icon with soft glow */}
                  <div className="mb-4 inline-block">
                    <div className="relative">
                      {/* Glow background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#5B2A86] to-[#E8B15C] rounded-xl opacity-20 blur-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Icon */}
                      <div className="relative text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1B1A2E] mb-3 group-hover:text-[#5B2A86] transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-cinzel text-sm sm:text-base text-[#4B5563] leading-relaxed group-hover:text-[#1B1A2E] transition-colors font-light flex-grow">
                    {card.description}
                  </p>

                  {/* Subtle bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#E8B15C] to-[#F59E52] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing message - optional */}
          {content.closingLine && (
            <motion.div variants={itemVariants} className="text-center pt-4 sm:pt-8">
              <p className="text-gray-600 text-base sm:text-lg italic">
                {content.closingLine}
              </p>
            </motion.div>
          )}

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a
              href="https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5B2A86] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:bg-[#7B3FA1] transition-colors"
            >
              Quero começar minha jornada →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
