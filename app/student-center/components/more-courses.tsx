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
    provider: 'Mission Web3',
    price: '$9.9'
  },
  {
    id: 2,
    title: 'A Deeper Dive into Payment ID',
    participants: '2.88K',
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$4.9'
  },
  {
    id: 3,
    title: 'Owning & Using Your Digital Identity Made Simple',
    participants: '4.06K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$6.9'
  },
  {
    id: 4,
    title: 'The Basics of Digital Identity',
    participants: '4.32K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$5.9'
  },
  {
    id: 5,
    title: 'Security In DEX',
    participants: '68.75K',
    category: 'NFT',
    points: 10,
    reward: 30,
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$7.9'
  },
  {
    id: 6,
    title: 'MW3 Module 14: Idle Assets Earning',
    participants: '19.47K',
    category: 'Parent',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$9.9'
  },
  {
    id: 7,
    title: 'Introduction to Smart Savings with Liquid Staking',
    participants: '2.70K',
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$4.9'
  },
  {
    id: 8,
    title: 'Unlocking Opportunities in Crypto: Maximizing Idle Assets',
    participants: '8.16K',
    points: 10,
    reward: 30,
    category: 'NFT',
    image: '/api/placeholder/200/120',
    provider: 'Mission Web3',
    price: '$6.9'
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

      {/* 课程网格（样式对齐 Skill Agent 卡片） */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200"
            onClick={() => handleCourseClick(course.id)}
          >
            <div className="p-4">
              {/* 封面区域（与 Skill Agent 卡片一致） */}
              <div className="relative mb-3">
                <div className="w-full h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-lg font-bold">
                    {course.title.includes('MW3') ? 'MW3' : course.title.charAt(0)}
                  </div>
                </div>

                {/* 左上角：类别标签 */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <Badge variant="secondary" className="text-xs bg-gray-700 text-white">
                    {course.category}
                  </Badge>
                </div>

                {/* 右上角：积分/奖励徽章 */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {course.points && (
                    <div className="bg-white/90 text-xs px-2 py-1 rounded-full">{course.points} pts</div>
                  )}
                  {course.reward && (
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="h-3 w-3" />{course.reward}
                    </div>
                  )}
                </div>

                {/* 右下角：价格标签 */}
                <div className="absolute -bottom-2 right-2">
                  <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                    {course.price}
                  </div>
                </div>
              </div>

              {/* 信息区域 */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-900 line-clamp-2">
                  {course.title}
                </h3>

                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 mr-1" />
                  {course.participants} participants
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                  <div className="flex items-center">
                    <span className="text-gray-400">🏃‍♂️</span>
                    <span className="ml-1">{course.provider}</span>
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