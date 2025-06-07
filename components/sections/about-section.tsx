"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowRight, Twitter, Dribbble, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export function AboutSection() {
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
          <h2 className="text-4xl md:text-5xl uppercase font-bold mb-4">
            About me
          </h2>
          <p className="text-muted-foreground text-lg">
            A brief introduction about myself and my journey in web development.
          </p>
        </motion.div>

        <div>
            
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end py-20 px-4 md:px-8 lg:px-20"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-[#10b77f]/20 
              rounded-full blur-3xl scale-110 " />

              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-[30rem] lg:h-[30rem]">
                {/* Green Background Shape */}
                <div className="absolute inset-0 bg-[#10b77f]
                 rounded-full scale-110 border-4 border-background translate-x-8 translate-y-8 " />

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full
                 top-1 overflow-hiden  shadow-2xl">
                  <Image
                    src="/profile-pic.png"
                    alt="Anyanwu Victory"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="absolute -bottom-4 -left-4"
                >
                  <Badge className="bg-color-background text-color-foreground border-2 border-primary px-4 py-2 text-sm font-semibold shadow-lg">
                    <span className="text-2xl font-bold text-[#10b77f] mr-2">3</span>
                    <div className="text-left">
                      <div className="text-[#10b77f] text-xs">+</div>
                        <div className="text-xs uppercase">YEARS OF</div>
                        <div className="text-xs uppercase text-[#10b77f]">EXPERIENCE</div>
                    </div>
                  </Badge>
                </motion.div>

                {/* Projects Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7, type: "spring" }}
                  className="absolute -top-4 -right-4"
                >
                  <Badge className="bg-background text-foreground border-2 border-primary px-4 py-2 text-sm font-semibold shadow-lg">
                    <span className="text-2xl font-bold text-[#10b77f] mr-2">20</span>
                    <div className="text-left">
                      <div className="text-xs">COMPLETED</div>
                      <div className="text-xs text-[#10b77f]">PROJECTS</div>
                    </div>
                  </Badge>
                </motion.div>
              </div>
            </div>
          </motion.div>
    
        </div>
      </div>
    </section>
  );
}
