"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, X, Star, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function EnterprisePricing() {
  const { t } = useLanguage();
  const plans = [
    {
      name: t.pricing.enterprise.plans.starter.name,
      subtitle: "Standard",
      description: t.pricing.enterprise.plans.starter.description,
      icon: <Zap className="w-6 h-6" />,
      pricing: t.pricing.enterprise.plans.starter.price + t.pricing.enterprise.plans.starter.period,
      popular: false,
      features: t.pricing.enterprise.plans.starter.features,
      button: t.pricing.enterprise.plans.starter.button
    },
    {
      name: t.pricing.enterprise.plans.professional.name,
      subtitle: "Professional", 
      description: t.pricing.enterprise.plans.professional.description,
      icon: <Star className="w-6 h-6" />,
      pricing: t.pricing.enterprise.plans.professional.price + t.pricing.enterprise.plans.professional.period,
      popular: true,
      features: t.pricing.enterprise.plans.professional.features,
      button: t.pricing.enterprise.plans.professional.button,
      popularLabel: t.pricing.enterprise.plans.professional.popular
    },
    {
      name: t.pricing.enterprise.plans.enterprise.name,
      subtitle: "Enterprise",
      description: t.pricing.enterprise.plans.enterprise.description,
      icon: <Shield className="w-6 h-6" />,
      pricing: t.pricing.enterprise.plans.enterprise.price,
      popular: false,
      features: t.pricing.enterprise.plans.enterprise.features,
      button: t.pricing.enterprise.plans.enterprise.button
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.pricing.enterprise.title}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t.pricing.enterprise.subtitle}</p>
          <p className="text-lg text-muted-foreground">{t.pricing.enterprise.description}</p>
        </motion.div>

        {/* 套餐卡片概览 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {plan.popularLabel}
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{plan.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <p className="text-lg font-semibold text-primary">{plan.pricing}</p>
                </div>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* 功能列表展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}