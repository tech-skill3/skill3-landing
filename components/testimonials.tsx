"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "通过Skill³的学习，我不仅掌握了React开发技能，还成功构建了第一个Agent，并赚取了5000 SKILL代币！这不仅仅是学习，更是一次职业转型。",
      author: "张三",
      role: "AI学习者",
      avatar: "张",
      rating: 5,
      achievement: "构建Agent赚取5000 SKILL"
    },
    {
      quote: "作为一名前端开发者，我在这里学习了AI技能。现在我能为企业提供AI+前端的完整解决方案，收入翻了三倍！",
      author: "李四",
      role: "Agent开发者",
      avatar: "李",
      rating: 5,
      achievement: "收入翻三倍"
    },
    {
      quote: "我创建的Python技能课程已经帮助了2000多名学员学习，现在每月有稳定的被动收入。这是我见过的最棒的创作者平台！",
      author: "王五",
      role: "技能创作者",
      avatar: "王",
      rating: 5,
      achievement: "2000名学员，月收入稳定"
    },
    {
      quote: "我们的公司通过Skill³培训了30名员工，三个月后团队的开发效率提升了40%。最重要的是，我们能看到每个人的具体进步。",
      author: "赵六",
      role: "企业HR总监",
      avatar: "赵",
      rating: 5,
      achievement: "团队效率提升40%"
    },
    {
      quote: "从零开始学习数据科学，三个月后我不仅拿到了NFT证书，还找到了月薪3万的工作。Skill³改变了我的人生！",
      author: "陈七",
      role: "数据分析师",
      avatar: "陈",
      rating: 5,
      achievement: "月薪3万数据分析师"
    }
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">用户好评</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            听听我们用户的声音，他们通过Skill³实现了职业突破和技能提升
          </p>
        </motion.div>

        {/* Featured Testimonial (Large Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <Quote className="size-12 text-primary/20" />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-6">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center md:text-left">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start">
                    {Array(testimonials[currentIndex].rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="size-5 text-yellow-500 fill-yellow-500" />
                      ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="flex justify-center md:justify-start">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      🏆 {testimonials[currentIndex].achievement}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full size-10"
          >
            <ChevronLeft className="size-4" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`size-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full size-10"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>

        {/* Grid of Other Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.slice(0, 4).map((testimonial, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                      ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm mb-4 flex-grow line-clamp-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/40">
                    <div className="size-8 rounded-full bg-muted flex items-center justify-center text-foreground font-medium text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="mt-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium text-center">
                      {testimonial.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">加入我们的成功用户行列</h3>
            <p className="text-muted-foreground mb-6">
              数千用户已通过Skill³实现了技能提升和职业突破
            </p>
            <Button className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
              开始您的成功之旅
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
