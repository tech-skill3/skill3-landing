"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  Mail,
  Phone,
  Building,
  User,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react"
import { useState } from "react"

export default function DemoCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: ''
  })

  const benefits = [
    "30分钟专属产品演示",
    "针对您的业务场景定制方案",
    "专家团队1v1咨询服务",
    "免费试用资格评估",
    "部署时间表规划",
    "ROI预期分析"
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
    console.log('Form submitted:', formData)
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            预约演示 - ToB客户专属入口
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            立即预约演示，与我们的专家团队深入探讨
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            这是ToB/To小B客户转化的关键一步。我们的企业解决方案专家将为您提供
            30分钟专属演示，深入了解您的需求，定制最适合的AI培训方案。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-border/40 bg-gradient-to-br from-background to-muted/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">预约演示包含</h3>
                    <p className="text-sm text-muted-foreground">专业的咨询服务体验</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">为什么选择我们？</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 专注于企业AI培训解决方案10+年</li>
                    <li>• 服务500+家企业客户</li>
                    <li>• 平均部署周期仅需2周</li>
                    <li>• 7×24小时专业技术支持</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
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
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">预约演示</h3>
                    <p className="text-sm text-muted-foreground">填写表单，我们将在24小时内联系您</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        联系人姓名 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        联系电话 *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="请输入您的电话"
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
                      placeholder="请输入您的邮箱"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      公司名称 *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="请输入您的公司名称"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">公司规模</Label>
                    <Input
                      id="employees"
                      name="employees"
                      type="text"
                      placeholder="例如：50-100人，100-500人等"
                      value={formData.employees}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">需求描述</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="请简要描述您的培训需求和期望达成的目标..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    立即预约演示
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    提交后，我们将在24小时内通过电话或邮件联系您安排演示时间
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">其他联系方式</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium">电话咨询</p>
                  <p className="text-sm text-muted-foreground">400-123-4567</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium">邮箱咨询</p>
                  <p className="text-sm text-muted-foreground">enterprise@skill3.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium">在线客服</p>
                  <p className="text-sm text-muted-foreground">工作日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
