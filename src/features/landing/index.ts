/**
 * Índice de exportação da feature landing
 *
 * Benefício: Em vez de fazer N imports, você faz um:
 * ❌ import { Hero } from "@/features/landing/components/Hero"
 * ❌ import { BenefitsFlow } from "@/features/landing/components/BenefitsFlow"
 *
 * ✅ import { Hero, BenefitsFlow, CredibilitySection, CTASection } from "@/features/landing"
 */

export { Hero } from "./components/Hero";
export { BenefitsFlow } from "./components/BenefitsFlow";
export { MethodSection } from "./components/MethodSection";
export { CredibilitySection } from "./components/CredibilitySection";
export { TransformationSection } from "./components/TransformationSection";
export { CTASection } from "./components/CTASection";
export { landingContent } from "./content";
export type { HeroSection, BenefitsSection, BenefitItem } from "./types";
