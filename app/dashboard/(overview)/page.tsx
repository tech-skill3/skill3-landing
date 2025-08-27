import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  PlayCircle, 
  Star,
  Award,
  ChevronRight,
  Trophy
} from "lucide-react"

export default function DashboardOverviewPage() {
  // 模拟数据
  const learningSkills = [
    {
      id: 1,
      title: "前端开发基础",
      progress: 75,
      totalUnits: 12,
      completedUnits: 9,
      image: "🎨"
    },
    {
      id: 2, 
      title: "JavaScript进阶",
      progress: 45,
      totalUnits: 15,
      completedUnits: 7,
      image: "⚡"
    }
  ]

  const nftStats = [
    { label: "获得徽章", count: 8, icon: Award, color: "text-yellow-600" },
    { label: "完成证书", count: 3, icon: Trophy, color: "text-blue-600" },
    { label: "技能认证", count: 5, icon: Star, color: "text-purple-600" }
  ]

  const skillUnits = [
    {
      id: 1,
      title: "React Hooks 深入理解",
      skill: "前端开发基础",
      progress: 80,
      timeLeft: "2小时"
    },
    {
      id: 2,
      title: "异步编程与Promise",
      skill: "JavaScript进阶", 
      progress: 60,
      timeLeft: "3小时"
    },
    {
      id: 3,
      title: "CSS Grid布局实战",
      skill: "前端开发基础",
      progress: 90,
      timeLeft: "1小时"
    }
  ]

  const recommendations = [
    {
      id: 1,
      title: "Vue.js 3.0 实战课程",
      description: "基于您的前端技能，推荐学习Vue.js框架",
      difficulty: "中级",
      duration: "40小时",
      rating: 4.8,
      image: "🟢"
    },
    {
      id: 2,
      title: "Node.js后端开发",
      description: "扩展全栈开发能力，学习服务端技术",
      difficulty: "中级",
      duration: "35小时", 
      rating: 4.9,
      image: "🟣"
    }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">仪表盘概览</h1>
        <p className="text-gray-600">欢迎回来！继续您的学习之旅</p>
      </div>

      {/* 成果NFT统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {nftStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <Icon className="size-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 正在学习的技能体 */}
      <Card className="bg-white border border-gray-200 shadow-sm mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">正在学习的技能体</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningSkills.map((skill) => (
              <div key={skill.id} className="p-6 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{skill.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{skill.title}</h3>
                    <p className="text-sm text-gray-600">{skill.completedUnits}/{skill.totalUnits} 单元已完成</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">进度</span>
                    <span className="font-medium text-gray-900">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <PlayCircle className="size-4 mr-2" />
                  继续学习
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 正在学习的Skill Unit */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900">正在学习的Skill Unit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillUnits.map((unit) => (
              <div key={unit.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{unit.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{unit.skill}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>进度 {unit.progress}%</span>
                      <span>剩余 {unit.timeLeft}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-4">
                    <PlayCircle className="size-4" />
                  </Button>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                    style={{ width: `${unit.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 为您推荐 */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900">为您推荐</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((item) => (
              <div key={item.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <Badge variant="outline" className="text-xs">{item.difficulty}</Badge>
                      <span>{item.duration}</span>
                      <div className="flex items-center gap-1">
                        <Star className="size-3 fill-yellow-400 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      开始学习
                      <ChevronRight className="size-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}