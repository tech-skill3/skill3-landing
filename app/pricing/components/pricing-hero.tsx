"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function PricingHero() {
  const { t } = useLanguage()

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {t.pricing.hero.title}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {t.pricing.hero.subtitle}
      </p>
    </div>
  )
}