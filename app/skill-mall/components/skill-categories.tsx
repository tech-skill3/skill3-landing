"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Briefcase, Brain, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"

export default function SkillCategories() {
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

  const skillCategories = [
    {
      icon: <Code className="size-8" />,
      title: "编程开发",
      subtitle: "Programming & Development",
      description: "掌握前沿编程技术，从基础语法到高级架构设计，AI导师全程陪伴指导",
      courses: "120+",
      students: "15K+",
      rating: "4.9",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      popular: true
    },
    {
      icon: <Palette className="size-8" />,
      title: "设计创意",
      subtitle: "Design & Creative",
      description: "学习UI/UX设计、平面设计、品牌设计等创意技能，释放你的创造力",
      courses: "85+",
      students: "12K+",
      rating: "4.8",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
    },
    {
      icon: <Briefcase className="size-8" />,
      title: "商业管理",
      subtitle: "Business & Management",
      description: "提升商业思维和管理能力，掌握市场营销、项目管理、领导力等核心技能",
      courses: "95+",
      students: "18K+",
      rating: "4.7",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
      icon: <Brain className="size-8" />,
      title: "人工智能",
      subtitle: "AI & Machine Learning",
      description: "深入AI和机器学习领域，掌握深度学习、自然语言处理等前沿技术",
      courses: "75+",
      students: "22K+",
      rating: "4.9",
      gradient: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      popular: true
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.skillMall.skillCategories.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.skillMall.skillCategories.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full border-0 shadow-lg bg-gradient-to-br ${category.bgColor} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                {category.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      <Star className="size-3 mr-1" />
                      {t.skillMall.skillCategories.popularBadge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{category.courses}</div>
                      <div className="text-xs text-muted-foreground">{t.skillMall.skillCategories.coursesLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{category.students}</div>
                      <div className="text-xs text-muted-foreground">{t.skillMall.skillCategories.studentsLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary flex items-center justify-center">
                        <Star className="size-4 mr-1 fill-current" />
                        {category.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.skillMall.skillCategories.ratingLabel}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full rounded-full" variant="outline">
                    {t.skillMall.skillCategories.exploreButton}
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