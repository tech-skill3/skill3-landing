"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Mail,
  FileText,
  Shield,
  CheckCircle,
  Clock,
  ArrowRight,
  Award
} from "lucide-react"
import { useState } from "react"

export default function CreatorApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    portfolio: '',
    motivation: ''
  })

  const steps = [
    {
      step: "01",
      title: "填写基本信息",
      description: "提供个人信息和专业背景",
      icon: <User className="w-5 h-5" />,
      time: "5分钟"
    },
    {
      step: "02",
      title: "提交作品样本",
      description: "分享你的专业知识样本",
      icon: <FileText className="w-5 h-5" />,
      time: "10分钟"
    },
    {
      step: "03",
      title: "内容审核",
      description: "专业团队审核申请资质",
      icon: <Shield className="w-5 h-5" />,
      time: "1-3个工作日"
    },
    {
      step: "04",
      title: "认证通过",
      description: "获得创作者认证，开始创作",
      icon: <Award className="w-5 h-5" />,
      time: "立即"
    }
  ]

  const requirements = [
    "有相关专业知识或技能",
    "能够提供优质原创内容",
    "遵守平台创作规范",
    "保持内容更新和维护",
    "积极参与社区互动"
  ]

  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "创作者认证",
      description: "获得官方认证，提升专业形象"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "优先展示",
      description: "作品优先推荐给潜在用户"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "专属支持",
      description: "享受专属客服和技术支持"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "快速审核",
      description: "认证申请快速处理"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Application submitted:', formData)
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
            <Award className="w-4 h-4 mr-2" />
            创作者申请与认证
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            开启你的创作之旅
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            加入我们的创作者大家庭，将你的专业知识转化为有价值的AI技能代理。
            <span className="text-blue-600 font-semibold">申请简单，收益可观</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">申请流程</h3>
                    <p className="text-sm text-muted-foreground">4步完成申请</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Requirements */}
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6">
                  <h4 className="font-semibold mb-3">申请资格要求</h4>
                  <div className="space-y-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">创作者申请</h3>
                    <p className="text-sm text-muted-foreground">填写信息，我们将在1-3个工作日内回复</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        真实姓名 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="请输入您的真实姓名"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        联系电话 *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="请输入联系电话"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      邮箱地址 *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="请输入邮箱地址"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">专业领域 *</Label>
                    <Input
                      id="specialty"
                      name="specialty"
                      type="text"
                      required
                      placeholder="例如：Python编程、UI设计、市场营销等"
                      value={formData.specialty}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">相关经验</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="text"
                      placeholder="例如：5年编程经验、10年设计经验等"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">作品链接或简介</Label>
                    <Textarea
                      id="portfolio"
                      name="portfolio"
                      rows={3}
                      placeholder="请提供您的作品链接、个人简介或相关成就..."
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">创作动机</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      rows={3}
                      placeholder="请简要说明您为什么想要成为创作者..."
                      value={formData.motivation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    提交申请
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    提交后，我们将在1-3个工作日内通过邮件回复审核结果
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">认证创作者特权</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              通过认证，成为我们的专业创作者，享受更多权益和支持
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
