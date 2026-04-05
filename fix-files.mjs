import { writeFileSync } from 'fs';

const cartaDoDiaContent = `use client`;

import { useState } from "react";

export default function CartaDoDiaPage() {
  const [language] = useState<"pt" | "en">("pt");

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎴 Carta do Dia</h1>
        <p className="text-gray-600">
          {language === "pt"
            ? "Esta feature está em desenvolvimento..."
            : "This feature is under development..."}
        </p>
      </div>
    </main>
  );
}`;

const homeContent = `import {
  Hero,
  BenefitsFlow,
  CredibilitySection,
  CTASection,
} from "@/features/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BenefitsFlow />
      <CredibilitySection />
      <CTASection />
    </main>
  );
}`;

writeFileSync('app/carta-do-dia/page.tsx', cartaDoDiaContent, { encoding: 'utf8', flag: 'w' });
writeFileSync('app/page.tsx', homeContent, { encoding: 'utf8', flag: 'w' });

console.log('✅ Arquivos atualizados com sucesso');
