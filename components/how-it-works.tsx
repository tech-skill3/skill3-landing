"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, Shield, Coins, ArrowRight } from "lucide-react"


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
      title: "创建/学习",
      description: "Create or learn skills through our AI-powered platform",
      icon: <BookOpen className="size-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "02", 
      title: "AI模拟实战",
      description: "Practice with AI simulation in real-world scenarios",
      icon: <Brain className="size-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "协议验证",
      description: "Validate your skills through our protocol system",
      icon: <Shield className="size-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "资产铸造",
      description: "Mint your skill achievements as digital assets",
      icon: <Coins className="size-6" />,
      gradient: "from-orange-500 to-red-500",
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
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            SKILL³ 如何运作
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI驱动技能验证，Web3确保所有权
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 md:gap-6 relative"
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              {/* Step box */}
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border-2 border-border/20 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group w-full">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Arrow for non-last items */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="size-6 text-primary" />
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
