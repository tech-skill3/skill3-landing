import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {/* X (Twitter) */}
              <Link href="https://x.com/skill3_com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span className="sr-only">X</span>
              </Link>
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/skill3-com/" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* Medium */}
              <Link href="https://medium.com/@skill3" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="sr-only">Medium</span>
              </Link>
              {/* Telegram */}
              <Link href="https://t.me/skill3_com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{t.footer.products.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/skill-mall" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.products.skillMall}
                </Link>
              </li>
              <li>
                <Link href="/creator-hub" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.products.creatorStudio}
                </Link>
              </li>
              <li>
                <Link href="/ai-exhibition" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.products.aiExhibitionPlatform}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{t.footer.solutions.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.solutions.resultsAsService}
                </Link>
              </li>
              <li>
                <Link href="/talent-recruitment" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.solutions.talentRecruitment}
                </Link>
              </li>
              <li>
                <Link href="/industry-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.solutions.industryCases}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{t.footer.company.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.joinUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.news}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{t.footer.resources.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/whitepaper" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.resources.whitepaper}
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.resources.docs}
                </Link>
              </li>
              <li>
                <Link href="/oracle-status" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.resources.oracleStatus}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Skill³. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.legal.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.legal.termsOfService}
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.legal.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
