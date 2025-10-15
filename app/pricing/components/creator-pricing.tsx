"use client"

import React from "react"
import { motion } from "framer-motion"
import { PieChart, TrendingUp, Users, DollarSign, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CreatorPricing() {
  const { t } = useLanguage()
  const benefits = [
    {
      icon: DollarSign,
      title: t.pricing.creator.features.items.monetization.title,
      description: t.pricing.creator.features.items.monetization.description,
      color: "green"
    },
    {
      icon: TrendingUp,
      title: t.pricing.creator.features.items.marketing.title,
      description: t.pricing.creator.features.items.marketing.description,
      color: "blue"
    },
    {
      icon: Users,
      title: t.pricing.creator.features.items.support.title,
      description: t.pricing.creator.features.items.support.description,
      color: "purple"
    },
    {
      icon: Award,
      title: t.pricing.creator.features.items.community.title,
      description: t.pricing.creator.features.items.community.description,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.creator.title}</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t.pricing.creator.subtitle}
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
                <h3 className="text-lg font-bold">{t.pricing.creator.revenueShare.title}</h3>
                <p className="text-blue-100 text-xs">Revenue Share</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">创作者收入</span>
                  <span className="text-lg font-bold">{t.pricing.creator.revenueShare.percentage}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5">
                  <div className="bg-white h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">{t.pricing.creator.platformFee.title}</span>
                  <span className="text-lg font-bold">{t.pricing.creator.platformFee.percentage}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5">
                  <div className="bg-white/60 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 p-2.5 bg-white/10 rounded-lg">
              <p className="text-xs text-blue-100">
                {t.pricing.creator.note}
              </p>
            </div>
            
            <Button className="w-full mt-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 text-xs">
              {t.pricing.creator.joinButton}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {t.pricing.creator.features.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className={`p-2 rounded-lg ${
                  benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                  benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}