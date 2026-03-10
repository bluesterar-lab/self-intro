import type { Metadata } from 'next'
import { Navbar } from '@/navbar'
import { HeroSection } from '@/hero-section'
import { CompetenciesSection } from '@/competencies-section'
import { ProjectsSection } from '@/projects-section'
import { FooterSection } from '@/footer-section'

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
