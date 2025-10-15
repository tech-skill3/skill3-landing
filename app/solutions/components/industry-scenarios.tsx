"use client"

import { motion } from "framer-motion"
import { ChevronRight, Building2, ShoppingCart, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function IndustryScenarios() {
  const { t } = useLanguage()
  
  const scenarios = [
    {
      title: t.solutions.industryScenarios.scenarios.finance.title,
      subtitle: t.solutions.industryScenarios.scenarios.finance.subtitle,
      description: t.solutions.industryScenarios.scenarios.finance.description,
      features: t.solutions.industryScenarios.scenarios.finance.features,
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 to-cyan-950/20"
    },
    {
      title: t.solutions.industryScenarios.scenarios.retail.title,
      subtitle: t.solutions.industryScenarios.scenarios.retail.subtitle,
      description: t.solutions.industryScenarios.scenarios.retail.description,
      features: t.solutions.industryScenarios.scenarios.retail.features,
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 to-emerald-950/20"
    },
    {
      title: t.solutions.industryScenarios.scenarios.programming.title,
      subtitle: t.solutions.industryScenarios.scenarios.programming.subtitle,
      description: t.solutions.industryScenarios.scenarios.programming.description,
      features: t.solutions.industryScenarios.scenarios.programming.features,
      icon: Code,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 to-pink-950/20"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.solutions.industryScenarios.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.solutions.industryScenarios.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                <CardHeader className={`bg-gradient-to-br ${scenario.bgColor} rounded-t-lg`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${scenario.color} flex items-center justify-center`}>
                      <scenario.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{scenario.title}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {scenario.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {scenario.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {scenario.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${scenario.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/5 transition-colors"
                  >
                    {t.solutions.industryScenarios.learnMoreButton}
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 底部统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.solutions.industryScenarios.stats.coverage.value}</div>
            <div className="text-muted-foreground">{t.solutions.industryScenarios.stats.coverage.label}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.solutions.industryScenarios.stats.successRate.value}</div>
            <div className="text-muted-foreground">{t.solutions.industryScenarios.stats.successRate.label}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.solutions.industryScenarios.stats.roiImprovement.value}</div>
            <div className="text-muted-foreground">{t.solutions.industryScenarios.stats.roiImprovement.label}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}