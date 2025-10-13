import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import HeaderController from "./header-controller"
import FooterController from "./footer-controller"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skill³",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-[100dvh] flex-col">
            <HeaderController />
            <main className="flex-1">
              {children}
            </main>
            <FooterController />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
