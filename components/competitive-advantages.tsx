"use client"

import { motion } from "framer-motion"
import { Building2, Users, Globe, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const partners = [
  { name: "钉钉", logo: "钉", color: "from-blue-500 to-blue-600" },
  { name: "阿里云", logo: "阿", color: "from-orange-500 to-orange-600" },
  { name: "欧莱雅", logo: "欧", color: "from-pink-500 to-pink-600" },
  { name: "南方电网", logo: "南", color: "from-green-500 to-green-600" },
  { name: "国家税务总局", logo: "税", color: "from-red-500 to-red-600" },
  { name: "更多合作伙伴", logo: "...", color: "from-gray-500 to-gray-600" },
]

const stats = [
  { icon: <Building2 className="size-6" />, number: "35万+", label: "服务组织" },
  { icon: <Users className="size-6" />, number: "1.1亿", label: "学员" },
  { icon: <Globe className="size-6" />, number: "全球", label: "覆盖范围" },
  { icon: <TrendingUp className="size-6" />, number: "领先", label: "行业地位" },
]

export default function CompetitiveAdvantages() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2 
            variants={item}
            className="font-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            非对称优势与合作伙伴
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            坚实的基础，全球的视野
          </motion.p>
          <motion.p 
            variants={item}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            基于服务全球超过35万家组织和1.1亿学员的成功经验和数据
          </motion.p>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="text-center border-border/40 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 合作伙伴 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
              信任我们的合作伙伴
            </h3>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-2xl p-8 border border-border/40"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {partner.logo}
                  </div>
                  <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl opacity-50"></div>
    </section>
  )
}