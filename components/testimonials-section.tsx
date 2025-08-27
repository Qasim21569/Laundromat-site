"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Clarkston, GA",
    rating: 5,
    text: "The convenience of having laundry, shipping, and a mailbox all in one place is incredible. The facility is always clean and the staff is so helpful!",
    service: "Multiple Services",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Stone Mountain, GA",
    rating: 5,
    text: "Their pickup and delivery service has been a game-changer for my busy schedule. Professional, reliable, and my clothes always come back perfect.",
    service: "Pickup & Delivery",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "Decatur, GA",
    rating: 5,
    text: "I love the modern equipment and comfortable atmosphere. It's not like other laundromats - this place actually feels welcoming and clean.",
    service: "Self-Service Laundromat",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Clarkston, GA",
    rating: 5,
    text: "The UPS services here are so convenient. No more driving across town - I can ship packages while doing my laundry. Brilliant concept!",
    service: "UPS Shipping",
  },
  {
    id: 5,
    name: "Jennifer Kim",
    location: "Tucker, GA",
    rating: 5,
    text: "As a small business owner, their commercial services have been invaluable. They handle our shop towels and uniforms perfectly every time.",
    service: "Commercial Services",
  },
  {
    id: 6,
    name: "Robert Williams",
    location: "Clarkston, GA",
    rating: 5,
    text: "The private mailbox service has been a lifesaver for my home business. Secure, reliable, and the staff always takes great care of my packages.",
    service: "Private Mailbox",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      // On desktop, move by 3 items or to the beginning if near the end
      setCurrentIndex((prev) => {
        const next = prev + 3
        return next >= testimonials.length ? 0 : next
      })
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else {
      // On desktop, move back by 3 items or to a valid position
      setCurrentIndex((prev) => {
        const previous = prev - 3
        return previous < 0 ? Math.max(0, testimonials.length - 3) : previous
      })
    }
  }

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]]
    } else {
      // Show 3 testimonials on desktop/tablet
      const visible = []
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length
        visible.push(testimonials[index])
      }
      return visible
    }
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
            <div className="vintage-banner-content font-bold text-lg">
              CUSTOMER REVIEWS
            </div>
          </div>
          <h2 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-4 tracking-tight">
            What Our Customers
            <span className="font-body text-5xl lg:text-6xl text-primary block -mt-2 font-medium">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from our valued customers in the <span className="text-primary font-semibold">Clarkston community</span>
          </p>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className="relative">
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50"
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 min-h-[120px] flex items-center text-base">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="space-y-2">
                  <div className="font-cartoon font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-base text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="vintage-border px-3 py-1 rounded-lg bg-white inline-block">
                    <span className="text-xs font-semibold text-primary">{testimonial.service}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 p-0 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all vintage-shadow"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {isMobile ? (
                // Mobile: show dot for each testimonial
                testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-accent scale-125" 
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))
              ) : (
                // Desktop: show dots for groups of 3
                Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      Math.floor(currentIndex / 3) === index 
                        ? "bg-accent scale-125" 
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 p-0 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all vintage-shadow"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
