"use client"

import { motion } from "framer-motion"
import { Star, ChevronRight, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"
import Image from "next/image"

export default function LatestReleases() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const latestSkills = [
    {
      id: 1,
      title: "AI数字人直播技能体",
      subtitle: "AI Virtual Streamer Skill",
      description: "掌握AI数字人技术，打造个人虚拟IP，开启元宇宙直播新时代",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      creator: "陈老师",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      difficulty: "中级",
      price: "¥1,599",
      spReward: "2,400 SP",
      sbtType: "AI创作者认证",
      isNew: true,
      category: "AI技术",
      releaseDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Web3游戏开发技能体",
      subtitle: "Web3 Game Development Skill",
      description: "学习区块链游戏开发，掌握NFT集成，创造下一代游戏体验",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      creator: "李工程师",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: "高级",
      price: "¥2,299",
      spReward: "3,500 SP",
      sbtType: "Web3开发者认证",
      isNew: true,
      category: "区块链",
      releaseDate: "2024-01-12"
    },
    {
      id: 3,
      title: "AI音乐创作技能体",
      subtitle: "AI Music Composition Skill",
      description: "利用AI技术创作原创音乐，掌握音频生成和编辑技能",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      creator: "王音乐家",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4.7,
      difficulty: "初中级",
      price: "¥1,299",
      spReward: "1,950 SP",
      sbtType: "AI音乐师认证",
      isNew: true,
      category: "创意AI",
      releaseDate: "2024-01-10"
    },
    {
      id: 4,
      title: "智能合约审计技能体",
      subtitle: "Smart Contract Auditing Skill",
      description: "学习智能合约安全审计，成为区块链安全专家",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      creator: "张安全专家",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: "高级",
      price: "¥2,799",
      spReward: "4,200 SP",
      sbtType: "区块链安全专家认证",
      isNew: true,
      category: "区块链安全",
      releaseDate: "2024-01-08"
    },
    {
      id: 5,
      title: "AI视频剪辑技能体",
      subtitle: "AI Video Editing Skill",
      description: "掌握AI驱动的视频编辑技术，提升创作效率和质量",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      creator: "赵导演",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      difficulty: "中级",
      price: "¥1,499",
      spReward: "2,250 SP",
      sbtType: "AI视频师认证",
      isNew: true,
      category: "视频制作",
      releaseDate: "2024-01-05"
    },
    {
      id: 6,
      title: "DeFi协议开发技能体",
      subtitle: "DeFi Protocol Development Skill",
      description: "深入学习去中心化金融协议开发，掌握流动性挖矿机制",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=250&fit=crop",
      creator: "刘架构师",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: "专家级",
      price: "¥3,299",
      spReward: "4,950 SP",
      sbtType: "DeFi专家认证",
      isNew: true,
      category: "DeFi",
      releaseDate: "2024-01-03"
    }
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="size-8 text-primary" />
              <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                LATEST RELEASES
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              最新发布的AI技能体，紧跟技术前沿
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full"
            >
              <ChevronRight className="size-4 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </motion.div>

        {/* 水平滚动容器 */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {latestSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-80"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                  <div className="relative">
                    {/* 课程图片 */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        width={320}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* 新课程标签 */}
                      {skill.isNew && (
                        <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
                          <TrendingUp className="size-3 mr-1" />
                          NEW
                        </Badge>
                      )}
                      
                      {/* 分类标签 */}
                      <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0 backdrop-blur-sm">
                        {skill.category}
                      </Badge>
                      
                      {/* 价格 */}
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="font-bold text-sm">{skill.price}</span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* 课程标题 */}
                      <div className="mb-3">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.subtitle}
                        </p>
                      </div>

                      {/* 课程描述 */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {skill.description}
                      </p>

                      {/* 创作者信息 */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={skill.creatorAvatar}
                            alt={skill.creator}
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium">
                            {skill.creator}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="size-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {skill.rating}
                        </div>
                      </div>

                      {/* 难度 */}
                      <div className="mb-4">
                        <Badge variant="outline" className="text-xs">
                          难度：{skill.difficulty}
                        </Badge>
                      </div>

                      {/* Web3 价值信息 */}
                      <div className="bg-muted/50 rounded-lg p-3 mb-4 space-y-2">
                        <div className="text-xs font-medium text-muted-foreground mb-2">Web3 价值</div>
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">价格</span>
                            <span className="font-bold text-primary">{skill.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">SP 奖励</span>
                            <span className="font-bold text-green-600">{skill.spReward}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">SBT 凭证</span>
                            <span className="font-medium text-blue-600 text-right">{skill.sbtType}</span>
                          </div>
                        </div>
                      </div>

                      {/* 发布日期 */}
                      <div className="text-xs text-muted-foreground mb-4">
                        发布于：{skill.releaseDate}
                      </div>

                      {/* CTA 按钮 */}
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          探索
                        </Button>
                        <Button size="sm" className="rounded-full group-hover:bg-primary/90 transition-colors">
                          购买
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button variant="outline" size="lg" className="rounded-full px-8">
              查看全部最新课程
              <ChevronRight className="size-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}