"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "@/components/ui/spotlight-card"

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
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-Responsive Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block vintage-banner px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6">
            <div className="vintage-banner-content font-bold text-sm sm:text-base lg:text-lg">
              COMPLETE SERVICE CENTER
            </div>
          </div>
          <h2 className="font-cartoon font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary mb-4 tracking-tight px-2">
            All Your Needs Under One
            <span className="font-body text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent block -mt-1 lg:-mt-2 font-medium">
              Modern Roof
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            From laundry and dry cleaning to shipping and business services, we're your complete convenience solution in
            <span className="text-accent font-semibold"> Clarkston, Georgia</span>.
          </p>
        </div>

        {/* Mobile-Responsive Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm lg:text-base font-semibold transition-all hover:scale-105 ${
                selectedCategory === category.id 
                  ? "bg-accent text-accent-foreground vintage-glow" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Mobile-Responsive Services Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service, index) => {
            // Determine glow color based on service category
            let glowColor: 'primary' | 'accent' | 'footer' = 'primary';
            if (service.category === 'laundry') glowColor = 'primary';
            else if (service.category === 'shipping') glowColor = 'accent';
            else if (service.category === 'business') glowColor = 'footer';
            
            const CardContent = (
              <>
                {/* Mobile-Responsive Corner Banner */}
                {service.popular && (
                  <div className="absolute -top-1 -right-1 vintage-banner px-2 sm:px-3 py-1 text-xs rounded-bl-lg z-10">
                    <div className="vintage-banner-content font-bold">
                      POPULAR
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  {/* Mobile-Responsive Icon */}
                  <div className="service-icon w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-2xl sm:text-3xl group-hover:animate-vintage-wiggle transition-all group-hover:bg-accent/20">
                    {service.icon}
                  </div>
                  <div className="service-arrow opacity-0 group-hover:opacity-100 transition-opacity text-accent text-lg sm:text-xl font-bold">
                    →
                  </div>
                </div>

                <div className="mb-3 sm:mb-4 flex-grow">
                  <h3 className="font-cartoon font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
                </div>

                {/* Mobile-Responsive Price Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mt-auto">
                  <div className="vintage-border px-2 sm:px-3 py-1 rounded-lg bg-white">
                    <span className="font-bold text-accent text-xs sm:text-sm">{service.priceRange}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10 font-semibold text-xs sm:text-sm p-1 sm:p-2">
                    Learn More →
                  </Button>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </>
            );

            return (
              <div key={service.id}>
                {/* Desktop: Use GlowCard with spotlight effect */}
                <div className="hidden lg:block">
                  <GlowCard
                    glowColor={glowColor}
                    customSize={true}
                    className="service-card group relative overflow-hidden h-full flex flex-col min-h-[320px]"
                  >
                    {CardContent}
                  </GlowCard>
                </div>
                
                {/* Mobile/Tablet: Use regular Card without spotlight */}
                <div className="block lg:hidden">
                  <Card className="service-card group relative overflow-hidden h-full flex flex-col min-h-[280px] sm:min-h-[320px] p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    {CardContent}
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
