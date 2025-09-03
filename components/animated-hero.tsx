"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AnimatedHero() {
  return (
    <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-32 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Background with subtle horizontal lines texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to bottom, transparent 0%, rgba(21, 56, 87, 0.02) 50%, transparent 100%),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(21, 56, 87, 0.03) 24px,
            rgba(21, 56, 87, 0.03) 25px
          )
        `
      }}>
        {/* Subtle shipping box pattern */}
        <div className="absolute top-1/2 right-1/6 w-16 h-16 border-2 border-accent/10 rotate-12" style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(243, 196, 90, 0.05) 25%, rgba(243, 196, 90, 0.05) 50%, transparent 50%)',
          backgroundSize: '8px 8px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Authentic Laundromat Experience */}
          <div className="hero-content space-y-8 animate-fade-in-left">
            {/* Operating Status - Laundromat Style */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-accent text-accent px-5 py-3 rounded-2xl shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="font-bold text-sm">OPEN NOW • 7AM - MIDNIGHT</span>
            </div>

            {/* Authentic Headlines */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="font-cartoon font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight">
                Fresh & Clean
                <span className="block text-accent">Laundry Hub</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Your neighborhood's most trusted laundromat and shipping center. Where pristine clothes meet reliable package services in the heart of Clarkston.
              </p>
            </div>

            {/* Service Highlights - Laundromat Style */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">🌊</div>
                <div className="text-sm font-semibold text-primary">Wash & Fold</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">📦</div>
                <div className="text-sm font-semibold text-primary">UPS Ship</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-sm font-semibold text-primary">Commercial</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-primary">Same Day</div>
              </div>
            </div>

            {/* Laundromat-Style Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                  <span className="relative z-10">Start Your Wash</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </div>
              <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                <Button size="lg" variant="outline" className="border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-bold rounded-2xl transition-all">
                  Ship a Package
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">UPS Authorized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">Since 2015</span>
              </div>
            </div>
          </div>

          {/* Active Laundromat Visual */}
          <div className="hero-visual flex items-center justify-center mt-12 lg:mt-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Washing machine glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-accent/20 rounded-3xl blur-3xl scale-110 animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Steam effect */}
              <div className="absolute -top-4 left-1/4 w-2 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
              <div className="absolute -top-6 left-1/3 w-1.5 h-6 bg-gradient-to-t from-white/50 to-transparent rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
              <div className="absolute -top-5 left-[40%] w-1 h-4 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '1s' }}></div>
              
              {/* Main container - laundromat frame */}
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border-2 border-white/60">
                {/* Operating indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-scale-in" style={{ animationDelay: '1.2s' }}>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  IN OPERATION
                </div>
                
                <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  <Image
                    src="/laundry-poster.png"
                    alt="Active Laundromat - Washing machines in operation, customers using services"
                    width={600}
                    height={600}
                    priority
                    quality={95}
                    className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Service overlay badges */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-xs font-bold text-primary hover:scale-105 transition-transform duration-200">
                    24/7 ACCESS
                  </div>
                  <div className="bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-xs font-bold text-accent-foreground hover:scale-105 transition-transform duration-200">
                    UPS DROP-OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
