import type { Language } from "@/shared/types/common";

export const WHATSAPP_PHONE = "34639664590";

/**
 * All tracked WhatsApp sources.
 * Each source maps to a pre-filled message per language.
 */
export type WhatsAppSource =
  | "hero"
  | "method"
  | "cta"
  | "footer"
  | "carta_do_dia";

type MessageMap = Record<WhatsAppSource, Record<Language, string>>;

export const WHATSAPP_MESSAGES: MessageMap = {
  hero: {
    pt: "Vim pela Landing Page - Hero",
    en: "I came from the Landing Page - Hero",
    es: "Vine desde la Landing Page - Hero",
  },
  method: {
    pt: "Quero conhecer o Método RESET",
    en: "I want to learn about the RESET Method",
    es: "Quiero conocer el Método RESET",
  },
  cta: {
    pt: "Quero agendar minha sessão diagnóstica",
    en: "I want to book my diagnostic session",
    es: "Quiero agendar mi sesión de diagnóstico",
  },
  footer: {
    pt: "Quero agendar minha sessão diagnóstica",
    en: "I want to book my diagnostic session",
    es: "Quiero agendar mi sesión de diagnóstico",
  },
  carta_do_dia: {
    pt: "Vim pelo site e quero iniciar minha jornada. Gostaria de adquirir uma sessão com você!",
    en: "I came from your website and I'd like to book a session with you!",
    es: "¡Vine desde tu sitio web y me gustaría adquirir una sesión contigo!",
  },
};

/**
 * Build a wa.me URL with a pre-filled message for the given source and language.
 */
export function buildWhatsAppUrl(
  source: WhatsAppSource,
  lang: Language,
  phoneNumber: string = WHATSAPP_PHONE,
): string {
  const message = WHATSAPP_MESSAGES[source][lang];
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
