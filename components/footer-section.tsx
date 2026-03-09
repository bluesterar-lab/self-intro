"use client"

import { Phone, Mail, Github, Linkedin, BookOpen } from "lucide-react"
import { useLang, t } from "@/lib/language-context"

export function FooterSection() {
  const { lang } = useLang()

  return (
    <footer id="contact" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
          Get In Touch
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t(
            lang,
            "一起打造可扩展的数字品牌",
            "Let's build scalable digital brands together."
          )}
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-pretty text-muted-foreground">
          {t(
            lang,
            "如果你对数字营销、AI 赋能品牌增长或任何合作机会感兴趣，欢迎随时与我取得联系。",
            "If you're interested in digital marketing, AI-powered brand growth, or any collaboration opportunities, feel free to reach out."
          )}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="tel:+8613176333956"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 px-6 py-4 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <Phone className="h-5 w-5 text-primary" />
            +86 13176333956
          </a>
          <a
            href="mailto:y423817717@163.com"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 px-6 py-4 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <Mail className="h-5 w-5 text-primary" />
            y423817717@163.com
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {[
            { icon: Github, label: "GitHub", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: BookOpen, label: "Blog", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Yin Xiangkun. Crafted with passion & AI."}
          </p>
        </div>
      </div>
    </footer>
  )
}
