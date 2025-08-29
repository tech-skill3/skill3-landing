"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Cpu, 
  Network, 
  Layers, 
  ArrowRight, 
  Bot,
  Code,
  Briefcase,
  Lightbulb,
  Workflow,
  Settings
} from "lucide-react"

export default function SkillAgent() {
  const agentTypes = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "编程助手Agent",
      description: "专业的代码生成、调试和优化助手",
      capabilities: ["智能代码补全", "Bug自动修复", "代码重构建议", "性能优化"],
      color: "blue"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "职业规划Agent", 
      description: "个性化的职业发展路径规划师",
      capabilities: ["技能评估", "职业建议", "面试准备", "简历优化"],
      color: "purple"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "创意设计Agent",
      description: "创意设计和产品思维培养专家",
      capabilities: ["设计灵感", "用户体验", "原型制作", "创意评估"],
      color: "orange"
    }
  ]

  const agentFlow = [
    {
      step: "01",
      title: "理解需求",
      description: "AI Agent分析您的学习目标和当前技能水平",
      icon: <Bot className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "智能匹配",
      description: "基于知识图谱匹配最适合的技能路径",
      icon: <Network className="w-6 h-6" />
    },
    {
      step: "03",
      title: "个性化训练",
      description: "提供定制化的练习和项目实战机会",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "04",
      title: "持续优化",
      description: "根据学习反馈不断调整和优化策略",
      icon: <Settings className="w-6 h-6" />
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      orange: "from-orange-500 to-orange-600"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            <Cpu className="w-4 h-4 mr-2" />
            Skill Agent 概念
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            智能技能代理，您的学习加速器
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Skill Agent是我们独创的AI智能体技术，它不仅是学习工具，更是您在特定技能领域的专业伙伴，
            能够深度理解行业需求，提供精准的技能培养方案。
          </p>
        </motion.div>

        {/* Agent Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {agentTypes.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(agent.color)} flex items-center justify-center text-white mb-4 mx-auto`}>
                    {agent.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{agent.title}</h3>
                  <p className="text-muted-foreground text-center mb-4">{agent.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">核心能力：</h4>
                    {agent.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Skill Agent 工作原理</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              通过先进的AI技术和深度学习算法，Skill Agent能够理解、分析并指导您的技能学习过程
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {agentFlow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 text-yellow-900 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                体验 Skill Agent 的魔力
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">智能学习路径规划</h4>
                    <p className="text-sm text-muted-foreground">根据您的目标和现有技能，自动生成最优学习路径</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Workflow className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">实时技能评估</h4>
                    <p className="text-sm text-muted-foreground">持续监控学习进度，识别强项和待改进的领域</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Layers className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">行业级项目实战</h4>
                    <p className="text-sm text-muted-foreground">提供真实的项目场景，让您在实践中掌握技能</p>
                  </div>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                创建我的Skill Agent
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-2xl border border-border/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">编程助手 Agent</h4>
                    <p className="text-xs text-muted-foreground">正在为您分析代码...</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-600 dark:text-green-400">✓ 代码结构优秀</div>
                  <div className="text-yellow-600 dark:text-yellow-400">⚠ 建议优化性能</div>
                  <div className="text-blue-600 dark:text-blue-400">💡 推荐使用 useMemo</div>
                </div>
                
                <div className="mt-4 text-sm">
                  <p className="text-muted-foreground">基于您的代码风格，推荐学习：</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="secondary">React性能优化</Badge>
                    <Badge variant="secondary">TypeScript进阶</Badge>
                  </div>
                </div>
              </div>
              
              {/* Floating indicator */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
