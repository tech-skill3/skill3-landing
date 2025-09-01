'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  Users,
  Award
} from 'lucide-react'

// 模拟课程数据
const courses = [
  {
    id: 1,
    title: 'MW3 Module 15: Digital Identities',
    participants: '11.26K',
    points: 10,
    reward: 30,
    category: 'Parent',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 2,
    title: 'A Deeper Dive into Payment ID',
    participants: '2.88K',
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 3,
    title: 'Owning & Using Your Digital Identity Made Simple',
    participants: '4.06K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 4,
    title: 'The Basics of Digital Identity',
    participants: '4.32K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 5,
    title: 'Security In DEX',
    participants: '68.75K',
    category: 'NFT',
    points: 10,
    reward: 30,
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 6,
    title: 'MW3 Module 14: Idle Assets Earning',
    participants: '19.47K',
    category: 'Parent',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 7,
    title: 'Introduction to Smart Savings with Liquid Staking',
    participants: '2.70K',
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  },
  {
    id: 8,
    title: 'Unlocking Opportunities in Crypto: Maximizing Idle Assets',
    participants: '8.16K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3'
  }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'oat-nft', label: 'OAT & NFT' },
  { id: 'custom-reward', label: 'Custom Reward' },
  { id: 'token-reward', label: 'Token Reward' },
  { id: 'discord-role', label: 'Discord Role' },
  { id: 'point', label: 'Point' },
  { id: 'airdrop', label: 'Airdrop' }
]

export function MoreCourses() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const handleCourseClick = (courseId: number) => {
    console.log('Clicked course:', courseId)
    // 暂时不需要跳转逻辑
  }

  return (
    <div className="space-y-6 bg-white min-h-screen">
      {/* 顶部导航标签 */}
      <div className="flex items-center space-x-1 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeCategory === category.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 搜索区域 */}
      <div className="flex justify-start">
        <div className="w-full max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-100 border-gray-200"
          />
        </div>
      </div>

      {/* 课程网格 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200"
            onClick={() => handleCourseClick(course.id)}
          >
            <div className="p-4 flex gap-4">
              {/* 左侧课程信息 */}
              <div className="flex-1 space-y-3">
                {/* 标签 */}
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs bg-gray-700 text-white">
                    {course.category}
                  </Badge>
                  {course.points && (
                    <Badge variant="secondary" className="text-xs bg-blue-600 text-white">
                      {course.points} Points
                    </Badge>
                  )}
                  {course.reward && (
                    <Badge variant="secondary" className="text-xs bg-orange-500 text-white flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {course.reward}
                    </Badge>
                  )}
                </div>

                {/* 课程标题 */}
                <h3 className="font-medium text-sm text-gray-900 line-clamp-2 leading-tight">
                  {course.title}
                </h3>
                
                {/* 参与人数 */}
                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 mr-1" />
                  {course.participants} participants
                </div>

                {/* 提供商 */}
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-gray-400">🏃‍♂️</span>
                  <span className="ml-1">{course.provider}</span>
                </div>
              </div>

              {/* 右侧课程封面 */}
              <div className="w-20 h-20 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-lg font-bold">
                    {course.title.includes('MW3') ? 'MW3' : course.title.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 加载更多 */}
      <div className="flex justify-center pt-8">
        <Button variant="outline" className="px-8">
          Load More
        </Button>
      </div>
    </div>
  )
}