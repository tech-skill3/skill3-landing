"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, BookOpen, Brain, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
                <BookOpen className="w-4 h-4 mr-2" />
                智能学习平台
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  AI驱动的
                </span>
                <br />
                技能成长学院
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                通过个性化AI陪练、智能技能代理和区块链认证，
                <span className="text-blue-600 font-semibold">重新定义职业技能学习体验</span>
              </p>
            </div>

            {/* Key Features Icons */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-600" />
                </div>
                AI个性化学习
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                实时技能评估
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-green-600" />
                </div>
                区块链认证
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                立即开始学习
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-8 text-base border-2 border-blue-200 hover:bg-blue-50"
              >
                <Play className="mr-2 h-5 w-5" />
                探索Skill Agent
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-muted-foreground">活跃学习者</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-muted-foreground">专业技能</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-muted-foreground">完成率</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-br from-background to-muted/20">
                {/* Demo Screenshot/Illustration Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">智能学习界面</h3>
                    <p className="text-sm text-gray-600">个性化课程推荐 · AI实时指导 · 进度跟踪</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-green-400 flex items-center justify-center shadow-lg">
                  <span className="text-xl">✨</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
