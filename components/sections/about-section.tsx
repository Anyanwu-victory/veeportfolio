"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding ">
      <div className="container-custom ">
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
          
        </motion.div>

        <div className="flex flex-col-reverse
         lg:flex-row items-center justify-between gap-8">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center  
            items-center py-12 lg:justify-start w-full 
            lg:w-1/2 lg:py-20 px-4 md:px-8 lg:px-20"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-[#10b77f]/20 rounded-full 
              blur-3xl scale-110" />

              {/* Main Profile Container */}
              <div className="relative w-80 h-80  lg:w-[30rem] lg:h-[30rem]">
                {/* Green Background Shape */}
                <div className="absolute inset-0 bg-[#10b77f] rounded-full
                 scale-110 border-4 border-background lg:translate-x-8 lg:translate-y-8" />

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full top-1 overflow-hidden shadow-2xl">
                  <Image
                    src="/profile-pic.png"
                    alt="Anyanwu Victory"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className=" text-2xl lg:text-3xl font-medium text-primary mb-4">
              Software Engineer, Programmer and day dreamer
            </h2>
            <p className="text-sm  lg:text-lg leading-relaxed text-muted-foreground">
              Programming is both my profession and passion, which is why I
              truly enjoy working as a developer. With over 3 years of
              experience, I've tackled a wide range of
              challenges, from building interactive web applications to leading
              development teams. I am currently an undergrad student at Mewar
              International University Abuja majoring in Software Engineering.
              Previously, I worked at Nigerian Communications Commission and
              Appbrew both as a frontend software engineer. Outside work, I
              spend my time reading, taking long naps, and writing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
