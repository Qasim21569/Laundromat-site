"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

const serviceTypes = [
  { id: "laundry", name: "Laundry Services", icon: "🧺", description: "Self-service, wash & fold, pickup & delivery" },
  { id: "shipping", name: "Shipping & Mail", icon: "📦", description: "UPS Authorized Service Center, mailboxes, Amazon lockers (No USPS)" },
  { id: "business", name: "Business Services", icon: "💼", description: "Document shredding, ATM, office supplies" },
  { id: "general", name: "General Inquiry", icon: "💬", description: "Questions, feedback, or other requests" },
]

export function ContactSection() {
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", { selectedService, ...formData })

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    setSelectedService("")
    setIsSubmitting(false)

    // Show success message (in a real app, you'd handle this properly)
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Get Started Today</h2>
          <p className="text-xl text-muted-foreground">
            Ready to experience the convenience? Contact us or schedule your first service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="p-6 text-center bg-primary text-primary-foreground">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-primary-foreground/80 mb-3">Speak with our friendly team</p>
              <a href="tel:+14045551234" className="font-semibold hover:underline">
                (404) 555-1234
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Visit Us</h3>
              <p className="text-muted-foreground mb-3">Come see our modern facility</p>
              <p className="text-sm text-foreground">
                1295 Brocket Road, Suite A<br />
                Clarkston, GA 30021
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Hours</h3>
              <p className="text-muted-foreground mb-3">Open 7 days a week</p>
              <p className="text-sm text-foreground">Mon-Sun: 7:00 AM - 12:00 AM (Midnight)</p>
              <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">Open Now</Badge>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <Label className="text-base font-semibold text-foreground mb-4 block">What service do you need?</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedService === service.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{service.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="(404) 555-1234"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your needs or ask any questions..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
