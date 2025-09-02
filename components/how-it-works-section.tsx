import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "STEP 1",
      title: "Pickup",
      description: "Schedule a pickup online or by phone. We come to you at your convenience.",
      svgPath: "/How-it-works/step1.svg"
    },
    {
      stepNumber: "STEP 2",
      title: "Wash & Dry", 
      description: "Professional cleaning with premium detergents and careful drying process.",
      svgPath: "/How-it-works/step2.svg"
    },
    {
      stepNumber: "STEP 3",
      title: "Fold",
      description: "Expert folding and organization for perfect presentation every time.",
      svgPath: "/How-it-works/step3.svg"
    },
    {
      stepNumber: "STEP 4",
      title: "Delivery",
      description: "Fresh, clean laundry delivered back to your door, ready to wear.",
      svgPath: "/How-it-works/step4.svg"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(21, 56, 87, 0.06) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(21, 56, 87, 0.06) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(21, 56, 87, 0.06) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(21, 56, 87, 0.06) 75%)
          `,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 0 14px, 14px -14px, -14px 0px'
        }}></div>
      </div>

      {/* Enhanced background elements with proper contrast */}
      <div className="absolute inset-0 opacity-25 hidden sm:block">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-accent rounded-full blur-3xl"></div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-primary/12 rounded-lg rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-accent/12 rotate-45"></div>
        <div className="absolute top-20 right-1/3 w-8 h-8 border border-accent/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mobile-Responsive Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="font-body font-semibold text-accent text-xs sm:text-sm tracking-[0.2em] uppercase">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="font-cartoon font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 tracking-tight px-4">
            Get it done in 4 steps
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Simple, efficient, and reliable. From pickup to delivery, we handle everything.
          </p>
        </div>

        {/* Mobile-Responsive Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Mobile-Responsive Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col items-center text-center shadow-lg border border-white/50">
                {/* Step Number */}
                <div className="mb-4 sm:mb-6">
                  <span className="font-body font-semibold text-primary text-xs sm:text-sm tracking-wide">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Mobile-Responsive SVG Illustration */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8 flex items-center justify-center mx-auto">
                  <Image
                    src={step.svgPath}
                    alt={`${step.title} - Step ${index + 1} illustration`}
                    width={240}
                    height={240}
                    priority={index < 2}
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                {/* Mobile-Responsive Title */}
                <h3 className="font-cartoon font-bold text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>

                {/* Mobile-Responsive Description */}
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Responsive Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 px-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Schedule Pickup Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl backdrop-blur-sm">
              Call (404) 555-1234
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
