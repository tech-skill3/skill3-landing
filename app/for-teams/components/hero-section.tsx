"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sparkles,
  Users,
  Bot,
  Zap,
  ArrowRight,
  Clock,
} from "lucide-react"

export default function HeroSection() {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "免费Creator Studio",
      description: "轻松创建定制化AI技能Agent"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "内置Skill Unit",
      description: "快速启动，无需从零开始"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "两周快速上线",
      description: "承诺高效部署"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
              <Users className="w-4 h-4 mr-2" />
              For Teams 企业解决方案
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                AI赋能企业培训，
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                免费Creator Studio助您打造专属技能Agent
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              快速提升团队技能，实现高效质检，构建企业专属知识资产
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                立即预约演示
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all group">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30 blur-2xl"></div>
        <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-2xl"></div>
      </div>
    </section>
  )
}
