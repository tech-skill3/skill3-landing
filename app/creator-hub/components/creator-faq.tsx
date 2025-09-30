"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  DollarSign, 
  Users, 
  ArrowRight,
  TrendingUp,
  Zap,
  Clock
} from "lucide-react"

export default function CreatorFAQ() {
  const painPoints = [
    {
      problem: "知识被大模型免费使用",
      solution: "Skill NFT保护知识产权",
      icon: Shield,
      description: "通过区块链技术确保您的专业知识得到永久保护和价值认可"
    },
    {
      problem: "传统培训收入天花板低",
      solution: "60%分成+持续被动收益",
      icon: DollarSign,
      description: "突破传统培训限制，享受高分成比例和长期被动收入流"
    },
    {
      problem: "缺少技术平台流量",
      solution: "零代码工具+预搭载学员池",
      icon: Users,
      description: "无需技术背景，即可获得完整平台支持和现成学员资源"
    }
  ]

  const whyNowReasons = [
    {
      title: "AI时代专家价值重新定义",
      description: "人工智能让专家知识更加稀缺和珍贵",
      icon: Zap
    },
    {
      title: "Web3创作者红利期",
      description: "区块链技术为知识创作者带来前所未有的机遇",
      icon: TrendingUp
    },
    {
      title: "市场需求爆发式增长",
      description: "企业和个人对专业技能培训需求急剧上升",
      icon: Clock
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            ❓ 创作者FAQ
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            专家面临的三大痛点 & 入驻理由
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            了解为什么越来越多的专家选择加入我们的平台
          </p>
        </motion.div>

        {/* 三大痛点解决方案 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-16"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* 图标 */}
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* 痛点描述 */}
                    <div className="md:col-span-4 text-center md:text-left">
                      <div className="text-lg font-medium text-muted-foreground mb-2">
                        ▫ {item.problem}
                      </div>
                    </div>

                    {/* 箭头 */}
                    <div className="md:col-span-1 flex justify-center">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>

                    {/* 解决方案 */}
                    <div className="md:col-span-6 text-center md:text-left">
                      <div className="text-lg font-semibold text-primary mb-2">
                        {item.solution}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 为什么选择现在 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">为什么选择现在？</h3>
                <p className="text-lg text-muted-foreground">
                  AI时代专家价值重新定义，Web3创作者红利期
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {whyNowReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA按钮 */}
              <div className="text-center">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  立即申请
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 底部统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">专家已入驻</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
            <div className="text-sm text-muted-foreground">累计收益</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">满意度</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}