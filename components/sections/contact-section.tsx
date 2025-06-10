"use client"

import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';




const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "victanyanwu306@gmail.com",
    href: "mailto:victanyanwu306@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 703 497 0190",
    href: "tel:+2347034970190",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Abuja, Nigeria",
    href: "#",
  },
]

export function ContactSection() {
  const { toast } = useToast()
  const [formState, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "mldnjplk")

  useEffect(() => {
    if (formState.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }
  }, [formState.succeeded]);

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CONTACT ME</h2>
          <p className="text-muted-foreground text-lg">Let&apos;s Work Together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#10b77f]/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-[#10b77f]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <a href={info.href} className="text-color-muted-foreground hover:text-[#10b77f] transition-colors">
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <form 
                onSubmit={handleSubmit} 
                className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required />
                      <ValidationError prefix="Name" field="name" errors={formState.errors} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                    <ValidationError prefix="Subject" field="subject" errors={formState.errors} />
                  </div>
                  <div className="space-y-2 ">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."

                    />
                    <ValidationError prefix="Message" field="message" errors={formState.errors} />
                  </div>
                  <Button type="submit" className="w-full" disabled={formState.submitting || formState.succeeded}>
                    {formState.submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                 
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    
    </section>
  )
}
