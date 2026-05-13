/**
 * Tipos específicos da feature "landing"
 *
 * Por que ter types em cada feature?
 * - Cada feature tem seus próprios tipos
 * - Mantém isolado = agendamento não precisa saber dos tipos da landing
 * - Escala melhor = novo desenvolvedor entende rápido
 *
 * Tipos compartilhados ficam em src/shared/types
 */

export interface HeroSection {
  headline: string;
  subheadline: string;
  cta: string;
  images: {
    main: string;
    alt: string;
  };
}

export interface EmotionalExperienceSection {
  title: string;
  subtitle: string;
  bodyText: string[];
}

export interface JourneyForSection {
  badge: string;
  title: string;
  bodyText: string[];
  cards: {
    icon: string;
    title: string;
    description: string;
  }[];
  closingLine?: string;
}

export interface BenefitsSection {
  title: string;
  items: BenefitItem[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}
