/**
 * TIPOS COMUNS do projeto
 *
 * Por que centralizar types?
 * 📌 Single source of truth: Muda uma vez, funciona em tudo
 * 📌 Documentação implícita: Tipo diz exatamente o que é esperado
 * 📌 Evita duplicação: Não copia tipos espalhados em 10 arquivos
 *
 * APRENDIZADO: Em Java você teria interfaces. Aqui é a mesma coisa,
 * mas com type ou interface do TypeScript.
 */

export type Language = "pt" | "en" | "es";

/**
 * Estrutura multilíngue = qualquer coisa que tem conteúdo em múltiplos idiomas
 * Exemplo de uso:
 * const content: Bilingual<{ title: string; description: string }> = {
 *   pt: { title: "Olá", description: "..." },
 *   en: { title: "Hello", description: "..." },
 *   es: { title: "Hola", description: "..." }
 * }
 */
export type Bilingual<T> = Record<Language, T>;

/**
 * Benefício = Card que mostra um benefício
 * Usado na seção "Para quem busca..."
 */
export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

/**
 * Credencial = Um item da lista de credibilidades
 */
export interface Credential {
  id?: string;
  text: string;
  icon?: string; // ✓, 🎓, etc
}

/**
 * CTAButton = Botão de chamada para ação
 * CTA = "Call To Action"
 */
export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
}
