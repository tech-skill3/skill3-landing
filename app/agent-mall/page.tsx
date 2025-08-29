"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import TopRecommendations from "./components/top-recommendations"
import SubscriptionSection from "./components/subscription-section"
import RevenueSharingSection from "./components/revenue-sharing"

export default function AgentMallPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div 
      className="flex-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <TopRecommendations />
      <SubscriptionSection />
      <RevenueSharingSection />
    </motion.div>
  )
}
