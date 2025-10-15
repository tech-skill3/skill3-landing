"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Coins,
  Shield,
  TrendingUp,
  Zap,
  Award,
  Percent,
  Gift,
  Crown,
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TripleIncentiveSystem() {
  const { t } = useLanguage()

  const incentives = [
    {
      id: 1,
      ...t.creatorHub.tripleIncentive.incentives.financial,
      icon: DollarSign,
      features: [
        {
          icon: Percent,
          title: t.creatorHub.tripleIncentive.incentives.financial.features.leadingShare.title,
          description: t.creatorHub.tripleIncentive.incentives.financial.features.leadingShare.description
        },
        {
          icon: Zap,
          title: t.creatorHub.tripleIncentive.incentives.financial.features.instantSettlement.title,
          description: t.creatorHub.tripleIncentive.incentives.financial.features.instantSettlement.description
        }
      ]
    },
    {
      id: 2,
      ...t.creatorHub.tripleIncentive.incentives.reputation,
      icon: Coins,
      features: [
        {
          icon: TrendingUp,
          title: t.creatorHub.tripleIncentive.incentives.reputation.features.createToEarn.title,
          description: t.creatorHub.tripleIncentive.incentives.reputation.features.createToEarn.description
        },
        {
          icon: Gift,
          title: t.creatorHub.tripleIncentive.incentives.reputation.features.airdropEligibility.title,
          description: t.creatorHub.tripleIncentive.incentives.reputation.features.airdropEligibility.description
        }
      ]
    },
    {
      id: 3,
      ...t.creatorHub.tripleIncentive.incentives.growth,
      icon: Shield,
      features: [
        {
          icon: Crown,
          title: t.creatorHub.tripleIncentive.incentives.growth.features.skillAgent.title,
          description: t.creatorHub.tripleIncentive.incentives.growth.features.skillAgent.description
        },
        {
          icon: Award,
          title: t.creatorHub.tripleIncentive.incentives.growth.features.ipProtection.title,
          description: t.creatorHub.tripleIncentive.incentives.growth.features.ipProtection.description
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            {t.creatorHub.tripleIncentive.badge}
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.creatorHub.tripleIncentive.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.creatorHub.tripleIncentive.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {incentives.map((incentive) => (
            <motion.div
              key={incentive.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <incentive.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">
                  {incentive.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {incentive.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4">
                  {incentive.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-muted-foreground mt-0.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}