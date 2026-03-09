"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Globe, TrendingUp, Users } from "lucide-react"
import { useLang, t } from "@/lib/language-context"

const competencies = [
  {
    icon: Brain,
    title_zh: "AI Prompt Engineering",
    title_en: "AI Prompt Engineering",
    desc_zh:
      "精通 ChatGPT/Gemini 结构化提示词，独立编写营销自动化与数据处理脚本。",
    desc_en:
      "Expert in structured prompts for ChatGPT/Gemini. Capable of developing automated marketing systems and data processing scripts to boost operational efficiency.",
  },
  {
    icon: Globe,
    title_zh: "全链路数字营销",
    title_en: "Full-Funnel Digital Marketing",
    desc_zh:
      "擅长品牌官网与落地页搭建 (v0/HTML/CSS)，构建营销漏斗与动态转化流程。",
    desc_en:
      "Proficient in building brand websites and landing pages (v0.dev/HTML/CSS). Skilled at constructing dynamic conversion funnels and optimizing the user journey.",
  },
  {
    icon: TrendingUp,
    title_zh: "营销与金融复合视角",
    title_en: "Marketing & Financial Acumen",
    desc_zh:
      "熟练掌握 ROI 核算、营销预算管控，搭建品牌盈利模型。",
    desc_en:
      "Combining marketing strategies with financial metrics. Highly skilled in ROI calculation, budget control, and building sustainable brand profitability models.",
  },
  {
    icon: Users,
    title_zh: "大型项目统筹",
    title_en: "Project & Community Management",
    desc_zh:
      "拥有省级活动全案策划经验，具备极强的跨部门协同与社群运营共情力。",
    desc_en:
      "Experienced in orchestrating large-scale events and campaigns. Proven track record in cross-functional collaboration and empathetic, data-driven community engagement.",
  },
]

function CompetencyCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Brain
  title: string
  description: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl border border-border bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export function CompetenciesSection() {
  const { lang } = useLang()

  return (
    <section id="competencies" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Core Competencies
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "核心能力", "Core Competencies")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item, i) => (
            <CompetencyCard
              key={item.title_en}
              icon={item.icon}
              title={lang === "zh" ? item.title_zh : item.title_en}
              description={lang === "zh" ? item.desc_zh : item.desc_en}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
