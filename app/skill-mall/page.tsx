import SkillMallHero from "./components/skill-mall-hero"
import TopRecommended from "./components/top-recommended"
import LatestReleases from "./components/latest-releases"

export default function SkillMallPage() {
  return (
    <div className="min-h-screen">
      <SkillMallHero />
      <TopRecommended />
      <LatestReleases />
    </div>
  )
}