'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import {
  Trophy,
  Award,
  Medal,
  Star,
  Crown,
  Target,
  BookOpen,
  Code,
  Zap,
  Users,
  TrendingUp,
  Calendar,
  Download,
  Share
} from 'lucide-react'

export function MyAchievements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">我的成就</h1>
        <p className="text-gray-600 mt-1">展示你的学习成果和荣誉</p>
      </div>

      {/* 成就统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">总成就数</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Medal className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">SBT证书</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">任务完成</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">排行榜排名</p>
                <p className="text-2xl font-bold">#12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="certificates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="certificates">SBT技能凭证</TabsTrigger>
          <TabsTrigger value="badges">任务勋章</TabsTrigger>
          <TabsTrigger value="leaderboard">排行榜</TabsTrigger>
        </TabsList>

        {/* SBT技能凭证 */}
        <TabsContent value="certificates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400 to-yellow-600 rounded-bl-full opacity-10"></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-yellow-500">高级证书</Badge>
                </div>

                <h3 className="font-semibold text-xl mb-2">React开发专家</h3>
                <p className="text-gray-600 text-sm mb-4">
                  成功完成React进阶开发课程，掌握了组件化开发、状态管理、性能优化等高级技能
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>获得日期</span>
                    <span>2024-01-15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>验证ID</span>
                    <span className="font-mono text-xs">SBT-2024-001</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    下载证书
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="h-4 w-4 mr-1" />
                    分享
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400 to-blue-600 rounded-bl-full opacity-10"></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-blue-500">专业证书</Badge>
                </div>

                <h3 className="font-semibold text-xl mb-2">TypeScript大师</h3>
                <p className="text-gray-600 text-sm mb-4">
                  深入掌握TypeScript类型系统、高级特性，能够编写类型安全的代码
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>获得日期</span>
                    <span>2024-01-10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>验证ID</span>
                    <span className="font-mono text-xs">SBT-2024-002</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    下载证书
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="h-4 w-4 mr-1" />
                    分享
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden opacity-60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-400 to-gray-600 rounded-bl-full opacity-10"></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline">进行中</Badge>
                </div>

                <h3 className="font-semibold text-xl mb-2">Node.js架构师</h3>
                <p className="text-gray-600 text-sm mb-4">
                  学习Node.js微服务架构，掌握后端开发的核心技能
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>进度</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <Button size="sm" variant="outline" className="w-full" disabled>
                  证书生成中...
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400 to-green-600 rounded-bl-full opacity-10"></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-500">基础证书</Badge>
                </div>

                <h3 className="font-semibold text-xl mb-2">JavaScript基础</h3>
                <p className="text-gray-600 text-sm mb-4">
                  掌握JavaScript基础语法、DOM操作、异步编程等核心概念
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>获得日期</span>
                    <span>2023-12-20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>验证ID</span>
                    <span className="font-mono text-xs">SBT-2023-015</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    下载证书
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="h-4 w-4 mr-1" />
                    分享
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 任务勋章 */}
        <TabsContent value="badges" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">代码忍者</h4>
              <p className="text-xs text-gray-600 mb-2">完成10个编程挑战</p>
              <Badge className="text-xs">已获得</Badge>
            </Card>

            <Card className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">学习狂人</h4>
              <p className="text-xs text-gray-600 mb-2">连续学习7天</p>
              <Badge className="text-xs">已获得</Badge>
            </Card>

            <Card className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">任务完成者</h4>
              <p className="text-xs text-gray-600 mb-2">完成5个学习任务</p>
              <Badge className="text-xs">已获得</Badge>
            </Card>

            <Card className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">知识达人</h4>
              <p className="text-xs text-gray-600 mb-2">获得5个SBT证书</p>
              <Badge className="text-xs">已获得</Badge>
            </Card>

            <Card className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Medal className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">社区贡献者</h4>
              <p className="text-xs text-gray-600 mb-2">帮助10个同学</p>
              <Badge className="text-xs">已获得</Badge>
            </Card>

            <Card className="text-center p-4 opacity-60">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">算法大师</h4>
              <p className="text-xs text-gray-600 mb-2">解决50道算法题</p>
              <Badge variant="outline" className="text-xs">未获得</Badge>
            </Card>

            <Card className="text-center p-4 opacity-60">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">团队领导者</h4>
              <p className="text-xs text-gray-600 mb-2">带领团队完成项目</p>
              <Badge variant="outline" className="text-xs">未获得</Badge>
            </Card>

            <Card className="text-center p-4 opacity-60">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-medium mb-1">进步之星</h4>
              <p className="text-xs text-gray-600 mb-2">一个月进步排名前10</p>
              <Badge variant="outline" className="text-xs">未获得</Badge>
            </Card>
          </div>

          {/* 勋章统计 */}
          <Card>
            <CardHeader>
              <CardTitle>勋章收集进度</CardTitle>
              <CardDescription>继续努力，解锁更多勋章</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <p className="text-sm text-gray-600">已获得勋章</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">3</div>
                  <p className="text-sm text-gray-600">待解锁勋章</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">62%</div>
                  <p className="text-sm text-gray-600">完成进度</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 排行榜 */}
        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 学习积分排行榜 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  学习积分排行榜
                </CardTitle>
                <CardDescription>本月学习积分排名</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Crown className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">张同学 (你)</p>
                      <p className="text-sm text-gray-600">15680 积分</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-500">#12</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">李同学</p>
                        <p className="text-sm text-gray-600">18560 积分</p>
                      </div>
                    </div>
                    <Badge>#1</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">王同学</p>
                        <p className="text-sm text-gray-600">17240 积分</p>
                      </div>
                    </div>
                    <Badge>#2</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">赵同学</p>
                        <p className="text-sm text-gray-600">16890 积分</p>
                      </div>
                    </div>
                    <Badge>#3</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 成就排行榜 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Medal className="h-5 w-5 mr-2" />
                  成就排行榜
                </CardTitle>
                <CardDescription>获得最多成就的用户</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Crown className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">张同学 (你)</p>
                      <p className="text-sm text-gray-600">24个成就</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-500">#12</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">陈同学</p>
                        <p className="text-sm text-gray-600">31个成就</p>
                      </div>
                    </div>
                    <Badge>#1</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">刘同学</p>
                        <p className="text-sm text-gray-600">28个成就</p>
                      </div>
                    </div>
                    <Badge>#2</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">孙同学</p>
                        <p className="text-sm text-gray-600">26个成就</p>
                      </div>
                    </div>
                    <Badge>#3</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 个人统计 */}
          <Card>
            <CardHeader>
              <CardTitle>你的学习统计</CardTitle>
              <CardDescription>本月的学习数据</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15680</div>
                  <p className="text-sm text-gray-600">总积分</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">24</div>
                  <p className="text-sm text-gray-600">成就数</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
                  <p className="text-sm text-gray-600">学习率</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
                  <p className="text-sm text-gray-600">当前排名</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

