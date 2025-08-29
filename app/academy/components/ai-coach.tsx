"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  Brain, 
  MessageCircle, 
  Target, 
  Timer, 
  TrendingUp,
  PlayCircle,
  CheckCircle,
  Sparkles,
  User
} from "lucide-react"

export default function AiCoach() {
  const coachFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "智能对话学习",
      description: "AI陪练通过自然语言对话，实时回答问题、解释概念，提供即时的学习支持。",
      highlight: "24/7在线"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "个性化指导",
      description: "根据您的学习进度和能力水平，AI陪练会调整教学策略和练习难度。",
      highlight: "因材施教"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "学习效果分析",
      description: "实时分析学习数据，识别知识薄弱点，提供针对性的强化训练建议。",
      highlight: "数据驱动"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "智能时间管理",
      description: "基于学习目标和可用时间，AI陪练为您制定最优的学习时间安排。",
      highlight: "高效规划"
    }
  ]

  const chatExample = [
    {
      type: "user",
      message: "我对React Hooks的useEffect还不太理解，能详细解释一下吗？",
      time: "14:32"
    },
    {
      type: "ai",
      message: "当然可以！useEffect是React中处理副作用的Hook。让我通过一个实际例子来解释...",
      time: "14:32"
    },
    {
      type: "ai",
      message: "```javascript\nuseEffect(() => {\n  // 副作用代码\n  console.log('组件已渲染');\n  \n  return () => {\n    // 清理代码\n    console.log('组件将卸载');\n  };\n}, [dependency]); // 依赖数组\n```",
      time: "14:33"
    },
    {
      type: "user", 
      message: "明白了！那依赖数组的作用是什么？",
      time: "14:35"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <Bot className="w-4 h-4 mr-2" />
            AI 陪练介绍
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            您专属的AI学习伙伴
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们的AI陪练系统采用先进的大语言模型技术，为每位学习者提供个性化、互动式的学习体验，
            让学习变得更加高效和有趣。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border/40 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI学习助手</h3>
                    <p className="text-sm opacity-90">随时为您答疑解惑</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs">在线</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 h-80 overflow-y-auto">
                {chatExample.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.5 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-md' 
                        : 'bg-gray-100 dark:bg-gray-800 rounded-bl-md'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input */}
              <div className="border-t p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MessageCircle className="w-4 h-4" />
                  <span>AI正在输入中...</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {coachFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {feature.highlight}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: AI Coach Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI陪练的超能力
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>支持50+编程语言和技术栈</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>实时代码审查和优化建议</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>项目实战指导和最佳实践</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>职业发展规划和面试准备</span>
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                体验AI陪练
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6" />
                  <span className="font-medium">学习者反馈</span>
                </div>
                <blockquote className="text-lg italic mb-4">
                  "AI陪练就像有一个24小时在线的专业导师，随时为我解答问题，学习效率提升了300%！"
                </blockquote>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    张
                  </div>
                  <span>张同学 · 全栈开发工程师</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
