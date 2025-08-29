"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Palette,
  CheckCircle,
  Zap,
  Heart,
  ArrowRight,
  Gift
} from "lucide-react"

export default function CreatorStudioNote() {
  const freeFeatures = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: "完整的创作工具",
      description: "AI辅助生成、可视化编辑、内容管理等全部功能"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "无限使用次数",
      description: "不限制创作次数和作品数量"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "专业技术支持",
      description: "专属客服和技术指导服务"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "版本更新",
      description: "持续的功能优化和新特性"
    }
  ]

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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <Gift className="w-4 h-4 mr-2" />
            Creator Studio Pro
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            对创作者永久免费
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们坚定地相信，优秀的创作工具应该让每一位创作者都能轻松获得。
            <span className="text-blue-600 font-semibold">Creator Studio Pro对所有认证创作者永久免费</span>
          </p>
        </motion.div>

        {/* Free Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {freeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all text-center h-full">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Free Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">为什么免费？</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们相信，创作的门槛应该尽可能低，让每一位有才华的创作者都能专注于创作本身，
              而不是被工具成本所困扰。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">降低门槛</h4>
              <p className="text-sm text-muted-foreground">让创作变得触手可及</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">生态共赢</h4>
              <p className="text-sm text-muted-foreground">创作者成功，平台才能成功</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">持续创新</h4>
              <p className="text-sm text-muted-foreground">免费并不意味着简陋</p>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}
