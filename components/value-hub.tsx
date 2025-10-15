"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Building2, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ValueHub() {
  const { t } = useLanguage()
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const audiences = [
    {
      icon: <GraduationCap className="size-8" />,
      title: t.valueHub.learners.title,
      subtitle: t.valueHub.learners.subtitle,
      description: t.valueHub.learners.description,
      benefits: t.valueHub.learners.benefits,
      cta: t.valueHub.learners.cta,
      ctaLink: "/academy",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Users className="size-8" />,
      title: t.valueHub.creators.title,
      subtitle: t.valueHub.creators.subtitle,
      description: t.valueHub.creators.description,
      benefits: t.valueHub.creators.benefits,
      cta: t.valueHub.creators.cta,
      ctaLink: "/creator-hub",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: <Building2 className="size-8" />,
      title: t.valueHub.enterprises.title,
      subtitle: t.valueHub.enterprises.subtitle,
      description: t.valueHub.enterprises.description,
      benefits: t.valueHub.enterprises.benefits,
      cta: t.valueHub.enterprises.cta,
      ctaLink: "/for-teams",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.valueHub.title}</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {t.valueHub.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {audiences.map((audience, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-105">
                <CardHeader className={`pb-6 bg-gradient-to-r ${audience.bgColor}`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-sm ${audience.iconColor}`}>
                      {audience.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{audience.title}</h3>
                      <p className="text-lg font-semibold text-primary">{audience.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 text-center">{audience.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {audience.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className={`mr-3 size-5 ${audience.iconColor} flex-shrink-0`} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full h-12 px-8 text-base font-medium ${audience.buttonColor} text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    {audience.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
