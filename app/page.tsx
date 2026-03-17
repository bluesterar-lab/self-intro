import type { Metadata } from 'next'
// 核心修复：强行把错乱的路径和组件对应起来
import { Navbar } from '@/theme-provider'
import { HeroSection } from '@/projects-section'
import { CompetenciesSection } from '@/footer-section'
import { ProjectsSection } from '@/accordion'
import { FooterSection } from '@/navbar'

export const metadata: Metadata = {
  title: 'Yin Xiangkun - Digital Marketing Portfolio',
  description: '尹相坤的个人简历与作品集 | 数字营销管培生 / 品牌数字化运营',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CompetenciesSection />
        <ProjectsSection />
      </main>
      <FooterSection />
    </div>
  )
}
