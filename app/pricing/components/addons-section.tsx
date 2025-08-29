"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Bot,
  FileText,
  BarChart3,
  Zap,
  Plus
} from "lucide-react"

export default function AddonsSection() {
  const addons = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "语音陪练",
      price: "¥49/月",
      description: "AI语音交互陪练，提升口语表达能力",
      features: ["智能语音识别", "发音评估", "口语练习", "进度跟踪"],
      popular: false
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "数字人",
      price: "¥99/月",
      description: "个性化AI数字人形象，提供沉浸式学习体验",
      features: ["自定义形象", "情感表达", "互动对话", "学习陪伴"],
      popular: true
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "额外考试/补考",
      price: "¥29/次",
      description: "月度考试额外次数或补考机会",
      features: ["灵活安排", "即时反馈", "详细报告", "SBT认证"],
      popular: false
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Verify Pro报告",
      price: "¥199/包",
      description: "专业AI质检报告，包含详细学习分析",
      features: ["深度分析", "学习建议", "进度预测", "行业对比"],
      popular: false
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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            <Plus className="w-4 h-4 mr-2" />
            增值服务
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            按需选择，灵活扩展
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            根据你的学习需求，选择性购买增值服务。
            <span className="text-purple-600 font-semibold">用多少付多少，经济实惠</span>
          </p>
        </motion.div>

        {/* Addons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full group ${
                addon.popular ? 'ring-2 ring-purple-500/20 border-purple-500/30' : ''
              }`}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                      addon.popular
                        ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {addon.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{addon.title}</h3>
                        {addon.popular && (
                          <Badge className="bg-purple-100 text-purple-700 text-xs">
                            <Zap className="w-3 h-3 mr-1" />
                            推荐
                          </Badge>
                        )}
                      </div>
                      <div className="text-xl font-bold text-purple-600">{addon.price}</div>
                    </div>
                  </div>

                  {/* CTA below price spanning full card width */}
                  <div className="mt-3">
                    <Button
                      className={`w-full rounded-full font-semibold ${
                        addon.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      variant={addon.popular ? "default" : "outline"}
                      size="sm"
                    >
                      {addon.popular ? '立即购买' : '添加服务'}
                    </Button>
                  </div>

                  <div className="border-t border-border/40 my-4" />
                  <p className="text-muted-foreground mb-4 leading-relaxed">{addon.description}</p>

                  <div className="space-y-2 mb-6">
                    {addon.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">灵活组合，随心选择</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              增值服务可与订阅计划自由组合，按月订阅或按次购买，
              满足你不同的学习需求和预算考虑。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">即时生效</h4>
              <p className="text-sm text-muted-foreground">购买后立即可用，无需等待</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">详细报告</h4>
              <p className="text-sm text-muted-foreground">专业的数据分析和学习报告</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">AI加持</h4>
              <p className="text-sm text-muted-foreground">先进的AI技术提供个性化体验</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
