"use client"

import { ArrowDown, Send } from "lucide-react"
import { useLang, t } from "@/lib/language-context"

export function HeroSection() {
  const { lang } = useLang()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {t(lang, "正在寻找数字营销相关机会", "Open to Digital Marketing Opportunities")}
        </div>

        <h1 className="animate-fade-up-delay-1 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          {t(lang, "你好，我是", "Hi, I'm ")}
          <span className="text-primary">
            {t(lang, "尹相坤", "Yin Xiangkun")}
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-4 text-lg font-medium text-muted-foreground md:text-xl">
          {t(
            lang,
            "数字营销管培生 / 品牌数字化运营",
            "Digital Marketing Management Trainee | Brand Digital Operations"
          )}
        </p>

        <p className="animate-fade-up-delay-3 mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t(
            lang,
            "拥有「市场营销+金融学」复合背景，精通 AI 工作流与网页全链路搭建。致力于将前沿大模型技术深度嵌入营销全流程，实现 ROI 精细化核算与品牌高效增长。",
            "Leveraging a dual background in Marketing and Finance, I specialize in AI-native workflows and full-funnel web development. Dedicated to integrating cutting-edge LLMs into the entire marketing lifecycle to drive precision ROI and scalable brand growth."
          )}
        </p>

        <div className="animate-fade-up-delay-4 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            {t(lang, "查看我的项目", "View My Projects")}
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            {t(lang, "联系我", "Get in Touch")}
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
