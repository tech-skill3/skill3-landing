"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import TripleIncentiveSystem from "./components/triple-incentive-system"
import CreatorStudioExperience from "./components/creator-studio-experience"
import SuccessStories from "./components/success-stories"
import CreatorFAQ from "./components/creator-faq"

export default function CreatorHubPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TripleIncentiveSystem />
      <CreatorStudioExperience />
      <SuccessStories />
      <CreatorFAQ />
    </main>
  )
}
