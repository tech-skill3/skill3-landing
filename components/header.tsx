"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import ConnectWalletModal from "@/components/wallet/connect-wallet-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [walletModalOpen, setWalletModalOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (companyDropdownOpen) {
        setCompanyDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [companyDropdownOpen])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            S
          </div>
          <span>Skill³</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/solutions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solutions
          </Link>
          <Link
            href="/skill-mall"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Skill Mall
          </Link>
          <Link
            href="/creator-hub"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Creator Hub
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          
          {/* Company & Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Company & Resources
              <ChevronDown className={`size-4 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {companyDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-lg border rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  <Link
                    href="/company"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/company#resources"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/company#documentation"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/company#whitepaper"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    White Paper
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button 
            onClick={() => setWalletModalOpen(true)}
            className="rounded-full h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
          >
            Launch APP
          </Button>

          <Button 
            variant="outline"
            className="rounded-full h-10 px-6 text-sm"
          >
            Book a Demo
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-16 inset-x-0 z-[60] bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/solutions" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="/skill-mall" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Skill Mall
            </Link>
            <Link href="/creator-hub" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Creator Hub
            </Link>
            <Link href="/pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/company" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Company & Resources
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button asChild className="rounded-full h-10 px-6 text-sm" variant="outline" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/invite" prefetch={false}>Invite to Earn</Link>
              </Button>
              <Button 
                onClick={() => setWalletModalOpen(true)}
                className="rounded-full h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                Launch APP
                <ChevronRight className="ml-1 size-4" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full h-10 px-6 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      <ConnectWalletModal 
        open={walletModalOpen} 
        onOpenChange={setWalletModalOpen} 
      />
    </header>
  )
}
