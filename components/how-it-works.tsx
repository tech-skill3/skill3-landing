"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react"


export default function HowItWorks() {
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

  const steps = [
    {
      step: "01",
      title: "选择您的技能",
      description: "Browse our skill marketplace and select a 'Skill Agent' crafted by industry experts.",
      icon: <BookOpen className="size-6" />,
      chinese: "浏览我们的技能市场，选择一个由行业专家打造的'技能体'",
    },
    {
      step: "02",
      title: "与 AI 共同学习",
      description: "Interact with your dedicated AI tutor to complete real projects and truly master skills.",
      icon: <Users className="size-6" />,
      chinese: "与您的专属 AI 导师互动，完成真实项目，真正掌握技能",
    },
    {
      step: "03",
      title: "证明您的成果",
      description: "Earn your NFT certificates and $SKILL rewards on the blockchain, building your digital career portfolio.",
      icon: <Trophy className="size-6" />,
      chinese: "获得您在区块链上的'成果NFT'和 $SKILL 奖励，构建您的数字化职业档案",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">平台运作模式</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            一个简洁明了、视觉化的三步流程，旨在快速解释平台的核心循环，降低新用户的理解门槛。
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 relative"
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              {/* Step number and icon */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <p className="text-sm text-muted-foreground/80 italic">{step.chinese}</p>
              </div>

              {/* Arrow for non-last items */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="size-6 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">准备开始您的技能学习之旅？</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white font-medium flex items-center justify-center gap-2">
                立即开始学习
                <ArrowRight className="size-4" />
              </button>
              <button className="rounded-full h-12 px-8 text-base border-2 border-blue-200 hover:bg-blue-50 text-blue-600 font-medium">
                了解更多
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
