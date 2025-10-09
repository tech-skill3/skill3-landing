"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ConnectWalletModal from "@/components/wallet/connect-wallet-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [walletModalOpen, setWalletModalOpen] = useState(false)
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("English")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = () => {
      if (technologyDropdownOpen) {
        setTechnologyDropdownOpen(false)
      }
      if (languageDropdownOpen) {
        setLanguageDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [technologyDropdownOpen, languageDropdownOpen])

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    setLanguageDropdownOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center font-bold hover:opacity-80 transition-opacity">
          <div className="w-24 h-16 flex items-center justify-center">
            <Image 
              src="/icons/1024Full.svg" 
              alt="Skill³ Logo" 
              width={96}
              height={64}
              className="object-contain"
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-5 items-center">
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
          
          {/* Technology Dropdown */}
          <div className="relative">
            <button
              onClick={() => setTechnologyDropdownOpen(!technologyDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Technology
              <ChevronDown className={`size-4 transition-transform ${technologyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {technologyDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-lg border rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  <Link
                    href="/whitepapers"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setTechnologyDropdownOpen(false)}
                  >
                    Whitepapers
                  </Link>
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setTechnologyDropdownOpen(false)}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setTechnologyDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* About Us Link */}
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About us
          </Link>
        </nav>
        <div className="hidden md:flex gap-3 items-center">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} 
              className="rounded-full"
            >
              <Globe className="size-[18px]" />
              <span className="sr-only">Switch language</span>
            </Button>
            
            {languageDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 w-32 bg-background/95 backdrop-blur-lg border rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted/50 ${
                      currentLanguage === "English" ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("中文")}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted/50 ${
                      currentLanguage === "中文" ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    中文
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <Button 
            className="rounded-full h-9 px-4 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
          >
            Book Demo
          </Button>

          <Button 
            variant="outline"
            onClick={() => setWalletModalOpen(true)}
            className="rounded-full h-9 px-4 text-sm"
          >
            Launch APP
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} 
            className="rounded-full"
          >
            <Globe className="size-[18px]" />
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
