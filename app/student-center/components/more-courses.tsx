'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  BookOpen,
  Play,
  ArrowRight,
  Heart
} from 'lucide-react'

export function MoreCourses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const courses = [
    {
      id: 1,
      title: 'React 18 新特性深度解析',
      description: '学习React 18的所有新特性，包括Concurrent Features、Suspense、Automatic Batching等',
      instructor: '张老师',
      category: '前端开发',
      level: '高级',
      duration: '8小时',
      students: 1250,
      rating: 4.9,
      price: '¥199',
      image: '/api/placeholder/400/250',
      tags: ['React', '前端', 'JavaScript'],
      isNew: true
    },
    {
      id: 2,
      title: 'TypeScript 从入门到精通',
      description: '全面掌握TypeScript，从基础类型到高级特性，包含实战项目',
      instructor: '李老师',
      category: '编程语言',
      level: '中级',
      duration: '12小时',
      students: 2100,
      rating: 4.8,
      price: '¥299',
      image: '/api/placeholder/400/250',
      tags: ['TypeScript', 'JavaScript', '类型系统'],
      isNew: false
    },
    {
      id: 3,
      title: 'Node.js 微服务架构实战',
      description: '学习如何使用Node.js构建可扩展的微服务架构',
      instructor: '王老师',
      category: '后端开发',
      level: '高级',
      duration: '15小时',
      students: 890,
      rating: 4.7,
      price: '¥399',
      image: '/api/placeholder/400/250',
      tags: ['Node.js', '微服务', '架构'],
      isNew: false
    },
    {
      id: 4,
      title: 'Python 数据分析与可视化',
      description: '使用Python进行数据分析，掌握Pandas、NumPy、Matplotlib等工具',
      instructor: '赵老师',
      category: '数据科学',
      level: '中级',
      duration: '10小时',
      students: 1650,
      rating: 4.6,
      price: '¥249',
      image: '/api/placeholder/400/250',
      tags: ['Python', '数据分析', '可视化'],
      isNew: true
    },
    {
      id: 5,
      title: 'Vue 3 Composition API 实战',
      description: '掌握Vue 3的新特性，学习Composition API的最佳实践',
      instructor: '刘老师',
      category: '前端开发',
      level: '中级',
      duration: '9小时',
      students: 980,
      rating: 4.8,
      price: '¥199',
      image: '/api/placeholder/400/250',
      tags: ['Vue', '前端', 'Composition API'],
      isNew: false
    },
    {
      id: 6,
      title: 'Docker & Kubernetes 容器化部署',
      description: '学习容器化技术，从Docker到Kubernetes的完整部署方案',
      instructor: '陈老师',
      category: 'DevOps',
      level: '高级',
      duration: '14小时',
      students: 750,
      rating: 4.9,
      price: '¥349',
      image: '/api/placeholder/400/250',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
      isNew: false
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return a.isNew ? -1 : 1
      case 'price-low':
        return parseFloat(a.price.replace('¥', '')) - parseFloat(b.price.replace('¥', ''))
      case 'price-high':
        return parseFloat(b.price.replace('¥', '')) - parseFloat(a.price.replace('¥', ''))
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">更多课程</h1>
        <p className="text-gray-600 mt-1">探索更多优质学习资源</p>
      </div>

      {/* 筛选和搜索区域 */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* 搜索框 */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="搜索课程..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* 分类筛选 */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部分类</SelectItem>
                <SelectItem value="前端开发">前端开发</SelectItem>
                <SelectItem value="后端开发">后端开发</SelectItem>
                <SelectItem value="编程语言">编程语言</SelectItem>
                <SelectItem value="数据科学">数据科学</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
              </SelectContent>
            </Select>

            {/* 难度筛选 */}
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full lg:w-32">
                <SelectValue placeholder="难度" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部难度</SelectItem>
                <SelectItem value="初级">初级</SelectItem>
                <SelectItem value="中级">中级</SelectItem>
                <SelectItem value="高级">高级</SelectItem>
              </SelectContent>
            </Select>

            {/* 排序 */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">最热门</SelectItem>
                <SelectItem value="rating">评分最高</SelectItem>
                <SelectItem value="newest">最新发布</SelectItem>
                <SelectItem value="price-low">价格从低到高</SelectItem>
                <SelectItem value="price-high">价格从高到低</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 课程列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedCourses.map((course) => (
          <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-200">
            <div className="relative">
              {/* 课程图片 */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>

              {/* 新课程标签 */}
              {course.isNew && (
                <Badge className="absolute top-3 left-3 bg-green-500">
                  新课程
                </Badge>
              )}

              {/* 收藏按钮 */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="p-6">
              {/* 课程标题和描述 */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {course.description}
                </p>
              </div>

              {/* 讲师信息 */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">{course.instructor[0]}</span>
                </div>
                <span className="text-sm text-gray-600 ml-2">{course.instructor}</span>
              </div>

              {/* 课程信息 */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {course.rating}
                </div>
              </div>

              {/* 标签 */}
              <div className="flex flex-wrap gap-1 mb-4">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* 价格和按钮 */}
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-blue-600">
                  {course.price}
                </div>
                <Button size="sm">
                  <Play className="h-4 w-4 mr-1" />
                  开始学习
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 加载更多 */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          加载更多课程
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

