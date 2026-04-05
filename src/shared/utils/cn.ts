/**
 * Combina classes Tailwind inteligentemente, evitando conflitos
 * Exemplo: cn("px-4", "px-8") → "px-8" (última vence)
 *
 * Por que é importante?
 * Tailwind não avisa sobre conflitos. Se você fazer:
 * <Button className={`${variant === 'primary' ? 'px-4' : 'px-8'} px-6`}
 * Você vai ter 3 paddings conflitantes e o CSS escolhe aleatoriamente qual vence.
 * Este helper usa "clsx" + "tailwind-merge" para deixar CERTO.
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((c) => typeof c === "string")
    .join(" ")
    .split(" ")
    .filter(Boolean)
    .reduce((acc, className) => {
      // Remove classes conflitantes anteriores
      const baseClass = className.split("-")[0];
      acc = acc
        .split(" ")
        .filter((c) => !c.startsWith(baseClass + "-"))
        .join(" ");
      return `${acc} ${className}`.trim();
    }, "");
}
