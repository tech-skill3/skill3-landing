"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  Database,
  Users,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI驱动的个性化学习",
      description: "员工通过AI Mentor和Skill Agent进行高效学习，系统自动适应学习进度和风格",
      benefits: ["自适应学习路径", "24/7智能辅导", "个性化学习计划"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "精准的AI质检",
      description: "确保培训效果和业务表现，通过智能评估体系量化学习成果",
      benefits: ["实时技能评估", "绩效数据分析", "薄弱环节识别"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Web3赋能的知识资产",
      description: "企业内容私有化，员工技能SBT化，构建可持续的知识资产体系",
      benefits: ["知识资产私有化", "技能凭证数字化", "资产价值量化"]
    }
  ]

  const features = [
    "一站式AI培训平台",
    "定制化企业解决方案",
    "安全合规的数据管理",
    "专业的技术支持服务",
    "灵活的部署选项",
    "持续的平台优化"
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-700 border-indigo-200">
            <Shield className="w-4 h-4 mr-2" />
            我们的解决方案
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            为企业提供一站式、定制化的AI驱动解决方案
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            从员工培训到技能评估，从知识管理到绩效提升，我们提供完整的AI驱动企业培训生态系统，
            帮助企业快速提升团队整体素质，实现业务目标。
          </p>
        </motion.div>

        {/* Core Solutions */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">平台核心特性</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们致力于为企业提供最优质的AI培训解决方案，涵盖从部署到运维的全生命周期服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
