"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Users,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"
import { useState } from "react"

export default function ContactSales() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    employees: '',
    message: ''
  })

  const enterpriseBenefits = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "企业定制方案",
      description: "根据企业需求定制专属学习计划"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "团队管理",
      description: "完整的团队学习进度和数据分析"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "优先支持",
      description: "专属客服和技术支持服务"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "批量优惠",
      description: "企业批量采购享受优惠价格"
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
    console.log('Enterprise inquiry submitted:', formData)
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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-700 border-indigo-200">
            <Building2 className="w-4 h-4 mr-2" />
            TOB 企业解决方案
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            联系我们的销售团队
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            为企业提供定制化的AI技能培训解决方案。
            <span className="text-indigo-600 font-semibold">专业团队，为您量身定制</span>
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
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">企业专属权益</h3>
                    <p className="text-sm text-muted-foreground">专业的B2B解决方案</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {enterpriseBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6">
                  <h4 className="font-semibold mb-3">为什么选择企业版？</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 🎯 定制化培训方案</li>
                    <li>• 📊 团队学习数据分析</li>
                    <li>• 🛡️ 企业级安全保障</li>
                    <li>• 💰 批量采购优惠</li>
                    <li>• 🎪 专属成功经理</li>
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
                    <h3 className="text-xl font-semibold">联系销售团队</h3>
                    <p className="text-sm text-muted-foreground">填写信息，我们将在24小时内联系您</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        联系人姓名 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="请输入联系人姓名"
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
                    <Label htmlFor="employees">公司规模</Label>
                    <Input
                      id="employees"
                      name="employees"
                      type="text"
                      placeholder="例如：50-100人，100-500人，500+人"
                      value={formData.employees}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">具体需求描述</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="请描述您的培训需求、团队规模、预算范围等..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    提交企业咨询
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    提交后，我们的企业销售团队将在24小时内通过电话或邮件联系您，提供专属方案咨询
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
            <h3 className="text-lg font-semibold mb-6">其他联系方式</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">销售热线</h4>
                <p className="text-indigo-600 font-medium">400-123-4567</p>
                <p className="text-sm text-muted-foreground">工作日 9:00-18:00</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">企业邮箱</h4>
                <p className="text-indigo-600 font-medium">enterprise@skill3.com</p>
                <p className="text-sm text-muted-foreground">24小时响应</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">在线咨询</h4>
                <p className="text-indigo-600 font-medium">立即咨询</p>
                <p className="text-sm text-muted-foreground">平均响应时间5分钟</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
