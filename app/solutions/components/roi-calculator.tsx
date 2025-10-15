"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, Users, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ROICalculator() {
  const { t } = useLanguage()
  const [teamSize, setTeamSize] = useState<number>(50)
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(15)
  const [targetConversionRate, setTargetConversionRate] = useState<number>(25)
  const [avgDealValue, setAvgDealValue] = useState<number>(10000)
  const [trainingCost, setTrainingCost] = useState<number>(2000)

  // ROI 计算逻辑
  const calculateROI = () => {
    const currentRevenue = teamSize * (currentConversionRate / 100) * avgDealValue * 12 // 年收入
    const projectedRevenue = teamSize * (targetConversionRate / 100) * avgDealValue * 12 // 预期年收入
    const revenueIncrease = projectedRevenue - currentRevenue
    const totalTrainingCost = teamSize * trainingCost
    const roi = ((revenueIncrease - totalTrainingCost) / totalTrainingCost) * 100
    const paybackPeriod = totalTrainingCost / (revenueIncrease / 12) // 月数

    return {
      currentRevenue,
      projectedRevenue,
      revenueIncrease,
      totalTrainingCost,
      roi,
      paybackPeriod
    }
  }

  const results = calculateROI()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('zh-CN').format(Math.round(num))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Calculator className="size-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            {t.solutions.roiCalculator.title}
          </CardTitle>
          <p className="text-muted-foreground">
            {t.solutions.roiCalculator.subtitle}
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* 输入参数 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teamSize" className="flex items-center gap-2">
                <Users className="size-4" />
                {t.solutions.roiCalculator.inputs.teamSize}
              </Label>
              <Input
                id="teamSize"
                type="number"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="text-lg"
                min="1"
                max="1000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentConversion" className="flex items-center gap-2">
                <Target className="size-4" />
                {t.solutions.roiCalculator.inputs.currentConversion}
              </Label>
              <Input
                id="currentConversion"
                type="number"
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                className="text-lg"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetConversion" className="flex items-center gap-2">
                <TrendingUp className="size-4" />
                {t.solutions.roiCalculator.inputs.targetConversion}
              </Label>
              <Input
                id="targetConversion"
                type="number"
                value={targetConversionRate}
                onChange={(e) => setTargetConversionRate(Number(e.target.value))}
                className="text-lg"
                min="0"
                max="100"
                step="0.1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avgDealValue" className="flex items-center gap-2">
                <DollarSign className="size-4" />
                {t.solutions.roiCalculator.inputs.avgDealValue}
              </Label>
              <Input
                id="avgDealValue"
                type="number"
                value={avgDealValue}
                onChange={(e) => setAvgDealValue(Number(e.target.value))}
                className="text-lg"
                min="100"
                step="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trainingCost" className="flex items-center gap-2">
                <Calculator className="size-4" />
                {t.solutions.roiCalculator.inputs.trainingCost}
              </Label>
              <Input
                id="trainingCost"
                type="number"
                value={trainingCost}
                onChange={(e) => setTrainingCost(Number(e.target.value))}
                className="text-lg"
                min="100"
                step="100"
              />
            </div>
          </div>

          {/* 计算结果 */}
          <motion.div
            key={`${teamSize}-${currentConversionRate}-${targetConversionRate}-${avgDealValue}-${trainingCost}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-background/80 rounded-xl p-6 border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">{t.solutions.roiCalculator.results.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatCurrency(results.revenueIncrease)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{t.solutions.roiCalculator.results.revenueIncrease}</div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {results.roi > 0 ? '+' : ''}{formatNumber(results.roi)}%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{t.solutions.roiCalculator.results.roi}</div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatNumber(results.paybackPeriod)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{t.solutions.roiCalculator.results.paybackPeriod}</div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.totalTrainingCost)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{t.solutions.roiCalculator.results.totalTrainingInvestment}</div>
                </CardContent>
              </Card>
            </div>

            {/* 详细对比 */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-center">{t.solutions.roiCalculator.results.currentStatus}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{t.solutions.roiCalculator.results.conversionRate}:</span>
                      <span className="font-medium">{currentConversionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.solutions.roiCalculator.results.annualRevenue}:</span>
                      <span className="font-medium">{formatCurrency(results.currentRevenue)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-center">{t.solutions.roiCalculator.results.expectedStatus}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{t.solutions.roiCalculator.results.conversionRate}:</span>
                      <span className="font-medium text-primary">{targetConversionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.solutions.roiCalculator.results.annualRevenue}:</span>
                      <span className="font-medium text-primary">{formatCurrency(results.projectedRevenue)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 行动按钮 */}
            <div className="mt-6 text-center">
              <Button size="lg" className="rounded-full">
                {t.solutions.roiCalculator.getCustomizedPlan}
                <TrendingUp className="ml-2 size-4" />
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}