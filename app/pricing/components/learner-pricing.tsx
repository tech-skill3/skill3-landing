"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Coins, Zap, Star, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LearnerPricing() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "法币支付",
      description: "支持主流信用卡、借记卡及移动支付",
      color: "blue"
    },
    {
      icon: Coins,
      title: "加密货币",
      description: "支持主流加密货币支付",
      color: "orange"
    },
    {
      icon: Gift,
      title: "$SKILL 代币",
      description: "使用平台代币享受专属折扣",
      color: "purple",
      badge: "即将推出"
    }
  ]

  const features = [
    "创作者独立定价，价格透明",
    "即买即用，无需订阅",
    "支持多种支付方式",
    "永久访问已购买技能",
    "社区评价与推荐系统",
    "技能学习进度追踪"
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            学习者定价 (Learner Pricing)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            在 Skill Mall 中按需购买 AI 技能体，由创作者独立定价，支持多种支付方式
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <ShoppingCart className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">按需购买模式</h3>
              </div>
              <p className="text-gray-600 mb-6">
                无需订阅费用，只为您真正需要的技能付费。每个 AI 技能体都由专业创作者精心设计，
                价格由创作者根据技能复杂度和价值独立制定。
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">支付方式</h3>
              {paymentMethods.map((method, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                          method.color === 'blue' ? 'bg-blue-100' :
                          method.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'
                        }`}>
                          <method.icon className={`w-6 h-6 ${
                            method.color === 'blue' ? 'text-blue-600' :
                            method.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                      {method.badge && (
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {method.badge}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">$SKILL 代币优势</h3>
            <p className="text-blue-100 mb-6">
              未来使用 $SKILL 代币支付将享受专属折扣和额外权益，
              包括优先访问新技能、社区投票权和创作者分红等。
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">专属折扣</h4>
                <p className="text-blue-100 text-sm">使用代币享受额外优惠</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">优先访问</h4>
                <p className="text-blue-100 text-sm">抢先体验最新技能</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Gift className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">社区权益</h4>
                <p className="text-blue-100 text-sm">参与治理和分红</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-xl"
            >
              探索 Skill Mall
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}