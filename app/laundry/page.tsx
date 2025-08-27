"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckIcon, 
  ClockIcon, 
  SparklesIcon, 
  CogIcon,
  HomeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  StarIcon,
  PhoneIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline"

export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/8 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-10 left-10 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-accent/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-primary/20 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              Premium Laundry Services
            </Badge>
            <h1 className="font-cartoon font-bold text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
              Professional Laundry
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              From personal self-service to commercial bulk solutions, we handle every laundry need with 
              <span className="text-primary font-semibold"> professional care and modern technology</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                Schedule Service Today
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold px-8 py-4 text-lg rounded-xl">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Self Service - Left */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Self Service
                </Badge>
                <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
                  Modern Self-Service Laundromat
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Experience our state-of-the-art self-service facility with modern washers, dryers, and a comfortable waiting area.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CogIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">High-Efficiency Machines</h4>
                    <p className="text-muted-foreground text-sm">Latest technology washers and dryers for superior cleaning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">7 AM - 12 AM Daily</h4>
                    <p className="text-muted-foreground text-sm">Extended hours for your convenience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Clean & Comfortable</h4>
                    <p className="text-muted-foreground text-sm">Spotless facility with seating area and free WiFi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Multiple Payment Options</h4>
                    <p className="text-muted-foreground text-sm">Card, mobile pay, and cash accepted</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-primary">$2.50</p>
                      <p className="text-sm text-muted-foreground">per load</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CogIcon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">Self Service</h3>
                    <p className="text-muted-foreground">Modern • Convenient • Affordable</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Wash & Fold - Right */}
      <section className="py-24 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-first">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <SparklesIcon className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">Wash & Fold</h3>
                    <p className="text-muted-foreground">Professional • Fast • Quality</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Full Service
                </Badge>
                <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
                  Professional Wash & Fold
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Let our experienced team handle your laundry with professional care, premium detergents, and expert folding.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <CheckIcon className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Same-Day Service Available</h4>
                    <p className="text-muted-foreground text-sm">Drop off by 10 AM, pick up by 6 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <CheckIcon className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Detergents & Softeners</h4>
                    <p className="text-muted-foreground text-sm">Eco-friendly products for sensitive skin</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <CheckIcon className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Folding & Packaging</h4>
                    <p className="text-muted-foreground text-sm">Professional presentation, ready to wear</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-accent">$1.50</p>
                      <p className="text-sm text-muted-foreground">per pound</p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Schedule Pickup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Commercial - Left */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Business Solutions
                </Badge>
                <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
                  Commercial Laundry Services
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Reliable, high-volume laundry solutions for businesses, restaurants, healthcare facilities, and hospitality.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <BuildingOfficeIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Restaurants & Hospitality</h4>
                      <p className="text-muted-foreground">Linens, uniforms, tablecloths, and more with quick turnaround</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <SparklesIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Healthcare & Salons</h4>
                      <p className="text-muted-foreground">Specialized cleaning for towels, smocks, and professional linens</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <CogIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Manufacturing & Industrial</h4>
                      <p className="text-muted-foreground">Heavy-duty cleaning for work uniforms and safety gear</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Custom pricing</p>
                      <p className="text-2xl font-bold text-primary">Volume Discounts</p>
                      <p className="text-sm text-muted-foreground">Based on your needs</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BuildingOfficeIcon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">Commercial</h3>
                    <p className="text-muted-foreground">Reliable • Scalable • Professional</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Airbnb - Right */}
      <section className="py-24 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-first">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <HomeIcon className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">Airbnb Service</h3>
                    <p className="text-muted-foreground">Fast • Reliable • Host-Friendly</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Airbnb Specialists
                </Badge>
                <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
                  Airbnb Laundry Service
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Keep your Airbnb guests happy with fresh, clean linens. Fast turnaround times designed for rental property hosts.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold text-foreground">Same-day turnaround available</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold text-foreground">Bed sheets, towels, and linens</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold text-foreground">Professional folding and packaging</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold text-foreground">Pickup and delivery available</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-semibold text-foreground">Volume discounts for multiple properties</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-accent">$2.00</p>
                      <p className="text-sm text-muted-foreground">per pound</p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Start Service
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Multi-Unit Housing - Left */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Property Management
                </Badge>
                <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
                  Multi-Unit Housing Solutions
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Comprehensive laundry services for apartment complexes, student housing, and residential communities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BuildingOfficeIcon className="w-5 h-5 text-primary" />
                    Apartment Complexes
                  </h4>
                  <p className="text-muted-foreground mb-4">Regular maintenance cleaning for common area linens, lobby materials, and property linens.</p>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Scheduled service plans available</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <HomeIcon className="w-5 h-5 text-primary" />
                    Student Housing
                  </h4>
                  <p className="text-muted-foreground mb-4">Bulk laundry services for dormitories and student apartment communities.</p>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Student-friendly pricing</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TruckIcon className="w-5 h-5 text-primary" />
                    Residential Communities
                  </h4>
                  <p className="text-muted-foreground mb-4">Custom solutions for senior living, assisted living, and residential facilities.</p>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Flexible pickup schedules</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Enterprise pricing</p>
                      <p className="text-2xl font-bold text-primary">Volume Rates</p>
                      <p className="text-sm text-muted-foreground">Custom contracts available</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Proposal
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BuildingOfficeIcon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">Multi-Unit Housing</h3>
                    <p className="text-muted-foreground">Scalable • Reliable • Cost-Effective</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cartoon font-bold text-5xl text-foreground mb-6">
            Ready to Experience Professional Laundry Care?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust Clarkston Laundry & Shipping for all their laundry needs.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">(404) 555-1234</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">7 AM - 12 AM Daily</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Schedule Pickup</h3>
              <p className="text-muted-foreground">Same-day available</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              Schedule Service Now
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold px-8 py-4 text-lg rounded-xl">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}