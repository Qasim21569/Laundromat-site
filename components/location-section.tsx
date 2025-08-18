"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export function LocationSection() {
  return (
    <section className="location-section py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="location-info space-y-8">
            <div>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Visit Our Modern Facility</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conveniently located in Clarkston with ample parking, modern equipment, and a comfortable environment
                for all your service needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground mb-3">
                      1295 Brockett Rd, Suite A<br />
                      Clarkston, GA 30021
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=1295+Brockett+Rd,+Suite+A,+Clarkston,+GA+30021",
                          "_blank",
                        )
                      }
                    >
                      Get Directions →
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Monday - Sunday:</strong>
                      <br />
                      7:00 AM - 11:00 PM
                    </p>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircleIcon className="w-3 h-3 mr-1" />
                      Open Now
                    </Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+14045551234"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <PhoneIcon className="w-4 h-4" />
                        (404) 555-1234
                      </a>
                      <a
                        href="mailto:info@clarksonlaundry.com"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        info@clarksonlaundry.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-4">Facility Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">📶</span>
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🪑</span>
                  <span>Comfortable Seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🅿️</span>
                  <span>Ample Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">💳</span>
                  <span>ATM On-Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🧴</span>
                  <span>Vending Machines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">👶</span>
                  <span>Family Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🔒</span>
                  <span>Secure Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">❄️</span>
                  <span>Climate Controlled</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="map-container relative">
            <Card className="overflow-hidden">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.8!2d-84.2397!3d33.8098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzM1LjMiTiA4NMKwMTQnMjMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />

              {/* Map Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Clarkson Laundry & Shipping</div>
                    <div className="text-sm text-muted-foreground">Suite A, Brockett Rd</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
