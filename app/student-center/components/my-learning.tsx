'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen,
  CheckCircle,
  Route,
  Bot,
  FileText,
  Play,
  Clock,
  Award,
  Star,
  ArrowRight
} from 'lucide-react'

export function MyLearning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">我的学习</h1>
        <p className="text-gray-600 mt-1">管理和查看所有学习内容</p>
      </div>

      <Tabs defaultValue="ongoing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="ongoing">进行中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
          <TabsTrigger value="paths">学习路径</TabsTrigger>
          <TabsTrigger value="ai-coach">AI陪练</TabsTrigger>
          <TabsTrigger value="assignments">作业考试</TabsTrigger>
        </TabsList>

        {/* 进行中的课程 */}
        <TabsContent value="ongoing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary">进行中</Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2">React进阶开发</h3>
                <p className="text-gray-600 text-sm mb-4">学习React Hooks、Context、性能优化等进阶内容</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>学习进度</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    上次学习: 2天前
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="secondary">进行中</Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2">TypeScript基础到精通</h3>
                <p className="text-gray-600 text-sm mb-4">从基础类型到高级特性，全面掌握TypeScript</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>学习进度</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    上次学习: 1天前
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge variant="secondary">进行中</Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2">Node.js后端开发</h3>
                <p className="text-gray-600 text-sm mb-4">学习Node.js、Express、数据库操作等后端技能</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>学习进度</span>
                    <span>20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    上次学习: 今天
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 已完成的课程 */}
        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="default">已完成</Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2">JavaScript基础</h3>
                <p className="text-gray-600 text-sm mb-4">掌握JavaScript基础语法和核心概念</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    完成时间: 2024-01-15
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  查看证书
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="default">已完成</Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2">HTML & CSS基础</h3>
                <p className="text-gray-600 text-sm mb-4">学习网页基础结构和样式设计</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    完成时间: 2024-01-10
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  查看证书
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 学习路径 */}
        <TabsContent value="paths" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Route className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">前端开发学习路径</h3>
                    <p className="text-gray-600 text-sm">从基础到进阶的完整前端学习路线</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">HTML & CSS</span>
                    <Badge variant="default">已完成</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">JavaScript基础</span>
                    <Badge variant="default">已完成</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">React进阶开发</span>
                    <Badge variant="secondary">进行中</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">TypeScript进阶</span>
                    <Badge variant="outline">未开始</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  继续学习路径
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Route className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">全栈开发学习路径</h3>
                    <p className="text-gray-600 text-sm">前后端全栈开发的完整学习路径</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">前端基础</span>
                    <Badge variant="default">已完成</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Node.js后端开发</span>
                    <Badge variant="secondary">进行中</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">数据库设计</span>
                    <Badge variant="outline">未开始</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">部署运维</span>
                    <Badge variant="outline">未开始</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  开始学习
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AI陪练 */}
        <TabsContent value="ai-coach" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">React代码陪练</h3>
                    <p className="text-gray-600 text-sm">智能辅导你的React开发</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>完成度</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-sm text-gray-600">已完成12个练习题目</p>
                </div>

                <Button className="w-full">
                  开始陪练
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">算法思维训练</h3>
                    <p className="text-gray-600 text-sm">提升编程思维和解题能力</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>完成度</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                  <p className="text-sm text-gray-600">已完成8个算法题目</p>
                </div>

                <Button className="w-full">
                  开始训练
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 作业与考试 */}
        <TabsContent value="assignments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  待提交作业
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">React组件开发作业</h4>
                  <p className="text-sm text-gray-600 mb-2">实现一个完整的Todo应用组件</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="destructive">逾期1天</Badge>
                    <Button size="sm">
                      立即提交
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">TypeScript类型练习</h4>
                  <p className="text-sm text-gray-600 mb-2">完成高级类型定义练习</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">截止明天</Badge>
                    <Button size="sm" variant="outline">
                      开始练习
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  考试安排
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-yellow-50">
                  <h4 className="font-medium mb-2">前端基础知识考试</h4>
                  <p className="text-sm text-gray-600 mb-2">涵盖HTML、CSS、JavaScript基础</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      2024-01-25 14:00
                    </div>
                    <Button size="sm">
                      开始考试
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">React框架专项考试</h4>
                  <p className="text-sm text-gray-600 mb-2">测试React相关知识掌握程度</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      2024-02-01 10:00
                    </div>
                    <Button size="sm" variant="outline">
                      查看详情
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

