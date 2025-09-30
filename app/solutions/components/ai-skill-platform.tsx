"use client"

import { motion } from "framer-motion"
import { Brain, BookOpen, Target, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AiSkillPlatform() {
  const skillSteps = [
    {
      id: "create",
      title: "创",
      subtitle: "AI智课师",
      description: "构建AI技能体",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "learn",
      title: "学", 
      subtitle: "AI导师",
      description: "交互式学习",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "practice",
      title: "练",
      subtitle: "AI陪练师", 
      description: "高保真模拟实战",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "effect",
      title: "效",
      subtitle: "AI督导师",
      description: "智能分析量化ROI",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                1. AI技能训战平台
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                &ldquo;创-学-练-效&rdquo;闭环：AI Agent驱动的技能转化
              </p>
            </div>

            <div className="space-y-4">
              {skillSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-border transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {step.title}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        [{step.title}] {step.subtitle}：{step.description}
                      </h3>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    了解更多
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 右侧流程图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-center mb-8">
                  创-学-练-效闭环流程图
                </h3>
                
                <div className="relative">
                  {/* 流程图节点 */}
                  <div className="grid grid-cols-2 gap-8">
                    {/* 创 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                        创
                      </div>
                      <span className="text-sm font-medium">AI智课师</span>
                    </motion.div>

                    {/* 学 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                        学
                      </div>
                      <span className="text-sm font-medium">AI导师</span>
                    </motion.div>

                    {/* 效 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                        效
                      </div>
                      <span className="text-sm font-medium">AI督导师</span>
                    </motion.div>

                    {/* 练 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                        练
                      </div>
                      <span className="text-sm font-medium">AI陪练师</span>
                    </motion.div>
                  </div>

                  {/* 连接线 */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-muted-foreground" />
                      </marker>
                    </defs>
                    
                    {/* 创 → 学 */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                      d="M 80 50 L 120 50"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="text-muted-foreground"
                    />
                    
                    {/* 学 → 练 */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      d="M 150 80 L 150 120"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="text-muted-foreground"
                    />
                    
                    {/* 练 → 效 */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      viewport={{ once: true }}
                      d="M 120 150 L 80 150"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="text-muted-foreground"
                    />
                    
                    {/* 效 → 创 */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.0 }}
                      viewport={{ once: true }}
                      d="M 50 120 L 50 80"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="text-muted-foreground"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}