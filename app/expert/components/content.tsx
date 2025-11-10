"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ExpertContent() {
  const { t } = useLanguage()
  const c = t.consultantsSolutionsPage

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 lg:py-20 overflow-hidden">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1
            className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            style={{ lineHeight: "1.2" }}
          >
            {c.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">{c.hero.subtitle}</p>
        </div>
      </section>

      {/* 核心解决方案 */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{c.core.title}</h2>
          </div>

          <div className="space-y-10 md:space-y-16 max-w-6xl mx-auto">
            {/* 1 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{c.core.items.item1.title}</h3>
                <p className="text-muted-foreground">{c.core.items.item1.description}</p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt={c.core.items.item1.imageAlt} fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 2 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt={c.core.items.item2.imageAlt} fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{c.core.items.item2.title}</h3>
                <p className="text-muted-foreground">{c.core.items.item2.description}</p>
              </div>
            </div>

            {/* 3 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{c.core.items.item3.title}</h3>
                <p className="text-muted-foreground">{c.core.items.item3.description}</p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt={c.core.items.item3.imageAlt} fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 4 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt={c.core.items.item4.imageAlt} fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{c.core.items.item4.title}</h3>
                <p className="text-muted-foreground">{c.core.items.item4.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 真实故事 */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">真实案例</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* 左侧图片 */}
            <div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                <Image src="/images/placeholder.svg" alt={c.core.items.item1.imageAlt} fill className="object-cover" />
              </div>
            </div>

            {/* 右侧文案 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{c.story.title}</h2>

              <div className="mb-6">
                <div className="text-orange-500 font-semibold">{c.story.resultsLabel}</div>
                <p className="mt-2 text-muted-foreground">{c.story.resultsSummary}</p>
              </div>

              <div className="mt-4">
                <div className="text-orange-500 text-4xl leading-none mb-4">“</div>
                <blockquote className="text-base md:text-lg text-foreground/90">{c.story.testimonial}</blockquote>
              </div>

              <div className="mt-6">
                <div className="font-medium">{c.story.authorName}</div>
                <div className="text-sm text-muted-foreground">{c.story.authorBackground}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.story.authorExtras}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}