import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  PlayCircle, 
  Star,
  Clock,
  Users,
  Award
} from "lucide-react"

export default function SkillsPage() {
  // 模拟技能体数据
  const skillUnits = [
    {
      id: 1,
      title: "AI Sales Elite Skill Unit",
      creator: "Sarah Chen",
      rating: 4.8,
      reviewCount: 2847,
      level: "Beginner",
      duration: "3 months",
      price: 99,
      earnSkill: 150,
      hasNFT: true,
      courses: [
        {
          id: 1,
          title: "Retail Basics Video Course",
          position: "Course 1 of 5",
          status: "completed",
          icon: "📹"
        },
        {
          id: 2,
          title: "AI Customer Simulation Practice", 
          position: "Course 2 of 5",
          status: "in_progress",
          progress: 65,
          icon: "🤖"
        },
        {
          id: 3,
          title: "CRM Integration Workshop",
          position: "Course 3 of 5", 
          status: "locked",
          icon: "⚙️"
        },
        {
          id: 4,
          title: "Final Assessment Course",
          position: "Course 4 of 5",
          status: "locked",
          icon: "📊"
        }
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer Masterclass",
      creator: "Mike Johnson", 
      rating: 4.9,
      reviewCount: 1523,
      level: "Advanced",
      duration: "6 months",
      price: 199,
      earnSkill: 300,
      hasNFT: true,
      courses: [
        {
          id: 1,
          title: "Frontend Fundamentals",
          position: "Course 1 of 8",
          status: "completed",
          icon: "🎨"
        },
        {
          id: 2,
          title: "React Deep Dive",
          position: "Course 2 of 8", 
          status: "completed",
          icon: "⚛️"
        },
        {
          id: 3,
          title: "Node.js Backend Development",
          position: "Course 3 of 8",
          status: "in_progress",
          progress: 30,
          icon: "🟢"
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50"
      case "in_progress": return "text-blue-600 bg-blue-50"  
      case "locked": return "text-gray-400 bg-gray-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "已完成"
      case "in_progress": return "进行中"
      case "locked": return "未解锁"
      default: return "未知"
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">我的技能体</h1>
        <p className="text-gray-600">查看您购买和正在学习的技能体课程</p>
      </div>

      <div className="space-y-8">
        {skillUnits.map((skillUnit) => (
          <Card key={skillUnit.id} className="bg-white border border-gray-200 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {skillUnit.creator.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{skillUnit.creator}</p>
                      <p className="text-xs text-gray-500">Expert Creator</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{skillUnit.title}</h2>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm font-medium ml-1">{skillUnit.rating}</span>
                      <span className="text-sm text-gray-500">({skillUnit.reviewCount.toLocaleString()} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{skillUnit.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{skillUnit.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-2xl font-bold text-green-600">${skillUnit.price}</div>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      Earn {skillUnit.earnSkill} $SKILL
                    </Badge>
                    {skillUnit.hasNFT && (
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                        + Outcome NFT
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">课程进度</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {skillUnit.courses.map((course) => (
                  <div 
                    key={course.id} 
                    className={`p-4 rounded-lg border transition-all hover:shadow-sm ${
                      course.status === 'locked' 
                        ? 'border-gray-200 bg-gray-50 opacity-60' 
                        : 'border-gray-200 bg-white hover:border-blue-200'
                    }`}
                  >
                    <div className="text-center mb-3">
                      <div className="text-3xl mb-2">{course.icon}</div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{course.title}</h4>
                      <p className="text-xs text-gray-500">{course.position}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`text-xs ${getStatusColor(course.status)}`}>
                        {getStatusText(course.status)}
                      </Badge>
                      
                      {course.status === 'in_progress' && course.progress && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{course.progress}% 完成</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}