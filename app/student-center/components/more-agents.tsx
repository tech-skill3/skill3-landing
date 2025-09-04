'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  Users,
  Star,
  Bot,
  Zap
} from 'lucide-react'

// 模拟Skill Agent数据
const agents = [
  {
    id: 1,
    title: 'AI Code Assistant Pro',
    description: '智能代码生成与优化助手',
    users: '15.2K',
    rating: 4.9,
    category: 'Programming',
    tags: ['AI', 'Coding', 'Productivity'],
    image: '/api/placeholder/200/120',
    provider: 'CodeCraft AI',
    price: '$9.9/mo'
  },
  {
    id: 2,
    title: 'Data Analysis Expert',
    description: '专业数据分析与可视化工具',
    users: '8.7K',
    rating: 4.8,
    category: 'Analytics',
    tags: ['Data', 'Charts', 'Business'],
    image: '/api/placeholder/200/120',
    provider: 'DataViz Pro',
    price: '$12.9/mo'
  },
  {
    id: 3,
    title: 'Language Learning Companion',
    description: '个性化语言学习智能助手',
    users: '23.5K',
    rating: 4.7,
    category: 'Education',
    tags: ['Language', 'Learning', 'AI'],
    image: '/api/placeholder/200/120',
    provider: 'LinguaBot',
    price: '$7.9/mo'
  },
  {
    id: 4,
    title: 'Smart Trading Assistant',
    description: '加密货币交易策略分析师',
    users: '12.1K',
    rating: 4.6,
    category: 'Finance',
    tags: ['Trading', 'Crypto', 'Analysis'],
    image: '/api/placeholder/200/120',
    provider: 'TradeGenius',
    price: '$14.9/mo'
  },
  {
    id: 5,
    title: 'Creative Writing AI',
    description: '创意写作与内容生成专家',
    users: '19.3K',
    rating: 4.8,
    category: 'Creative',
    tags: ['Writing', 'Content', 'Creative'],
    image: '/api/placeholder/200/120',
    provider: 'WriteBot Studio',
    price: '$8.9/mo'
  },
  {
    id: 6,
    title: 'Project Management Pro',
    description: '智能项目管理与协作助手',
    users: '7.4K',
    rating: 4.5,
    category: 'Productivity',
    tags: ['Management', 'Team', 'Planning'],
    image: '/api/placeholder/200/120',
    provider: 'TaskMaster AI',
    price: '$11.9/mo'
  }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'programming', label: 'Programming' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'education', label: 'Education' },
  { id: 'finance', label: 'Finance' },
  { id: 'creative', label: 'Creative' },
  { id: 'productivity', label: 'Productivity' }
]

export function MoreAgents() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const handleAgentClick = (agentId: number) => {
    console.log('Clicked agent:', agentId)
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
            placeholder="Search Skill Agents"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-100 border-gray-200"
          />
        </div>
      </div>

      {/* Agent网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200"
            onClick={() => handleAgentClick(agent.id)}
          >
            <div className="p-4">
              {/* Agent封面 */}
              <div className="relative mb-3">
                <div className="w-full h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="text-white text-3xl" />
                </div>
                
                {/* 标签 */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <Badge variant="secondary" className="text-xs bg-gray-700 text-white">
                    {agent.category}
                  </Badge>
                </div>

                {/* 评分 */}
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{agent.rating}</span>
                  </div>
                </div>

                {/* 价格标签 */}
                <div className="absolute -bottom-2 right-2">
                  <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                    {agent.price}
                  </div>
                </div>
              </div>

              {/* Agent信息 */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-900 line-clamp-1">
                  {agent.title}
                </h3>
                
                <p className="text-xs text-gray-600 line-clamp-2">
                  {agent.description}
                </p>

                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 mr-1" />
                  {agent.users} users
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-1">
                  {agent.tags.slice(0, 2).map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 border-blue-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                  <div className="flex items-center">
                    <Zap className="h-3 w-3 mr-1 text-blue-500" />
                    <span>{agent.provider}</span>
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
          Load More Agents
        </Button>
      </div>
    </div>
  )
}