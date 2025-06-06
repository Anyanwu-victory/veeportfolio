"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Science",
    school: "University of Technology",
    period: "2018 - 2020",
    location: "Paris, France",
    description:
      "Specialized in web development and software engineering with focus on modern frameworks and technologies.",
  },
  {
    degree: "Bachelor of Information Technology",
    school: "Digital Arts Institute",
    period: "2014 - 2018",
    location: "Lyon, France",
    description:
      "Comprehensive study of computer science fundamentals, programming languages, and database management.",
  },
]

const experience = [
  {
    position: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    location: "Paris, France",
    description:
      "Lead development of complex web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with design teams.",
  },
  {
    position: "Full Stack Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    location: "Paris, France",
    description:
      "Developed responsive websites and web applications for various clients. Worked with WordPress, PHP, and modern JavaScript frameworks.",
  },
  {
    position: "Frontend Developer",
    company: "Startup Hub",
    period: "2016 - 2018",
    location: "Lyon, France",
    description:
      "Built user interfaces for web applications using HTML, CSS, JavaScript, and React. Collaborated closely with UX/UI designers.",
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
          <p className="text-muted-foreground text-lg">My Story</p>
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
                    <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
                    <CardContent className="pl-8 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
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
                    <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
                    <CardContent className="pl-8 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
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
