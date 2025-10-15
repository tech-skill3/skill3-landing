"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Shield, Coins } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()

  const features = [
    { 
      icon: Cpu, 
      label: t.creatorHub.hero.features.aiTeacher.label, 
      description: t.creatorHub.hero.features.aiTeacher.description 
    },
    { 
      icon: Shield, 
      label: t.creatorHub.hero.features.nftRights.label, 
      description: t.creatorHub.hero.features.nftRights.description 
    },
    { 
      icon: Coins, 
      label: t.creatorHub.hero.features.tripleIncentive.label, 
      description: t.creatorHub.hero.features.tripleIncentive.description 
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            {t.creatorHub.hero.badge}
          </Badge>
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.creatorHub.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.creatorHub.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                {t.creatorHub.hero.startCreatingButton}
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                {t.creatorHub.hero.learnMoreButton}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-1">{feature.label}</div>
                <div className="text-sm text-muted-foreground">{feature.description}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
