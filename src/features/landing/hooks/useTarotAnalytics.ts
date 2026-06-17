"use client";

import { useRef, useCallback } from "react";
import { trackEvent, trackClarity } from "@/shared/utils/analytics";
import type { Card } from "../../../../content/cards";

/** Generate a lightweight session ID scoped to the browser tab. */
function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  const key = "__tarot_session__";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem(key, id);
  }
  return id;
}

interface TarotEventParams {
  card_id?: string;
  card_name?: string;
  session_id: string;
  timestamp: string;
}

function buildParams(card?: Card): TarotEventParams {
  return {
    ...(card && { card_id: card.id, card_name: card.name.pt }),
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
  };
}

function send(eventName: string, card?: Card): void {
  const params = buildParams(card);

  // Google Analytics 4
  trackEvent(eventName, params);

  // Microsoft Clarity — send event name + card id as value
  trackClarity(eventName, card?.id);
}

/**
 * useTarotAnalytics
 *
 * Tracks the full Carta do Dia funnel:
 *   card_draw_started → card_draw_completed → card_selected → card_cta_clicked
 *
 * Usage:
 *   const { onDrawStarted, onDrawCompleted, onCardSelected, onCtaClicked } = useTarotAnalytics();
 */
export function useTarotAnalytics() {
  // Prevent duplicate events if called multiple times per phase
  const sentDrawStarted = useRef(false);
  const sentDrawCompleted = useRef(false);

  const onDrawStarted = useCallback(() => {
    if (sentDrawStarted.current) return;
    sentDrawStarted.current = true;
    // Reset completion flag so a re-shuffle tracks again
    sentDrawCompleted.current = false;
    send("card_draw_started");
  }, []);

  const onDrawCompleted = useCallback(() => {
    if (sentDrawCompleted.current) return;
    sentDrawCompleted.current = true;
    // Reset for next draw cycle
    sentDrawStarted.current = false;
    send("card_draw_completed");
  }, []);

  const onCardSelected = useCallback((card: Card) => {
    send("card_selected", card);
    // Also fire a specific card-level event, e.g. "card_the_fool"
    const cardSlug = `card_${card.id.toLowerCase().replace(/[\s-]+/g, "_")}`;
    send(cardSlug, card);
  }, []);

  const onCtaClicked = useCallback((card: Card) => {
    send("card_cta_clicked", card);
  }, []);

  return { onDrawStarted, onDrawCompleted, onCardSelected, onCtaClicked };
}
