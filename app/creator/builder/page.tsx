"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle,
  Circle,
  ChevronRight,
  FileText,
  Upload,
  Bot,
  GraduationCap,
  Settings,
  Save
} from "lucide-react"

export default function SkillBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "定义大纲",
      description: "设置技能体基本信息和学习大纲",
      icon: FileText,
      completed: true
    },
    {
      id: 2,
      title: "上传内容",
      description: "上传课程视频、文档和其他学习资料",
      icon: Upload,
      completed: false
    },
    {
      id: 3,
      title: "配置AI导师",
      description: "设置AI导师的角色和交互方式",
      icon: Bot,
      completed: false
    },
    {
      id: 4,
      title: "设计考核与实训",
      description: "创建测验、作业和实践项目",
      icon: GraduationCap,
      completed: false
    },
    {
      id: 5,
      title: "发布设置",
      description: "配置价格、发布时间和市场信息",
      icon: Settings,
      completed: false
    }
  ]

  const currentStepData = steps[currentStep - 1]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                技能体标题 *
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="例如：AI Sales Elite Skill Unit"
                defaultValue="AI Sales Elite Skill Unit"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                技能体描述 *
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="详细描述这个技能体将教授什么技能..."
                defaultValue="Master AI-powered sales techniques and automation to boost your sales performance."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  难度级别 *
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option value="beginner">初学者</option>
                  <option value="intermediate">中级</option>
                  <option value="advanced">高级</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  预计学习时长
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="例如：3个月"
                  defaultValue="3个月"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                学习大纲
              </label>
              <div className="space-y-3">
                {[
                  "Retail Basics Video Course",
                  "AI Customer Simulation Practice", 
                  "CRM Integration Workshop",
                  "Final Assessment Course"
                ].map((outline, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <span className="text-sm text-gray-500">课程 {index + 1}</span>
                    <input
                      type="text"
                      className="flex-1 p-2 border-0 focus:ring-0 focus:outline-none"
                      defaultValue={outline}
                    />
                    <Button variant="ghost" size="sm">
                      移除
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm">
                  添加课程
                </Button>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <Upload className="size-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">上传课程内容</h3>
              <p className="text-gray-600 mb-4">支持视频、音频、PDF、PPT等格式</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                选择文件
              </Button>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">已上传文件</h4>
              {[
                { name: "Introduction_Video.mp4", size: "24.5 MB", type: "video" },
                { name: "Course_Materials.pdf", size: "1.2 MB", type: "document" },
                { name: "Practice_Slides.pptx", size: "3.8 MB", type: "presentation" }
              ].map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    删除
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="size-6 text-blue-600" />
                <h3 className="font-medium text-blue-900">AI导师配置</h3>
              </div>
              <p className="text-blue-800">
                配置AI导师可以为学员提供24/7的学习支持和答疑服务。
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                导师角色设定
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="描述AI导师的角色、专业背景和教学风格..."
                defaultValue="你是一位资深的销售专家和AI技术导师，拥有15年的销售经验和3年的AI应用实践。你的教学风格亲切友好，善于用实际案例帮助学员理解复杂概念。"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  回复风格
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option value="professional">专业严谨</option>
                  <option value="friendly">友好亲切</option>
                  <option value="encouraging">鼓励支持</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  知识库范围
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option value="course_only">仅限课程内容</option>
                  <option value="extended">扩展相关知识</option>
                  <option value="general">通用知识</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">考核设置</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">单元测验</h4>
                    <Badge className="bg-green-50 text-green-700">已配置</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">每个课程单元后的知识点测验</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">编辑题目</Button>
                    <Button variant="outline" size="sm">预览</Button>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">实践项目</h4>
                    <Badge variant="outline">待配置</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">让学员完成实际的销售场景练习</p>
                  <Button variant="outline" size="sm">开始配置</Button>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">最终评估</h4>
                    <Badge variant="outline">待配置</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">综合评估学员的技能掌握程度</p>
                  <Button variant="outline" size="sm">开始配置</Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  定价 (USD) *
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="99"
                  defaultValue="99"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  $SKILL 奖励
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="150"
                  defaultValue="150"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="nft" className="rounded" defaultChecked />
              <label htmlFor="nft" className="text-sm font-medium text-gray-700">
                包含成果NFT奖励
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                发布状态
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="draft">保存为草稿</option>
                <option value="review">提交审核</option>
                <option value="publish">立即发布</option>
              </select>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-2">发布须知</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 技能体发布后，内容修改需要重新审核</li>
                <li>• 确保所有课程内容已上传完整</li>
                <li>• 建议先保存为草稿，完整测试后再发布</li>
              </ul>
            </div>
          </div>
        )

      default:
        return <div>步骤内容</div>
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">技能构建器</h1>
        <p className="text-gray-600">通过向导式流程创建您的技能体课程</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 步骤导航 */}
        <div className="lg:col-span-1">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">创建进度</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step) => {
                const isActive = step.id === currentStep
                const isCompleted = step.completed

                return (
                  <div
                    key={step.id}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      isActive 
                        ? "bg-blue-50 border border-blue-200" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentStep(step.id)}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <CheckCircle className="size-5 text-green-600" />
                      ) : (
                        <Circle className={`size-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        isActive ? "text-blue-900" : "text-gray-900"
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm ${
                        isActive ? "text-blue-700" : "text-gray-600"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* 步骤内容 */}
        <div className="lg:col-span-3">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = currentStepData.icon
                    return <Icon className="size-6 text-blue-600" />
                  })()}
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {currentStepData.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mt-1">
                      {currentStepData.description}
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-50 text-blue-700">
                  第 {currentStep} 步，共 {steps.length} 步
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* 操作按钮 */}
          <div className="flex items-center justify-between mt-6">
            <Button 
              variant="outline"
              disabled={currentStep === 1}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              上一步
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline">
                <Save className="size-4 mr-2" />
                保存草稿
              </Button>

              {currentStep < steps.length ? (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  下一步
                  <ChevronRight className="size-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  完成创建
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}