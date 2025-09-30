"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  TrendingUp, 
  Building, 
  Shield, 
  Users,
  ArrowRight,
  Star
} from "lucide-react"

export default function SuccessStories() {
  const stories = [
    {
      name: "Jenny",
      background: "8年投行",
      achievement: "金融AI NFT",
      result: "$45,000被动收入",
      icon: Building,
      stats: {
        revenue: "$45,000",
        period: "月被动收入",
        growth: "+320%"
      },
      description: "将8年投行经验转化为AI智课师，创建金融分析NFT课程",
      tags: ["金融", "AI NFT", "被动收入"]
    },
    {
      name: "Kris",
      background: "Python课程",
      achievement: "150+企业客户",
      result: "月收益增长800%",
      icon: Users,
      stats: {
        revenue: "800%",
        period: "月收益增长",
        growth: "150+"
      },
      description: "Python编程课程吸引150+企业客户，实现收益爆发式增长",
      tags: ["编程", "企业培训", "技能变现"]
    },
    {
      name: "Dr.Li",
      background: "医疗知识",
      achievement: "Web3资产",
      result: "IP保护完成",
      icon: Shield,
      stats: {
        revenue: "100%",
        period: "IP保护率",
        growth: "永久"
      },
      description: "医疗专业知识转化为Web3资产，实现知识产权永久保护",
      tags: ["医疗", "Web3", "IP保护"]
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
            🏆 成功创作者案例
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            真实创作者的成功故事
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            看看其他专家如何通过AI智课师实现知识变现突破
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <story.icon className="h-6 w-6 text-primary" />
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
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">加入成功创作者行列</h3>
                <Star className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                每天都有新的专家通过AI智课师实现知识变现突破，下一个成功故事就是你
              </p>
              <Button size="lg" className="group">
                查看更多成功案例
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}