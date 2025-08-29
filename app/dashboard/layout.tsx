"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  BookOpen, 
  Trophy, 
  User, 
  Settings, 
  LogOut
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    { id: "overview", label: "仪表盘概览", icon: LayoutDashboard, href: "/dashboard" },
    { id: "skills", label: "我的技能体", icon: BookOpen, href: "/dashboard/skills" },
    { id: "nfts", label: "我的成果NFT", icon: Trophy, href: "/dashboard/nfts" },
    { id: "profile", label: "个人资料", icon: User, href: "/dashboard/profile" },
    { id: "settings", label: "设置", icon: Settings, href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* 左侧菜单栏 */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-gray-900">SaaSify</span>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="size-5" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <LogOut className="size-5" />
                退出登录
              </Link>
            </div>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div className="flex-1 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  )
}