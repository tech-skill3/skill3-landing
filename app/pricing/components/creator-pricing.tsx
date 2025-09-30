"use client"

import React from "react"
import { motion } from "framer-motion"
import { PieChart, TrendingUp, Users, DollarSign, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CreatorPricing() {
  const benefits = [
    {
      icon: DollarSign,
      title: "高收入分成",
      description: "获得销售收入的 60%，行业领先的分成比例",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "营销支持",
      description: "平台提供专业的市场推广和用户获取服务",
      color: "blue"
    },
    {
      icon: Users,
      title: "技术服务",
      description: "完整的技术基础设施和开发工具支持",
      color: "purple"
    },
    {
      icon: Award,
      title: "品牌建设",
      description: "帮助创作者建立个人品牌和专业声誉",
      color: "orange"
    }
  ]



  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">创作者定价</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            高收入分成 + 全方位支持，让您的专业知识创造持续价值
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* 收入分成展示 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-5 text-white"
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <PieChart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">收入分成</h3>
                <p className="text-blue-100 text-xs">Revenue Sharing</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">创作者收入</span>
                  <span className="text-lg font-bold">85%</span>
                </div>
                <Progress value={85} className="h-1.5 bg-white/20" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">平台服务费</span>
                  <span className="text-lg font-bold">15%</span>
                </div>
                <Progress value={15} className="h-1.5 bg-white/20" />
              </div>
            </div>
            
            <div className="mt-3 p-2.5 bg-white/10 rounded-lg">
              <p className="text-xs text-blue-100">
                💡 行业领先的分成比例，让您的专业技能获得最大化收益
              </p>
            </div>
            
            <Button className="w-full mt-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 text-xs">
              开始创作
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-1.5">
                  <benefit.icon className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-xs">{benefit.title}</h4>
                <p className="text-gray-600 text-xs leading-tight">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}