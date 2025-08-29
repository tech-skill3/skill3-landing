"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  Shield, 
  Link, 
  Download, 
  Share2,
  Verified,
  Globe,
  Lock,
  Star,
  TrendingUp,
  CheckCircle,
  Eye
} from "lucide-react"

export default function SbtCertificate() {
  const sbtFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "区块链不可篡改",
      description: "基于以太坊区块链技术，证书信息永久存储，无法伪造或篡改",
      benefit: "100%可信"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "全球通用认证",
      description: "国际标准的数字身份证明，全球范围内的雇主和机构认可",
      benefit: "国际认可"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "链上可验证",
      description: "任何人都可以通过区块链浏览器验证证书的真实性和有效性",
      benefit: "公开透明"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "技能成长轨迹",
      description: "记录完整的学习历程和技能发展轨迹，展示持续成长能力",
      benefit: "成长可见"
    }
  ]

  const certificateTypes = [
    {
      name: "基础认证",
      description: "入门级技能证明",
      skills: ["基础语法", "核心概念", "简单应用"],
      color: "green",
      level: "Bronze",
      emoji: "🥉"
    },
    {
      name: "专业认证", 
      description: "专业级技能掌握",
      skills: ["高级特性", "最佳实践", "项目实战"],
      color: "blue",
      level: "Silver", 
      emoji: "🥈"
    },
    {
      name: "专家认证",
      description: "行业专家级能力",
      skills: ["架构设计", "团队领导", "技术创新"],
      color: "purple",
      level: "Gold",
      emoji: "🥇"
    }
  ]

  const mockCertificate = {
    title: "React 全栈开发专家",
    recipient: "张小明",
    issueDate: "2024-01-15",
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    level: "Expert",
    tokenId: "#SBT-123456",
    blockchainHash: "0x1a2b3c4d5e6f..."
  }

  const stats = [
    { number: "50K+", label: "已颁发证书", icon: <Award className="w-5 h-5" /> },
    { number: "500+", label: "合作企业", icon: <Shield className="w-5 h-5" /> },
    { number: "95%", label: "雇主认可度", icon: <Star className="w-5 h-5" /> },
    { number: "24/7", label: "全球验证", icon: <Globe className="w-5 h-5" /> }
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            <Award className="w-4 h-4 mr-2" />
            SBT 数字证书
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            区块链驱动的技能认证证书
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            采用Soul Bound Token (SBT) 技术，为您的技能成就创建不可转移的数字身份证明。
            这不仅是一张证书，更是您在Web3时代的技能护照。
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-border/40"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Certificate Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-border/40 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
              </div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Skill3 Academy</h3>
                      <p className="text-xs text-muted-foreground">Official Certificate</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-1">{mockCertificate.level === 'Expert' ? '🥇' : '🏆'}</div>
                    <Badge className="text-xs bg-purple-100 text-purple-700">
                      {mockCertificate.level}
                    </Badge>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">{mockCertificate.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    Awarded to <span className="font-semibold text-foreground">{mockCertificate.recipient}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For successfully completing the comprehensive training program and demonstrating 
                    expert-level proficiency in modern web development technologies.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Verified Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {mockCertificate.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t pt-4 flex justify-between items-center text-xs text-muted-foreground">
                  <div>
                    <p>Issue Date: {mockCertificate.issueDate}</p>
                    <p>Token ID: {mockCertificate.tokenId}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600">
                      <Verified className="w-3 h-3" />
                      <span className="text-xs">Blockchain Verified</span>
                    </div>
                    <p className="font-mono text-xs">{mockCertificate.blockchainHash}</p>
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute top-4 right-4 opacity-10">
                <Shield className="w-20 h-20" />
              </div>
            </div>

            {/* Floating Actions */}
            <div className="absolute -bottom-4 -right-4 flex gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                <Download className="w-4 h-4 mr-1" />
                下载
              </Button>
              <Button size="sm" variant="outline" className="bg-white shadow-lg">
                <Share2 className="w-4 h-4 mr-1" />
                分享
              </Button>
              <Button size="sm" variant="outline" className="bg-white shadow-lg">
                <Eye className="w-4 h-4 mr-1" />
                验证
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">SBT证书优势</h3>
              <p className="text-muted-foreground mb-6">
                Soul Bound Token (SBT) 是一种不可转移的NFT，专门用于证明个人的技能、成就和社会身份。
              </p>
            </div>

            {sbtFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 border-border/40 bg-gradient-to-br from-background to-muted/10">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{feature.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {feature.benefit}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certificate Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">认证等级体系</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              渐进式的认证体系，记录您从入门到专家的完整成长历程
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificateTypes.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full overflow-hidden border-2 ${
                  cert.color === 'green' ? 'border-green-200 bg-green-50 dark:bg-green-900/10' :
                  cert.color === 'blue' ? 'border-blue-200 bg-blue-50 dark:bg-blue-900/10' :
                  'border-purple-200 bg-purple-50 dark:bg-purple-900/10'
                } hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{cert.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium">技能要求:</p>
                      {cert.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Badge 
                      className={`${
                        cert.color === 'green' ? 'bg-green-100 text-green-700' :
                        cert.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {cert.level} Level
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            获得您的第一个SBT证书
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            完成学习课程，通过技能认证考试，即可获得永久存储在区块链上的数字技能证书。
            这是您在Web3时代的专业身份证明。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Award className="w-5 h-5 mr-2" />
              开始认证之旅
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Eye className="w-5 h-5 mr-2" />
              查看示例证书
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>永久存储</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>防伪认证</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>全球认可</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
