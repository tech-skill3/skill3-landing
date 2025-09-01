'use client'

import { LayoutDashboard, BookOpen, Plus, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ActiveTab = 'dashboard' | 'learning' | 'courses' | 'achievements'

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
    id: 'achievements' as ActiveTab,
    label: '我的成就',
    icon: Trophy,
    description: 'SBT技能凭证和成就'
  }
]

export function StudentSidebar({ activeTab, onTabChange }: StudentSidebarProps) {
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
      </div>
    </div>
  )
}

