"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Star,
  Calendar,
  DollarSign,
  Medal,
  Award,
  Crown,
  Zap
} from "lucide-react"

export default function NFTBadgesPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部")

  // 模拟NFT勋章数据
  const badges = [
    {
      id: 1,
      title: "AI Sales Master",
      description: "完成AI销售精英技能体，掌握AI驱动的销售技巧",
      type: "achievement",
      category: "销售",
      earnedDate: "2024-12-15",
      value: 0.8,
      rarity: "Epic",
      image: "🏆",
      skills: ["AI客户分析", "销售流程优化", "CRM集成"],
      issuer: "Skill3 Academy"
    },
    {
      id: 2,
      title: "Full Stack Expert",
      description: "全栈开发大师认证，精通前后端技术栈",
      type: "certification",
      category: "开发",
      earnedDate: "2024-11-28",
      value: 1.5,
      rarity: "Legendary",
      image: "👑",
      skills: ["React", "Node.js", "数据库设计", "DevOps"],
      issuer: "TechCorp University"
    },
    {
      id: 3,
      title: "Innovation Pioneer",
      description: "创新项目领导者，在技术创新方面表现卓越",
      type: "achievement",
      category: "创新",
      earnedDate: "2024-10-10",
      value: 1.2,
      rarity: "Rare",
      image: "💡",
      skills: ["产品设计", "团队协作", "技术前瞻"],
      issuer: "Innovation Hub"
    },
    {
      id: 4,
      title: "Data Science Ninja",
      description: "数据科学忍者认证，熟练掌握数据分析和机器学习",
      type: "certification",
      category: "数据科学",
      earnedDate: "2024-09-22",
      value: 2.1,
      rarity: "Epic",
      image: "🥷",
      skills: ["机器学习", "数据可视化", "统计分析"],
      issuer: "DataTech Institute"
    },
    {
      id: 5,
      title: "Blockchain Builder",
      description: "区块链架构师认证，精通区块链技术开发",
      type: "certification",
      category: "区块链",
      earnedDate: "2024-08-15",
      value: 3.2,
      rarity: "Legendary",
      image: "⛓️",
      skills: ["智能合约", "DeFi协议", "Web3开发"],
      issuer: "Blockchain Academy"
    },
    {
      id: 6,
      title: "UI/UX Virtuoso",
      description: "用户体验设计大师，创造出色的用户界面",
      type: "achievement",
      category: "设计",
      earnedDate: "2024-07-03",
      value: 0.9,
      rarity: "Rare",
      image: "🎨",
      skills: ["用户研究", "原型设计", "视觉设计"],
      issuer: "Design Studio"
    }
  ]

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return <Crown className="w-4 h-4" />
      case "Epic": return <Award className="w-4 h-4" />
      case "Rare": return <Medal className="w-4 h-4" />
      default: return <Trophy className="w-4 h-4" />
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "text-yellow-600 bg-yellow-100"
      case "Epic": return "text-purple-600 bg-purple-100"
      case "Rare": return "text-blue-600 bg-blue-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const filteredBadges = badges.filter(badge => {
    const matchesCategory = selectedCategory === "全部" || badge.category === selectedCategory
    return matchesCategory
  })

  const totalValue = badges.reduce((sum, badge) => sum + badge.value, 0)

  return (
    <div className="p-8">
      {/* 页面标题和统计 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">我的成果NFT</h1>
        <p className="text-gray-600">展示您获得的所有NFT勋章和认证</p>
        
        <div className="flex gap-6 mt-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">总勋章数</span>
            </div>
            <p className="text-2xl font-bold text-blue-900">{badges.length}</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">总价值</span>
            </div>
            <p className="text-2xl font-bold text-green-900">{totalValue.toFixed(1)} ETH</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">稀有度评分</span>
            </div>
            <p className="text-2xl font-bold text-purple-900">98.5</p>
          </div>
        </div>
      </div>


      {/* NFT勋章网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => (
          <Card key={badge.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
            {/* 卡片头部 - 简洁白色背景 */}
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{badge.image}</div>
                <Badge className={`${getRarityColor(badge.rarity)} flex items-center gap-1`}>
                  {getRarityIcon(badge.rarity)}
                  {badge.rarity}
                </Badge>
              </div>
              <div>
                <Badge variant="secondary" className="text-xs mb-2">
                  {badge.type === "certification" ? "认证" : "成就"}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
              </div>

              {/* 技能标签 */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {badge.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {badge.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{badge.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* 勋章信息 */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>获得时间</span>
                  </div>
                  <span className="font-medium">{badge.earnedDate}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>价值</span>
                  </div>
                  <span className="font-bold text-green-600">{badge.value} ETH</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>颁发机构</span>
                  </div>
                  <span className="font-medium text-blue-600">{badge.issuer}</span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="w-full">
                  分享
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空状态 */}
      {filteredBadges.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">暂无相关勋章</h3>
          <p className="text-gray-600 mb-6">完成更多技能体课程来获得NFT勋章吧！</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            去学习技能体
          </Button>
        </div>
      )}
    </div>
  )
}
