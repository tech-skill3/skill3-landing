"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageSquare } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "如何开始创作？",
      answer: "首先申请成为创作者，获得Creator Studio Pro访问权限。然后准备你的专业素材（如文档、视频等），上传到平台让AI自动解析。最后在可视化编辑器中优化内容，一键发布即可。"
    },
    {
      question: "内容质量标准是什么？",
      answer: "我们注重内容的实用性和专业性。内容需要有明确的技能目标、清晰的结构层次、实用的练习题目。AI会自动评估内容质量，创作者也可以通过数据分析不断优化。"
    },
    {
      question: "收益如何计算？",
      answer: "首次销售分成70%归创作者，30%平台；续费版税50%对半分成；企业订阅60%归创作者。所有收益每月15日自动结算，支持多种支付方式。"
    },
    {
      question: "IP权利如何保护？",
      answer: "所有内容都通过区块链确权，你拥有完整的知识产权。平台只获得非独占的使用权，用于展示和销售。你的原创内容受到法律保护。"
    },
    {
      question: "平台提供哪些支持？",
      answer: "我们提供免费的Creator Studio Pro工具、专业的技术支持、创作指导教程、数据分析报告等。认证创作者还享有专属客服和优先展示机会。"
    },
    {
      question: "创作内容会泄露吗？",
      answer: "不会。我们采用银行级加密技术，所有素材和内容都安全存储。AI处理过程也在受控环境中进行，不会泄露你的专业知识。"
    },
    {
      question: "可以创作哪些类型的技能代理？",
      answer: "支持所有专业技能领域，包括编程开发、设计创意、市场营销、语言学习、管理技能、行业知识等。只要是可传授的技能，都可以创作。"
    },
    {
      question: "如何提高作品销量？",
      answer: "保持内容质量更新、设置合理的价格、优化作品描述、使用吸引人的预览。平台也会通过智能推荐帮助你的作品被更多用户发现。"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-orange-100 text-orange-700 border-orange-200">
            <HelpCircle className="w-4 h-4 mr-2" />
            常见问题
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            创作者常见问题
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            解答你在创作过程中可能遇到的问题，
            <span className="text-orange-600 font-semibold">让创作之路更加顺畅</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/50 dark:bg-black/20 rounded-xl px-6 border-border/40 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-11">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <MessageSquare className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">还有其他问题？</h3>
            <p className="text-muted-foreground mb-6">
              我们的创作者支持团队随时为你解答疑问，提供专业的创作指导
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="text-center">
                <div className="font-semibold text-orange-600">📧 creator@skill3.com</div>
                <div className="text-sm text-muted-foreground">邮件支持</div>
              </div>
              <div className="hidden sm:block text-gray-300 dark:text-gray-600">|</div>
              <div className="text-center">
                <div className="font-semibold text-orange-600">💬 在线客服</div>
                <div className="text-sm text-muted-foreground">工作日9:00-18:00</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
