"use client"

import { usePathname } from "next/navigation"

interface StudentCenterLayoutProps {
  children: React.ReactNode
}

export function StudentCenterLayout({ children }: StudentCenterLayoutProps) {
  const pathname = usePathname()

  // 直接使用pathname判断，避免useState和useEffect的hydration问题
  const isStudentCenter = pathname?.startsWith('/student-center')

  if (isStudentCenter) {
    // 学员中心：只显示内容，不显示header和footer
    return (
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    )
  }

  // 其他页面：正常显示header和footer
  return <>{children}</>
}
