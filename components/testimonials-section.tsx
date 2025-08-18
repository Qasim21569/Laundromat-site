"use client"

import { useState } from "react"
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
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from our valued customers in the Clarkston community
          </p>
        </div>

        <Card className="relative p-8 md:p-12 text-center">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-accent">
            "{currentTestimonial.text}"
          </blockquote>

          {/* Customer Info */}
          <div className="space-y-2">
            <div className="font-semibold text-lg text-foreground">{currentTestimonial.name}</div>
            <div className="text-muted-foreground">
              {currentTestimonial.location} • {currentTestimonial.service}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
