"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Users, ShoppingBag } from "lucide-react"
import { useLang, t } from "@/lib/language-context"

const experiences = [
  {
    type: "work" as const,
    period_zh: "2026.01 - 至今",
    period_en: "2026.01 - Present",
    title_zh: "营销科技实习生",
    title_en: "Marketing Tech Intern",
    org_zh: "上海碧帝数据科技有限公司",
    org_en: "Shanghai Biditech Data Technology Co., Ltd.",
    desc_zh:
      "负责搭建 AI-Native 营销工作流，全流程主导官网落地页转化优化。",
    desc_en:
      "Spearheaded the integration of AI-native workflows, utilizing ChatGPT and GitHub. Led the end-to-end design and conversion rate optimization (CRO) for brand websites and landing pages.",
  },
  {
    type: "education" as const,
    period_zh: "2022.09 - 至今",
    period_en: "2022.09 - Present",
    title_zh: "本科 \u00B7 市场营销专业（辅修金融学）",
    title_en: "Bachelor\u2019s Degree: Major in Marketing, Minor in Finance",
    org_zh: "南京财经大学",
    org_en: "Nanjing University of Finance and Economics",
    desc_zh: "大学生艺术团活动部副部长。",
    desc_en:
      "Vice President of the Activity Dept., Student Art Troupe.",
  },
  {
    type: "practice" as const,
    period_zh: "校园与社会实践",
    period_en: "Campus & Social Practice",
    title_zh: "电商直播带货",
    title_en: "E-commerce Livestreaming",
    org_zh: "",
    org_en: "",
    desc_zh:
      "负责直播全流程运营，合作完成产品卖点提炼、直播脚本策划、现场节奏把控，具备成熟的内容表达、流量运营与用户转化思维，单场直播获赞3.1万+，直播间平均停留时长增长30%+，活动期间个人带货销量位列团队第一。",
    desc_en:
      "Managed full-cycle livestream operations, including product selling point extraction, script planning, and live pacing. Demonstrated strong content delivery, traffic operation, and user conversion skills. Achieved 31k+ likes in a single session, increased average view duration by 30%+, and ranked first in personal sales within the team.",
  },
  {
    type: "practice" as const,
    period_zh: "校园与社会实践",
    period_en: "Campus & Social Practice",
    title_zh: "营销活动",
    title_en: "Marketing Campaigns",
    org_zh: "",
    org_en: "",
    desc_zh:
      "主导校园市场拓展与品牌推广活动，高效完成用户触达、需求挖掘与活动转化，单场活动有效获客150+，在同期营销活动中销量排名第一。",
    desc_en:
      "Led campus market expansion and brand promotion. Efficiently executed user outreach, demand discovery, and conversion. Acquired 150+ valid leads in a single event and ranked first in sales among concurrent marketing campaigns.",
  },
]

function TimelineItem({
  item,
  index,
  lang,
  total,
}: {
  item: (typeof experiences)[0]
  index: number
  lang: "zh" | "en"
  total: number
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
      className={`relative flex gap-6 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          {item.type === "work" ? (
            <Briefcase className="h-4 w-4" />
          ) : item.type === "education" ? (
            <GraduationCap className="h-4 w-4" />
          ) : item.title_en === "E-commerce Livestreaming" ? (
            <ShoppingBag className="h-4 w-4" />
          ) : (
            <Users className="h-4 w-4" />
          )}
        </div>
        {index < total - 1 && (
          <div className="my-2 w-px flex-1 bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <span className="mb-1 inline-block rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-mono text-muted-foreground">
          {lang === "zh" ? item.period_zh : item.period_en}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-foreground">
          {lang === "zh" ? item.title_zh : item.title_en}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {lang === "zh" ? item.org_zh : item.org_en}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {lang === "zh" ? item.desc_zh : item.desc_en}
        </p>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const { lang } = useLang()

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            {"Experience & Education"}
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "实习与教育经历", "Experience & Education")}
          </h2>
        </div>

        <div className="flex flex-col">
          {experiences.map((item, i) => (
            <TimelineItem
              key={item.title_en}
              item={item}
              index={i}
              lang={lang}
              total={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
