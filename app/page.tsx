import {
  Hero,
  JourneyFor,
  CredibilitySection,
  CartaDoDia,
  CTASection,
} from "@/features/landing";

/**
 * HOME PAGE
 *
 * Estrutura da landing page:
 * 1. Hero = primeira impressão (3-5 segundos para engajar)
 * 2. EmotionalExperience = ponte emocional premium (cinematic bridge)
 * 3. JourneyFor = conexão emocional profunda (deepen identification)
 * 4. BenefitsFlow = "para quem busca" (instala que é pra você)
 * 5. CredibilitySection = "quem é Carol" (build trust)
 * 6. CTASection = conversão (WhatsApp + redes sociais)
 *
 * FLUXO PSICOLÓGICO:
 * Visitante entra → Se reconhece emocionalmente → Vê benefícios → Confia em Carol → Clica
 *
 * APRENDIZADO: Cada componente é independente e reutilizável.
 * Se Nova feature precisa de Hero similar, copia e adapta.
 * Mas mantém estrutura: componente + content + types
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <JourneyFor />
      <CredibilitySection />
      <CartaDoDia />
      <CTASection />
    </main>
  );
}
