"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageSquare,
  Cog,
  Rocket
} from "lucide-react"

export default function OnboardingProcess() {
  const processSteps = [
    {
      step: "01",
      title: "需求沟通",
      subtitle: "深入了解需求",
      description: "与您的团队进行详细的需求沟通，了解业务场景、培训目标和具体要求",
      duration: "1-2天",
      icon: <MessageSquare className="w-6 h-6" />,
      details: [
        "业务需求调研",
        "培训目标确认",
        "技术环境评估",
        "定制化需求收集"
      ]
    },
    {
      step: "02",
      title: "方案定制",
      subtitle: "量身定制方案",
      description: "基于您的需求，制定专属的AI培训解决方案和实施计划",
      duration: "3-5天",
      icon: <Cog className="w-6 h-6" />,
      details: [
        "方案架构设计",
        "功能模块配置",
        "集成方案制定",
        "时间表规划"
      ]
    },
    {
      step: "03",
      title: "平台配置",
      subtitle: "系统部署配置",
      description: "进行平台部署、数据迁移和系统配置，确保环境就绪",
      duration: "3-5天",
      icon: <Settings className="w-6 h-6" />,
      details: [
        "环境部署",
        "数据迁移",
        "系统配置",
        "安全设置"
      ]
    },
    {
      step: "04",
      title: "团队培训",
      subtitle: "用户培训指导",
      description: "为您的团队提供全面的产品培训和使用指导",
      duration: "2-3天",
      icon: <Users className="w-6 h-6" />,
      details: [
        "管理员培训",
        "用户操作指导",
        "最佳实践分享",
        "Q&A答疑"
      ]
    },
    {
      step: "05",
      title: "正式上线",
      subtitle: "开始使用",
      description: "完成所有准备工作，正式启动AI培训平台的使用",
      duration: "1天",
      icon: <Rocket className="w-6 h-6" />,
      details: [
        "系统验收",
        "数据验证",
        "权限配置",
        "上线支持"
      ]
    }
  ]

  const commitments = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "两周承诺",
      description: "承诺在两周内完成平台配置并开始使用"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "专属支持",
      description: "配备专属客户成功经理全程陪伴"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "质量保障",
      description: "严格的质量控制，确保上线顺利"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "持续优化",
      description: "上线后持续优化和功能更新"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 border-green-200">
            <Clock className="w-4 h-4 mr-2" />
            快速上线流程
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            两周快速上线，承诺高效部署
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们致力于提供卓越的实施服务，通过标准化的流程和专业的团队，
            确保您的AI培训平台能在最短时间内完成部署并投入使用。
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{step.subtitle}</p>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
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

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">我们的承诺</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们对每个客户都做出郑重承诺，确保项目顺利实施和长期成功
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
                  {commitment.icon}
                </div>
                <h4 className="font-semibold mb-2">{commitment.title}</h4>
                <p className="text-sm text-muted-foreground">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              准备开始您的AI培训之旅？
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              我们的实施团队已准备就绪，将为您提供最专业的部署服务和最贴心的技术支持
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100 rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                立即预约部署
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                咨询实施专家
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
