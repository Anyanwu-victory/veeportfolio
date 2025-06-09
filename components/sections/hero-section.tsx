"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {Twitter, Dribbble, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Anyanwu-victory/repos"
        );
        const data = await response.json();
        setProjectCount(data.length); // Count the number of repositories
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    }

    fetchGitHubRepos();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen
     relative overflow-hidden bg-background "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 max-w-full w-screen" />

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-[#10b77f]/20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-40 w-2 h-2 bg-[#10b77f]/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-[#10b77f]/25 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-custom section-padding ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg"
              >
                HELLO,{" "}
                <span className="text-[#10b77f] font-semibold">MY NAME IS</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-7xl lg:text-8xl font-poppins font-bold leading-none"
              >
                <span className="text-foreground  uppercase">victory</span>
                {/* <span className="text-foreground uppercase">Anyanwu</span> */}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl font-light"
              >
                I AM <span className="font-semibold italic">Web Developer</span>
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground text-lg font-hachi-maru-pop leading-relaxed max-w-md"
            >
              From Abuja, Nigeria. I have rich experience in web development,
              also I am good at writing. I love to talk with you about our
              unique.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#10b77f]"
              >
                <Link href="">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#10b77f]"
              >
                <Link href="">
                  <Dribbble className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#10b77f]"
              >
                <Link href="">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-co sm:flex-row gap-4"
            >
              
                <a
                  href="/Anyanwu-Victory-CV.pdf"
                  target="_blank"
                  download="Anyanwu-Victory-CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Button
                    size="lg"
                    className="bg-[#10b77f] rounded-2xl px-[40px] py-[20px] text-black shadow-lg 
                    border-[1px] border-[#000000] hover:bg-transparent dark:border-white 
                    dark:text-white cursor-pointer"
                  >
                    DOWNLOAD CV
                  </Button>
                </a>
    
              <Button
                variant="outline"
                size="lg"
                className=" font-italize cursor-pointer text-shadow-color-border px-[40px] py-[20px] rounded-2xl "
              >
                <a 
                href="#skills"
                target="_blank"
                >
                MY SKILLS
                </a>
                {/* <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
            </motion.div>

          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center  lg:justify-end py-20 px-4 md:px-8 lg:px-20"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0  scale-110 " />

              {/* Main Profile Container */}
              <div
                className="relative w-80 h-80 border-4 border-background rounded-full lg:w-[30rem] 
              lg:h-[30rem] hover:border-[#10b77f]"
              >
                {/* Green Background Shape */}
                <div className="absolute inset-0  translate-x-8 translate-y-8" />

                {/* Profile Image */}
                <div
                  className="relative w-full h-full rounded-full
                 top-1 overflow-hiden  shadow-2xl"
                >
                  <Image
                    src="/dark-skinned-lady-hero.png"
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
                    <span className="text-2xl font-bold text-[#10b77f] mr-2">
                      {new Date().getFullYear() - 2022}
                    </span>
                    <div className="text-left">
                      <div className="text-[#10b77f] text-xs">+</div>
                      <div className="text-xs uppercase">YEARS OF</div>
                      <div className="text-xs uppercase text-[#10b77f]">
                        EXPERIENCE
                      </div>
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
                    <span className="text-2xl font-bold text-[#10b77f] mr-2">
                      {projectCount}
                    </span>
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
