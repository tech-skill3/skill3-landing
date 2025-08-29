"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Settings,
  Mic,
  Database,
  Languages,
  Shield,
  FileText,
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react"

export default function ValueAddedServices() {
  const services = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Verify Ingest",
      description: "硬件与边缘采集解决方案，实现线下行为数据的实时回流与分析",
      features: ["硬件设备接入", "实时数据采集", "行为分析引擎", "绩效量化评估"],
      category: "核心扩展"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "语音/数字人插件",
      description: "升级Mentor功能，提供更沉浸式的陪练体验",
      features: ["语音交互", "数字人形象", "多模态学习", "沉浸式体验"],
      category: "交互增强"
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "多语言支持",
      description: "满足跨国团队或多语言业务需求",
      features: ["20+语言支持", "实时翻译", "本地化内容", "文化适应性"],
      category: "全球化"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "数据留存年限",
      description: "灵活选择数据存储时长，满足合规要求",
      features: ["1-7年可选", "分级存储", "自动清理", "合规审计"],
      category: "存储管理"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "合规审计",
      description: "提供专业的合规性报告和审计服务",
      features: ["定期审计", "合规报告", "风险评估", "整改建议"],
      category: "安全合规"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "行业模板包",
      description: "针对特定行业（如金融、零售）的预设Agent和Skill Unit模板",
      features: ["行业定制", "快速部署", "最佳实践", "持续更新"],
      category: "行业方案"
    }
  ]

  const categories = ["全部", "核心扩展", "交互增强", "全球化", "存储管理", "安全合规", "行业方案"]

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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <Settings className="w-4 h-4 mr-2" />
            增值服务与插件
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            灵活扩展，满足企业个性化需求
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            企业可根据自身需求，选择性购买以下增值服务或插件，
            进一步提升培训和管理能力，实现更精准的业务价值。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full group">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Flexible Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">灵活的扩展方式</h3>
              <p className="text-muted-foreground mb-6">
                根据您的业务发展阶段和具体需求，我们提供多种扩展方式：
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>按需付费，避免资源浪费</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>模块化设计，轻松集成</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>专业咨询，匹配最佳方案</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>持续更新，跟上技术发展</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">需要定制化服务？</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  我们的专家团队可以根据您的具体需求，提供完全定制化的解决方案
                </p>
                <Button className="w-full rounded-full">
                  联系定制专家
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              快速集成，立即见效
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              大多数增值服务可在1-2周内完成集成和部署，
              让您的AI培训平台更快发挥最大价值
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100 rounded-full"
              >
                查看详细定价
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                咨询实施顾问
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
