/**
 * Google Analytics 4 — Analytics Module
 *
 * Usage:
 *   import { trackEvent } from "@/shared/utils/analytics";
 *   trackEvent("whatsapp_click", { location: "hero" });
 */

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-8LLMFKK282";

/**
 * Send a page_view hit to GA4.
 * Called automatically by the GoogleAnalytics component on route changes.
 */
export function trackPageView(url: string): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

/**
 * Send a custom event to GA4.
 *
 * @param eventName  - GA4 event name (snake_case recommended)
 * @param parameters - Optional key/value pairs sent as event parameters
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }
  window.gtag("event", eventName, parameters);
}

// ─── Typed helpers for the events used in this project ────────────────────────

export function trackWhatsappClick(location?: string): void {
  trackEvent("whatsapp_click", { location });
}

export function trackInstagramClick(location?: string): void {
  trackEvent("instagram_click", { location });
}

export function trackTarotCardClick(cardName?: string): void {
  trackEvent("tarot_card_click", { card_name: cardName });
}

export function trackStartJourneyClick(location?: string): void {
  trackEvent("start_journey_click", { location });
}
