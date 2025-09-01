'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Trophy,
  CheckSquare,
  TrendingUp,
  Wallet,
  Users,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 欢迎语 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">欢迎回来，张同学！</h1>
        <p className="text-blue-100">今天是学习的好日子，继续你的技能之旅吧</p>
      </div>

      {/* 统计概览 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">进行中的课程</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">获得成就</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckSquare className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">待办事项</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">钱包余额</p>
                <p className="text-2xl font-bold">¥ 256.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 进行中的学习 */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                进行中的学习
              </CardTitle>
              <CardDescription>继续你的学习之旅</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">React进阶开发</h3>
                      <p className="text-sm text-gray-600">已完成 75%</p>
                    </div>
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">TypeScript基础到精通</h3>
                      <p className="text-sm text-gray-600">已完成 45%</p>
                    </div>
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Node.js后端开发</h3>
                      <p className="text-sm text-gray-600">已完成 20%</p>
                    </div>
                  </div>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    继续学习
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 最新成就 & 待办事项 */}
        <div className="space-y-6">
          {/* 最新成就 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                最新成就
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium">代码忍者</p>
                  <p className="text-sm text-gray-600">完成10个编程挑战</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">学习狂人</p>
                  <p className="text-sm text-gray-600">连续学习7天</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckSquare className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">任务完成者</p>
                  <p className="text-sm text-gray-600">完成5个学习任务</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 待办事项 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckSquare className="h-5 w-5 mr-2" />
                待办事项
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">完成React项目练习</span>
                </div>
                <Badge variant="secondary">紧急</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">复习TypeScript类型系统</span>
                </div>
                <Badge variant="outline">今日</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">参与社区讨论</span>
                </div>
                <Badge variant="outline">本周</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">更新个人资料</span>
                </div>
                <Badge variant="outline">本月</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">查看最新课程</span>
                </div>
                <Badge variant="outline">推荐</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 个性化推荐 & 社区动态 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 个性化推荐 */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 个性化推荐</CardTitle>
            <CardDescription>根据你的学习进度推荐的内容</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="font-medium mb-2">进阶React Hooks</h3>
              <p className="text-sm text-gray-600 mb-3">你已经掌握了基础Hooks，继续学习进阶用法</p>
              <Button size="sm">
                开始学习
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
              <h3 className="font-medium mb-2">前端性能优化</h3>
              <p className="text-sm text-gray-600 mb-3">提升你的应用性能和用户体验</p>
              <Button size="sm" variant="outline">
                查看详情
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <h3 className="font-medium mb-2">团队协作最佳实践</h3>
              <p className="text-sm text-gray-600 mb-3">学习如何在团队中高效协作</p>
              <Button size="sm" variant="outline">
                了解更多
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 社区动态 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              社区动态
            </CardTitle>
            <CardDescription>关注学习社区的最新动态</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">小明</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">小明</span> 完成了 <span className="font-medium">Vue.js基础课程</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">2小时前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">小红</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">小红</span> 获得了 <span className="font-medium">代码忍者</span> 成就
                </p>
                <p className="text-xs text-gray-500 mt-1">4小时前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">老师</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  新课程 <span className="font-medium">React 18新特性</span> 已经上线，快来学习吧！
                </p>
                <p className="text-xs text-gray-500 mt-1">1天前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">小李</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">小李</span> 在 <span className="font-medium">算法挑战</span> 中排名第一
                </p>
                <p className="text-xs text-gray-500 mt-1">2天前</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


