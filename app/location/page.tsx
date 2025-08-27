import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                FIND US
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
              VISIT OUR
              <span className="font-accent text-4xl lg:text-5xl text-primary block -mt-2">
                Location
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conveniently located in <span className="text-primary font-semibold">Clarkston</span> with easy parking and accessible facilities.
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
                title="Clarkston Laundry and Shipping Location"
              />
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 font-heading font-bold text-lg group-hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                      <MapPinIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium leading-relaxed">
                    1295 Brocket Road, Suite A
                    <br />
                    Clarkston, GA 30021
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 font-heading font-bold text-lg group-hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                      <ClockIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Sunday</span>
                      <span className="text-accent font-semibold">7:00 AM - 12:00 AM (Midnight)</span>
                    </div>
                    <div className="vintage-border px-3 py-2 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                      <div className="text-center text-xs font-semibold text-primary">
                        Open 7 Days a Week
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 font-heading font-bold text-lg group-hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                      <PhoneIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-accent" />
                    <a href="tel:+14045551234" className="text-primary hover:text-accent transition-colors font-medium">
                      (404) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-accent" />
                    <a href="mailto:info@clarksonlaundry.com" className="text-primary hover:text-accent transition-colors font-medium">
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
