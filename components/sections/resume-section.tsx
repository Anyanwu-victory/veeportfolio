"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Mewar International University Nigeria ",
    period: "2021 - 2025",
    location: "Abuja, Nigeria",
    description:
      "Comprehensive study of software Engineering fundamentals, programming languages, and database management with focus on modern frameworks and technologies.",
  },
  {
    degree: "Senior Secondary School Certificate (WASSCE)",
    school: "Senior Secondary School,Nyanya Nigeria",
    period: "2018 - 2021",
    location: "Abuja, Nigeria",
    description:
      "Comprehensive study of sciences fundamentals, and computing science.",
  },
]

const experience = [
  {
    position: "Frontend Developer Intern",
    company: "Nigerian Communications Commission",
    period: "Jan 2024 - July 2024",
    location: "Abuja, Nigeria",
    description:
      "Developed and maintained web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Participated in code reviews and contributed to team knowledge sharing.",
  },
  {
    position: "Business Analyst",
    company: "Appbrew",
    period: "Jan 2024 - Aug 2024",
    location: "Abuja, Nigeria",
    description:
      "Analyzed business requirements and translated them into technical specifications. Collaborated with stakeholders to identify opportunities for process improvement.",
  },
  {
    position: "Frontend Developer",
    company: "Appbrew",
    period: "2024 - 2025",
    location: "Abuja, Nigeria",
    description:
      "Built user interfaces for web applications using Sanity, TailwindCSS, TypeScript, and React. Collaborated closely with UX/UI designers.",
  },
]

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">RESUME</h2>
          <p className="text-color-muted-foreground text-lg">My Story</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative">
                    <div className="absolute left-0 top-6 w-1 h-16 bg-[#10b77f] rounded-full" />
                    <CardContent className="pl-8 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#10b77f]" />
                        <Badge variant="secondary">{item.period}</Badge>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {item.school}, {item.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative">
                    <div className="absolute left-0 top-6 w-1 h-16 bg-[#10b77f] rounded-full" />
                    <CardContent className="pl-8 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#10b77f]" />
                        <Badge variant="secondary">{item.period}</Badge>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.position}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {item.company}, {item.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
