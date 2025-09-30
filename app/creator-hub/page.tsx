"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import TripleIncentiveSystem from "./components/triple-incentive-system"
import ProblemSolution from "./components/problem-solution"

export default function CreatorHubPage() {
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
      <TripleIncentiveSystem />
      <ProblemSolution />
    </motion.div>
  )
}
