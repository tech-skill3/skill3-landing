"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Users, 
  Building2, 
  Sparkles,
  Shield,
  Headphones,
  Clock,
  Star,
  Crown,
  Zap,
  Globe,
  Settings
} from "lucide-react"

export default function SubscriptionSection() {
  const personalPlans = [
    {
      name: "基础版",
      price: "¥29",
      period: "/月",
      description: "适合个人用户开始体验AI技能代理",
      features: [
        "访问20+基础技能代理",
        "每月10小时使用时长",
        "基础客服支持",
        "学习进度跟踪",
        "移动端访问"
      ],
      popular: false,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "专业版",
      price: "¥99",
      period: "/月",
      description: "适合专业人士和重度用户",
      features: [
        "访问全部200+技能代理",
        "无限使用时长",
        "优先客服支持",
        "高级分析报告",
        "自定义工作流",
        "API访问权限",
        "离线模式"
      ],
      popular: true,
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "团队版",
      price: "¥199",
      period: "/月",
      description: "适合小团队协作使用",
      features: [
        "专业版全部功能",
        "支持5个团队成员",
        "团队协作工具",
        "管理员控制面板",
        "团队使用分析",
        "专属客服经理"
      ],
      popular: false,
      icon: <Users className="w-6 h-6" />
    }
  ]

  const enterpriseFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "企业级部署",
      description: "私有云部署，数据安全可控，支持SSO集成"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "安全合规",
      description: "符合SOC2、ISO27001等标准，支持数据本地化"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "定制化开发",
      description: "根据企业需求定制专属AI技能代理"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "全球部署",
      description: "多区域部署，保证全球用户访问速度"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "专属支持",
      description: "7x24小时技术支持，专属客户成功经理"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "高性能保障",
      description: "SLA 99.9%可用性保证，毫秒级响应"
    }
  ]

  const useCases = [
    {
      title: "销售团队",
      description: "使用AI销售代理提升转化率和客户满意度",
      result: "平均提升35%销售业绩",
      companies: ["腾讯", "阿里巴巴", "字节跳动"]
    },
    {
      title: "客服中心",
      description: "智能客服代理7x24小时处理客户咨询",
      result: "减少60%人工客服工作量",
      companies: ["美团", "滴滴", "京东"]
    },
    {
      title: "研发团队",
      description: "代码审查和技术文档生成AI助手",
      result: "提升40%开发效率",
      companies: ["华为", "小米", "百度"]
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        {/* Personal Subscription Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <Users className="w-4 h-4 mr-2" />
            订阅计划
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            选择适合您的订阅计划
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            从个人用户到企业团队，我们为不同规模的用户提供灵活的订阅方案，
            让AI技能代理为您的工作带来更大价值。
          </p>
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
              <Building2 className="w-4 h-4 mr-2" />
              企业解决方案
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              为企业量身定制的AI技能代理平台
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              提供企业级的安全性、可扩展性和定制化服务，
              帮助大型组织实现AI技能代理的规模化应用。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">客户成功案例</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              看看其他企业如何通过我们的AI技能代理平台获得显著业务提升
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold mb-3">{useCase.title}</h4>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="mb-4">
                      <Badge className="bg-green-100 text-green-700 text-sm">
                        {useCase.result}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      客户包括：{useCase.companies.join('、')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              准备开始您的AI技能代理之旅？
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              立即联系我们的企业解决方案专家，获得个性化的产品演示和定制方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full"
              >
                <Clock className="w-5 h-5 mr-2" />
                预约产品演示
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <Headphones className="w-5 h-5 mr-2" />
                联系销售顾问
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
