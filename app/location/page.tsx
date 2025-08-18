import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Visit Our Location</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conveniently located in Clarkston with easy parking and accessible facilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8!2d-84.1397!3d33.8097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzM1LjAiTiA4NMKwMDgnMjMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clarkson Laundry and Shipping Location"
              />
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    1234 Market Street
                    <br />
                    Clarkston, GA 30021
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                    <a href="tel:+14045551234" className="text-primary hover:underline">
                      (404) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-muted-foreground" />
                    <a href="mailto:info@clarksonlaundry.com" className="text-primary hover:underline">
                      info@clarksonlaundry.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
