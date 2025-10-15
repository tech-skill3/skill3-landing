"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AiChallenges() {
  const { t } = useLanguage()
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const challenges = [
    {
      title: t.aiChallenges.challenges.challenge1.title,
      subtitle: t.aiChallenges.challenges.challenge1.subtitle,
      description: t.aiChallenges.challenges.challenge1.description,
      icon: <TrendingUp className="size-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: t.aiChallenges.challenges.challenge2.title,
      subtitle: t.aiChallenges.challenges.challenge2.subtitle,
      description: t.aiChallenges.challenges.challenge2.description,
      icon: <AlertTriangle className="size-8" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: t.aiChallenges.challenges.challenge3.title,
      subtitle: t.aiChallenges.challenges.challenge3.subtitle,
      description: t.aiChallenges.challenges.challenge3.description,
      icon: <Shield className="size-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.aiChallenges.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.aiChallenges.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {challenges.map((challenge, index) => (
            <motion.div key={index} variants={item}>
              <Card className="relative h-full border-0 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${challenge.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground mb-2 font-medium">
                    {challenge.subtitle}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}