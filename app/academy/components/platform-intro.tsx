"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Users, 
  BarChart3, 
  Clock, 
  Award, 
  Smartphone,
  Globe,
  Lightbulb
} from "lucide-react"

export default function PlatformIntro() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "个性化学习路径",
      description: "基于AI算法分析您的技能水平和学习目标，为您量身定制最适合的学习路径和进度安排。",
      color: "blue"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "全球专家网络",
      description: "汇聚全球顶尖行业专家和实战导师，提供权威的知识体系和实践经验分享。",
      color: "purple"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "实时进度跟踪",
      description: "智能数据分析系统实时监控学习进度，提供详细的能力提升报告和改进建议。",
      color: "green"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "灵活学习时间",
      description: "7x24小时随时随地学习，支持离线下载，让学习不受时间和地点限制。",
      color: "orange"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "权威技能认证",
      description: "完成课程获得行业认可的技能证书，提升职业竞争力和薪资水平。",
      color: "red"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "多端同步学习",
      description: "支持Web、移动端、平板等多设备无缝切换，学习进度云端同步。",
      color: "indigo"
    }
  ]

  const stats = [
    { number: "500+", label: "精品课程", icon: <GraduationCap className="w-5 h-5" /> },
    { number: "50K+", label: "活跃学员", icon: <Users className="w-5 h-5" /> },
    { number: "200+", label: "行业专家", icon: <Globe className="w-5 h-5" /> },
    { number: "98%", label: "满意度", icon: <Lightbulb className="w-5 h-5" /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
      orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
      red: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
      indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="w-full py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            学习平台介绍
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            重新定义在线学习体验
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            我们构建了一个集AI技术、专家资源和创新教学方法于一体的智能学习平台，
            让每个人都能获得个性化、高效的技能提升体验。
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02] duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">准备开始您的学习之旅了吗？</h3>
            <p className="text-muted-foreground mb-6">
              加入数万名学习者，体验AI驱动的个性化学习平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                免费试学7天
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all"
              >
                查看课程目录
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
