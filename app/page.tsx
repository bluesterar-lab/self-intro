import type { Metadata } from 'next'
import { Navbar } from '@/theme-provider'
import { HeroSection } from '@/projects-section'
import { CompetenciesSection } from '@/footer-section'
import { ProjectsSection } from '@/accordion'
import { ExperienceSection } from '@/hero-section' 
import { FooterSection } from '@/navbar'

export const metadata: Metadata = {
  title: 'Yin Xiangkun - Digital Marketing Portfolio',
  description: '尹相坤的个人简历与作品集 | 数字营销管培生 / 品牌数字化运营',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CompetenciesSection />
        <ProjectsSection />
        <ExperienceSection /> 
      </main>
      <FooterSection />
    </div>
  )
}
