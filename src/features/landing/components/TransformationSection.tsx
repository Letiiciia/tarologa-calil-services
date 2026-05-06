"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import { landingContent } from "../content";

export function TransformationSection() {
  const { lang, mounted } = useLanguage();

  if (!mounted) return null;

  const content = landingContent[lang].transformation;

  return (
    <section className="py-20 sm:py-28 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
              {content.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              {content.text}
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {content.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 font-semibold shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
