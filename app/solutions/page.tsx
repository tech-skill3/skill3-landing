"use client"

import SolutionsHero from "./components/solutions-hero"
import AiSkillPlatform from "./components/ai-skill-platform"
import OaasEngine from "./components/oaas-engine"
import IndustryScenarios from "./components/industry-scenarios"
import TalentVerification from "./components/talent-verification"

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