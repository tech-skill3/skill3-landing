"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Timer, 
  Award, 
  BarChart3,
  CheckCircle,
  AlertCircle,
  Target,
  Zap,
  Brain,
  Clock
} from "lucide-react"

export default function ExamSystem() {
  const examTypes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "智适应测试",
      description: "AI根据答题情况动态调整题目难度，精准评估真实能力水平",
      features: ["动态难度调整", "智能题目推荐", "实时能力分析"],
      color: "blue"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "技能专项考试",
      description: "针对特定技能领域的深度测试，验证专业技能掌握程度",
      features: ["行业标准题库", "实战项目考核", "专家评审"],
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "快速评估",
      description: "15分钟快速检测当前技能水平，为学习路径提供参考",
      features: ["快速诊断", "即时反馈", "学习建议"],
      color: "green"
    }
  ]

  const examFeatures = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "智能计时系统",
      description: "精确的时间管理，支持暂停、提醒等功能",
      benefit: "提升答题效率"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "详细分析报告",
      description: "考试结束后提供详细的能力分析和改进建议",
      benefit: "明确提升方向"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "权威认证证书",
      description: "通过考试获得行业认可的技能认证证书",
      benefit: "职业竞争优势"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "防作弊监控",
      description: "AI监控确保考试公平性和结果可信度",
      benefit: "证书含金量高"
    }
  ]

  const examStats = [
    { number: "500K+", label: "考试完成数", trend: "+23%" },
    { number: "95%", label: "通过率", trend: "+5%" },
    { number: "4.8/5", label: "考试体验评分", trend: "+0.3" },
    { number: "48小时", label: "平均出证时间", trend: "-12小时" }
  ]

  const mockExam = {
    question: "在React中，以下哪种方式最适合处理组件的副作用？",
    options: [
      "componentDidMount()",
      "useEffect()",
      "useState()",
      "componentWillMount()"
    ],
    correctAnswer: 1,
    timeRemaining: "02:45",
    progress: 75
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <FileText className="w-4 h-4 mr-2" />
            智能考试系统
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI驱动的技能认证考试
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            采用先进的自适应测试技术和AI监考系统，为您提供公平、准确、高效的技能认证考试体验，
            获得行业认可的权威证书。
          </p>
        </motion.div>

        {/* Exam Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {examStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-border/40"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-xs text-green-600 font-medium">↗ {stat.trend}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Exam Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examTypes.map((exam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    exam.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    exam.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-green-500 to-green-600'
                  } flex items-center justify-center text-white mb-4 mx-auto`}>
                    {exam.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{exam.title}</h3>
                  <p className="text-muted-foreground text-center mb-4">{exam.description}</p>
                  
                  <div className="space-y-2">
                    {exam.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Demo Exam Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border/40 overflow-hidden">
              {/* Exam Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">React 开发技能认证</h3>
                    <p className="text-sm opacity-90">第15题 / 共20题</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono">{mockExam.timeRemaining}</div>
                    <div className="text-xs opacity-90">剩余时间</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-3 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white rounded-full h-2 transition-all duration-300"
                    style={{ width: `${mockExam.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">{mockExam.question}</h4>
                  <div className="space-y-3">
                    {mockExam.options.map((option, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          index === mockExam.correctAnswer 
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            index === mockExam.correctAnswer 
                              ? 'border-green-500 bg-green-500 text-white' 
                              : 'border-gray-300'
                          }`}>
                            {index === mockExam.correctAnswer && <CheckCircle className="w-4 h-4" />}
                          </div>
                          <span>{option}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline">上一题</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">下一题</Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">考试系统特色</h3>
              <p className="text-muted-foreground mb-6">
                我们的考试系统结合了最新的AI技术和教育评估理论，为您提供最专业的技能认证体验。
              </p>
            </div>

            {examFeatures.map((feature, index) => (
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
                          <Badge variant="secondary" className="text-xs">
                            {feature.benefit}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            准备好测试您的技能了吗？
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            选择适合您的考试类型，获得行业认可的技能认证证书，提升职业竞争力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Target className="w-5 h-5 mr-2" />
              免费技能测试
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Award className="w-5 h-5 mr-2" />
              查看认证证书
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
