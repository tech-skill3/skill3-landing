"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  BookOpen,
  MessageSquare,
  Target,
  Award,
  Briefcase,
  Zap,
  Star,
  Check
} from "lucide-react"

export default function SkillPassPlans() {
  const plans = [
    {
      name: "Starter",
      monthlyPrice: "¥29",
      yearlyPrice: "¥298",
      description: "适合入门学习者",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Learn 基础学习模块",
        "Mentor 文本陪练",
        "基础练习题库",
        "学习进度跟踪",
        "移动端支持"
      ],
      popular: false,
      color: "orange"
    },
    {
      name: "Pro",
      monthlyPrice: "¥99",
      yearlyPrice: "¥998",
      description: "适合专业学习者",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Starter 全部功能",
        "Verify Lite AI质检",
        "月度考试 1 次",
        "技能认证 SBT",
        "优先客服支持",
        "高级分析报告"
      ],
      popular: true,
      color: "red"
    },
    {
      name: "Career",
      monthlyPrice: "¥199",
      yearlyPrice: "¥1998",
      description: "适合职业发展",
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        "Pro 全部功能",
        "作品集专业模板",
        "Career Connect 入口",
        "行业认证路径",
        "导师 1v1 指导",
        "就业推荐服务",
        "无限考试次数"
      ],
      popular: false,
      color: "blue"
    }
  ]

  const enterpriseFeatures = [
    "更多使用额度",
    "更大的上下文窗口",
    "单点登录(SSO)与域名绑定",
    "细粒度角色与权限控制",
    "跨域身份管理系统 (SCIM)",
    "审计日志",
    "Google Workspace 集成",
    "含高级代码能力模块",
    "合规与可观测 API 接入"
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          bg: "bg-orange-100 dark:bg-orange-900/20",
          text: "text-orange-600 dark:text-orange-400",
          border: "border-orange-500"
        }
      case "red":
        return {
          bg: "bg-red-100 dark:bg-red-900/20",
          text: "text-red-600 dark:text-red-400",
          border: "border-red-500"
        }
      case "blue":
        return {
          bg: "bg-blue-100 dark:bg-blue-900/20",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-500"
        }
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-900/20",
          text: "text-gray-600 dark:text-gray-400",
          border: "border-gray-500"
        }
    }
  }

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Plans that grow with you
          </h2>
        </motion.div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="monthly" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="rounded-full p-1">
              <TabsTrigger value="monthly" className="rounded-full px-6">
                月度订阅
              </TabsTrigger>
              <TabsTrigger value="yearly" className="rounded-full px-6">
                <div className="flex items-center gap-2">
                  <span>年度订阅</span>
                  <Badge className="bg-green-100 text-green-700 text-xs">省20%</Badge>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {plans.map((plan, index) => {
                const colors = getColorClasses(plan.color)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className={`relative overflow-hidden flex flex-col h-full border-border/40 bg-gradient-to-br from-background to-muted/10 ${
                      plan.popular ? `ring-2 ${colors.border} shadow-lg` : 'hover:shadow-md'
                    }`}>
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          <Star className="w-3 h-3 inline mr-1" />
                          最受欢迎
                        </div>
                      )}

                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
                            {plan.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">{plan.monthlyPrice}</span>
                            <span className="text-muted-foreground">/月</span>
                          </div>
                        </div>
                        <Button
                          className={`w-full rounded-full font-semibold ${
                            plan.popular
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                        >
                          {plan.popular ? '立即订阅' : '开始试用'}
                        </Button>
                      </CardHeader>

                      <CardContent className="p-6 pt-0">
                        <div className="border-t border-border/40 mb-6" />
                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
              {/* Enterprise plan (contact sales) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-full"
              >
                <Card className="relative overflow-hidden flex flex-col h-full border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md">
                  <CardHeader className="p-6 pb-4">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold">Enterprise</h3>
                      <p className="text-sm text-muted-foreground">适用于大规模企业</p>
                    </div>
                    <Button
                      className={`w-full rounded-full font-semibold bg-muted hover:bg-muted/80`}
                      variant="outline"
                      size="lg"
                    >
                      联系销售
                    </Button>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="border-t border-border/40 my-4" />
                    <p className="font-semibold mb-3">在 Pro 基础上新增：</p>
                    <div className="space-y-2">
                      {enterpriseFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="yearly">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {plans.map((plan, index) => {
                const colors = getColorClasses(plan.color)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className={`relative overflow-hidden flex flex-col h-full border-border/40 bg-gradient-to-br from-background to-muted/10 ${
                      plan.popular ? `ring-2 ${colors.border} shadow-lg` : 'hover:shadow-md'
                    }`}>
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          <Star className="w-3 h-3 inline mr-1" />
                          最受欢迎
                        </div>
                      )}

                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
                            {plan.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">{plan.yearlyPrice}</span>
                            <span className="text-muted-foreground">/年</span>
                          </div>
                          <div className="text-sm text-green-600 font-medium">≈{Math.round(parseInt(plan.yearlyPrice.replace('¥', '')) / 12)}元/月</div>
                        </div>
                        <Button
                          className={`w-full rounded-full font-semibold ${
                            plan.popular
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                        >
                          {plan.popular ? '立即订阅' : '开始试用'}
                        </Button>
                      </CardHeader>

                      <CardContent className="p-6 pt-0">
                        <div className="border-t border-border/40 mb-6" />
                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
              {/* Enterprise plan (contact sales) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-full"
              >
                <Card className="relative overflow-hidden flex flex-col h-full border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md">
                  <CardHeader className="p-6 pb-4">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold">Enterprise</h3>
                      <p className="text-sm text-muted-foreground">适用于大规模企业</p>
                    </div>
                    <Button
                      className={`w-full rounded-full font-semibold bg-muted hover:bg-muted/80`}
                      variant="outline"
                      size="lg"
                    >
                      联系销售
                    </Button>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="border-t border-border/40 my-4" />
                    <p className="font-semibold mb-3">在 Pro 基础上新增：</p>
                    <div className="space-y-2">
                      {enterpriseFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
