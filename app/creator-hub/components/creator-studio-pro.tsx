"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Palette,
  Zap,
  Eye,
  FolderOpen,
  BarChart3,
  Upload,
  ArrowRight,
  Sparkles,
  Settings,
  CheckCircle
} from "lucide-react"

export default function CreatorStudioPro() {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI辅助生成",
      description: "上传素材 → 自动生成切片/陪练骨架/评分标准/作业",
      detail: "智能解析文档、视频等素材，快速生成结构化内容框架"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "可视化编辑",
      description: "拖拽式界面，实时预览编辑效果",
      detail: "所见即所得的编辑体验，直观调整内容结构和样式"
    },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      title: "内容管理",
      description: "版本控制，批量操作，智能分类",
      detail: "高效管理多个作品，支持版本回溯和批量处理"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "收益仪表盘",
      description: "实时数据监控，收益分析，趋势预测",
      detail: "全方位的数据洞察，帮你做出更好的创作决策"
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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            <Palette className="w-4 h-4 mr-2" />
            Creator Studio Pro
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            你的免费AI创作工作台
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            零门槛创作平台，AI智能辅助生成内容，让专业知识快速转化为高质量的AI技能代理。
            <span className="text-purple-600 font-semibold">完全免费，功能强大</span>
          </p>

          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            立即体验Creator Studio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all group">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-purple-600 font-medium mb-3">{feature.description}</p>
                      <p className="text-muted-foreground leading-relaxed">{feature.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">创作从未如此简单</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从想法到成品，只需几步就能完成专业级AI技能代理的创作
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">上传素材</h4>
              <p className="text-sm text-muted-foreground">文档、视频、PPT等</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">AI生成</h4>
              <p className="text-sm text-muted-foreground">智能解析并结构化</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">精细编辑</h4>
              <p className="text-sm text-muted-foreground">优化内容和交互</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">发布上架</h4>
              <p className="text-sm text-muted-foreground">一键发布到市场</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
