"use client"

import { motion } from "framer-motion"
import { ChevronRight, Building2, ShoppingCart, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndustryScenarios() {
  const scenarios = [
    {
      title: "金融AI陪练",
      subtitle: "赋能银行客户经理",
      description: "通过AI模拟客户进行高仿真对话训练，实时分析话术，提升转化效率",
      features: [
        "AI模拟客户进行高仿真对话训练",
        "实时分析话术优化建议",
        "提升客户转化效率",
        "量化培训ROI"
      ],
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 to-cyan-950/20"
    },
    {
      title: "零售AI真练",
      subtitle: "助力销售团队",
      description: "AI分析真实销售录音，提供优化建议，提升下单率",
      features: [
        "AI分析真实销售录音",
        "智能提供优化建议",
        "提升客户下单率",
        "销售技能量化评估"
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 to-emerald-950/20"
    },
    {
      title: "编程实操",
      subtitle: "提供在线编程环境",
      description: "集成OJ/Jupyter，高效掌握核心技术技能",
      features: [
        "提供在线编程环境",
        "集成OJ/Jupyter平台",
        "高效掌握核心技术技能",
        "实时代码评估反馈"
      ],
      icon: Code,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 to-pink-950/20"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            3. 行业应用场景
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            针对不同行业特点，提供定制化的AI技能训练解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                <CardHeader className={`bg-gradient-to-br ${scenario.bgColor} rounded-t-lg`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${scenario.color} flex items-center justify-center`}>
                      <scenario.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{scenario.title}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {scenario.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {scenario.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {scenario.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${scenario.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/5 transition-colors"
                  >
                    了解更多
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 底部统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">行业场景覆盖</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">技能转化成功率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300%</div>
            <div className="text-muted-foreground">平均ROI提升</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}