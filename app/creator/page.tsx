import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign,
  Users,
  TrendingUp,
  Star,
  Eye,
  MessageSquare,
  ChevronRight,
  AlertCircle,
  Wrench,
  BarChart3
} from "lucide-react"

export default function CreatorOverviewPage() {
  // 模拟数据
  const stats = [
    {
      title: "总收入",
      value: "$12,847",
      change: "+18.2%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "本月"
    },
    {
      title: "新增学员",
      value: "234",
      change: "+23.1%", 
      changeType: "positive" as const,
      icon: Users,
      description: "本月"
    },
    {
      title: "课程评分",
      value: "4.8",
      change: "+0.2",
      changeType: "positive" as const,
      icon: Star,
      description: "平均评分"
    },
    {
      title: "完课率",
      value: "87%",
      change: "+5.3%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "本月"
    }
  ]

  const announcements = [
    {
      id: 1,
      title: "平台更新：新增AI导师功能",
      content: "现在您可以为技能体配置AI导师，提供24/7学员支持。",
      type: "info" as const,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "收益结算提醒",
      content: "本月收益将于月底自动结算到您的账户。",
      type: "warning" as const,
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "创作者激励计划",
      content: "完成5个技能体可获得额外奖励，快来参与吧！",
      type: "success" as const,
      date: "2024-01-08"
    }
  ]

  const topSkills = [
    {
      id: 1,
      title: "AI Sales Elite Skill Unit",
      students: 1247,
      rating: 4.9,
      revenue: 3240,
      growth: "+12%",
      status: "published"
    },
    {
      id: 2,
      title: "Full Stack Developer Masterclass",
      students: 892,
      rating: 4.8,
      revenue: 2680,
      growth: "+8%",
      status: "published"
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      students: 634,
      rating: 4.7,
      revenue: 1920,
      growth: "+15%",
      status: "published"
    }
  ]

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case "info": return "border-blue-200 bg-blue-50 text-blue-800"
      case "warning": return "border-orange-200 bg-orange-50 text-orange-800" 
      case "success": return "border-green-200 bg-green-50 text-green-800"
      default: return "border-gray-200 bg-gray-50 text-gray-800"
    }
  }

  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case "info": return AlertCircle
      case "warning": return AlertCircle
      case "success": return AlertCircle
      default: return AlertCircle
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">创作者仪表盘</h1>
        <p className="text-gray-600">欢迎回来！查看您的创作数据和收益情况</p>
      </div>

      {/* 核心指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className={`font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 ml-1">{stat.description}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50">
                    <Icon className="size-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 平台公告 */}
        <Card className="lg:col-span-1 bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900">平台公告</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement) => {
              const Icon = getAnnouncementIcon(announcement.type)
              return (
                <div 
                  key={announcement.id} 
                  className={`p-4 rounded-lg border ${getAnnouncementColor(announcement.type)}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="size-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1">{announcement.title}</h4>
                      <p className="text-xs opacity-90 mb-2">{announcement.content}</p>
                      <p className="text-xs opacity-75">{announcement.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* 表现最佳的技能体 */}
        <Card className="lg:col-span-2 bg-white border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-900">表现最佳的技能体</CardTitle>
            <Button variant="outline" size="sm">
              查看全部
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {topSkills.map((skill) => (
              <div key={skill.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{skill.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="size-4" />
                        <span>{skill.students} 学员</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span>{skill.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                    {skill.status === 'published' ? '已发布' : '草稿'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="size-4 text-green-600" />
                      <span className="font-medium text-gray-900">${skill.revenue}</span>
                    </div>
                    <span className="text-green-600 font-medium">{skill.growth}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="size-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 快速操作 */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900">快速操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12">
              <Wrench className="size-4 mr-2" />
              创建新技能体
            </Button>
            <Button variant="outline" className="h-12">
              <BarChart3 className="size-4 mr-2" />
              查看数据分析
            </Button>
            <Button variant="outline" className="h-12">
              <DollarSign className="size-4 mr-2" />
              提现收益
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}