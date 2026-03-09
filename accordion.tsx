"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Globe, Sparkles, Megaphone, Droplets, Github } from "lucide-react"
import { useLang, t } from "@/lib/language-context"

const projects = [
  {
    icon: Globe,
    title_zh: "澳洲矿用筛网出海独立站",
    title_en: "B2B Cross-Border E-commerce",
    link: "screenmesh.org",
    github: null,
    desc_zh:
      "结合 AI 工具与全链路思维独立搭建的 B2B 产品展示与转化网站。",
    desc_en:
      "Built a localized B2B independent site for the Australian mining screen mesh market, combining AI tools with full-funnel conversion strategies to drive overseas lead generation.",
    tags_zh: ["AI 辅助开发", "独立站搭建", "B2B 营销"],
    tags_en: ["AI-Assisted Dev", "Independent Site", "B2B Marketing"],
  },
  {
    icon: Sparkles,
    title_zh: "AI 驱动命理运势全栈平台",
    title_en: "AI-Driven Metaphysics Platform",
    link: "mydailyfortune.space",
    github: null,
    desc_zh:
      "融合传统文化与大模型技术，独立推进网站全栈架构规划与商业化落地。",
    desc_en:
      "Spearheaded the full-stack architecture and commercialization of an AI fortune-telling platform, seamlessly blending traditional Chinese culture with advanced LLM technology.",
    tags_zh: ["全栈开发", "AI 大模型", "商业化"],
    tags_en: ["Full-Stack", "LLM Integration", "Commercialization"],
  },
  {
    icon: Droplets,
    title_zh: "AI 水务信息自动化收集系统",
    title_en: "AI Water Info Automation System",
    link: "ai-water-super-robot.vercel.app",
    github: "https://github.com/bluesterar-lab/ai-water-super-robot",
    desc_zh:
      "基于 Next.js 16 全栈开发的水务行业资讯自动化系统，每日定时通过 AI 搜索国内外水务最新动态，智能筛选后以精美 HTML 邮件推送至指定邮箱。",
    desc_en:
      "A full-stack water industry news automation system built with Next.js 16, using AI to search and curate daily global water industry updates, delivered via beautifully formatted HTML emails.",
    tags_zh: ["Next.js 全栈", "AI 自动化", "Vercel Cron", "TypeScript"],
    tags_en: ["Next.js Full-Stack", "AI Automation", "Vercel Cron", "TypeScript"],
  },
  {
    icon: Megaphone,
    title_zh: "AIPC 智慧二次供水系统营销全案",
    title_en: "AIPC Smart Water Management Campaign",
    link: null,
    github: null,
    desc_zh:
      "针对高层建筑水压痛点，运用 AI 制作动态演示动画与全矩阵公众号营销内容。",
    desc_en:
      "Designed a comprehensive digital marketing campaign for the DeepControl AIPC secondary water supply system, creating dynamic animated demonstrations and multi-channel content matrices to address industry pain points.",
    tags_zh: ["营销策划", "AI 内容生产", "公众号运营"],
    tags_en: ["Campaign Planning", "AI Content", "WeChat Marketing"],
  },
]

function ProjectCard({
  icon: Icon,
  title,
  link,
  github,
  description,
  tags,
  index,
}: {
  icon: typeof Globe
  title: string
  link: string | null
  github: string | null
  description: string
  tags: string[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary/20 transition-all group-hover:bg-primary/50" />

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                aria-label={`GitHub repo for ${title}`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {link && (
              <a
                href={`https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Visit ${title}`}
              >
                {link}
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { lang } = useLang()

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Featured Projects
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "实战项目", "Featured Projects")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title_en}
              icon={project.icon}
              title={lang === "zh" ? project.title_zh : project.title_en}
              link={project.link}
              github={project.github}
              description={lang === "zh" ? project.desc_zh : project.desc_en}
              tags={lang === "zh" ? project.tags_zh : project.tags_en}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
