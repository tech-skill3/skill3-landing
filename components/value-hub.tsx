"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Building2, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ValueHub() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const audiences = [
    {
      icon: <GraduationCap className="size-8" />,
      title: "面向学习者",
      subtitle: "超越证书，掌握技能",
      description: "获得真实的能力，并以区块链技术真正拥有您的成就。您的每一次进步都将成为不可篡改的数字资产。",
      benefits: [
        "个性化AI导师指导",
        "真实项目实战练习",
        "NFT技能证书",
        "$SKILL代币奖励",
        "终身学习档案"
      ],
      cta: "开始学习",
      ctaLink: "/academy",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Users className="size-8" />,
      title: "面向创作者",
      subtitle: "将您的专业知识变现",
      description: "在我们这里，您不仅仅是教授课程，更是在构建未来的教育。享受60%的收入分成和多重激励。",
      benefits: [
        "60%收入分成",
        "创作者工作室",
        "多重激励机制",
        "专业教学工具",
        "全球学员群体"
      ],
      cta: "成为创作者",
      ctaLink: "/creator-hub",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: <Building2 className="size-8" />,
      title: "面向企业",
      subtitle: "停止为'培训'付费，开始为'成果'投资",
      description: "通过我们独有的'成果证明'模式，确保您的每一笔培训投入都带来可衡量的业务回报。",
      benefits: [
        "成果导向培训",
        "员工技能追踪",
        "定制培训方案",
        "ROI数据分析",
        "企业级支持"
      ],
      cta: "预约演示",
      ctaLink: "/for-teams",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">价值主张中心</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            一个分栏或选项卡区域，针对三个主要用户群体进行精准的价值沟通，并将他们引导至相应的深度信息页面。
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {audiences.map((audience, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-105">
                <CardHeader className={`pb-6 bg-gradient-to-r ${audience.bgColor}`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-sm ${audience.iconColor}`}>
                      {audience.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{audience.title}</h3>
                      <p className="text-lg font-semibold text-primary">{audience.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 text-center">{audience.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {audience.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className={`mr-3 size-5 ${audience.iconColor} flex-shrink-0`} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full h-12 px-8 text-base font-medium ${audience.buttonColor} text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    {audience.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">准备开启您的技能之旅？</h3>
            <p className="text-muted-foreground mb-6">
              无论您是学习者、创作者还是企业，我们都能为您提供最适合的解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                立即开始
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                联系我们
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
