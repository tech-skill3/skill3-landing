"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Lock, CheckCircle, TrendingUp, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import ROICalculator from "./roi-calculator"

export default function OaasEngine() {
  const { t } = useLanguage()
  
  const workflowSteps = [
    {
      title: t.solutions.oaasEngine.workflowSteps.defineKPI.title,
      description: t.solutions.oaasEngine.workflowSteps.defineKPI.description,
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t.solutions.oaasEngine.workflowSteps.matchSkills.title,
      description: t.solutions.oaasEngine.workflowSteps.matchSkills.description,
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t.solutions.oaasEngine.workflowSteps.lockFunds.title,
      description: t.solutions.oaasEngine.workflowSteps.lockFunds.description,
      icon: Lock,
      color: "from-orange-500 to-red-500"
    },
    {
      title: t.solutions.oaasEngine.workflowSteps.achieveKPI.title,
      description: t.solutions.oaasEngine.workflowSteps.achieveKPI.description,
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: t.solutions.oaasEngine.workflowSteps.verifyResults.title,
      description: t.solutions.oaasEngine.workflowSteps.verifyResults.description,
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: t.solutions.oaasEngine.workflowSteps.autoSettle.title,
      description: t.solutions.oaasEngine.workflowSteps.autoSettle.description,
      icon: ArrowRight,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-background to-muted/20 border-2">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.solutions.oaasEngine.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {t.solutions.oaasEngine.subtitle}
                </p>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                  {t.solutions.oaasEngine.description}
                </p>
                <Button size="lg" variant="outline" className="rounded-full">
                  {t.solutions.oaasEngine.learnMoreButton}
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>

              {/* OaaS工作流程 */}
              <div className="bg-background/50 rounded-xl p-8 border">
                <h3 className="text-2xl font-semibold text-center mb-8">
                  {t.solutions.oaasEngine.workflowTitle}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4`}>
                            <step.icon className="size-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                      
                      {/* 箭头连接线 */}
                      {index < workflowSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="size-6 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* 流程总结 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center"
                >
                  <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-base font-medium">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.defineKPI.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.matchSkills.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.lockFunds.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.achieveKPI.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.verifyResults.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">{t.solutions.oaasEngine.workflowSteps.autoSettle.title}</span>
                  </div>
                </motion.div>
              </div>

              {/* ROI 计算器 */}
              <ROICalculator />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}