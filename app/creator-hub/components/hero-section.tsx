"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Palette,
  ArrowRight,
} from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-24 overflow-hidden bg-white dark:bg-black relative">
      <div className="container px-4 md:px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
              <Palette className="w-4 h-4 mr-2" />
              Creator Hub 创作者中心
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                免费创作AI技能，
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                获取Web3收益
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              将你的专业知识转化为AI技能代理，获得持续收益。
              <span className="text-purple-600 font-semibold">零门槛创作，公平分成</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                申请成为创作者
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base border-2 border-purple-200 hover:bg-purple-50"
              >
                <Palette className="w-5 h-5 mr-2" />
                了解Creator Studio
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-muted-foreground">活跃创作者</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-muted-foreground">月均收益</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">1000+</div>
                <div className="text-sm text-muted-foreground">优质作品</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-2xl"></div>
        <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-400/30 blur-2xl"></div>
      </div>
    </section>
  )
}
