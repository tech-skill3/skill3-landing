import { Metadata } from "next"
import { getTranslations } from "@/lib/translations"
import EnterprisePricing from "./components/enterprise-pricing"
import ValuePricing from "./components/value-pricing"
import LearnerPricing from "./components/learner-pricing"
import CreatorPricing from "./components/creator-pricing"
import PricingHero from "./components/pricing-hero"
import AddonsSection from "./components/addons-section"

export function generateMetadata(): Metadata {
  const t = getTranslations('zh')
  
  return {
    title: t.pricing.metadata.title,
    description: t.pricing.metadata.description,
  }
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <PricingHero />
        
        {/* 企业服务定价 */}
        <EnterprisePricing />
        
        {/* 价值定价说明 */}
        <ValuePricing />
        
        {/* 学习者定价 */}
        <LearnerPricing />
        
        {/* 创作者定价 */}
        <CreatorPricing />
      </div>
    </div>
  )
}
