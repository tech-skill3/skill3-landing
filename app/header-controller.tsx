"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function HeaderController() {
  const pathname = usePathname()
  const hide = pathname?.startsWith("/student-center")
  if (hide) return null
  return <Header />
}


