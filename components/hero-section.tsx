import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hero-content space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Your Complete Service Center
            </div>

            <div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-4">
                Laundry, Shipping &<br />
                <span className="text-primary">Everything Between</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Modern laundromat with premium amenities, plus UPS shipping, private mailboxes, and business services.
                All the convenience you need in Clarkston, Georgia.
              </p>
            </div>

            {/* Service Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Card className="flex items-center gap-4 p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧺</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Laundromat</div>
                  <div className="text-sm text-muted-foreground">Self-service & drop-off</div>
                </div>
              </Card>

              <Card className="flex items-center gap-4 p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Shipping</div>
                  <div className="text-sm text-muted-foreground">UPS & package services</div>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Pickup
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                View Services
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual relative">
            <Card className="relative overflow-hidden">
              <Image
                src="/modern-laundromat.png"
                alt="Modern Clarkson Laundry facility"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="font-semibold text-foreground">Modern Facility</div>
                <div className="text-sm text-muted-foreground">Clean, comfortable, convenient</div>
              </div>
            </Card>

            {/* Floating Stats */}
            <div className="floating-stats absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg animate-float">
              <div className="text-2xl font-bold">11+</div>
              <div className="text-sm opacity-90">Services</div>
            </div>

            <div
              className="floating-stats absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg border border-border animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-2xl font-bold text-primary">7AM-11PM</div>
              <div className="text-sm text-muted-foreground">Daily Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
