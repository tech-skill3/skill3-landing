"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Terminal, 
  Play, 
  CheckCircle, 
  AlertTriangle,
  Folder,
  Settings,
  Share2,
  Cloud,
  Zap,
  GitBranch,
  Monitor
} from "lucide-react"

export default function OnlineIde() {
  const ideFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "多语言支持",
      description: "支持50+主流编程语言，包括Python、JavaScript、Java、C++等",
      highlights: ["语法高亮", "智能补全", "错误检测"]
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "在线终端",
      description: "完整的Linux终端环境，支持包管理和系统级操作",
      highlights: ["完整Shell", "包管理器", "系统工具"]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "版本控制",
      description: "集成Git版本控制，支持分支管理和协作开发",
      highlights: ["Git集成", "分支管理", "提交历史"]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "实时协作",
      description: "多人同时编辑，实时同步代码变更和光标位置",
      highlights: ["实时同步", "多人编辑", "评论功能"]
    }
  ]

  const ojFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "算法竞赛",
      description: "海量算法题库，支持ACM、LeetCode等竞赛格式",
      stats: "5000+题目"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "自动评判",
      description: "毫秒级代码评判，实时反馈执行结果和性能指标",
      stats: "99.9%准确率"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "性能分析",
      description: "详细的时间复杂度和空间复杂度分析报告",
      stats: "多维度评估"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "云端同步",
      description: "代码自动保存到云端，支持跨设备访问和备份",
      stats: "自动备份"
    }
  ]

  const codeExample = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 测试用例
console.log(fibonacci(10)); // 输出: 55`

  const testResults = [
    { test: "测试用例 1", status: "passed", time: "2ms", memory: "1.2MB" },
    { test: "测试用例 2", status: "passed", time: "1ms", memory: "1.1MB" },
    { test: "测试用例 3", status: "failed", time: "超时", memory: "2.5MB" },
    { test: "测试用例 4", status: "passed", time: "3ms", memory: "1.3MB" }
  ]

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
            <Code className="w-4 h-4 mr-2" />
            在线编程环境
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            专业级在线IDE与OJ系统
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            无需本地环境配置，直接在浏览器中享受专业级的编程开发体验。
            集成算法竞赛平台，让学习更有挑战性和趣味性。
          </p>
        </motion.div>

        {/* IDE Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            {/* IDE Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Folder className="w-4 h-4" />
                  <span>fibonacci.js</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Play className="w-4 h-4 mr-1" />
                  运行
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 min-h-[400px]">
              {/* Code Editor */}
              <div className="lg:col-span-2 p-4 bg-gray-900">
                <div className="font-mono text-sm">
                  <div className="flex">
                    <div className="text-gray-500 select-none mr-4">
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <div key={n} className="leading-6">{n}</div>
                      ))}
                    </div>
                    <div className="text-gray-100 flex-1">
                      <pre className="leading-6 whitespace-pre-wrap">{codeExample}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gray-800 border-l border-gray-700">
                <div className="p-4 border-b border-gray-700">
                  <h4 className="text-white font-medium mb-2">执行结果</h4>
                  <div className="bg-gray-900 rounded p-3 font-mono text-sm">
                    <div className="text-green-400">✓ 编译成功</div>
                    <div className="text-white mt-1">输出: 55</div>
                    <div className="text-gray-400 text-xs mt-2">
                      执行时间: 12ms | 内存: 2.1MB
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-white font-medium mb-2">测试结果</h4>
                  <div className="space-y-2">
                    {testResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">{result.test}</span>
                        <div className="flex items-center gap-2">
                          {result.status === 'passed' ? (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                          )}
                          <span className={result.status === 'passed' ? 'text-green-400' : 'text-red-400'}>
                            {result.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">在线IDE功能</h3>
            <div className="space-y-4">
              {ideFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border-border/40 bg-gradient-to-br from-background to-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {feature.highlights.map((highlight, hIndex) => (
                              <Badge key={hIndex} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">OJ竞赛平台</h3>
            <div className="space-y-4">
              {ojFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border-border/40 bg-gradient-to-br from-background to-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold">{feature.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {feature.stats}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">平台数据一览</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              数万名开发者的选择，助力他们在编程道路上不断成长
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "编程语言" },
              { number: "5K+", label: "算法题目" },
              { number: "100K+", label: "代码提交" },
              { number: "99.9%", label: "系统稳定性" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
        
        </motion.div>
      </div>
    </section>
  )
}
