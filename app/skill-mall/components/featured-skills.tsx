"use client"

import { motion } from "framer-motion"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedSkills() {
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

  const featuredSkills = [
    {
      title: "React 全栈开发",
      instructor: "张老师",
      rating: 4.9,
      students: 2840,
      duration: "12小时",
      level: "中级",
      price: "¥299",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      title: "UI/UX 设计实战",
      instructor: "李老师",
      rating: 4.8,
      students: 1920,
      duration: "8小时",
      level: "初级",
      price: "¥199",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      title: "Python 机器学习",
      instructor: "王老师",
      rating: 4.9,
      students: 3560,
      duration: "16小时",
      level: "高级",
      price: "¥399",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
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
          className="text-center mb-16"
        >
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            精选推荐课程
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            由行业专家精心打造，AI技术加持的高质量学习体验
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredSkills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-black border-0">
                    {skill.level}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">讲师：{skill.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="size-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{skill.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({skill.students}人)</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="size-4 mr-1" />
                      {skill.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">{skill.price}</div>
                    <Button size="sm" className="rounded-full">
                      立即学习
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}