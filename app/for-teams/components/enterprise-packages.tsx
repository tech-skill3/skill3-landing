"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Building2,
  Users,
  Crown,
  Sparkles,
  Bot,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react"

export default function EnterprisePackages() {
  const packages = [
    {
      name: "Essentials",
      subtitle: "基础版",
      price: "¥9,999",
      period: "/年",
      description: "适用于初次尝试AI培训、需求相对基础的小型团队",
      icon: <Sparkles className="w-6 h-6" />,
      popular: false,
      features: [
        "Creator Studio 企业集成版（含）",
        "Learn (Skill Agent 学习)",
        "Mentor (文本陪练)",
        "Verify Lite (基础AI质检)",
        "Exam&SBT (考试与技能凭证)",
        "基础客服支持",
        "5个团队成员",
        "标准数据存储（1年）"
      ],
      ctaText: "了解详情",
      ctaVariant: "outline" as const
    },
    {
      name: "Plus",
      subtitle: "主推版",
      price: "¥29,999",
      period: "/年",
      description: "适用于追求更全面、更深入培训和质检效果的中型团队",
      icon: <Bot className="w-6 h-6" />,
      popular: true,
      features: [
        "Essentials 所有功能",
        "语音陪练插件",
        "硬件回流接入 (Verify Ingest)",
        "Verify Pro (团队对比/薄弱环节分析)",
        "高级分析报告",
        "优先客服支持",
        "20个团队成员",
        "扩展数据存储（3年）",
        "基础合规审计"
      ],
      ctaText: "立即咨询",
      ctaVariant: "default" as const
    },
    {
      name: "Enterprise",
      subtitle: "企业定制版",
      price: "¥99,999",
      period: "/年起",
      description: "适用于大型企业或有特殊定制需求、对数据安全和合规性有极高要求的客户",
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      features: [
        "Plus 所有功能",
        "完全定制化服务",
        "专属客户经理",
        "高级合规审计",
        "无限数据留存",
        "API集成",
        "私有化部署选项",
        "无限团队成员",
        "7×24小时专属支持"
      ],
      ctaText: "联系我们",
      ctaVariant: "outline" as const
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 border-green-200">
            <Building2 className="w-4 h-4 mr-2" />
            企业套餐
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            选择适合您的企业套餐
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            提供灵活的年费套餐方案，满足不同规模和需求的企业。
            从基础功能到企业级定制，我们为您提供最合适的解决方案。
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </Badge>
                </div>
              )}

              <Card className={`p-8 h-full border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-xl transition-all ${
                pkg.popular
                  ? 'ring-2 ring-green-500/20 border-green-500/30'
                  : 'hover:border-border/60'
              }`}>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-600 dark:from-green-900/20 dark:to-blue-900/20 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full rounded-full font-semibold ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg'
                        : ''
                    }`}
                    variant={pkg.ctaVariant}
                    size="lg"
                  >
                    {pkg.ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900 dark:text-blue-100">企业级保障</span>
            </div>
            <p className="text-sm text-muted-foreground">
              所有套餐均包含企业级安全保障、数据隐私保护和专业技术支持。
              可根据实际需求调整功能配置，享受更灵活的付费方案。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
