"use client"

import SolutionsHero from "@/components/solutions/solutions-hero"
import AiSkillPlatform from "@/components/solutions/ai-skill-platform"
import OaasEngine from "@/components/solutions/oaas-engine"
import IndustryScenarios from "@/components/solutions/industry-scenarios"
import TalentVerification from "@/components/solutions/talent-verification"

export default function SolutionsPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <SolutionsHero />
      
      {/* AI技能训战平台 */}
      <AiSkillPlatform />
      
      {/* 成果证明引擎(OaaS) */}
      <OaasEngine />
      
      {/* 行业应用场景 */}
      <IndustryScenarios />
      
      {/* 验证人才库 */}
      <TalentVerification />

    </div>
  )
}