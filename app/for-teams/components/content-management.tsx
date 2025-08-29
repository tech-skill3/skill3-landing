"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Lock,
  FolderOpen,
  ShoppingCart,
  Upload,
  Shield,
  Users,
  ArrowRight,
  Database,
  Globe
} from "lucide-react"

export default function ContentManagement() {
  const contentFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "企业内容私有化",
      description: "企业内通过Creator Studio生成的内容和AI Agent，默认仅企业内部可见，提供私有目录和精细化的权限控制，确保企业知识资产的安全与专属。",
      benefits: [
        "内容完全私有化存储",
        "精细化权限管理系统",
        "企业知识资产保护",
        "合规性数据管理"
      ]
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Agent Mall 采购",
      description: "企业可额外从Agent Mall采购标准Agent（按座/包授权），丰富内部培训内容，形成完整的AI技能代理生态。",
      benefits: [
        "丰富的内容资源库",
        "灵活的授权模式",
        "标准Agent快速集成",
        "成本效益最大化"
      ]
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "自研Agent上架",
      description: "企业可申请将其自研的AI Agent上架为'企业专供'条目，仅供本企业内部使用，不对外销售，形成企业专属的Agent库。",
      benefits: [
        "企业专属Agent库",
        "内部知识体系化",
        "定制化服务体验",
        "品牌资产积累"
      ]
    }
  ]

  const managementFeatures = [
    {
      title: "私有目录系统",
      description: "企业专属的内容管理空间",
      icon: <FolderOpen className="w-5 h-5" />
    },
    {
      title: "权限控制",
      description: "精细化的访问权限管理",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "内容审核",
      description: "企业内容质量把控机制",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "版本管理",
      description: "Agent版本迭代与更新",
      icon: <Database className="w-5 h-5" />
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            <Database className="w-4 h-4 mr-2" />
            企业内容流转与管理
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            构建企业专属的AI知识资产体系
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            通过智能的内容管理和私有化部署，确保企业知识资产的安全性、
            专属性和可持续性，为企业培训和发展提供坚实的技术保障。
          </p>
        </motion.div>

        {/* Content Management Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Management System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">智能内容管理系统</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              提供完整的AI内容生命周期管理，从创建到分发，从私有化到共享的全流程解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              了解更多内容管理方案
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              我们的专家团队将为您详细介绍企业内容私有化部署和Agent Mall集成的完整解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full"
              >
                <Globe className="w-5 h-5 mr-2" />
                了解私有化部署
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                浏览Agent Mall
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
