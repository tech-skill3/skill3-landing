"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Calculator,
  Users,
  Star,
  Award,
  Clock,
  Target,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function RevenueSharingSection() {
  const revenueModel = [
    {
      tier: "新手创作者",
      salesRange: "0-10K",
      creatorShare: "60%",
      platformShare: "40%",
      description: "刚开始创作的开发者，平台提供更多支持",
      color: "green",
      benefits: ["免费技术支持", "营销推广协助", "创作者培训"]
    },
    {
      tier: "专业创作者", 
      salesRange: "10K-100K",
      creatorShare: "70%",
      platformShare: "30%",
      description: "有一定经验和销量的创作者",
      color: "blue",
      benefits: ["优先推荐位", "数据分析报告", "专属客户经理"]
    },
    {
      tier: "明星创作者",
      salesRange: "100K+",
      creatorShare: "80%",
      platformShare: "20%",
      description: "平台顶级创作者，享受最高分成比例",
      color: "purple",
      benefits: ["独家推广资源", "定制化服务", "品牌合作机会"]
    }
  ]

  const earningFactors = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "产品质量",
      description: "高质量的AI技能代理获得更多用户认可",
      impact: "影响用户评分和复购率"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "用户活跃度",
      description: "用户使用频率和参与度",
      impact: "影响推荐算法权重"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "市场需求",
      description: "技能领域的市场热度和需求量",
      impact: "影响定价和销量"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "创作者声誉",
      description: "创作者的历史作品和用户反馈",
      impact: "影响新产品的初始推广"
    }
  ]

  const transparencyFeatures = [
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "实时收益计算",
      description: "每笔交易的收益分成实时显示"
    },
    {
      icon: <PieChart className="w-5 h-5" />,
      title: "详细数据报告",
      description: "月度/季度收益分析和趋势报告"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "按时结算",
      description: "每月15日准时发放上月收益"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "资金安全",
      description: "第三方托管，确保资金安全"
    }
  ]

  const successStories = [
    {
      creator: "李明",
      specialty: "AI销售专家",
      monthlyEarning: "¥45,000",
      growth: "+235%",
      products: 3,
      testimonial: "平台的分成机制很公平，技术支持也很到位，让我专注于创作高质量的AI代理。"
    },
    {
      creator: "王小雨",
      specialty: "数据分析师", 
      monthlyEarning: "¥32,000",
      growth: "+180%",
      products: 2,
      testimonial: "从零开始到现在月收入3万+，平台的推广支持和用户反馈帮了很大忙。"
    },
    {
      creator: "张博士",
      specialty: "AI研究员",
      monthlyEarning: "¥78,000", 
      growth: "+400%",
      products: 5,
      testimonial: "作为明星创作者，80%的分成比例让我的收入翻了好几倍，值得推荐！"
    }
  ]

  const getColorClass = (color: string) => {
    const colors = {
      green: "border-green-200 bg-green-50 dark:bg-green-900/10",
      blue: "border-blue-200 bg-blue-50 dark:bg-blue-900/10", 
      purple: "border-purple-200 bg-purple-50 dark:bg-purple-900/10"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getProgressColor = (color: string) => {
    const colors = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 border-green-200">
            <DollarSign className="w-4 h-4 mr-2" />
            收益分成机制
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            透明公平的创作者收益体系
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们相信优秀的创作者应该获得丰厚的回报。通过阶梯式分成机制，
            让每一位创作者都能在平台上实现可持续的收益增长。
          </p>
        </motion.div>

        {/* Revenue Sharing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {revenueModel.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative overflow-hidden border-2 ${getColorClass(tier.color)} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                    <div className="text-sm text-muted-foreground mb-4">
                      销售额：${tier.salesRange}
                    </div>
                    
                    {/* Revenue Split Visualization */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>创作者收益</span>
                        <span className="font-semibold">{tier.creatorShare}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div 
                          className={`h-3 rounded-full ${getProgressColor(tier.color)}`}
                          style={{ width: tier.creatorShare }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>平台服务费</span>
                        <span className="font-semibold">{tier.platformShare}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">专享权益：</h4>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Earning Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">影响收益的关键因素</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              了解这些因素，帮助您创作出更受欢迎的AI技能代理，获得更高收益
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earningFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-md transition-all text-center">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      {factor.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{factor.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {factor.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparency Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">透明化收益管理</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                我们承诺收益计算和结算过程完全透明，让创作者清楚了解每一笔收入来源
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transparencyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">创作者成功案例</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              看看其他创作者如何在我们平台上实现财务自由和事业成功
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {story.creator.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{story.creator}</h4>
                        <p className="text-sm text-muted-foreground">{story.specialty}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{story.monthlyEarning}</div>
                        <div className="text-xs text-muted-foreground">月收入</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{story.growth}</div>
                        <div className="text-xs text-muted-foreground">增长率</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {story.products} 个产品
                      </Badge>
                    </div>

                    <blockquote className="text-sm text-muted-foreground italic">
                      "{story.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              准备开始您的创作者之旅？
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              加入我们的创作者社区，将您的专业技能转化为AI代理，
              与全球用户分享并获得丰厚收益。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100 rounded-full"
              >
                <Target className="w-5 h-5 mr-2" />
                成为创作者
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>0成本入驻</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>按月结算</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>收益保障</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
