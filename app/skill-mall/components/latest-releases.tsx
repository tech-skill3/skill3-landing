"use client"

import { motion } from "framer-motion"
import { Star, ChevronRight, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LatestReleases() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const latestSkills = [
    {
      id: 1,
      title: t.skillMall.courses.latest.aiVirtualStreamer.title,
      subtitle: t.skillMall.courses.latest.aiVirtualStreamer.subtitle,
      description: t.skillMall.courses.latest.aiVirtualStreamer.description,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.aiVirtualStreamer.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      difficulty: t.skillMall.courses.latest.aiVirtualStreamer.difficulty,
      price: "¥1,599",
      spReward: "2,400 SP",
      sbtType: t.skillMall.courses.latest.aiVirtualStreamer.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.aiVirtualStreamer.category,
      releaseDate: "2024-01-15"
    },
    {
      id: 2,
      title: t.skillMall.courses.latest.web3GameDevelopment.title,
      subtitle: t.skillMall.courses.latest.web3GameDevelopment.subtitle,
      description: t.skillMall.courses.latest.web3GameDevelopment.description,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.web3GameDevelopment.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: t.skillMall.courses.latest.web3GameDevelopment.difficulty,
      price: "¥2,299",
      spReward: "3,500 SP",
      sbtType: t.skillMall.courses.latest.web3GameDevelopment.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.web3GameDevelopment.category,
      releaseDate: "2024-01-12"
    },
    {
      id: 3,
      title: t.skillMall.courses.latest.aiMusicComposition.title,
      subtitle: t.skillMall.courses.latest.aiMusicComposition.subtitle,
      description: t.skillMall.courses.latest.aiMusicComposition.description,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.aiMusicComposition.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.7,
      difficulty: t.skillMall.courses.latest.aiMusicComposition.difficulty,
      price: "¥1,299",
      spReward: "1,950 SP",
      sbtType: t.skillMall.courses.latest.aiMusicComposition.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.aiMusicComposition.category,
      releaseDate: "2024-01-10"
    },
    {
      id: 4,
      title: t.skillMall.courses.latest.smartContractAuditing.title,
      subtitle: t.skillMall.courses.latest.smartContractAuditing.subtitle,
      description: t.skillMall.courses.latest.smartContractAuditing.description,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.smartContractAuditing.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: t.skillMall.courses.latest.smartContractAuditing.difficulty,
      price: "¥2,799",
      spReward: "4,200 SP",
      sbtType: t.skillMall.courses.latest.smartContractAuditing.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.smartContractAuditing.category,
      releaseDate: "2024-01-08"
    },
    {
      id: 5,
      title: t.skillMall.courses.latest.aiVideoEditing.title,
      subtitle: t.skillMall.courses.latest.aiVideoEditing.subtitle,
      description: t.skillMall.courses.latest.aiVideoEditing.description,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.aiVideoEditing.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      difficulty: t.skillMall.courses.latest.aiVideoEditing.difficulty,
      price: "¥1,499",
      spReward: "2,250 SP",
      sbtType: t.skillMall.courses.latest.aiVideoEditing.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.aiVideoEditing.category,
      releaseDate: "2024-01-05"
    },
    {
      id: 6,
      title: t.skillMall.courses.latest.defiProtocolDevelopment.title,
      subtitle: t.skillMall.courses.latest.defiProtocolDevelopment.subtitle,
      description: t.skillMall.courses.latest.defiProtocolDevelopment.description,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=250&fit=crop",
      creator: t.skillMall.courses.latest.defiProtocolDevelopment.creator,
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      difficulty: t.skillMall.courses.latest.defiProtocolDevelopment.difficulty,
      price: "¥3,299",
      spReward: "4,950 SP",
      sbtType: t.skillMall.courses.latest.defiProtocolDevelopment.sbtType,
      isNew: true,
      category: t.skillMall.courses.latest.defiProtocolDevelopment.category,
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
                {t.skillMall.latestReleases.title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {t.skillMall.latestReleases.subtitle}
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
                className="flex-none w-72"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                  <div className="relative">
                    {/* 课程图片 */}
                    <div className="relative h-40 overflow-hidden rounded-t-lg">
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        width={288}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* 新课程标签 */}
                      {skill.isNew && (
                        <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
                          <TrendingUp className="size-3 mr-1" />
                          {t.skillMall.latestReleases.newBadge}
                        </Badge>
                      )}
                      
                      {/* 分类标签 */}
                      <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0 backdrop-blur-sm">
                        {skill.category}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      {/* 课程标题 */}
                      <div className="mb-3">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {skill.title}
                        </h3>
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

                      {/* Web3 价值信息 - 突出显示 */}
                      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-lg p-4 mb-4">
                        <div className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                          <Sparkles className="size-4" />
                          {t.skillMall.latestReleases.web3Value}
                        </div>
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">{t.skillMall.latestReleases.price}</span>
                            <span className="font-bold text-lg text-primary">{skill.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">{t.skillMall.latestReleases.spReward}</span>
                            <span className="font-bold text-green-600">{skill.spReward}</span>
                          </div>
                          <div className="pt-2 border-t border-primary/10">
                            <div className="text-xs text-muted-foreground mb-1">{t.skillMall.latestReleases.certification}</div>
                            <div className="font-medium text-blue-600 text-sm">{skill.sbtType}</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA 按钮 */}
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          {t.skillMall.latestReleases.exploreButton}
                        </Button>
                        <Button size="sm" className="rounded-full group-hover:bg-primary/90 transition-colors">
                          {t.skillMall.latestReleases.buyButton}
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
              {t.skillMall.latestReleases.viewAllButton}
              <ChevronRight className="size-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}