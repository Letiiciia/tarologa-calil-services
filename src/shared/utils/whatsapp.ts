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
    pt: "Olá Carol! Me identifiquei com sua mensagem e quero iniciar minha jornada com você.",
    en: "Hi Carol! I connected with your message and I want to start my journey with you.",
    es: "¡Hola Carol! Me identifiqué con tu mensaje y quiero comenzar mi camino contigo.",
  },
  method: {
    pt: "Quero conhecer o Método RESET",
    en: "I want to learn about the RESET Method",
    es: "Quiero conocer el Método RESET",
  },
  cta: {
    pt: "Olá Carol! Quero saber mais sobre suas sessões e como funciona o atendimento.",
    en: "Hi Carol! I want to know more about your sessions and how your service works.",
    es: "¡Hola Carol! Quiero saber más sobre tus sesiones y cómo funciona la atención.",
  },
  footer: {
    pt: "Olá Carol! Quero agendar minha sessão diagnóstica com você.",
    en: "Hi Carol! I want to book my diagnostic session with you.",
    es: "¡Hola Carol! Quiero agendar mi sesión de diagnóstico contigo.",
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
