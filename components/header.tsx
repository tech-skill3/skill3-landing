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
import { useLanguage } from "@/contexts/LanguageContext"
import { usePathname } from "next/navigation"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [walletModalOpen, setWalletModalOpen] = useState(false)
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  // 保证互斥：便捷方法关闭全部下拉
  // 基于路径的激活态判断
  const isSolutionsActive = ["/student", "/expert", "/enterprises", "/solutions"].some((p) => pathname?.startsWith(p))
  const isSkillMallActive = pathname?.startsWith("/skill-mall")
  const isCreatorHubActive = pathname?.startsWith("/creator-hub")
  const isPricingActive = pathname?.startsWith("/pricing")
  const isTechnologyActive = ["/whitepapers", "/docs", "/blog"].some((p) => pathname?.startsWith(p))
  const isCompanyActive = ["/about-us"].some((p) => pathname?.startsWith(p))

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
      if (companyDropdownOpen) {
        setCompanyDropdownOpen(false)
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
  }, [technologyDropdownOpen, companyDropdownOpen, languageDropdownOpen])

  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage)
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
          {/* Solutions Dropdown (Hover) */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors min-w-[90px] justify-center ${isSolutionsActive ? "text-foreground font-semibold" : "text-muted-foreground"} hover:text-foreground`}>
              {t.navigation.solutions}
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>

            <div
              className="absolute top-full left-1/2 mt-0 w-40 bg-background/95 backdrop-blur-lg border rounded-lg shadow-lg z-50 opacity-0 -translate-x-1/2 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <div className="py-2">
                <Link
                  href="/student"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-center"
                >
                  {t.navigation.solutionsMenu.learners}
                </Link>
                <Link
                  href="/expert"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-center"
                >
                  {t.navigation.solutionsMenu.consultants}
                </Link>
                <Link
                  href="/enterprises"
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-center"
                >
                  {t.navigation.solutionsMenu.enterprises}
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/skill-mall"
            className={`text-sm font-medium transition-colors hover:text-foreground min-w-[80px] text-center ${isSkillMallActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            aria-current={isSkillMallActive ? "page" : undefined}
          >
            {t.navigation.skillMall}
          </Link>
          <Link
            href="/creator-hub"
            className={`text-sm font-medium transition-colors hover:text-foreground min-w-[100px] text-center ${isCreatorHubActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            aria-current={isCreatorHubActive ? "page" : undefined}
          >
            {t.navigation.creatorHub}
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors hover:text-foreground min-w-[60px] text-center ${isPricingActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            aria-current={isPricingActive ? "page" : undefined}
          >
            {t.navigation.pricing}
          </Link>
          
          {/* Technology Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                const next = !technologyDropdownOpen
                setTechnologyDropdownOpen(next)
                if (next) {
                  setCompanyDropdownOpen(false)
                  setLanguageDropdownOpen(false)
                }
              }}
              className={`flex items-center gap-1 text-sm font-medium transition-colors min-w-[90px] justify-center ${isTechnologyActive ? "text-foreground font-semibold" : "text-muted-foreground"} hover:text-foreground`}
            >
              {t.navigation.technology}
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
                    {t.navigation.whitepapers}
                  </Link>
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setTechnologyDropdownOpen(false)}
                  >
                    {t.navigation.docs}
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setTechnologyDropdownOpen(false)}
                  >
                    {t.navigation.blog}
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                const next = !companyDropdownOpen
                setCompanyDropdownOpen(next)
                if (next) {
                  setTechnologyDropdownOpen(false)
                  setLanguageDropdownOpen(false)
                }
              }}
              className={`flex items-center gap-1 text-sm font-medium transition-colors min-w-[80px] justify-center ${isCompanyActive ? "text-foreground font-semibold" : "text-muted-foreground"} hover:text-foreground`}
            >
              {t.navigation.company}
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
                    href="/about-us"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    {t.navigation.aboutUs}
                  </Link>
                  <button
                    onClick={() => {
                      setCompanyDropdownOpen(false)
                      // TODO: Add contact us functionality (email link or modal)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {t.navigation.contactUs}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
        <div className="hidden md:flex gap-3 items-center">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => {
                const next = !languageDropdownOpen
                setLanguageDropdownOpen(next)
                if (next) {
                  setTechnologyDropdownOpen(false)
                  setCompanyDropdownOpen(false)
                }
              }} 
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
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted/50 ${
                      language === "en" ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("zh")}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted/50 ${
                      language === "zh" ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    中文
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <Button 
            className="rounded-full h-9 px-4 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg min-w-[100px]"
          >
            {t.buttons.bookDemo}
          </Button>

          <Button 
            variant="outline"
            onClick={() => setWalletModalOpen(true)}
            className="rounded-full h-9 px-4 text-sm min-w-[110px]"
          >
            {t.buttons.launchApp}
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              const next = !languageDropdownOpen
              setLanguageDropdownOpen(next)
              if (next) {
                setTechnologyDropdownOpen(false)
                setCompanyDropdownOpen(false)
              }
            }} 
            className="rounded-full"
          >
            <Globe className="size-[18px]" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{t.buttons.toggleMenu}</span>
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
            <Link
              href="/solutions"
              className={`py-2 text-sm font-medium ${isSolutionsActive ? "text-foreground" : "text-muted-foreground"}`}
              aria-current={isSolutionsActive ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navigation.solutions}
            </Link>
            <Link
              href="/skill-mall"
              className={`py-2 text-sm font-medium ${isSkillMallActive ? "text-foreground" : "text-muted-foreground"}`}
              aria-current={isSkillMallActive ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navigation.skillMall}
            </Link>
            <Link
              href="/creator-hub"
              className={`py-2 text-sm font-medium ${isCreatorHubActive ? "text-foreground" : "text-muted-foreground"}`}
              aria-current={isCreatorHubActive ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navigation.creatorHub}
            </Link>
            <Link
              href="/pricing"
              className={`py-2 text-sm font-medium ${isPricingActive ? "text-foreground" : "text-muted-foreground"}`}
              aria-current={isPricingActive ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navigation.pricing}
            </Link>
            
            {/* Technology submenu for mobile */}
            <div className="border-l-2 border-muted pl-4">
              <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {t.navigation.technology}
              </div>
              <Link
                href="/whitepapers"
                className={`block py-1 text-sm ${pathname?.startsWith("/whitepapers") ? "text-foreground" : "text-muted-foreground"}`}
                aria-current={pathname?.startsWith("/whitepapers") ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navigation.whitepapers}
              </Link>
              <Link
                href="/docs"
                className={`block py-1 text-sm ${pathname?.startsWith("/docs") ? "text-foreground" : "text-muted-foreground"}`}
                aria-current={pathname?.startsWith("/docs") ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navigation.docs}
              </Link>
              <Link
                href="/blog"
                className={`block py-1 text-sm ${pathname?.startsWith("/blog") ? "text-foreground" : "text-muted-foreground"}`}
                aria-current={pathname?.startsWith("/blog") ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navigation.blog}
              </Link>
            </div>
            
            {/* Company submenu for mobile */}
            <div className="border-l-2 border-muted pl-4">
              <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {t.navigation.company}
              </div>
              <Link
                href="/about-us"
                className={`block py-1 text-sm ${pathname?.startsWith("/about-us") ? "text-foreground" : "text-muted-foreground"}`}
                aria-current={pathname?.startsWith("/about-us") ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navigation.aboutUs}
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  // TODO: Add contact us functionality (email link or modal)
                }}
                className="block w-full text-left py-1 text-sm text-muted-foreground"
              >
                {t.navigation.contactUs}
              </button>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button 
                onClick={() => {
                  setWalletModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="rounded-full h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                {t.buttons.launchApp}
                <ChevronRight className="ml-1 size-4" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full h-10 px-6 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.buttons.bookDemo}
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
