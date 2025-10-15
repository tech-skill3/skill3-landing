"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Coins, Zap, Star, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LearnerPricing() {
  const { t } = useLanguage()

  const paymentMethods = [
    {
      icon: CreditCard,
      title: t.pricing.learner.paymentMethods.fiat.title,
      description: t.pricing.learner.paymentMethods.fiat.description,
      color: "blue"
    },
    {
      icon: Coins,
      title: t.pricing.learner.paymentMethods.crypto.title,
      description: t.pricing.learner.paymentMethods.crypto.description,
      color: "orange"
    },
    {
      icon: Gift,
      title: t.pricing.learner.paymentMethods.skill.title,
      description: t.pricing.learner.paymentMethods.skill.description,
      color: "purple",
      badge: t.pricing.learner.paymentMethods.skill.badge
    }
  ]

  const features = t.pricing.learner.features

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
            {t.pricing.learner.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.pricing.learner.subtitle}
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
                <h3 className="text-2xl font-bold text-gray-900">{t.pricing.learner.onDemandPurchase.title}</h3> 
               </div> 
               <p className="text-gray-600 mb-6"> 
                 {t.pricing.learner.onDemandPurchase.description}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.pricing.learner.paymentMethods.title}</h3>
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
            <h3 className="text-2xl font-bold mb-4">{t.pricing.learner.skillTokens.title}</h3>
            <p className="text-blue-100 mb-6">
              {t.pricing.learner.skillTokens.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">{t.pricing.learner.skillTokens.advantages.discount.title}</h4>
                <p className="text-blue-100 text-sm">{t.pricing.learner.skillTokens.advantages.discount.description}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">{t.pricing.learner.skillTokens.advantages.priority.title}</h4>
                <p className="text-blue-100 text-sm">{t.pricing.learner.skillTokens.advantages.priority.description}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Gift className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">{t.pricing.learner.skillTokens.advantages.community.title}</h4>
                <p className="text-blue-100 text-sm">{t.pricing.learner.skillTokens.advantages.community.description}</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-xl"
            >
              {t.pricing.learner.skillTokens.exploreButton}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}