import { HeroSection } from "@/components/sections/hero-section"
import {AboutSection} from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}
