import type { Metadata } from 'next'
import { HeroSection } from '@/hero-section'
import { CompetenciesSection } from '@/competencies-section'
import { ProjectsSection } from '@/projects-section'
import { FooterSection } from '@/footer-section'
import { Navbar } from '@/navbar' // 如果你有导航栏的话

export const metadata: Metadata = {
  title: 'Yin Xiangkun - Digital Marketing Portfolio',
  description: '尹相坤的个人简历与作品集 | 数字营销管培生 / 品牌数字化运营',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 顶部导航 */}
      <Navbar />
      
      {/* 主体内容区 */}
      <main className="flex-1">
        <HeroSection />
        <CompetenciesSection />
        <ProjectsSection />
      </main>

      {/* 底部信息 */}
      <FooterSection />
    </div>
  )
}
