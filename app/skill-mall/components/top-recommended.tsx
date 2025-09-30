"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

export default function TopRecommended() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredSkills = [
    {
      id: 1,
      title: "AI金融交易大师技能体",
      subtitle: "AI Financial Trading Master Skill",
      description: "学习高频交易策略，掌握AI驱动的量化分析技术，获得区块链验证的交易专家认证",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      creator: "李教授",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: "高级",
      price: "¥2,999",
      spReward: "4,500 SP",
      sbtType: "AI金融专家认证",
      skills: ["量化交易", "风险管理", "AI算法", "市场分析"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "AI医疗诊断专家技能体",
      subtitle: "AI Medical Diagnosis Expert Skill",
      description: "掌握AI医学影像分析技能，学习深度学习在医疗诊断中的应用，获得权威医疗AI认证",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      creator: "王博士",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      difficulty: "中高级",
      price: "¥3,499",
      spReward: "5,250 SP",
      sbtType: "AI医疗专家认证",
      skills: ["医学影像", "深度学习", "诊断算法", "数据分析"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "AI创意设计师技能体",
      subtitle: "AI Creative Designer Skill",
      description: "融合AI技术与创意设计，掌握生成式AI工具，创造突破性的视觉作品和用户体验",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      creator: "张大师",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: "中级",
      price: "¥1,999",
      spReward: "3,000 SP",
      sbtType: "AI创意师认证",
      skills: ["生成式AI", "UI设计", "品牌设计", "用户体验"],
      gradient: "from-pink-600 to-orange-600"
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredSkills.length)
  }, [featuredSkills.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSkills.length) % featuredSkills.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            TOP RECOMMENDED
          </h2>
          <p className="text-lg text-muted-foreground">
            精选AI技能体，由行业顶尖专家打造
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* 主轮播区域 */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full border-0 shadow-2xl overflow-hidden">
                  <div className="relative h-full">
                    {/* 背景图片 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${featuredSkills[currentSlide].image})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${featuredSkills[currentSlide].gradient} opacity-90`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* 内容区域 */}
                    <CardContent className="relative h-full flex items-center p-12">
                      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        {/* 左侧内容 */}
                        <div className="text-white">
                          <Badge className="mb-4 bg-white/20 text-white border-white/30">
                            {featuredSkills[currentSlide].sbtType}
                          </Badge>
                          
                          <h3 className="text-4xl md:text-5xl font-bold mb-2">
                            {featuredSkills[currentSlide].title}
                          </h3>
                          <p className="text-xl text-white/80 mb-6">
                            {featuredSkills[currentSlide].subtitle}
                          </p>
                          <p className="text-lg text-white/90 mb-8 leading-relaxed">
                            {featuredSkills[currentSlide].description}
                          </p>

                          {/* 技能标签 */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {featuredSkills[currentSlide].skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                            立即学习
                          </Button>
                        </div>

                        {/* 右侧信息卡片 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                          {/* 创作者信息 */}
                          <div className="flex items-center gap-3 mb-6">
                            <Image
                              src={featuredSkills[currentSlide].creatorAvatar}
                              alt={featuredSkills[currentSlide].creator}
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                            />
                            <div>
                              <div className="text-white font-medium">
                                {featuredSkills[currentSlide].creator}
                              </div>
                              <div className="flex items-center text-white/80">
                                <Star className="size-3 mr-1 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">{featuredSkills[currentSlide].rating}</span>
                              </div>
                            </div>
                          </div>

                          {/* 难度 */}
                          <div className="mb-6">
                            <div className="text-xs text-white/70 mb-1">难度等级</div>
                            <div className="flex items-center text-white">
                              <Award className="size-4 mr-2" />
                              <span className="font-bold">{featuredSkills[currentSlide].difficulty}</span>
                            </div>
                          </div>

                          {/* Web3 价值信息 */}
                          <div className="space-y-3 mb-6">
                            <div className="text-xs text-white/70 mb-2">Web3 价值</div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-white/80 text-sm">价格</span>
                                <span className="text-2xl font-bold text-white">
                                  {featuredSkills[currentSlide].price}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-white/80 text-sm">SP 奖励</span>
                                <span className="font-bold text-green-300">
                                  {featuredSkills[currentSlide].spReward}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-white/80 text-sm">SBT 凭证</span>
                                <span className="font-medium text-blue-300 text-right text-xs">
                                  {featuredSkills[currentSlide].sbtType}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* CTA 按钮 */}
                          <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full">
                              探索
                            </Button>
                            <Button className="bg-white text-black hover:bg-white/90 rounded-full">
                              购买
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 导航按钮 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}