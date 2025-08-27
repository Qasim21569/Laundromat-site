import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-background via-primary/8 to-accent/10 overflow-hidden">
      {/* Floating Bubble Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-8 h-8 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="hero-content space-y-8">
            {/* Main Headlines */}
            <div>
              <h1 className="font-cartoon font-bold text-7xl lg:text-8xl text-foreground leading-tight mb-4 tracking-tight">
                CLARKSTON
                <br />
                <span className="font-body text-6xl lg:text-7xl text-primary -mt-2 block font-normal">
                  Laundry & Shipping
                </span>
              </h1>

              <div className="space-y-6">
                <p className="text-xl font-body text-muted-foreground leading-relaxed max-w-lg font-normal">
                  <span className="font-medium text-foreground">Your complete service destination</span> in Clarkston, Georgia
                  <br />
                  <span className="text-primary font-normal">Modern laundromat • UPS Authorized Service Center • Business Services</span>
                </p>
                <div className="flex items-center gap-6 text-base font-medium">
                  <div className="flex items-center gap-2 text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    7:00 AM - 12:00 AM Daily
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Brocket Road Location
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-xl">
                Schedule Pickup
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold rounded-xl">
                View All Services
              </Button>
            </div>

            {/* Service Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4">
              {[
                { icon: '🧺', label: 'Self Service' },
                { icon: '👕', label: 'Wash & Fold' },
                { icon: '🏢', label: 'Commercial' },
                { icon: '🏠', label: 'Airbnb' },
                { icon: '📦', label: 'UPS Ship' }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual with Hero SVG */}
          <div className="hero-visual relative flex items-center justify-center">
            {/* Hero SVG with Bubble Elements */}
            <div className="relative">
              <Image
                src="/hero.svg"
                alt="Clarkston Laundry and Shipping Services"
                width={500}
                height={500}
                className="w-full max-w-lg h-auto"
              />
              
              {/* Floating Bubbles around SVG */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full animate-float blur-sm"></div>
              <div className="absolute -top-4 -right-6 w-10 h-10 bg-primary/25 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-4 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-1/2 -left-12 w-6 h-6 bg-accent/25 rounded-full animate-float" style={{ animationDelay: "2.2s" }}></div>
              <div className="absolute top-1/4 -right-10 w-14 h-14 bg-primary/15 rounded-full animate-pulse blur-sm" style={{ animationDelay: "1.2s" }}></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg animate-float">
              <div className="text-2xl font-bold">11+</div>
              <div className="text-sm font-medium">Services</div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border-2 border-primary animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-2xl font-bold text-primary">7AM-12AM</div>
              <div className="text-sm text-muted-foreground font-medium">Daily Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
