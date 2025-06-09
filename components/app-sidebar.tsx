"use client"

import { useState } from "react"
import {
  Home,
  Briefcase,
  User,
  FolderOpen,
  FileText,
  Mail,
  Twitter,
  Dribbble,
  Github,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  { title: "HOME", icon: Home, href: "#home" },
  { title: "ABOUT", icon: Briefcase, href: "#about" },
  { title: "SKILLS", icon: User, href: "#skills" },
  { title: "WORKS", icon: FolderOpen, href: "#portfolio" },
  { title: "RESUME", icon: FileText, href: "#resume" },
  // { title: "BLOG", icon: BookOpen, href: "#blog" },
  { title: "CONTACT", icon: Mail, href: "#contact" },
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Github, href: "#", label: "Github" },
]

export function AppSidebar() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(href.substring(1))
    }
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger className="bg-background/80 backdrop-blur-sm border" />
      </div>

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Sidebar className="border-r-0" collapsible="offcanvas">
        <SidebarHeader className="border-b border-border/50 p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg">Victory</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  onClick={() => scrollToSection(item.href)}
                  isActive={activeSection === item.href.substring(1)}
                  className="w-full justify-start text-sm font-medium tracking-wider hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-border/50 p-6">
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="w-8 h-8 hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
