"use client"

import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import UserMenu from '../../student-center/components/user-menu'

export default function CreatorHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}


