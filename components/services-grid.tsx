"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    name: "Self Service",
    description: "Modern washers and dryers with comfortable seating area, free WiFi, and extended hours",
    priceRange: "From $2.50",
    icon: "🧺",
    popular: true,
    category: "laundry",
  },
  {
    id: 2,
    name: "Wash & Fold",
    description: "Professional cleaning and expert folding service with same-day turnaround available",
    priceRange: "$1.50/lb",
    icon: "👕",
    popular: true,
    category: "laundry",
  },
  {
    id: 3,
    name: "Commercial",
    description: "High-volume commercial laundry solutions for businesses, restaurants, and healthcare",
    priceRange: "Custom Quote",
    icon: "🏢",
    popular: true,
    category: "laundry",
  },
  {
    id: 11,
    name: "Airbnb",
    description: "Specialized laundry service for Airbnb hosts with quick turnaround and quality folding",
    priceRange: "$2.00/lb",
    icon: "🏠",
    popular: true,
    category: "laundry",
  },
  {
    id: 12,
    name: "Multi-Unit Housing",
    description: "Bulk laundry services for apartment complexes, student housing, and residential properties",
    priceRange: "Volume Pricing",
    icon: "🏘️",
    popular: false,
    category: "laundry",
  },
  {
    id: 4,
    name: "UPS Authorized Service Center",
    description: "Complete UPS services including drop-off, pickup scheduling, and packaging. No USPS drop-off.",
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
    { id: "laundry", name: "Laundry Services" },
    { id: "shipping", name: "UPS & Mail" },
    { id: "business", name: "Business Services" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vintage Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
            <div className="vintage-banner-content font-bold text-lg">
              COMPLETE SERVICE CENTER
            </div>
          </div>
          <h2 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-4 tracking-tight">
            All Your Needs Under One
            <span className="font-body text-5xl lg:text-6xl text-primary block -mt-2 font-medium">
              Modern Roof
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From laundry and dry cleaning to shipping and business services, we're your complete convenience solution in
            <span className="text-primary font-semibold"> Clarkston, Georgia</span>.
          </p>
        </div>

        {/* Vintage Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 font-semibold transition-all hover:scale-105 ${
                selectedCategory === category.id 
                  ? "bg-accent text-accent-foreground vintage-glow" 
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Vintage Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <Card
              key={service.id}
              className="service-card group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-border hover:border-accent/50 vintage-shadow hover:vintage-glow relative overflow-hidden"
            >
              {/* Vintage Corner Banner */}
              {service.popular && (
                <div className="absolute -top-1 -right-1 vintage-banner px-3 py-1 text-xs rounded-bl-lg">
                  <div className="vintage-banner-content font-bold">
                    POPULAR
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                {/* Retro Icon Treatment */}
                <div className="service-icon w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl group-hover:animate-vintage-wiggle transition-all group-hover:bg-accent/20">
                  {service.icon}
                </div>
                <div className="service-arrow opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xl font-bold">
                  →
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-cartoon font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
              </div>

              {/* Vintage Price Badge */}
              <div className="flex items-center justify-between">
                <div className="vintage-border px-3 py-1 rounded-lg bg-white">
                  <span className="font-bold text-primary text-sm">{service.priceRange}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10 font-semibold">
                  Learn More →
                </Button>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
