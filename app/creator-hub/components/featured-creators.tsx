"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Star,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  DollarSign
} from "lucide-react"

export default function FeaturedCreators() {
  const creators = [
    {
      name: "张教授",
      title: "Python编程专家",
      avatar: "👨‍🏫",
      specialty: "编程开发",
      earnings: "¥45,200",
      students: "12.5K",
      rating: 4.9,
      works: 8,
      featured: true,
      description: "清华大学计算机系教授，专注Python教学15年"
    },
    {
      name: "李设计师",
      title: "UI/UX设计大师",
      avatar: "👩‍🎨",
      specialty: "设计创意",
      earnings: "¥38,900",
      students: "8.2K",
      rating: 4.8,
      works: 12,
      featured: true,
      description: "前腾讯高级设计师，UI/UX领域资深专家"
    },
    {
      name: "王经理",
      title: "市场营销顾问",
      avatar: "👨‍💼",
      specialty: "营销推广",
      earnings: "¥52,100",
      students: "15.3K",
      rating: 4.9,
      works: 6,
      featured: true,
      description: "10年营销实战经验，擅长数字化营销策略"
    },
    {
      name: "赵老师",
      title: "英语教学专家",
      avatar: "👩‍🏫",
      specialty: "语言学习",
      earnings: "¥28,600",
      students: "9.8K",
      rating: 4.7,
      works: 15,
      featured: false,
      description: "北外英语系硕士，雅思托福教学经验丰富"
    },
    {
      name: "刘总监",
      title: "产品管理导师",
      avatar: "👨‍💻",
      specialty: "项目管理",
      earnings: "¥41,800",
      students: "6.7K",
      rating: 4.8,
      works: 9,
      featured: false,
      description: "前字节跳动产品总监，产品方法论实践者"
    },
    {
      name: "陈专家",
      title: "数据分析顾问",
      avatar: "👩‍🔬",
      specialty: "数据分析",
      earnings: "¥35,400",
      students: "7.1K",
      rating: 4.9,
      works: 11,
      featured: false,
      description: "数据科学硕士，专注商业数据分析应用"
    }
  ]

  const stats = [
    { label: "累计创作者", value: "500+", icon: <Users className="w-5 h-5" /> },
    { label: "总收益", value: "¥2.5M+", icon: <DollarSign className="w-5 h-5" /> },
    { label: "优质作品", value: "1000+", icon: <Award className="w-5 h-5" /> },
    { label: "平均评分", value: "4.8", icon: <Star className="w-5 h-5" /> }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-yellow-100 text-yellow-700 border-yellow-200">
            <Star className="w-4 h-4 mr-2" />
            知名创作者
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            他们用创作改变世界
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            加入我们的创作者大家庭，与顶尖专业人士一起分享知识，创造价值。
            <span className="text-yellow-600 font-semibold">你的专业技能，值得被全世界学习</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 border-border/40 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all h-full ${
                creator.featured ? 'ring-2 ring-yellow-500/20 border-yellow-500/30' : ''
              }`}>
                <CardContent className="p-0">
                  {/* Creator Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{creator.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{creator.name}</h3>
                        {creator.featured && (
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            推荐
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{creator.title}</p>
                      <p className="text-xs text-muted-foreground">{creator.description}</p>
                    </div>
                  </div>

                  {/* Creator Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{creator.earnings}</div>
                      <div className="text-xs text-muted-foreground">累计收益</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{creator.students}</div>
                      <div className="text-xs text-muted-foreground">学生数量</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{creator.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span>{creator.works}个作品</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>{creator.specialty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              加入创作者大家庭
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              与500+专业创作者一起，分享你的知识，创造你的价值。
              你的专业技能，将改变无数人的职业生涯。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100 rounded-full"
              >
                <Star className="w-5 h-5 mr-2" />
                申请成为创作者
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <Users className="w-5 h-5 mr-2" />
                加入创作者社区
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
