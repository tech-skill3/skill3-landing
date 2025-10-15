"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  TrendingUp, 
  ArrowRight,
  Star
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function SuccessStories() {
  const { t } = useLanguage()

  const stories = [
    {
      icon: "👨‍💼",
      background: "bg-gradient-to-br from-blue-50 to-indigo-100",
      ...t.creatorHub.successStories.stories.story1,
      stats: {
        revenue: "¥50万",
        period: "6个月",
        growth: "+300%"
      }
    },
    {
      icon: "👩‍🎨",
      background: "bg-gradient-to-br from-purple-50 to-pink-100",
      ...t.creatorHub.successStories.stories.story2,
      stats: {
        revenue: "¥80万",
        period: "8个月",
        growth: "+450%"
      }
    },
    {
      icon: "👨‍💻",
      background: "bg-gradient-to-br from-green-50 to-emerald-100",
      ...t.creatorHub.successStories.stories.story3,
      stats: {
        revenue: "¥120万",
        period: "1年",
        growth: "+600%"
      }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
            {t.creatorHub.successStories.title}
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.creatorHub.successStories.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.creatorHub.successStories.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <Card className="transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    {/* 创作者信息 */}
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                        {story.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">{story.background}</p>
                      </div>
                    </div>

                    {/* 成就描述 */}
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="font-medium">{story.achievement}</span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{story.result}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {story.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 数据统计 */}
                    <div className="text-center">
                      <div className="bg-primary/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {story.stats.revenue}
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">
                          {story.stats.period}
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-500 font-medium">
                            {story.stats.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                 <Star className="w-5 h-5 text-primary" />
                 <h3 className="text-xl font-semibold">{t.creatorHub.successStories.subtitle}</h3>
                 <Star className="w-5 h-5 text-primary" />
               </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                 {t.creatorHub.successStories.description}
               </p>
              <Button size="lg" className="group">
                {t.creatorHub.successStories.joinButton}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}