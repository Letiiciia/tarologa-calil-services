"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/shared/utils/cn";

/**
 * Button é um ATRACTOR de padrão:
 * - Aceita props (tamanho, variação, classe customizada)
 * - Escolhe entre <Link> ou <button> baseado em `href`
 * - Aplica sempre os mesmos estilos base (borders, transitions)
 * - Variações customizam cores/backgrounds
 *
 * APRENDIZADO: Quando você criar novo componente, pense assim:
 * 1. Quais props são essenciais?
 * 2. Quais têm valores padrão?
 * 3. Posso dividir estilos entre base + variações?
 * 4. Devo usar <button> ou <a> ou <Link>?
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // Se tem href, vira Link
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export function Button({
  href,
  size = "md",
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  // Estilos base = aplicados em TODOS os botões
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Tamanhos: cada tamanho tem padding + fontSize específicos
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  // Variações: cada uma escolhe cor base + hover + focus diferente
  const variantStyles = {
    primary:
      "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-amber-500 border-2 border-amber-500 hover:bg-amber-50 focus:ring-amber-500",
    ghost:
      "bg-transparent text-amber-500 hover:bg-amber-50 focus:ring-amber-500",
  };

  // cn combina classes sem conflito
  const finalClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  // Se tem href, renderiza como Link (melhor pra SEO e navegação)
  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  // Se não, renderiza como <button> normal
  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
