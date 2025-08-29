"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Download,
  CreditCard,
  Gift,
  Trophy,
  Users
} from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  // 模拟数据
  const revenueStats = {
    total: 12847,
    thisMonth: 3240,
    growth: 18.2,
    pending: 847
  }

  const monthlyRevenue = [
    { month: "1月", revenue: 2100, students: 89 },
    { month: "2月", revenue: 2850, students: 124 },
    { month: "3月", revenue: 3240, students: 156 },
    { month: "4月", revenue: 2890, students: 142 },
    { month: "5月", revenue: 3580, students: 178 },
    { month: "6月", revenue: 4200, students: 201 }
  ]

  const withdrawalHistory = [
    {
      id: 1,
      amount: 2500,
      date: "2024-01-15",
      status: "completed",
      method: "银行转账"
    },
    {
      id: 2,
      amount: 1800,
      date: "2024-01-01",
      status: "completed", 
      method: "PayPal"
    },
    {
      id: 3,
      amount: 3200,
      date: "2023-12-15",
      status: "completed",
      method: "银行转账"
    }
  ]

  const rewards = [
    {
      id: 1,
      title: "新手创作者奖励",
      amount: 100,
      type: "bonus",
      date: "2024-01-10",
      status: "received"
    },
    {
      id: 2,
      title: "月度最佳技能体",
      amount: 500,
      type: "achievement",
      date: "2024-01-05",
      status: "received"
    },
    {
      id: 3,
      title: "学员满意度奖励",
      amount: 250,
      type: "quality",
      date: "2023-12-28",
      status: "received"
    }
  ]

  const nftRights = [
    {
      id: 1,
      name: "创作者基金 NFT #001",
      tier: "Bronze",
      benefits: ["2%额外分成", "优先审核", "专属标识"],
      value: "$50",
      status: "owned"
    },
    {
      id: 2,
      name: "创作者基金 NFT #025",
      tier: "Silver",
      benefits: ["5%额外分成", "优先审核", "专属标识", "营销支持"],
      value: "$200",
      status: "available"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50"
      case "pending": return "text-yellow-600 bg-yellow-50"
      case "failed": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "已完成"
      case "pending": return "处理中"
      case "failed": return "失败"
      default: return "未知"
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">收入与分析</h1>
          <p className="text-gray-600">查看您的收入情况和详细数据分析</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            导出报告
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <CreditCard className="size-4 mr-2" />
            申请提现
          </Button>
        </div>
      </div>

      {/* 收入概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">总收入</p>
                <p className="text-2xl font-bold text-gray-900">${revenueStats.total.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="size-4 text-green-600 mr-1" />
                  <span className="text-green-600 font-medium">+{revenueStats.growth}%</span>
                  <span className="text-gray-500 ml-1">vs上月</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-green-50">
                <DollarSign className="size-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">本月收入</p>
                <p className="text-2xl font-bold text-gray-900">${revenueStats.thisMonth.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-sm">
                  <Calendar className="size-4 text-blue-600 mr-1" />
                  <span className="text-gray-600">本月已结算</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <TrendingUp className="size-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">待结算</p>
                <p className="text-2xl font-bold text-gray-900">${revenueStats.pending}</p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="text-yellow-600">月底自动结算</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <Calendar className="size-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">总学员数</p>
                <p className="text-2xl font-bold text-gray-900">2,847</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="size-4 text-green-600 mr-1" />
                  <span className="text-green-600 font-medium">+234</span>
                  <span className="text-gray-500 ml-1">本月新增</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <Users className="size-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="analytics">数据分析</TabsTrigger>
          <TabsTrigger value="withdrawal">提现管理</TabsTrigger>
          <TabsTrigger value="rewards">奖励详情</TabsTrigger>
          <TabsTrigger value="nft">基金NFT</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          {/* 收入趋势图 */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">收入趋势</CardTitle>
                <div className="flex gap-2">
                  <Button 
                    variant={timeRange === "7d" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setTimeRange("7d")}
                  >
                    7天
                  </Button>
                  <Button 
                    variant={timeRange === "30d" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setTimeRange("30d")}
                  >
                    30天
                  </Button>
                  <Button 
                    variant={timeRange === "90d" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setTimeRange("90d")}
                  >
                    90天
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-4 px-4">
                {monthlyRevenue.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-600 rounded-t-sm hover:bg-blue-700 transition-colors cursor-pointer"
                      style={{ height: `${(data.revenue / 5000) * 200}px` }}
                      title={`${data.month}: $${data.revenue}`}
                    />
                    <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 技能体表现 */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">技能体表现</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "AI Sales Elite", revenue: 3240, students: 1247, rating: 4.9 },
                  { name: "Full Stack Developer", revenue: 2680, students: 892, rating: 4.8 },
                  { name: "Digital Marketing Pro", revenue: 1920, students: 634, rating: 4.7 }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{skill.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>{skill.students} 学员</span>
                        <span>{skill.rating} ⭐</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">${skill.revenue}</p>
                      <p className="text-sm text-gray-600">本月收入</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdrawal" className="space-y-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">提现记录</CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  申请提现
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {withdrawalHistory.map((withdrawal) => (
                  <div key={withdrawal.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-green-50">
                        <CreditCard className="size-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">${withdrawal.amount}</p>
                        <p className="text-sm text-gray-600">{withdrawal.method} • {withdrawal.date}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(withdrawal.status)}>
                      {getStatusText(withdrawal.status)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">奖励历史</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div key={reward.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-yellow-50">
                        <Gift className="size-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{reward.title}</p>
                        <p className="text-sm text-gray-600">{reward.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">+${reward.amount}</p>
                      <Badge className="bg-green-50 text-green-700 text-xs">已发放</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nft" className="space-y-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">基金NFT权益</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nftRights.map((nft) => (
                  <div key={nft.id} className={`p-6 border-2 rounded-lg ${
                    nft.status === "owned" ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Trophy className={`size-6 ${
                          nft.status === "owned" ? "text-blue-600" : "text-gray-400"
                        }`} />
                        <div>
                          <h3 className="font-medium text-gray-900">{nft.name}</h3>
                          <Badge className={`text-xs ${
                            nft.tier === "Bronze" ? "bg-orange-100 text-orange-700" :
                            nft.tier === "Silver" ? "bg-gray-100 text-gray-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {nft.tier}
                          </Badge>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-900">{nft.value}</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-gray-700">权益包括：</p>
                      {nft.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${
                        nft.status === "owned" 
                          ? "bg-green-600 hover:bg-green-700" 
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white`}
                      disabled={nft.status === "owned"}
                    >
                      {nft.status === "owned" ? "已拥有" : "立即获取"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}