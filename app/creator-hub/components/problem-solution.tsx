"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Globe,
  DollarSign,
  Users,
  Shield,
  Coins,
  Bot,
  Zap,
  TrendingUp,
  Lock,
  Sparkles,
} from "lucide-react"

export default function ProblemSolution() {
  const problems = [
    {
      icon: Globe,
      title: "知识被\"公地化\"",
      description: "专业知识容易被复制传播，难以保护知识产权",
      impact: "价值流失"
    },
    {
      icon: DollarSign,
      title: "变现单一低效",
      description: "依赖传统培训模式，收入渠道有限且不稳定",
      impact: "收益微薄"
    },
    {
      icon: Users,
      title: "交付门槛高",
      description: "需要大量时间精力进行一对一或小班教学",
      impact: "扩展困难"
    }
  ]

  const solutions = [
    {
      icon: Shield,
      title: "Web3 NFT确权保护",
      description: "区块链技术确保知识产权，AI技能体NFT永久确权",
      benefit: "资产保护",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "多元激励 (60%+SP+NFT)",
      description: "收入分成+积分奖励+NFT权益，三重激励机制",
      benefit: "收益倍增",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Bot,
      title: "零代码AI工具",
      description: "AI智课师自动化教学，无需编程即可创建智能课程",
      benefit: "轻松扩展",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const solutionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
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
            🧠 痛点与解决方案
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            专家痛点 → AI智课师解决方案
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            传统专家面临的挑战，AI智课师一站式解决
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* 专家痛点 */}
          <motion.div variants={containerVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">
                <AlertTriangle className="w-8 h-8 mr-3 text-destructive" />
                专家痛点
              </h3>
              <p className="text-lg text-muted-foreground">
                传统专家在知识变现过程中面临的核心挑战
              </p>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">
                          {problem.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* AI智课师解决方案 */}
          <motion.div variants={containerVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-8 h-8 mr-3 text-primary" />
                AI智课师解决方案
              </h3>
              <p className="text-lg text-muted-foreground">
                革命性的AI技术，重新定义专家知识变现
              </p>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <motion.div
                    key={index}
                    variants={solutionVariants}
                    className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {solution.description}
                        </p>
                        
                        {/* Benefit Badge */}
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {solution.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                告别传统痛点，拥抱 AI 创作新时代
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                加入 AI智课师平台，让您的专业知识转化为持续的被动收入，享受 Web3 创作经济的无限可能
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Lock className="w-4 h-4 text-blue-500" />
                  <span>NFT 确权保护</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>多元激励机制</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Bot className="w-4 h-4 text-purple-500" />
                  <span>零代码 AI 工具</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                立即体验 AI智课师
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}