"use client"

import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Target, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ValuePricing() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            价值定价 (Value-Based Pricing)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            针对特定业务 KPI，提供"成果即服务"合作模式，将部分资金与最终业务结果挂钩
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">KPI 导向</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  基于您的具体业务指标和目标，制定个性化的成果衡量标准
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">成果挂钩</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  部分费用与实际业务成果直接关联，确保投资回报率最大化
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">风险共担</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  我们与您共同承担项目风险，确保双方利益一致，共同成功
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                OaaS (Outcome as a Service)
              </h3>
              <p className="text-gray-600 mb-6">
                我们不仅提供技术平台，更承诺具体的业务成果。通过深度合作，
                将我们的成功与您的业务增长紧密绑定，实现真正的价值共创。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  定制化 KPI 设定与追踪
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  阶段性成果验收机制
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  灵活的付费结构设计
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  长期战略合作伙伴关系
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
                <h4 className="text-xl font-bold mb-2">准备开始？</h4>
                <p className="text-blue-100 mb-4">
                  让我们一起探讨如何为您的业务创造最大价值
                </p>
                <div className="text-3xl font-bold mb-2">定制报价</div>
                <div className="text-blue-200">基于您的具体需求</div>
              </div>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                联系销售获取报价
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}