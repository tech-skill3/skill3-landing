"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, Clock, Star, Bell, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

export default function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/40 shadow-xl">
            <motion.div variants={item} className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6">
                <Mail className="size-8" />
              </div>
              <h2 className="font-hero text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {t.newsletter.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.newsletter.subtitle}
              </p>
            </motion.div>

            {!isSubscribed ? (
              <motion.form 
                variants={item}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder={t.newsletter.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 px-4 text-base border-2 border-border/40 focus:border-primary/50 bg-background/80 backdrop-blur-sm rounded-xl"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading || !email}
                    className="h-12 px-8 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{t.newsletter.subscribingButton}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="size-4" />
                        <span>{t.newsletter.subscribeButton}</span>
                      </div>
                    )}
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                  {t.newsletter.privacyNote}
                </p>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                variants={item}
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white mb-4">
                  <CheckCircle className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.newsletter.successTitle}
                </h3>
                <p className="text-muted-foreground">
                  {t.newsletter.successMessage}
                </p>
              </motion.div>
            )}

            {/* 订阅福利 */}
            <motion.div 
              variants={item}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-border/40"
            >
              <div className="text-center">
                <Clock className="size-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium">{t.newsletter.benefits.weekly}</div>
                <div className="text-xs text-muted-foreground">{t.newsletter.benefits.weeklyDesc}</div>
              </div>
              <div className="text-center">
                <Star className="size-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-sm font-medium">{t.newsletter.benefits.exclusive}</div>
                <div className="text-xs text-muted-foreground">{t.newsletter.benefits.exclusiveDesc}</div>
              </div>
              <div className="text-center">
                <Bell className="size-8 text-green-500 mx-auto mb-2" />
                <div className="text-sm font-medium">{t.newsletter.benefits.priority}</div>
                <div className="text-xs text-muted-foreground">{t.newsletter.benefits.priorityDesc}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute top-1/3 left-1/3 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/3 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl opacity-50"></div>
    </section>
  )
}