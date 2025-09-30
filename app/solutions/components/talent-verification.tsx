"use client"

import { motion } from "framer-motion"
import { ChevronRight, Shield, Users, Search, CheckCircle, Award, Database, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TalentVerification() {
  const features = [
    {
      icon: Shield,
      title: "透明可信",
      description: "基于区块链的不可篡改技能记录"
    },
    {
      icon: Fingerprint,
      title: "防篡改",
      description: "密码学保证的技能数据完整性"
    },
    {
      icon: Search,
      title: "精准匹配",
      description: "QSV数据驱动的候选人匹配"
    },
    {
      icon: CheckCircle,
      title: "简化调查",
      description: "自动化背景调查流程"
    }
  ]

  const benefits = [
    {
      title: "95%",
      subtitle: "招聘准确率",
      description: "基于真实技能数据的精准匹配"
    },
    {
      title: "70%",
      subtitle: "时间节省",
      description: "简化背景调查和技能验证流程"
    },
    {
      title: "85%",
      subtitle: "成本降低",
      description: "减少错误招聘带来的损失"
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
                <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                  Web3技能验证
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  4. 验证人才库
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  精准招聘，基于可信的链上技能数据
                </p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                  解释Skill SBT（技能护照）如何提供透明可信、防篡改的人才验证。利用QSV数据精准匹配候选人，简化背景调查。
                </p>
                <Button size="lg" variant="outline" className="rounded-full">
                  了解更多
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* 左侧特性 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Skill SBT 技能护照特性</h3>
                  
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 border hover:border-primary/20 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <feature.icon className="size-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 右侧可视化 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border-2 border-dashed border-primary/20">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                        <Award className="size-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Skill SBT 技能护照</h4>
                      <p className="text-sm text-muted-foreground">Soul Bound Token</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-background/70 rounded-lg">
                        <span className="text-sm font-medium">技能验证状态</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          已验证
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/70 rounded-lg">
                        <span className="text-sm font-medium">链上记录</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          不可篡改
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/70 rounded-lg">
                        <span className="text-sm font-medium">QSV评分</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                          A级
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-20"></div>
                </motion.div>
              </div>

              {/* 底部效益展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-background/50 border">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {benefit.title}
                    </div>
                    <div className="font-semibold text-lg mb-2">{benefit.subtitle}</div>
                    <div className="text-sm text-muted-foreground">{benefit.description}</div>
                  </div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}