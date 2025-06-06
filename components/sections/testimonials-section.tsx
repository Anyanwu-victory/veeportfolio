"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Zoé delivered an exceptional website that exceeded our expectations. Her attention to detail and technical expertise are outstanding.",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Working with Zoé was a pleasure. She understood our vision perfectly and created a beautiful, functional application.",
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, CreativeAgency",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Professional, reliable, and incredibly talented. Zoé transformed our brand with her amazing design skills.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">TESTIMONIALS</h2>
          <p className="text-muted-foreground text-lg">Clients Say</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
