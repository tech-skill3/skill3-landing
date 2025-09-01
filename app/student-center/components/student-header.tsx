'use client'

import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import UserMenu from './user-menu'

export function StudentHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 h-14">
      <div className="px-4 h-14 flex items-center justify-between">
        {/* 返回按钮和Logo */}
        <div className="flex items-center pl-2">

          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S3</span>
          </div>
          <span className="ml-4 text-xl font-bold text-gray-900">学员中心</span>
        </div>

        {/* 右侧功能区 */}
        <div className="flex items-center space-x-4">
          {/* 消息中心 */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            {/* 未读消息提示点 */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>

          {/* 用户菜单 */}
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

