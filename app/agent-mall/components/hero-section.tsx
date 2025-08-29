"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Bot,} from "lucide-react"

export default function HeroSection() {


  return (
    <section className="w-full py-20 md:py-32 lg:py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-700 border-indigo-200">
              <Bot className="w-4 h-4 mr-2" />
              AI 技能代理市场
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                发现你的专属
              </span>
              <br />
              AI Skill Agent
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              汇聚全球顶级AI技能代理，为您的工作和学习提供
              <span className="text-indigo-600 font-semibold">个性化智能助手</span>
            </p>
          </motion.div>

        </div>

        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-2xl"></div>
        <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-2xl"></div>
      </div>
    </section>
  )
}
