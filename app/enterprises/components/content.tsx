"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"

export default function EnterprisesContent() {
  const { t } = useLanguage()
  const c = t.enterprisesSolutionsPage

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

      {/* 痛点洞察 */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{c.painPoints.title}</h2>
          </div>
          <ul className="grid md:grid-cols-3 gap-6">
            {c.painPoints.items.map((item, idx) => (
              <li key={idx} className="rounded-xl border border-border/50 p-5 bg-muted/10 text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KEF 全维度训战体系 */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.kefCore.title}</h2>
              <p className="text-muted-foreground mb-6">{c.kefCore.subtitle}</p>
              <ul className="space-y-3">
                {c.kefCore.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-[2px] inline-block w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-sm md:text-base text-foreground/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                <Image src="/images/placeholder.svg" alt={c.kefCore.imageAlt} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品模块详解 */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">{c.modules.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 智课工具 */}
            <div className="rounded-2xl border border-border/50 p-6 bg-muted/10">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/40 bg-muted/20 mb-4">
                <Image src="/images/placeholder.svg" alt={c.modules.items.courseBuilder.imageAlt} fill className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{c.modules.items.courseBuilder.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{c.modules.items.courseBuilder.description}</p>
            </div>

            {/* 智学 */}
            <div className="rounded-2xl border border-border/50 p-6 bg-muted/10">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/40 bg-muted/20 mb-4">
                <Image src="/images/placeholder.svg" alt={c.modules.items.learning.imageAlt} fill className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{c.modules.items.learning.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{c.modules.items.learning.description}</p>
            </div>

            {/* 陪练 */}
            <div className="rounded-2xl border border-border/50 p-6 bg-muted/10">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/40 bg-muted/20 mb-4">
                <Image src="/images/placeholder.svg" alt={c.modules.items.practice.imageAlt} fill className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{c.modules.items.practice.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{c.modules.items.practice.description}</p>
            </div>

            {/* 质检 */}
            <div className="rounded-2xl border border-border/50 p-6 bg-muted/10">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/40 bg-muted/20 mb-4">
                <Image src="/images/placeholder.svg" alt={c.modules.items.qualityCheck.imageAlt} fill className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{c.modules.items.qualityCheck.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{c.modules.items.qualityCheck.description}</p>
            </div>
          </div>
        </div>
      </section>


      {/* 核心解决方案 */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{c.core.title}</h2>
          </div>

          <div className="space-y-10 md:space-y-16 max-w-6xl mx-auto">

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

            {/* 5 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{c.core.items.item5.title}</h3>
                <p className="text-muted-foreground">{c.core.items.item5.description}</p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt={c.core.items.item5.imageAlt} fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 真实故事 */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{c.story.sectionTitle}</h2>
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

          {/* CTA：申请演示 */}
          <div className="mt-12 text-center">
            <Button
              asChild
              className="rounded-full h-9 px-4 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg min-w-[100px]"
            >
              <Link href="/demo">{t.buttons.bookDemo}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}