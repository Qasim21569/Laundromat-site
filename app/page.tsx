import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ServicesGrid } from "@/components/services-grid"
import { LocationSection } from "@/components/location-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Enhanced Page Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(21, 56, 87, 0.05) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(243, 196, 90, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px, 35px 35px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <HowItWorksSection />
        <ServicesGrid />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
