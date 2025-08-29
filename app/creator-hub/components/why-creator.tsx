"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Shield,
  BarChart3,
  Bot,
  TrendingUp,
  Lock
} from "lucide-react"

export default function WhyCreator() {
  const reasons = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "知识变现",
      description: "将专业技能转化为可持续收益，让知识真正为你创造价值",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IP保护与所有权",
      description: "内容完全由你控制，区块链确权保护你的知识产权",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "透明激励",
      description: "实时查看收益，公平的分成机制，让每一份贡献都有回报",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI工具辅助",
      description: "免费的Creator Studio Pro创作工具，让创作变得简单高效",
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/20"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 border-green-200">
            <TrendingUp className="w-4 h-4 mr-2" />
            为什么成为创作者
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            你的专业知识，价值百万
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            在AI时代，专业知识是最宝贵的资产。通过我们的平台，
            将你的专业技能转化为AI技能代理，获得持续的收益回报。
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full group">
                <CardContent className="p-0">
                  <div className={`w-14 h-14 rounded-xl ${reason.bgColor} ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">更多福利</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">内容永久保存</h4>
                <p className="text-sm text-muted-foreground">你的作品永久保存在区块链上</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">收益不断增长</h4>
                <p className="text-sm text-muted-foreground">随着平台发展，你的收益也会增长</p>
              </div>
              <div className="text-center">
                <Bot className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">技术支持</h4>
                <p className="text-sm text-muted-foreground">专业的创作工具和技术指导</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
