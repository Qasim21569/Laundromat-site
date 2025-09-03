"use client"

import { useState } from "react"
import Image from "next/image"
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
    icon: "/Service icons/self-service.png",
    popular: true,
    category: "laundry",
  },
  {
    id: 2,
    name: "Wash & Fold",
    description: "Professional cleaning and expert folding service with same-day turnaround available",
    priceRange: "$1.50/lb",
    icon: "/Service icons/wash-and-fold.png",
    popular: true,
    category: "laundry",
  },
  {
    id: 3,
    name: "Commercial",
    description: "High-volume commercial laundry solutions for businesses, restaurants, and healthcare",
    priceRange: "Custom Quote",
    icon: "/Service icons/commercial.png",
    popular: true,
    category: "laundry",
  },
  {
    id: 11,
    name: "Airbnb",
    description: "Specialized laundry service for Airbnb hosts with quick turnaround and quality folding",
    priceRange: "$2.00/lb",
    icon: "/Service icons/airbnb.png",
    popular: true,
    category: "laundry",
  },
  {
    id: 12,
    name: "Multi-Unit Housing",
    description: "Bulk laundry services for apartment complexes, student housing, and residential properties",
    priceRange: "Volume Pricing",
    icon: "/Service icons/multi-housing.png",
    popular: false,
    category: "laundry",
  },
  {
    id: 4,
    name: "UPS Authorized Service Center",
    description: "Complete UPS services including drop-off, pickup scheduling, and packaging. No USPS drop-off.",
    priceRange: "UPS Rates",
    icon: "/Service icons/ups-pickup.png",
    popular: true,
    category: "shipping",
  },
  {
    id: 5,
    name: "Private Mailboxes",
    description: "Secure private mailbox rental with 24/7 access and mail forwarding",
    priceRange: "$25/month",
    icon: "/Service icons/mail-box.png",
    popular: false,
    category: "mail",
  },
  {
    id: 6,
    name: "Amazon Lockers",
    description: "Convenient Amazon package pickup location with extended hours",
    priceRange: "Free",
    icon: "/Service icons/amazon-lockers.png",
    popular: true,
    category: "shipping",
  },
  {
    id: 7,
    name: "Document Shredding",
    description: "Secure document destruction services for personal and business use",
    priceRange: "$1/lb",
    icon: "/Service icons/paper-shredder.png",
    popular: false,
    category: "business",
  },
  {
    id: 8,
    name: "ATM Services",
    description: "On-site ATM for convenient cash access during your visit",
    priceRange: "Standard Fees",
    icon: "/Service icons/atm-service.png",
    popular: false,
    category: "business",
  },
]

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Main services (first 6)
  const mainServices = services.slice(0, 6)
  const bottomServices = services.slice(6, 8) // ATM and Document Shredding
  
  const filteredMainServices =
    selectedCategory === "all" ? mainServices : mainServices.filter((service) => service.category === selectedCategory)

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
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            COMPLETE SERVICE CENTER
          </div>
          <h2 className="font-cartoon font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
            Everything You Need
            <span className="block text-accent mt-2">In One Place</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From modern laundry services to shipping solutions and business amenities, 
            we provide comprehensive convenience for your daily needs in 
            <span className="text-accent font-semibold"> Clarkston, Georgia</span>.
          </p>
        </div>

        {/* Modern Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-accent text-accent-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Main Services Grid - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredMainServices.map((service, index) => {
            // Determine glow color based on service category
            let glowColor: 'primary' | 'accent' | 'footer' = 'primary';
            if (service.category === 'laundry') glowColor = 'primary';
            else if (service.category === 'shipping') glowColor = 'accent';
            else if (service.category === 'business') glowColor = 'footer';
            
            const CardContent = (
              <>


                {/* Icon Section with Gradient Background */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    {/* Gradient background circle */}
                    <div className={`absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity ${
                      service.category === 'laundry' ? 'bg-gradient-to-br from-primary to-primary/60' :
                      service.category === 'shipping' ? 'bg-gradient-to-br from-accent to-accent/60' :
                      'bg-gradient-to-br from-footer to-footer/60'
                    }`}></div>
                    
                    {/* Icon container */}
                    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-3">
                      <Image
                        src={service.icon}
                        alt={`${service.name} service icon`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center space-y-4">
                  <h3 className="font-cartoon font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-2 border-primary/20 hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </>
            );

            return (
              <div key={service.id} className="group">
                {/* Modern Service Card */}
                <div className="relative bg-white rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 overflow-hidden">
                  {CardContent}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Services - Centered */}
        {selectedCategory === "all" && (
          <div className="mt-16">
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              {bottomServices.map((service, index) => {
                let glowColor: 'primary' | 'accent' | 'footer' = 'primary';
                if (service.category === 'laundry') glowColor = 'primary';
                else if (service.category === 'shipping') glowColor = 'accent';
                else if (service.category === 'business') glowColor = 'footer';
                
                const CardContent = (
                  <>
                    {/* Icon Section with Gradient Background */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 relative">
                        {/* Gradient background circle */}
                        <div className={`absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity ${
                          service.category === 'laundry' ? 'bg-gradient-to-br from-primary to-primary/60' :
                          service.category === 'shipping' ? 'bg-gradient-to-br from-accent to-accent/60' :
                          'bg-gradient-to-br from-footer to-footer/60'
                        }`}></div>
                        
                        {/* Icon container */}
                        <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-3">
                          <Image
                            src={service.icon}
                            alt={`${service.name} service icon`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="text-center space-y-4">
                      <h3 className="font-cartoon font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-2 border-primary/20 hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>

                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </>
                );

                return (
                  <div key={service.id} className="group">
                    {/* Modern Service Card */}
                    <div className="relative bg-white rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 overflow-hidden w-80">
                      {CardContent}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
