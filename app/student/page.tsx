import Image from "next/image"

export const metadata = {
  title: "学员解决方案 | Skill3",
  description:
    "AI驱动个性化学习、真实场景陪练、数据化成长、区块链技能凭证。你的学习即资产。",
}

export default function StudentSolutionsPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 lg:py-20 overflow-hidden">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{ lineHeight: "1.2" }}>
            你的学习即资产
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            AI驱动的个性化学习，真实场景实战训练，区块链技能凭证认证，让你的能力看得见、用得上、信得过。
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
                <h3 className="text-xl md:text-2xl font-bold mb-3">精准学习，不走弯路</h3>
                <p className="text-muted-foreground">
                  AI分析你的基础和目标，自动规划最优学习路径，个性化推送内容，让你把时间花在真正需要提升的地方。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="学习路径占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 2 右文左图（通过DOM顺序反转） */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="场景陪练占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">模拟真实场景进行陪练</h3>
                <p className="text-muted-foreground">
                  行业真实工作场景无限次模拟训练，AI即时反馈纠错，让你在试错中掌握实战能力，上岗即能干活。
                </p>
              </div>
            </div>

            {/* 3 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">用数据看见你的成长</h3>
                <p className="text-muted-foreground">
                  多维度技能评估生成诊断报告，清晰展示你的能力雷达图和薄弱环节，让提升有的放矢，进步看得见。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="成长数据占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 4 右文左图（通过DOM顺序反转） */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="技能凭证占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">专属技能凭证</h3>
                <p className="text-muted-foreground">
                  完成学习获得技能凭证SBT，永久绑定身份不可伪造，一键分享到求职平台，HR扫码验证你的真实能力，提升求职成功率。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}