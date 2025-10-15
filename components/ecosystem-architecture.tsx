"use client"

import { motion } from "framer-motion"
import { ArrowUpDown, Globe, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function EcosystemArchitecture() {
  const { t } = useLanguage()
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.ecosystemArchitecture.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.ecosystemArchitecture.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Application Layer */}
          <motion.div variants={item} className="mb-8">
            <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                      <Globe className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {t.ecosystemArchitecture.applicationLayer.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.ecosystemArchitecture.applicationLayer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Connection Arrow */}
          <motion.div 
            variants={item}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-col items-center">
              <ArrowUpDown className="size-8 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground mt-2">{t.ecosystemArchitecture.dataInteraction}</span>
            </div>
          </motion.div>

          {/* Protocol Layer */}
          <motion.div variants={item} className="mb-12">
            <Card className="relative border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground">
                      <Shield className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {t.ecosystemArchitecture.protocolLayer.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.ecosystemArchitecture.protocolLayer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            variants={item}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            >
              {t.ecosystemArchitecture.learnMoreButton}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl opacity-50"></div>
      </div>
    </section>
  )
}