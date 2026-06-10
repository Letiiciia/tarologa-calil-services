export type HeroLocalizedLabelKey = "method" | "personalized";

export const getLocalizedLabel = (
  lang: "pt" | "en" | "es",
  key: HeroLocalizedLabelKey
) => {
  switch (key) {
    case "method":
      return lang === "pt"
        ? "Método próprio"
        : lang === "es"
        ? "Método propio"
        : "Personal method";
    case "personalized":
      return lang === "pt"
        ? "100% personalizado"
        : lang === "es"
        ? "100% personalizado"
        : "100% personalized";
    default:
      return "";
  }
};
