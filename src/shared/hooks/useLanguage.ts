"use client";

import { useState, useEffect } from "react";

/**
 * Hook de Linguagem = padrão de estado compartilhado
 *
 * CONCEITO:
 * - Estado vive aqui, não no componente
 * - Componentes que usam este hook SEMPRE veem o mesmo `lang`
 * - Quando um componente muda `lang`, todos os outros são notificados automaticamente
 *
 * FLUXO:
 * 1. User chega → detecta idioma (localStorage ou browser)
 * 2. User clica "EN" → setLang("en") → localStorage atualiza
 * 3. Próxima visita → localStorage lembra do idioma
 *
 * APRENDIZADO: Hooks são como "injeção de dependência" do React
 * Em vez de passar props para baixo (prop drilling), você compartilha via hook.
 */

type Language = "pt" | "en" | "es";

export function useLanguage() {
  const [lang, setLang] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  // useEffect roda DEPOIS que componente renderiza
  // Importante para evitar hydration mismatch (erro de SSR)
  useEffect(() => {
    setMounted(true);

    // Tenta recuperar idioma salvo
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      setLang(saved);
    } else {
      // Se não tem salvo, detecta pelo navegador
      const browserLang = navigator.language.startsWith("pt")
        ? "pt"
        : navigator.language.startsWith("es")
        ? "es"
        : "en";
      setLang(browserLang);
      localStorage.setItem("language", browserLang);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setLang(language);
    localStorage.setItem("language", language);
  };

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : lang === "en" ? "es" : "pt";
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  return {
    lang,
    setLanguage,
    toggleLanguage,
    mounted, // ⚠️ Importante: não renderiza até estar pronto (evita flickering)
  };
}
