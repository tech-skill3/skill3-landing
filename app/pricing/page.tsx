"use client"

import { motion } from "framer-motion"
import SkillPassPlans from "./components/skill-pass-plans"
import AddonsSection from "./components/addons-section"
import CreatorStudioNote from "./components/creator-studio-note"
import ContactSales from "./components/contact-sales"

export default function PricingPage() {
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
      <SkillPassPlans />
      <AddonsSection />
      <CreatorStudioNote />
      <ContactSales />
    </motion.div>
  )
}
