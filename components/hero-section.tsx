import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  return (
         <section className="relative pt-4 pb-16 sm:pb-24 lg:pb-32 bg-background overflow-hidden">
      {/* Enhanced Static Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(21, 56, 87, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21, 56, 87, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px'
        }}></div>
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(21, 56, 87, 0.12) 1px, transparent 0)`,
          backgroundSize: '18px 18px'
        }}></div>
        
        {/* Subtle Cross-Hatch Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(243, 196, 90, 0.06) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(243, 196, 90, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px'
        }}></div>
        
        {/* Enhanced Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/15 rounded-full animate-slow-rotate"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent/20 rotate-45 animate-subtle-glow" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-primary/15 rotate-12 animate-slow-rotate" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', animationDirection: 'reverse', animationDuration: '25s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-accent/15 rounded-lg rotate-45 animate-subtle-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-20 right-10 w-8 h-24 border-l-3 border-primary/15 rotate-12"></div>
        <div className="absolute top-32 left-1/3 w-16 h-2 bg-accent/15 rotate-45 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-16 bg-primary/15 rotate-12 rounded-full"></div>
        <div className="absolute top-16 right-1/4 w-12 h-12 border border-accent/12 rounded-full animate-subtle-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced floating elements with dark blue accents */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-1/4 right-1/3 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-6 sm:w-8 h-6 sm:h-8 bg-primary/15 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/6 w-4 sm:w-6 h-4 sm:h-6 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="hero-content space-y-8">
            {/* Main Headlines */}
            <div>
               <h1 className="font-cartoon font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-tight mb-4 tracking-tight">
                 CLARKSTON
                 <br />
                 <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent -mt-1 lg:-mt-2 block font-semibold tracking-wide">
                   Laundry & Shipping
                 </span>
               </h1>

              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-heading font-medium text-foreground leading-relaxed">
                    Your complete service destination
                    <span className="block text-base sm:text-lg lg:text-xl xl:text-2xl font-body text-muted-foreground font-normal mt-2">
                      in Clarkston, Georgia
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm sm:text-base lg:text-lg font-heading font-medium">
                    <span className="px-3 sm:px-4 py-2 bg-white/90 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
                      Modern Laundromat
                    </span>
                    <span className="px-3 sm:px-4 py-2 bg-accent text-accent-foreground rounded-full border border-accent">
                      UPS Service Center
                    </span>
                    <span className="px-3 sm:px-4 py-2 bg-white/80 text-primary rounded-full border border-primary/20 backdrop-blur-sm hidden sm:inline-flex">
                      Business Services
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg font-heading font-medium">
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-accent/90 rounded-xl border border-accent backdrop-blur-sm">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full animate-pulse"></div>
                    <span className="text-accent-foreground">7:00 AM - 12:00 AM Daily</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/90 rounded-xl border border-primary/20 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary">Brocket Road Location</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-Responsive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-xl">
                Schedule Pickup
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold rounded-xl backdrop-blur-sm">
                View All Services
              </Button>
            </div>

            {/* Mobile-Responsive Service Icons Row */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 pt-4">
              {[
                { icon: '🧺', label: 'Self Service' },
                { icon: '👕', label: 'Wash & Fold' },
                { icon: '🏢', label: 'Commercial' },
                { icon: '🏠', label: 'Airbnb', hideOnMobile: true },
                { icon: '📦', label: 'UPS Ship', hideOnMobile: true }
              ].map((service, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-white/30 transition-all cursor-pointer group ${service.hideOnMobile ? 'hidden sm:flex' : ''}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-xl flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform backdrop-blur-sm border border-primary/20">
                    {service.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary group-hover:text-secondary transition-colors text-center">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

           {/* Mobile-Responsive Hero Image */}
           <div className="hero-visual flex items-center justify-center mt-8 lg:mt-0 order-first lg:order-last">
             <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
               <Image
                 src="/hero img.png"
                 alt="Clarkston Laundry and Shipping Modern Facility"
                 width={600}
                 height={600}
                 priority
                 quality={90}
                 placeholder="blur"
                 blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                 className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl border border-primary/10"
                 style={{
                   maxWidth: '100%',
                   height: 'auto',
                 }}
               />
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
