"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function HeaderController() {
  const pathname = usePathname()
  const isCreatorBackoffice = pathname === "/creator" || pathname?.startsWith("/creator/")
  // 仅隐藏创作者后台与学员中心、invite，保留 creator-hub 的站点头尾
  const hide = pathname?.startsWith("/student-center") || isCreatorBackoffice || pathname?.startsWith("/invite")
  if (hide) return null
  return <Header />
}


