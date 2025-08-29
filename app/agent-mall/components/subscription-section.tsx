"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Building2, 
  Shield,
  Headphones,
  Clock,
  Zap,
  Globe,
  Settings
} from "lucide-react"

export default function SubscriptionSection() {

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
