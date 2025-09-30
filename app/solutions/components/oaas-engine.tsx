"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Lock, CheckCircle, TrendingUp, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OaasEngine() {
  const workflowSteps = [
    {
      title: "定义业务KPI",
      description: "明确可衡量的业务目标",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "匹配AI技能体",
      description: "智能推荐最适合的技能培训",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "锁定培训资金",
      description: "智能合约托管培训投资",
      icon: Lock,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "员工学习达成KPI",
      description: "AI驱动的个性化学习路径",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI验证成果",
      description: "预言机验证业务成果",
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "自动结算",
      description: "智能合约自动执行付款",
      icon: ArrowRight,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-background to-muted/20 border-2">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  2. 成果证明引擎(OaaS)
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  成果即服务(OaaS)：将财务激励与业务成果完全对齐
                </p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                  解释企业如何实现&ldquo;为结果付费&rdquo;。强调Web3技术（智能合约与预言机）在其中的关键作用——提供透明、不可篡改且自动执行的结算机制。
                </p>
                <Button size="lg" variant="outline" className="rounded-full">
                  了解更多
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>

              {/* OaaS工作流程 */}
              <div className="bg-background/50 rounded-xl p-8 border">
                <h3 className="text-2xl font-semibold text-center mb-8">
                  OaaS工作流程
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4`}>
                            <step.icon className="size-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                      
                      {/* 箭头连接线 */}
                      {index < workflowSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="size-6 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* 流程总结 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center"
                >
                  <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-base font-medium">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">定义业务KPI</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">匹配AI技能体</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">锁定培训资金</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">员工学习达成KPI</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">AI验证成果</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">自动结算</span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}