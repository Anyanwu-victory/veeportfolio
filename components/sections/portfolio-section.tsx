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
    title: "Space Tourism Exploration Website",
    image: "/spaceTourism.png",
    description: "A Website for frontend mentor challenge project to master my frontend skills",
    technologies: ["React", "Javascript", "TailwindCSS"],
    liveUrl: "https://glistening-licorice-316491.netlify.app/",
    githubUrl: "https://github.com/Anyanwu-victory/space-tourism-website",
  },
  {
    id: 2,
    title: "AutoConsult",
    image: "/Autoconsult.png",
    description: "Collaorated with a team of developers to develop a website for AutoConsult car rentals",
    technologies: ["Typescript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://dev-autoconsultng.netlify.app/",
    githubUrl: "https://github.com/Anyanwu-victory?tab=repositories",
  },
  {
    id: 3,
    title: "Sunnyside Website",
    image: "/active-states.jpg",
    description: "Creative frontend mentor challenge project to master my frontend skills",
    technologies: ["TailwindCSS", "React", "JavaScript"],
    liveUrl: "https://sunnyside-fawn-one.vercel.app/",
    githubUrl: "https://github.com/Anyanwu-victory/Sunnyside-Webpage",
  },
  {
    id: 4,
    title: "SIWESTrack",
    image: "/homepage.png",
    description: "A website for SIWES students to track their industrial training progress and submit reports. Lecturers, IT supervisors, Institutue Supervisor and ItF Personnels have dashboards where they can audit logs submitted by each students.",
    technologies: ["Typescript", "Sanity CMS", "TailwindCSS", "Next.js"],
    liveUrl: "https://siwestrack.vercel.app/",
    githubUrl: "https://github.com/Anyanwu-victory/Modern-Elogbook",
  },
  {
    id: 5,
    title: "RedTrace-D Security",
    image: "/RT-DS Image.png", 
    description: "A cybersecurity website that embodies the services offered by the company RedTrace-D Security. The website is designed to provide information about the company's expertise in cybersecurity solutions, including services such as penetration testing, vulnerability assessments, security consulting, and incident response.",
    technologies: ["React", "Next js", "JavaScript", "TailwindCSS"],
    liveUrl: "https://v0-cybersecurity-website-design-lyart.vercel.app/",
    githubUrl: "https://github.com/Anyanwu-victory/v0-cybersecurity-website-design"
  },
  // {
  //   id: 6,
  //   title: "TryCare.com",
  //   image: "/TryCare.png",
  //   description: "A healthcare services website that provides information about a specific health illness(malaria), it was built to help users understand more about the illness, its symptoms, diagnosis, and available treatments before meeting a doctor.Built with the Eleve community",
  //   technologies: ["Vue.js", "JavaScript", "TailwindCSS"],
  //   liveUrl: "https://trycare.theelevecommunity.com/",
  //   githubUrl: "https://github.com/Anyanwu-victory/",
  // },
  {
    id: 6,
    title: "Weather APP",
    image: "/Climenta weather app.png",
    description: "A weather application that provides real-time weather information and forecasts for various locations. Users can search for cities and view current weather conditions, including temperature, humidity, wind speed, and weather descriptions.",
    technologies: ["Vue.js", "JavaScript", "TailwindCSS"],
    liveUrl: "https://climenta.netlify.app/",
    githubUrl: "https://github.com/Anyanwu-victory/weather_app_main",
  },
  // {
  //   id: 8,
  //   title: "Bookit",
  //   image: "/Bookit homepage.png",
  //   description: "A comprehensive booking platform that allows users to book hotel rooms, manage their reservations ,requests seamlessly and hotel admin management can manage rooms, guest and flag suspicious bookings.",
  //   technologies: ["Vue.js", "JavaScript", "TailwindCSS"],
  //   liveUrl: "https://bookit-frontend-production.up.railway.app/",
  //   githubUrl: "https://github.com/Anyanwu-victory/",
  // },
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
