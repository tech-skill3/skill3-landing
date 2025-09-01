'use client'

import { useState } from 'react'
import { StudentSidebar } from './components/student-sidebar'
import { StudentHeader } from './components/student-header'
import { Dashboard } from './components/dashboard'
import { MyLearning } from './components/my-learning'
import { MoreCourses } from './components/more-courses'
import { MyAchievements } from './components/my-achievements'

type ActiveTab = 'dashboard' | 'learning' | 'courses' | 'achievements'

export default function StudentCenterPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'learning':
        return <MyLearning />
      case 'courses':
        return <MoreCourses />
      case 'achievements':
        return <MyAchievements />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部Header */}
      <StudentHeader />

      {/* 主要内容区域 */}
      <div className="flex">
        {/* 左侧菜单栏 */}
        <StudentSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 右侧内容区域 */}
        <div className="flex-1 ml-64">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

