"use client"

import { motion } from "framer-motion"
import { ArrowRight, Target, Users, TrendingUp, Zap, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutUsPage() {

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              关于我们
            </Badge>
            <h1 className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{lineHeight: '1.2'}}>
              重新定义AI时代的人力资本
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              我们致力于成为AI时代可编程人力资本的基础设施层，通过AI驱动人才与组织共进化，建立信任、展示实力。
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="rounded-full px-8 py-3 text-lg font-semibold">
                <Users className="mr-2 w-5 h-5" />
                加入我们
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-3 text-lg font-semibold">
                了解更多
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">愿景与使命</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们的愿景和使命指引着我们前进的方向
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">愿景 Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-4">
                    成为AI时代可编程人力资本的基础设施层
                  </p>
                  <p className="text-muted-foreground">
                    我们致力于构建一个智能化的人力资本生态系统，让每个人的技能都能被精准识别、有效验证和合理配置，实现人才价值的最大化释放。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">使命 Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-4">
                    AI驱动人才与组织共进化 (Evolve Intelligently)
                  </p>
                  <p className="text-muted-foreground">
                    通过AI技术赋能，我们帮助个人持续提升技能，助力组织优化人才配置，实现人才与组织的协同发展和智能进化。
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zevolve Advantage Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zevolve 集团优势</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              深耕行业十余年，构建非对称竞争优势
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">庞大用户基础</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-3xl font-bold text-primary">35万+</p>
                    <p className="text-sm text-muted-foreground">合作组织</p>
                  </div>
                  <p className="text-muted-foreground">
                    覆盖各行各业的组织客户，为协议提供强大的冷启动引擎
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">海量学员数据</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-3xl font-bold text-primary">1.1亿+</p>
                    <p className="text-sm text-muted-foreground">学员用户</p>
                  </div>
                  <p className="text-muted-foreground">
                    丰富的学习行为数据，为AI算法提供关键数据源
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Web2业务基础</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-3xl font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">年深耕经验</p>
                  </div>
                  <p className="text-muted-foreground">
                    成熟的业务模式和技术积累，确保协议稳定运行
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6">非对称竞争优势</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  我们的Web2业务基础不仅是协议的冷启动引擎，更是关键数据源。
                  十余年的行业深耕让我们深度理解企业培训痛点，
                  庞大的用户基础为AI算法提供了丰富的训练数据，
                  这些优势共同构成了我们在AI时代人力资本领域的护城河。
                </p>
                <Button size="lg" className="rounded-full">
                  了解更多优势
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">发展路线图</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们的产品发展规划和重要里程碑
            </p>
          </motion.div>

          {/* Roadmap Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <Image
                  src="/images/roadmap.png"
                  alt="Skill³ 发展路线图"
                  fill
                  className="object-contain bg-background"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" variant="outline" className="rounded-full">
              <Calendar className="mr-2 w-4 h-4" />
              了解详情
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}