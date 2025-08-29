"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  BarChart3,
  Eye,
  Copy,
  Trash2,
  Users,
  Star,
  DollarSign,
  Calendar
} from "lucide-react"

export default function SkillsManagementPage() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  // 模拟技能体数据
  const skills = [
    {
      id: 1,
      title: "AI Sales Elite Skill Unit",
      description: "Master AI-powered sales techniques and automation",
      status: "published",
      students: 1247,
      rating: 4.9,
      revenue: 3240,
      createdDate: "2024-01-10",
      lastUpdated: "2024-01-15",
      courses: 5
    },
    {
      id: 2,
      title: "Full Stack Developer Masterclass",
      description: "Complete web development from frontend to backend",
      status: "published",
      students: 892,
      rating: 4.8,
      revenue: 2680,
      createdDate: "2024-01-05",
      lastUpdated: "2024-01-12",
      courses: 8
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      description: "Advanced digital marketing strategies and tools",
      status: "draft",
      students: 0,
      rating: 0,
      revenue: 0,
      createdDate: "2024-01-20",
      lastUpdated: "2024-01-22",
      courses: 3
    },
    {
      id: 4,
      title: "Data Science Foundations",
      description: "Learn data analysis and machine learning basics",
      status: "review",
      students: 0,
      rating: 0,
      revenue: 0,
      createdDate: "2024-01-18",
      lastUpdated: "2024-01-20",
      courses: 6
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-50 text-green-700 border-green-200"
      case "draft": return "bg-gray-50 text-gray-700 border-gray-200"
      case "review": return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "rejected": return "bg-red-50 text-red-700 border-red-200"
      default: return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "published": return "已发布"
      case "draft": return "草稿"
      case "review": return "审核中"
      case "rejected": return "已拒绝"
      default: return "未知"
    }
  }

  const filteredSkills = selectedStatus === "all" 
    ? skills 
    : skills.filter(skill => skill.status === selectedStatus)

  const statusCounts = {
    all: skills.length,
    published: skills.filter(s => s.status === "published").length,
    draft: skills.filter(s => s.status === "draft").length,
    review: skills.filter(s => s.status === "review").length
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">技能体管理</h1>
          <p className="text-gray-600">管理您创建的所有技能体课程</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="size-4 mr-2" />
          创建新技能体
        </Button>
      </div>

      {/* 状态筛选标签 */}
      <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">全部 ({statusCounts.all})</TabsTrigger>
          <TabsTrigger value="published">已发布 ({statusCounts.published})</TabsTrigger>
          <TabsTrigger value="draft">草稿 ({statusCounts.draft})</TabsTrigger>
          <TabsTrigger value="review">审核中 ({statusCounts.review})</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* 搜索和筛选 */}
      <Card className="bg-white border border-gray-200 shadow-sm mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索技能体名称或描述..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="size-4 mr-2" />
              筛选
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 技能体列表 */}
      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <Card key={skill.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{skill.title}</h3>
                    <Badge className={`text-xs border ${getStatusColor(skill.status)}`}>
                      {getStatusText(skill.status)}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span>{skill.students} 学员</span>
                    </div>
                    {skill.rating > 0 && (
                      <div className="flex items-center gap-2">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span>{skill.rating}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <DollarSign className="size-4" />
                      <span>${skill.revenue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>{skill.courses} 课程</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="size-4 mr-2" />
                    编辑内容
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="size-4 mr-2" />
                    数据分析
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div>
                  <span>创建时间：{skill.createdDate}</span>
                  <span className="mx-2">•</span>
                  <span>最后更新：{skill.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="size-4 mr-1" />
                    预览
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="size-4 mr-1" />
                    复制
                  </Button>
                  {skill.status === "draft" && (
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="size-4 mr-1" />
                      删除
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <BookOpen className="size-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无技能体</h3>
            <p className="text-gray-600 mb-4">
              {selectedStatus === "all" 
                ? "您还没有创建任何技能体，开始创建您的第一个技能体吧！"
                : `当前状态下没有技能体`
              }
            </p>
            {selectedStatus === "all" && (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="size-4 mr-2" />
                创建新技能体
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}