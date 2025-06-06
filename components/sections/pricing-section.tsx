"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    price: 29,
    period: "hour",
    description: "Perfect for small projects",
    features: ["Web Development", "Responsive Design", "Basic SEO", "1 Revision", "Email Support"],
    popular: false,
  },
  {
    name: "Pro Plan",
    price: 39,
    period: "hour",
    description: "Best for growing businesses",
    features: [
      "Everything in Basic",
      "Custom Design",
      "Advanced SEO",
      "3 Revisions",
      "Priority Support",
      "Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 59,
    period: "hour",
    description: "For large scale projects",
    features: [
      "Everything in Pro",
      "Custom Development",
      "Database Design",
      "Unlimited Revisions",
      "24/7 Support",
      "Maintenance & Updates",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">PRICING</h2>
          <p className="text-muted-foreground text-lg">My Offers</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <Card className={`h-full ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
