"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en" | "es";

interface LanguageContextType {
  lang: Language;
  mounted: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      setLang(saved);
    } else {
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

  return (
    <LanguageContext.Provider
      value={{ lang, mounted, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
