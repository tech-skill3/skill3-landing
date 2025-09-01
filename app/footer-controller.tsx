"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/footer"

export default function FooterController() {
  const pathname = usePathname()
  const hide = pathname?.startsWith("/student-center")
  if (hide) return null
  return <Footer />
}


