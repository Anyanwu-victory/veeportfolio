"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Typescript", level: 85 },
  { name: "React, Next.js", level: 85 },
  { name: "TailwindCSS", level: 90 },
  { name: "Node.js", level: 60 },
  { name: "Python", level: 40 },
  { name: "Prettier&ESLint", level: 85 },
  { name: "Sanity CMS", level: 90 },
  { name: "Git", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Docker", level: 50 },
];

const badges = [
  { name: "Docker" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "MongoDB" },
  { name: "Javascript" },
  { name: "SQL" },
  { name: "Python" },
  { name: "Whogohost" },
  { name: "Netlify" },
  { name: "Bootstrap" },
  { name: "Node.js" },
  { name: "SASS" },
  { name: "RESTful API" },
];
export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SKILLS</h2>
          <p className="text-muted-foreground text-lg">
            I am constantly learning and improving my skills to stay up-to-date
            with the latest technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-[#10b77f] font-bold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-4 lg:grid-cols-9 gap-4 justify-center items-center text-center
         space-x-4  max-w-4xl mx-auto ">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 1.5, type: "spring" }}
              
            >
              <Badge>
                <h1 className="font-bold text-white">{badge.name}</h1>
              </Badge>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
