"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    name: "Self-Service Laundromat",
    description: "Modern washers and dryers with comfortable seating area and free WiFi",
    priceRange: "From $2.50",
    icon: "🧺",
    popular: true,
    category: "laundry",
  },
  {
    id: 2,
    name: "Wash & Fold Service",
    description: "Professional cleaning and folding service with same-day turnaround",
    priceRange: "$1.50/lb",
    icon: "👕",
    popular: true,
    category: "laundry",
  },
  {
    id: 3,
    name: "Pickup & Delivery",
    description: "Convenient laundry pickup and delivery service to your door",
    priceRange: "From $15",
    icon: "🚚",
    popular: false,
    category: "laundry",
  },
  {
    id: 4,
    name: "UPS Shipping",
    description: "Full UPS services including drop-off, pickup scheduling, and packaging",
    priceRange: "UPS Rates",
    icon: "📦",
    popular: true,
    category: "shipping",
  },
  {
    id: 5,
    name: "Private Mailboxes",
    description: "Secure private mailbox rental with 24/7 access and mail forwarding",
    priceRange: "$25/month",
    icon: "📬",
    popular: false,
    category: "mail",
  },
  {
    id: 6,
    name: "Amazon Lockers",
    description: "Convenient Amazon package pickup location with extended hours",
    priceRange: "Free",
    icon: "📱",
    popular: true,
    category: "shipping",
  },
  {
    id: 7,
    name: "Document Shredding",
    description: "Secure document destruction services for personal and business use",
    priceRange: "$1/lb",
    icon: "🗂️",
    popular: false,
    category: "business",
  },
  {
    id: 8,
    name: "ATM Services",
    description: "On-site ATM for convenient cash access during your visit",
    priceRange: "Standard Fees",
    icon: "💳",
    popular: false,
    category: "business",
  },
]

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  const categories = [
    { id: "all", name: "All Services" },
    { id: "laundry", name: "Laundry" },
    { id: "shipping", name: "Shipping" },
    { id: "mail", name: "Mail" },
    { id: "business", name: "Business" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">All Your Needs Under One Roof</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From laundry and dry cleaning to shipping and business services, we're your complete convenience solution in
            Clarkston.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <Card
              key={service.id}
              className="service-card group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="service-icon w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="service-arrow opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    →
                  </div>
                  {service.popular && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary">{service.priceRange}</span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
