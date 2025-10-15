"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Upload, 
  CheckCircle, 
  Smartphone,
  Sparkles,
  Zap,
  DollarSign
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CreatorStudioExperience() {
  const { t } = useLanguage()

  const features = [
    {
      icon: CheckCircle,
      ...t.creatorHub.creatorStudio.features.aiAssistant
    },
    {
      icon: Upload,
      ...t.creatorHub.creatorStudio.features.contentCreation
    },
    {
      icon: Sparkles,
      ...t.creatorHub.creatorStudio.features.analytics
    },
    {
      icon: DollarSign,
      title: t.creatorHub.tripleIncentive.incentives.financial.features.instantSettlement.title,
      description: t.creatorHub.tripleIncentive.incentives.financial.features.instantSettlement.description
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            {t.creatorHub.creatorStudio.badge}
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.creatorHub.creatorStudio.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.creatorHub.creatorStudio.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* 左侧：零门槛介绍说明 */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t.creatorHub.creatorStudio.introTitle}</h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="w-full sm:w-auto">
                <Zap className="w-4 h-4 mr-2" />
                {t.creatorHub.creatorStudio.tryNowButton}
              </Button>
            </motion.div>
          </motion.div>

          {/* 右侧：实时创作窗口 */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">{t.creatorHub.creatorStudio.liveCreationTitle}</h3>
            </div>

            <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-0">
                <iframe 
                  className="w-full h-96 rounded-lg"
                  style={{ border: 'none' }}
                  title="Creator Studio Experience"
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}