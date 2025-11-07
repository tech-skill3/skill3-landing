import Image from "next/image"

export const metadata = {
  title: "专家顾问解决方案 | Skill3",
  description:
    "AI 智课工具快速上架课程，RWA资产交易让优质内容持续增值，专注创作，其他交给我们。",
}

export default function ExpertSolutionsPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 lg:py-20 overflow-hidden">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{ lineHeight: "1.2" }}>
            你的专业知识即资产
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            AI 智课工具快速上架课程，RWA资产交易让优质内容持续增值，专注创作，其他交给我们。
          </p>
        </div>
      </section>

      {/* 核心解决方案 */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">核心解决方案</h2>
          </div>

          <div className="space-y-10 md:space-y-16 max-w-6xl mx-auto">
            {/* 1 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">30分钟从想法到上架课程</h3>
                <p className="text-muted-foreground">
                  智课工具提供 AI 辅助创作，自动生成大纲、拆解知识点、生成习题，零技术门槛，让你专注于最擅长的内容本身。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="AI辅创占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 2 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="被动收入占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">多重收益模式，持续被动收入</h3>
                <p className="text-muted-foreground">
                  课程上架后能够持续售卖，最大化您的课程价值，让您的知识持续变现。
                </p>
              </div>
            </div>

            {/* 3 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">区块链确权，内容版权永久保护</h3>
                <p className="text-muted-foreground">
                  你的每一门课程都不只是内容本身，更是你的个人品牌印记。一旦完成区块链确权，就能证明“这个作品属于我”，再也不用担心被任何平台牵制。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="版权保护占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 4 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="RWA资产占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">课程铸造为RWA，知识资产持续增值</h3>
                <p className="text-muted-foreground">
                  优质课程可铸造为链上 RWA 资产进行交易，课程越受欢迎价值越高，你的知识不仅赚钱，还能像房产一样增值。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 真实故事 */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* 左侧图片 */}
            <div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                <Image src="/images/placeholder.svg" alt="专家顾问真实故事占位图" fill className="object-cover" />
              </div>
            </div>

            {/* 右侧文案 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">资深设计师的知识变现之路</h2>

              <div className="mb-6">
                <div className="text-orange-500 font-semibold">Results</div>
                <p className="mt-2 text-muted-foreground">
                  从“偶尔接私单赚外快”到“月入5万的被动收入”：智课工具让15年经验快速变现，优质课程铸造为 RWA 资产增值 30%。
                </p>
              </div>

              <div className="mt-4">
                <div className="text-orange-500 text-4xl leading-none mb-4">“</div>
                <blockquote className="text-base md:text-lg text-foreground/90">
                  我做 UI 设计 15 年，身边总有人让我“教教他们”。我试过线下带学生，但太累了——白天上班，晚上答疑，周末还要改作业。后来在其他平台开过课，结果 90% 时间都花在剪视频、做 PPT、回复重复问题上，课程卖了不到 2 万块。加入这个平台后，智课工具让我 1 个周末就把“UI 设计系统化思维”做成了完整技能体，AI 帮我生成了练习题、拆解了知识点。课程上架第一个月就卖了 800 份，收入 4 万多。更惊喜的是，因为每个学员完课后的 SBT 凭证都带着我的署名，很多人拿着凭证找到工作后会专门感谢我，还有企业 HR 直接联系我做内训。
                </blockquote>
              </div>

              <div className="mt-6">
                <div className="font-medium">陈晨</div>
                <div className="text-sm text-muted-foreground">38岁 | 15年资深UI设计师 → 全职创作者</div>
                <div className="text-sm text-muted-foreground mt-1">平台收益：月均5万+ | 累计学员：3200+ | 课程数量：4门</div>
                <div className="text-sm text-muted-foreground mt-1">RWA资产增值：30% | 学员就业率：92%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}