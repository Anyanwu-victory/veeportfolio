import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      {/* <ServicesSection /> */}
      <SkillsSection />
      <PortfolioSection />
      <ResumeSection />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  )
}
