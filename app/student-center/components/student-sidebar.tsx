'use client'

import { LayoutDashboard, BookOpen, Plus, Trophy, Bot, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ActiveTab = 'dashboard' | 'learning' | 'courses' | 'agents' | 'achievements'

interface StudentSidebarProps {
  activeTab: ActiveTab
  onTabChange: (tab: ActiveTab) => void
}

const menuItems = [
  {
    id: 'dashboard' as ActiveTab,
    label: '仪表盘',
    icon: LayoutDashboard,
    description: '学习概览和快捷入口'
  },
  {
    id: 'learning' as ActiveTab,
    label: '我的学习',
    icon: BookOpen,
    description: '管理和查看所有学习内容'
  },
  {
    id: 'courses' as ActiveTab,
    label: '更多课程',
    icon: Plus,
    description: '探索更多学习资源'
  },
  {
    id: 'agents' as ActiveTab,
    label: '更多Skill Agent',
    icon: Bot,
    description: '发现强大的AI技能助手'
  },
  {
    id: 'achievements' as ActiveTab,
    label: '我的成就',
    icon: Trophy,
    description: 'SBT技能凭证和成就'
  }
]

export function StudentSidebar({ activeTab, onTabChange }: StudentSidebarProps) {
  const [openApply, setOpenApply] = useState(false)
  return (
    <div className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-auto p-4 text-left",
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <div className="flex items-start space-x-3">
                  <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                  </div>
                </div>
              </Button>
            )
          })}
        </nav>

        {/* 申请成为创作者按钮 */}
        <div className="pt-4 mt-4 border-t">
          <Button
            className="w-full rounded-full h-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-center gap-2"
            onClick={() => setOpenApply(true)}
          >
            <Sparkles className="h-4 w-4" />申请成为创作者
          </Button>
        </div>

        <Dialog open={openApply} onOpenChange={setOpenApply}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>申请成为创作者</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">姓名/昵称</label>
                <Input placeholder="例如：Jimmy" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">邮箱</label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">擅长领域</label>
                <Input placeholder="如：AI 编程、数据分析" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">个人简介</label>
                <Input placeholder="一句话介绍你自己" />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setOpenApply(false)}>取消</Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">提交申请</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

