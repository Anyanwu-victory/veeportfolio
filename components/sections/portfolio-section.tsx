"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Web Design", "Mobile App", "Branding", "UI/UX"]

const projects = [
  {
    id: 1,
    title: "Modern E-commerce",
    category: "Web Design",
    image: "/placeholder.svg?height=300&width=400",
    description: "A modern e-commerce platform built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
    description: "Secure mobile banking application with biometric authentication",
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete brand identity design for a tech startup",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Dashboard UI Kit",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive dashboard UI kit with 50+ components",
    technologies: ["Figma", "React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Design",
    image: "/placeholder.svg?height=300&width=400",
    description: "Creative portfolio website for a photographer",
    technologies: ["Next.js", "Framer Motion", "Sanity"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
    description: "Food delivery app with real-time tracking",
    technologies: ["Flutter", "Firebase", "Google Maps"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
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
                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>
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
            VIEW ALL
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
