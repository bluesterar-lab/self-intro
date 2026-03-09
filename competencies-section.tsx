"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CompetenciesSection } from "@/components/competencies-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { FooterSection } from "@/components/footer-section"
import { LanguageProvider } from "@/lib/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <CompetenciesSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <FooterSection />
    </LanguageProvider>
  )
}
