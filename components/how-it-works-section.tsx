import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "STEP 1",
      title: "Pickup",
      description: "Schedule a pickup online or by phone. We come to you at your convenience.",
      svgPath: "/how-it-works/step1.svg"
    },
    {
      stepNumber: "STEP 2",
      title: "Wash & Dry", 
      description: "Professional cleaning with premium detergents and careful drying process.",
      svgPath: "/how-it-works/step2.svg"
    },
    {
      stepNumber: "STEP 3",
      title: "Fold",
      description: "Expert folding and organization for perfect presentation every time.",
      svgPath: "/how-it-works/step3.svg"
    },
    {
      stepNumber: "STEP 4",
      title: "Delivery",
      description: "Fresh, clean laundry delivered back to your door, ready to wear.",
      svgPath: "/how-it-works/step4.svg"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary/8 to-primary/12 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="font-body font-semibold text-primary text-sm tracking-[0.2em] uppercase">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
            Get it done in 4 steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simple, efficient, and reliable. From pickup to delivery, we handle everything.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="font-body font-semibold text-primary text-sm tracking-wide">
                    {step.stepNumber}
                  </span>
                </div>

                {/* SVG Illustration */}
                <div className="w-48 h-48 mb-8 flex items-center justify-center mx-auto">
                  <Image
                    src={step.svgPath}
                    alt={step.title}
                    width={180}
                    height={180}
                    className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-cartoon font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Schedule Pickup Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold px-8 py-4 rounded-xl">
              Call (404) 555-1234
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
