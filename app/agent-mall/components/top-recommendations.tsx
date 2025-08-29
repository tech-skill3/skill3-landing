"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  Award,
  Play,
  Code,
  BarChart3,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Eye,
  Settings
} from "lucide-react"
import Link from "next/link"

export default function TopRecommendations() {
  const featuredAgents = [
    {
      id: "ai-sales-elite",
      title: "AI Sales Elite Skill Unit",
      creator: {
        name: "Sarah Chen",
        title: "Expert Creator",
        avatar: "SC"
      },
      rating: 4.8,
      reviews: 2847,
      level: "Beginner",
      duration: "3 months",
      price: 99,
      earnSkill: 150,
      hasNFT: true,
      description: "Master AI-powered sales techniques and automation",
      courses: [
        { title: "Retail Basics Video Course", number: "Course 1 of 5", icon: <Play className="w-4 h-4" /> },
        { title: "AI Customer Simulation Practice", number: "Course 2 of 5", icon: <Settings className="w-4 h-4" /> },
        { title: "CRM Integration Workshop", number: "Course 3 of 5", icon: <Code className="w-4 h-4" /> },
        { title: "Final Assessment Course", number: "Course 4 of 5", icon: <Award className="w-4 h-4" /> }
      ],
      category: "AI销售",
      color: "blue"
    },
    {
      id: "quantitative-analysis",
      title: "Quantitative Analysis Mastery",
      creator: {
        name: "Dr. Michael Rodriguez",
        title: "Expert Creator",
        avatar: "MR"
      },
      rating: 4.9,
      reviews: 1523,
      level: "Advanced",
      duration: "6 months",
      price: 199,
      earnSkill: 300,
      hasNFT: true,
      description: "Advanced quantitative analysis and financial modeling",
      courses: [
        { title: "Statistics Fundamentals", number: "Course 1 of 5", icon: <BarChart3 className="w-4 h-4" /> },
        { title: "Python for Finance", number: "Course 2 of 5", icon: <Code className="w-4 h-4" /> },
        { title: "AI Model Building", number: "Course 3 of 5", icon: <Settings className="w-4 h-4" /> },
        { title: "Expert Portfolio Course", number: "Course 4 of 5", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      category: "数据分析",
      color: "purple"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      green: "bg-green-100 text-green-700 border-green-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-700",
      Advanced: "bg-orange-100 text-orange-700",
      Expert: "bg-red-100 text-red-700"
    }
    return colors[level as keyof typeof colors] || colors.Beginner
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Top Recommendations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            精选推荐技能代理
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            由专业创作者打造的高质量AI技能代理，经过严格筛选和用户验证，
            为您提供最优质的学习和工作体验。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {featuredAgents.map((agent, index) => (
            <motion.div key={agent.id} variants={itemVariants}>
              <Card className="overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left Side - Agent Info */}
                    <div className="p-8 flex flex-col">
                      {/* Creator Info */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          {agent.creator.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold">{agent.creator.name}</h4>
                          <p className="text-sm text-muted-foreground">{agent.creator.title}</p>
                        </div>
                      </div>

                      {/* Title and Category */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`text-xs ${getCategoryColor(agent.color)}`}>
                            {agent.category}
                          </Badge>
                          <Badge className={`text-xs ${getLevelColor(agent.level)}`}>
                            {agent.level}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{agent.title}</h3>
                        <p className="text-muted-foreground">{agent.description}</p>
                      </div>

                      {/* Rating and Stats */}
                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(agent.rating) 
                                  ? 'text-yellow-500 fill-yellow-500' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                          <span className="font-semibold ml-1">{agent.rating}</span>
                          <span className="text-muted-foreground">({agent.reviews.toLocaleString()} reviews)</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{agent.level}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{agent.duration}</span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold text-green-600">${agent.price}</div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          Earn {agent.earnSkill} $SKILL
                        </div>
                        {agent.hasNFT && (
                          <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            + Outcome NFT
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <Button className="flex-1 rounded-full">
                          Explore Skill Unit
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-full">
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Right Side - Course Preview */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-8 relative">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">课程预览</h4>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {agent.courses.slice(0, 4).map((course, courseIndex) => (
                            <motion.div
                              key={courseIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: courseIndex * 0.1 }}
                              className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-border/40 hover:shadow-sm transition-all cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg ${getCategoryColor(agent.color)} flex items-center justify-center`}>
                                  {course.icon}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium text-sm group-hover:text-primary transition-colors">
                                    {course.title}
                                  </h5>
                                  <p className="text-xs text-muted-foreground">{course.number}</p>
                                </div>
                                <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                          {[0, 1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full transition-all ${
                                dot === 0 ? 'bg-primary' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="rounded-full px-8">
            查看全部技能代理
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
