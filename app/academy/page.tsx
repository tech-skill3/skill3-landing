"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/hero-section"
import PlatformIntro from "./components/platform-intro"
import AiCoach from "./components/ai-coach"
import SkillAgent from "./components/skill-agent"
import QualityAssurance from "./components/quality-assurance"
import ExamSystem from "./components/exam-system"
import OnlineIde from "./components/online-ide"
import SbtCertificate from "./components/sbt-certificate"

export default function AcademyPage() {
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
      <PlatformIntro />
      <AiCoach />
      <SkillAgent />
      <QualityAssurance />
      <ExamSystem />
      <OnlineIde />
      <SbtCertificate />
    </motion.div>
  )
}
