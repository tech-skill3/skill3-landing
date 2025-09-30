"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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

export default function TripleIncentiveSystem() {
  const incentives = [
    {
      id: 1,
      title: "60%收入分成",
      subtitle: "Revenue Sharing",
      icon: DollarSign,
      features: [
        {
          icon: Percent,
          title: "领先分成比例",
          description: "行业最高的60%收入分成比例"
        },
        {
          icon: Zap,
          title: "即时到账",
          description: "智能合约自动结算，实时收益"
        }
      ]
    },
    {
      id: 2,
      title: "SP积分奖励",
      subtitle: "Skill Points Rewards",
      icon: Coins,
      features: [
        {
          icon: TrendingUp,
          title: "Create-to-Earn",
          description: "创作即挖矿，持续获得SP积分"
        },
        {
          icon: Gift,
          title: "空投凭证",
          description: "优先获得平台代币空投资格"
        }
      ]
    },
    {
      id: 3,
      title: "NFT资产权益",
      subtitle: "NFT Asset Rights",
      icon: Shield,
      features: [
        {
          icon: Crown,
          title: "Skill Agent",
          description: "AI技能体NFT，永久资产确权"
        },
        {
          icon: Award,
          title: "IP确权",
          description: "区块链技术保护知识产权"
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
            💰 三重激励体系
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            多元激励机制
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            创新的三重激励体系，让创作者获得全方位的价值回报
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
                  {incentive.subtitle}
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