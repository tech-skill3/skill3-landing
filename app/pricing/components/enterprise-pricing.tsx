"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, X, Star, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterprisePricing() {
  const plans = [
    {
      name: "标准版",
      subtitle: "Standard",
      description: "效率工具与基础培训",
      icon: <Zap className="w-6 h-6" />,
      pricing: "按年订阅 (按席位)",
      popular: false,
      features: {
        "AI 智课师 (技能体构建)": "基础版",
        "AI 陪练师 (模拟对抗)": "限制使用次数/席位",
        "AI 督导师 (ROI量化分析)": "基础分析报告",
        "成果证明引擎 (OaaS)": false,
        "技能证明协议 (Skill SBT签发)": false,
        "验证人才库访问": false
      }
    },
    {
      name: "专业版",
      subtitle: "Professional",
      description: "AI 驱动的效果交付",
      icon: <Star className="w-6 h-6" />,
      pricing: "按年订阅 (按席位)",
      popular: true,
      features: {
        "AI 智课师 (技能体构建)": "专业版",
        "AI 陪练师 (模拟对抗)": "不限次数",
        "AI 督导师 (ROI量化分析)": "深度数据洞察与ROI报告",
        "成果证明引擎 (OaaS)": "标准版",
        "技能证明协议 (Skill SBT签发)": true,
        "验证人才库访问": "标准访问"
      }
    },
    {
      name: "旗舰版",
      subtitle: "Enterprise",
      description: "定制化与 ROI 保障",
      icon: <Shield className="w-6 h-6" />,
      pricing: "联系销售获取报价",
      popular: false,
      features: {
        "AI 智课师 (技能体构建)": "企业级定制与私有化",
        "AI 陪练师 (模拟对抗)": "高并发支持与定制场景",
        "AI 督导师 (ROI量化分析)": "对接企业BI与CRM系统",
        "成果证明引擎 (OaaS)": "高级版 (支持智能合约对赌)",
        "技能证明协议 (Skill SBT签发)": "深度集成预言机网络",
        "验证人才库访问": "优先访问与定制化画像"
      }
    }
  ]

  const featureCategories = [
    {
      title: "AI 技能训战核心模块",
      features: [
        "AI 智课师 (技能体构建)",
        "AI 陪练师 (模拟对抗)",
        "AI 督导师 (ROI量化分析)",
        "成果证明引擎 (OaaS)"
      ]
    },
    {
      title: "Web3 集成与协议服务",
      features: [
        "技能证明协议 (Skill SBT签发)",
        "验证人才库访问"
      ]
    }
  ]

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-400 mx-auto" />
      )
    }
    return <span className="text-sm text-center">{value}</span>
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">企业服务定价</h2>
          <p className="text-xl text-muted-foreground mb-2">AI 训战平台</p>
          <p className="text-lg text-muted-foreground">SaaS 订阅费 + 价值定价</p>
        </motion.div>

        {/* 套餐卡片概览 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    推荐
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{plan.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <p className="text-lg font-semibold text-primary">{plan.pricing}</p>
                </div>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === "旗舰版" ? "联系销售" : "开始使用"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* 详细功能对比表格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-background rounded-lg border shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-6 font-semibold">功能/服务</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="text-center p-6 font-semibold min-w-[200px]">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">{plan.name}</span>
                        <span className="text-sm text-muted-foreground font-normal">{plan.subtitle}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="border-b bg-muted/20">
                      <td colSpan={4} className="p-4 font-semibold text-primary">
                        {category.title}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium">{feature}</td>
                        {plans.map((plan, planIndex) => (
                          <td key={planIndex} className="p-4 text-center">
                            {renderFeatureValue(plan.features[feature as keyof typeof plan.features])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
                <tr className="border-b bg-muted/20">
                  <td className="p-4 font-semibold text-primary">价格</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="p-4 text-center">
                      <span className="font-semibold text-primary">{plan.pricing}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}