"use client";

import { trackEvent, trackClarity } from "@/shared/utils/analytics";
import { buildWhatsAppUrl, WHATSAPP_PHONE } from "@/shared/utils/whatsapp";
import type { WhatsAppSource } from "@/shared/utils/whatsapp";
import type { Language } from "@/shared/types/common";
import { cn } from "@/shared/utils/cn";

interface WhatsAppButtonProps {
  /** WhatsApp source — determines the pre-filled message */
  source: WhatsAppSource;
  /** Current language for the pre-filled message */
  lang: Language;
  /** Button label shown to the user */
  label: string;
  /** Override the default phone number */
  phoneNumber?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}

const sizeStyles: Record<NonNullable<WhatsAppButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

const variantStyles: Record<
  NonNullable<WhatsAppButtonProps["variant"]>,
  string
> = {
  primary:
    "bg-gradient-to-r from-[#E8B15C] to-[#F59E52] text-[#1B1A2E] hover:from-[#F0C074] hover:to-[#F7A866] shadow-lg hover:shadow-xl",
  secondary:
    "bg-transparent text-[#5B2A86] border-2 border-[#7B3FA1] hover:bg-[#7B3FA1]/10",
  ghost: "bg-transparent text-[#5B2A86] hover:bg-[#C8A2FF]/20",
};

/**
 * WhatsAppButton
 *
 * Opens WhatsApp with a source-specific pre-filled message and
 * fires both Google Analytics and Microsoft Clarity events on click.
 *
 * Usage:
 *   <WhatsAppButton source="hero" lang={lang} label="Falar com Carol" />
 */
export function WhatsAppButton({
  source,
  lang,
  label,
  phoneNumber = WHATSAPP_PHONE,
  className,
  size = "md",
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(source, lang, phoneNumber);

  const handleClick = () => {
    // Google Analytics 4
    trackEvent("whatsapp_click", { source, lang });

    // Microsoft Clarity
    trackClarity("whatsapp_click", source);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8B15C]",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {label}
      <span className="ml-2">💬</span>
    </a>
  );
}
