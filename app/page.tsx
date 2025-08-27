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
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ServicesGrid />
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
