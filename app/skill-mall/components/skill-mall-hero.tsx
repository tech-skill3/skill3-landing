"use client"

import { motion } from "framer-motion"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SkillMallHero() {
  return (
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
            🔥 新课程每周更新
          </Badge>
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            掌握未来技能。AI 验证，你来拥有。
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            探索由行业专家打造的 AI 技能体。在实战模拟中学习，并赚取区块链验证的数字资产。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                探索技能市场
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                申请创作者
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "500+", label: "精品课程" },
            { number: "50K+", label: "学习者" },
            { number: "95%", label: "完成率" },
            { number: "4.9", label: "平均评分" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}