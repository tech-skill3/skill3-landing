"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/footer"

export default function FooterController() {
  const pathname = usePathname()
  const isCreator = pathname === "/creator" || pathname?.startsWith("/creator/")
  const hide = pathname?.startsWith("/student-center") || isCreator || pathname?.startsWith("/invite")
  if (hide) return null
  return <Footer />
}


