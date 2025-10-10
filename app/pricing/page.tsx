import { Metadata } from "next"
import EnterprisePricing from "./components/enterprise-pricing"
import ValuePricing from "./components/value-pricing"
import LearnerPricing from "./components/learner-pricing"
import CreatorPricing from "./components/creator-pricing"

export const metadata: Metadata = {
  title: "Skill3",
  description: "Comprehensive pricing for enterprises, learners, and creators in the Skill3 ecosystem.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skill3 生态定价体系
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为企业、学习者和创作者提供灵活的定价方案，满足不同角色的需求
          </p>
        </div>
        
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
