"use client"

import { motion } from "framer-motion"
import { FileText, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BottomCTA() {
  const { t } = useLanguage()
  
  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={item}
            className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            {t.bottomCta.title}
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            {t.bottomCta.subtitle}
          </motion.p>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* 主CTA - 查看白皮书 */}
            <Button
              size="lg"
              className="group relative rounded-full h-14 px-8 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <FileText className="size-5" />
                <span className="font-semibold">{t.bottomCta.whitepaperButton}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Button>

            {/* 副CTA - 加入社区 */}
            <Button
              size="lg"
              variant="outline"
              className="group relative rounded-full h-14 px-8 text-base border-2 border-primary/30 hover:border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Users className="size-5 text-primary" />
                <span className="font-semibold text-foreground">{t.bottomCta.joinCommunityButton}</span>
                <ArrowRight className="size-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
          </motion.div>

          {/* 额外信息 */}
          <motion.div 
            variants={item}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">{t.bottomCta.additionalInfo.free.value}</div>
              <div className="text-sm text-muted-foreground">{t.bottomCta.additionalInfo.free.description}</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">{t.bottomCta.additionalInfo.support.value}</div>
              <div className="text-sm text-muted-foreground">{t.bottomCta.additionalInfo.support.description}</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">{t.bottomCta.additionalInfo.updates.value}</div>
              <div className="text-sm text-muted-foreground">{t.bottomCta.additionalInfo.updates.description}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl opacity-60"></div>
    </section>
  )
}