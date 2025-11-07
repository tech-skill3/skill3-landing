import Image from "next/image"

export const metadata = {
  title: "企业解决方案 | Skill3",
  description:
    "将培训成本转化为可量化的人才资产：效果付费、智课工具、数据看板、技能上链。",
}

export default function EnterprisesSolutionsPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 lg:py-20 overflow-hidden">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="font-hero text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{ lineHeight: "1.2" }}>
            将培训成本转化为可量化的人才资产
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            效果付费降低风险，智课工具快速定制内容，数据看板驱动人才决策，技能上链让组织能力可证明、可增值。
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
                <h3 className="text-xl md:text-2xl font-bold mb-3">成果即服务，只为真实的业务增长买单</h3>
                <p className="text-muted-foreground">
                  员工技能提升多少、业务指标改善多少，企业就付多少钱。培训费用直接与业务成果挂钩，让 HR 从“成本部门”变成“增长引擎”。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="成果即服务占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 2 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="企业智课工具占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">企业专属智课工具，快速沉淀组织知识</h3>
                <p className="text-muted-foreground">
                  让业务专家和管理者 30 分钟创建高质量课程，将老员工经验、内部最佳实践快速转化为标准化培训内容，知识不再流失。
                </p>
              </div>
            </div>

            {/* 3 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">多维度数据看板，让人才决策有据可依</h3>
                <p className="text-muted-foreground">
                  实时看到每个员工、每个部门、每个岗位的技能分布和学习情况，从“感觉谁行”到“数据证明谁行”。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="数据看板占位图" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* 4 右文左图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="技能标签体系占位图" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">技能标签体系，让人才发展路径可视化</h3>
                <p className="text-muted-foreground">
                  为每个岗位定义技能标签，员工清楚看到“现在会什么”、“距离晋升还差什么”，HR 清楚看到“谁能晋升”、“谁需要培养”。
                </p>
              </div>
            </div>

            {/* 5 左文右图 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">企业专属区块链，构建可信人才资产</h3>
                <p className="text-muted-foreground">
                  企业独立部署企业链，员工技能凭证、培训记录、绩效数据上链存证，打造可证明、可审计、可融资的人才资产。
                </p>
              </div>
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                  <Image src="/images/placeholder.svg" alt="区块链人才资产占位图" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 真实用户故事 */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* 左侧图片 */}
            <div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20">
                <Image src="/images/placeholder.svg" alt="企业真实故事占位图" fill className="object-cover" />
              </div>
            </div>

            {/* 右侧文案 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">某SaaS公司：销售业绩提升40%才付费，培训投入直接转化为营收增长</h2>

              <div className="mb-6">
                <div className="text-orange-500 font-semibold">Results</div>
                <p className="mt-2 text-muted-foreground">
                  从“培训费打水漂”到“培训即增长引擎”：按销售业绩增长付费，6个月新人销售额提升 40%，培训 ROI 达到 1:8。
                </p>
              </div>

              <div className="mt-4">
                <div className="text-orange-500 text-4xl leading-none mb-4">“</div>
                <blockquote className="text-base md:text-lg text-foreground/90">
                  我们是做企业服务 SaaS 的，销售团队有 120 人，但新人从入职到出单平均要 6 个月，流失率高达 35%。我们每年花 200 万培训费请外部机构做销售培训，结果是——课上听得热血沸腾，回到岗位还是不会打电话、不敢谈价格、被客户一问就懵。
                  这个平台的商务找我时，我直接说：“我不要什么完课率数据，我只看业绩增长。如果新人销售额提升不了 30%，我一分钱都不给。”他们居然答应了——按业绩增长付费，没达标不收钱。
                  现在我给销售做绩效面谈时，不再是“你这个月怎么没完成”，而是“数据显示你在价格谈判环节转化率低 15%，建议你重点训练这个模块”。
                  半年下来，整个销售团队业绩提升 40%，新人流失率降到 18%。我现在逢人就说：培训不应该是成本，应该是增长投资，而这个平台让我真正做到了。
                </blockquote>
              </div>

              <div className="mt-6">
                <div className="font-medium">李总</div>
                <div className="text-sm text-muted-foreground">某 SaaS 公司 销售 VP</div>
                <div className="text-sm text-muted-foreground mt-1">销售团队规模：120人 | 参训新人：40人</div>
                <div className="text-sm text-muted-foreground mt-1">业绩提升：40% | 客单价提升：50% | 成单周期缩短：28%</div>
                <div className="text-sm text-muted-foreground mt-1">新人流失率下降：17 个百分点 | 培训 ROI：1:8</div>
                <div className="text-sm text-muted-foreground mt-1">付费模式：按销售额增长比例付费</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}