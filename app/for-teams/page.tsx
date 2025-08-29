"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import SolutionsSection from "./components/solutions-section"
import EnterprisePackages from "./components/enterprise-packages"
import ContentManagement from "./components/content-management"
import ValueAddedServices from "./components/value-added-services"
import OnboardingProcess from "./components/onboarding-process"
import DemoCTA from "./components/demo-cta"

export default function ForTeamsPage() {
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
      <SolutionsSection />
      <EnterprisePackages />
      <ContentManagement />
      <ValueAddedServices />
      <OnboardingProcess />
      <DemoCTA />
    </motion.div>
  )
}
