"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CheckCircle2, 
  Eye, 
  BarChart3, 
  Award, 
  Users,
  Clock,
  Star,
  TrendingUp
} from "lucide-react"

export default function QualityAssurance() {
  const qaFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "智能监控系统",
      description: "24/7实时监控学习质量，自动识别异常学习行为和潜在问题。",
      metrics: "99.9%可用性"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "多维度评估",
      description: "从知识掌握、技能应用、学习效率等多个维度综合评估学习效果。",
      metrics: "15+评估维度"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "专家审核团队",
      description: "资深行业专家组成的审核团队，确保内容质量和学习路径的科学性。",
      metrics: "200+专业导师"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "标准化认证",
      description: "严格的认证标准和流程，确保每个技能认证的权威性和含金量。",
      metrics: "行业标准认证"
    }
  ]

  const qualityMetrics = [
    { label: "内容准确率", value: "99.8%", color: "green" },
    { label: "学习完成率", value: "94.5%", color: "blue" },
    { label: "技能掌握率", value: "91.2%", color: "purple" },
    { label: "满意度评分", value: "4.9/5", color: "orange" }
  ]

  const qaProcess = [
    {
      step: "内容审核",
      description: "专业团队多轮审核，确保内容的准确性和实用性",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      step: "AI质检",
      description: "AI系统自动检测内容质量和学习体验问题",
      icon: <Shield className="w-5 h-5" />
    },
    {
      step: "用户反馈",
      description: "收集和分析用户反馈，持续优化内容和体验",
      icon: <Star className="w-5 h-5" />
    },
    {
      step: "持续改进",
      description: "基于数据分析结果，不断迭代和提升质量标准",
      icon: <TrendingUp className="w-5 h-5" />
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
            <Shield className="w-4 h-4 mr-2" />
            AI Quality Assurance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI驱动的质量保证体系
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们采用先进的AI技术和严格的质量管理流程，从内容创作到学习效果，
            全方位保障每一位学习者的学习质量和成长效果。
          </p>
        </motion.div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {qualityMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-border/40"
            >
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* QA Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {feature.metrics}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* QA Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-border/40"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">质量保证流程</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              四重质量把关，确保每一个学习环节都达到最高标准
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white">
                  {process.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.step}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
                
                {/* Step connector */}
                {index < qaProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">品质承诺</h3>
              <p className="text-lg mb-6 opacity-90">
                我们承诺为每位学习者提供最高质量的学习体验。如果您对学习效果不满意，
                我们提供无条件退款保障。
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30天退款保证</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>ISO质量认证</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>数据安全保护</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
