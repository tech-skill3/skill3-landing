"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import WhyCreator from "./components/why-creator"
import CreatorStudioPro from "./components/creator-studio-pro"
import CreationProcess from "./components/creation-process"
import RevenueExplanation from "./components/revenue-explanation"
import FAQ from "./components/faq"
import FeaturedCreators from "./components/featured-creators"
import CreatorApplication from "./components/creator-application"

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
      <WhyCreator />
      <CreatorStudioPro />
      <CreationProcess />
      <RevenueExplanation />
      <FAQ />
      <FeaturedCreators />
      <CreatorApplication />
    </motion.div>
  )
}
