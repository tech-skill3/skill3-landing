"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Bot,
  Settings,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react"

export default function CreationProcess() {
  const steps = [
    {
      step: "01",
      title: "上传素材",
      subtitle: "准备创作材料",
      description: "上传你的专业知识材料，包括文档、视频、PPT、笔记等",
      icon: <Upload className="w-6 h-6" />,
      details: ["支持多种格式", "智能识别内容", "安全加密存储"],
      time: "5分钟"
    },
    {
      step: "02",
      title: "AI智能生成",
      subtitle: "自动解析并生成",
      description: "AI自动解析素材，生成结构化的技能代理框架和内容",
      icon: <Bot className="w-6 h-6" />,
      details: ["自动分章节", "生成练习题", "创建评估标准"],
      time: "10分钟"
    },
    {
      step: "03",
      title: "优化编辑",
      subtitle: "精细调整内容",
      description: "在Creator Studio Pro中对生成的内容进行精细调整和优化",
      icon: <Settings className="w-6 h-6" />,
      details: ["可视化编辑", "交互式预览", "实时修改"],
      time: "15分钟"
    },
    {
      step: "04",
      title: "发布上架",
      subtitle: "分享给全世界",
      description: "一键发布到Agent Mall，让你的作品被更多人发现和使用",
      icon: <Rocket className="w-6 h-6" />,
      details: ["自动审核", "智能推荐", "收益跟踪"],
      time: "2分钟"
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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-700 border-indigo-200">
            <ArrowRight className="w-4 h-4 mr-2" />
            创作流程概览
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            4步完成专业创作
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            从素材到成品，只需30分钟就能完成专业级AI技能代理的创作。
            <span className="text-indigo-600 font-semibold">AI辅助，创作简单</span>
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{step.subtitle}</p>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Start CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              现在就开始创作
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              准备好你的专业知识，让AI帮你创造价值。
              整个过程完全免费，收益公平分成。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-white/20 text-white px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  创作完全免费
                </Badge>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-white/20 text-white px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  专业AI辅助
                </Badge>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-white/20 text-white px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  收益有保障
                </Badge>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
