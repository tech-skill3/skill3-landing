"use client"


import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HowItWorks from "@/components/how-it-works"
import AiChallenges from "@/components/ai-challenges"
import EcosystemArchitecture from "@/components/ecosystem-architecture"
import ValueHub from "@/components/value-hub"

import BottomCTA from "@/components/bottom-cta"
import Newsletter from "@/components/newsletter"
import PartnersCarousel from "@/components/partners-carousel"


export default function LandingPage() {





  return (
    <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-20 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Launching Soon
              </Badge>
              <h1 className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{lineHeight: '1.2'}}>
                Skill³: AI-Driven Learning,Immersive Al Testing, Skill Unit Monetization              
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master new skills through Al-driven learning, test your expertise with real-world Al Coaching, and publish your Skill Units to earn substantial rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Explore Skill Mall
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base" asChild>
                  <Link href="/demo">Book a Demo</Link>
                </Button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <div className="relative w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  {/* Video Placeholder */}
                  <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
                    <svg 
                      className="w-24 h-24 mb-4 opacity-50" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-lg font-medium">视频演示</p>
                    <p className="text-sm opacity-75">点击播放产品介绍视频</p>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                    <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg 
                        className="w-8 h-8 text-slate-700 dark:text-slate-300 ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Partners Carousel Section */}
        <PartnersCarousel />

        {/* How It Works Section */}
        <HowItWorks />

                
        {/* AI Challenges Section */}
        <AiChallenges />
        
        {/* Ecosystem Architecture Section */}
        <EcosystemArchitecture />

        {/* Value Hub Section */}
        <ValueHub />



        {/* Bottom CTA Section */}
        <BottomCTA />

        {/* Newsletter Section */}
        <Newsletter />
    </div>
  )
}
