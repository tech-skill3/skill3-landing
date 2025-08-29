"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  Award,
  Play,
  Code,
  BarChart3,
  CheckCircle,
  ArrowLeft,
  Share2,
  Heart,
  Download,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BookOpen,
  ChevronDown,
  Globe,
  Calendar
} from "lucide-react"
import Link from "next/link"

export default function AgentDetailPage({ params }: { params: { id: string } }) {
  // Mock data - 在实际项目中这里会从API获取数据
  const agentData = {
    id: params.id,
    title: "AI Sales Elite Skill Unit",
    description: "Master AI-powered sales techniques and automation to boost your sales performance",
    creator: {
      name: "Sarah Chen",
      title: "Expert Creator",
      avatar: "SC",
      bio: "拥有10年销售经验的资深专家，曾在多家500强企业担任销售总监，专注于AI销售技术的研究和应用。",
      followers: 15420,
      courses: 12,
      rating: 4.9
    },
    rating: 4.8,
    reviews: 2847,
    students: 12450,
    level: "Beginner",
    duration: "3 months",
    price: 99,
    originalPrice: 149,
    earnSkill: 150,
    hasNFT: true,
    category: "AI销售",
    tags: ["AI", "销售", "自动化", "CRM", "客户分析"],
    features: [
      "24/7 AI销售助手",
      "实时客户分析",
      "自动化销售流程", 
      "个性化销售策略",
      "销售数据分析",
      "CRM系统集成"
    ],
    courses: [
      { 
        title: "Retail Basics Video Course", 
        duration: "2小时", 
        type: "视频课程",
        completed: false,
        icon: <Play className="w-4 h-4" />
      },
      { 
        title: "AI Customer Simulation Practice", 
        duration: "1.5小时", 
        type: "实践练习",
        completed: false,
        icon: <Target className="w-4 h-4" />
      },
      { 
        title: "CRM Integration Workshop", 
        duration: "3小时", 
        type: "实战工作坊",
        completed: false,
        icon: <Code className="w-4 h-4" />
      },
      { 
        title: "Final Assessment Course", 
        duration: "1小时", 
        type: "考核测试",
        completed: false,
        icon: <Award className="w-4 h-4" />
      }
    ],
    reviews_data: [
      {
        user: "李明",
        avatar: "LM",
        rating: 5,
        date: "2024-01-15",
        comment: "非常实用的课程，AI销售助手帮我提升了30%的转化率！",
        helpful: 45
      },
      {
        user: "王小雨", 
        avatar: "WXY",
        rating: 5,
        date: "2024-01-10",
        comment: "Sarah老师的讲解很清晰，实践项目很有帮助，推荐给所有销售人员。",
        helpful: 32
      },
      {
        user: "张博士",
        avatar: "ZBS", 
        rating: 4,
        date: "2024-01-08",
        comment: "内容丰富，但有些技术部分可以再详细一些。总体很满意！",
        helpful: 28
      }
    ]
  }

  return (
    <div className="flex-1 bg-gray-900 text-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-800 py-4">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/agent-mall" className="hover:text-white">Browse</Link>
            <span>/</span>
            <span className="text-white">{agentData.title}</span>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{agentData.title}</h1>              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(agentData.rating) 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-gray-500'
                      }`} 
                    />
                  ))}
                  <span className="font-semibold ml-2 text-white">{agentData.rating}</span>
                  <span className="text-gray-400">({agentData.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="text-gray-400">
                  {agentData.students.toLocaleString()} already enrolled
                </div>
              </div>

            </motion.div>

            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-video">
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-black/50 rounded px-2 py-1 text-xs text-white">
                  Preview available
                </div>
              </div>
            </motion.div>

            {/* What you'll learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">What you'll learn</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "AI-powered customer analysis",
                  "Automated lead qualification", 
                  "Personalized sales messaging",
                  "CRM integration and optimization",
                  "Sales performance analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Course content</h3>
              <div className="space-y-2">
                {[
                  {
                    title: "Introduction to AI Sales",
                    lessons: 8,
                    duration: "2 hours",
                    hasPreview: true
                  },
                  {
                    title: "Customer Data Analysis", 
                    lessons: 12,
                    duration: "3 hours",
                    hasPreview: false
                  },
                  {
                    title: "AI Tools and Platforms",
                    lessons: 15,
                    duration: "4 hours", 
                    hasPreview: false
                  },
                  {
                    title: "Advanced Sales Automation",
                    lessons: 18,
                    duration: "5 hours",
                    hasPreview: false
                  }
                ].map((section, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg">
                    <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800/50">
                      <div>
                        <h4 className="font-medium text-white">{section.title}</h4>
                        <div className="text-sm text-gray-400">
                          {section.lessons} lessons • {section.duration}
                          {section.hasPreview && " • Preview available"}
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Reviews</h3>
              <div className="space-y-6">
                {agentData.reviews_data.map((review, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium text-white">{review.user}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'text-yellow-500 fill-yellow-500' 
                                  : 'text-gray-500'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{review.comment}</p>
                    </div>
                  </div>
                ))}
                <button className="text-blue-400 text-sm hover:underline">
                  Show all 3 reviews
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">${agentData.price}</div>
                  <div className="text-blue-400 mb-4">
                    Earn {agentData.earnSkill} $SKILL + Outcome NFT
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md">
                    Enroll Now
                  </Button>
                  <div className="text-xs text-gray-400 mt-2">
                    Included in your organization's learning program
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>3 months to complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Beginner level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>English</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated December 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Instructor Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-4">
                {[1].map((_, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Instructor</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {agentData.creator.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium">{agentData.creator.name}</div>
                        <div className="text-xs text-gray-400">12,000+ students</div>
                        <div className="text-xs text-gray-400">8 courses</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
