"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  TrendingUp,
  Calendar,
  CreditCard,
  BarChart3,
  Shield,
  CheckCircle
} from "lucide-react"

export default function RevenueExplanation() {
  const revenueModels = [
    {
      type: "首次销售分成",
      creatorShare: "70%",
      platformShare: "30%",
      description: "用户首次购买你的技能代理时",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      type: "版税分成",
      creatorShare: "50%",
      platformShare: "50%",
      description: "用户续费或订阅时的分成",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      type: "订阅收益",
      creatorShare: "60%",
      platformShare: "40%",
      description: "企业版和高级功能订阅",
      icon: <BarChart3 className="w-5 h-5" />
    }
  ]

  const benefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "每月15日结算",
      description: "固定时间自动结算，确保资金及时到账"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "多种结算方式",
      description: "支持加密货币、法币等多种结算方式"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "收益有保障",
      description: "平台承诺收益透明，数据可实时查看"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "数据完全透明",
      description: "实时查看销售数据，收益趋势分析"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 border-green-200">
            <DollarSign className="w-4 h-4 mr-2" />
            收益说明
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            公平透明的收益机制
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们致力于为创作者提供最公平的收益分配机制。
            <span className="text-green-600 font-semibold">你的创作价值，得到应有回报</span>
          </p>
        </motion.div>

        {/* Revenue Models */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {revenueModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all text-center">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{model.type}</h3>
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{model.creatorShare}</div>
                      <div className="text-sm text-muted-foreground">创作者</div>
                    </div>
                    <div className="text-gray-300 dark:text-gray-600">|</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-600">{model.platformShare}</div>
                      <div className="text-sm text-muted-foreground">平台</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{model.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">收益保障</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们承诺为创作者提供最可靠的收益保障体系
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">收益计算器</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              简单估算你的潜在收益（示例数据）
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">¥2,100</div>
              <div className="text-sm text-muted-foreground">月均收益</div>
              <div className="text-xs text-muted-foreground mt-1">基于每月10个销售</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">¥25,200</div>
              <div className="text-sm text-muted-foreground">年化收益</div>
              <div className="text-xs text-muted-foreground mt-1">基于持续销售</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">¥50,000+</div>
              <div className="text-sm text-muted-foreground">潜在收益</div>
              <div className="text-xs text-muted-foreground mt-1">优秀作品预期</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
