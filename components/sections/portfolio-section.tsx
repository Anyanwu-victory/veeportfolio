"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"


const projects = [
  {
    id: 1,
    title: "Agent Dashboard - content management system",
    image: "/Agent-dashboard.png",
    description: "A modern Agent Management Website for Corporate Affairs Commission(CAC).",
    technologies: ["React", "Node.js", "HTML", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anyanwu-victory/agent-dashboard",
  },
  {
    id: 2,
    title: "Sunny Blog.dev",
    image: "/SunnyBlog.png",
    description: "During the final four months at NCC, I dedicated my time to honing my web development skills through building my Blog.The Blog enables users to create blog content, read blog content.",
    technologies: ["React ", "Sanity", "JavaScript", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anyanwu-victory/sunny-blog",
  },
  {
    id: 3,
    title: "Space Tourism Exploration Website",
    image: "/spaceTourism.png",
    description: "A Website for frontend mentor challenge project to master my frontend skills",
    technologies: ["React", "Javascript", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anyanwu-victory/space-tourism-website",
  },
  {
    id: 4,
    title: "AutoConsult",
    image: "/Autoconsult.png",
    description: "Collaorated with a team of developers to develop a website for AutoConsult car rentals",
    technologies: ["Typescript", "Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anyanwu-victory?tab=repositories",
  },
  {
    id: 5,
    title: "Sunnyside Website",
    image: "/active-states.jpg",
    description: "Creative frontend mentor challenge project to master my frontend skills",
    technologies: ["TailwindCSS", "React", "JavaScript"],
    liveUrl: "sunnyside-fawn-one.vercel.app",
    githubUrl: "https://github.com/Anyanwu-victory/Sunnyside-Webpage",
  },
  {
    id: 6,
    title: "SIWESTrack",
    image: "/homepage.png",
    description: "A website for SIWES students to track their industrial training progress and submit reports.",
    technologies: ["Typescript", "Sanity CMS", "TailwindCSS", "Next.js"],
    liveUrl: "siwestrack.vercel.app",
    githubUrl: "https://github.com/Anyanwu-victory/Modern-Elogbook",
  },
]

export function PortfolioSection() {

  return (
    <section id="portfolio" className="section-padding bg-[#f8fafc]/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">PORTFOLIO</h2>
          <p className="text-muted-foreground text-lg mb-8">My Works</p>         
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            <a href="https://github.com/Anyanwu-victory?tab=repositories">
            VIEW ALL  
             </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
