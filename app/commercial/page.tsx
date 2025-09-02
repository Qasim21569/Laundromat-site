import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, StarIcon, BuildingStorefrontIcon, HeartIcon, SparklesIcon, ShieldCheckIcon } from "@heroicons/react/24/outline"

const commercialServices = [
  {
    category: "Healthcare",
    icon: "🏥",
    services: ["Medical facilities", "Nursing homes", "Assisted living", "Memory care"],
    description: "Professional-grade laundry solutions for healthcare environments requiring the highest hygiene standards.",
    features: ["Medical-grade sanitization", "OSHA compliance", "Infection control protocols", "Scheduled pickup/delivery"]
  },
  {
    category: "Hospitality",
    icon: "✨",
    services: ["Spas", "Barber shops", "Massage places", "Hotels"],
    description: "Premium laundry services to maintain the luxury experience your customers expect.",
    features: ["Premium fabric care", "Same-day turnaround", "Custom packaging", "Quality guarantee"]
  },
  {
    category: "Fitness & Wellness",
    icon: "💪",
    services: ["Yoga studios", "Physical therapy clinics", "Gyms", "Wellness centers"],
    description: "Keep your facility fresh and clean with our specialized fitness industry laundry solutions.",
    features: ["Odor elimination", "Moisture-wicking care", "Bulk processing", "Flexible scheduling"]
  },
  {
    category: "Food Service",
    icon: "🍽️",
    services: ["Restaurants", "Catering companies", "Food trucks", "Uniform services"],
    description: "Commercial-grade cleaning for food service linens, uniforms, and kitchen textiles.",
    features: ["Grease removal", "Stain treatment", "Quick turnaround", "Health code compliance"]
  },
  {
    category: "Professional Services",
    icon: "🏢",
    services: ["Dentist offices", "Veterinary clinics", "Law firms", "Corporate offices"],
    description: "Professional laundry services to maintain your business's polished image.",
    features: ["Professional pressing", "Uniform care", "Consistent quality", "Business account billing"]
  },
  {
    category: "Event Services",
    icon: "🎉",
    services: ["Event planners", "Wedding venues", "Party rentals", "Catering halls"],
    description: "Event laundry solutions for linens, uniforms, and special occasion textiles.",
    features: ["Rush service available", "Large volume handling", "Event coordination", "Premium packaging"]
  }
]

const benefits = [
  {
    icon: <CheckIcon className="w-6 h-6 text-accent" />,
    title: "Cost Savings",
    description: "Reduce overhead costs compared to in-house laundry operations"
  },
  {
    icon: <StarIcon className="w-6 h-6 text-accent" />,
    title: "Professional Quality",
    description: "Commercial-grade equipment and expert care for superior results"
  },
  {
    icon: <BuildingStorefrontIcon className="w-6 h-6 text-accent" />,
    title: "Focus on Your Business",
    description: "Let us handle laundry while you focus on serving your customers"
  },
  {
    icon: <HeartIcon className="w-6 h-6 text-accent" />,
    title: "Reliable Service",
    description: "Consistent, on-time delivery you can count on every day"
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-accent" />,
    title: "Customized Solutions",
    description: "Tailored service plans to meet your specific business needs"
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-accent" />,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all commercial services"
  }
]

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Vintage Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                B2B SOLUTIONS
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
              COMMERCIAL
              <span className="font-accent text-4xl lg:text-5xl text-accent block -mt-2">
                Laundry Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional laundry solutions for businesses across <span className="text-primary font-semibold">Clarkston, Georgia</span>. 
              From healthcare to hospitality, we've got your commercial laundry needs covered with premium-quality service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 vintage-glow hover:scale-105 transition-all">
                Get Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized commercial laundry solutions tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-border hover:border-accent/50 vintage-shadow hover:vintage-glow group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                    {service.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.services.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                WHY CHOOSE US
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Commercial Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why businesses across Clarkston trust us with their commercial laundry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all group-hover:animate-vintage-wiggle">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="vintage-border p-12 rounded-2xl bg-white vintage-shadow">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the growing list of Clarkston businesses that trust us with their commercial laundry needs. 
              Get a custom quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 vintage-glow hover:scale-105 transition-all">
                📞 Call (404) 555-1234
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                📧 Email for Quote
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free consultation • Custom pricing • Flexible scheduling
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

