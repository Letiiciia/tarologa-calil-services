import {
  Hero,
  BenefitsFlow,
  MethodSection,
  CredibilitySection,
  TransformationSection,
  CTASection,
} from "@/features/landing";

/**
 * HOME PAGE
 *
 * Estrutura da landing page:
 * 1. Hero = primeira impressão (3-5 segundos para engajar)
 * 2. BenefitsFlow = "para quem busca" (instala que é pra você)
 * 3. CredibilitySection = "quem é Carol" (build trust)
 * 4. CTASection = conversão (WhatsApp + redes sociais)
 *
 * FLUXO PSICOLÓGICO:
 * Visitante entra → Se reconhece nos benefícios → Confia em Carol → Clica
 *
 * APRENDIZADO: Cada componente é independente e reutilizável.
 * Se Nova feature precisa de Hero similar, copia e adapta.
 * Mas mantém estrutura: componente + content + types
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BenefitsFlow />
      <MethodSection />
      <CredibilitySection />
      <TransformationSection />
      <CTASection />
    </main>
  );
}
