import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, ShieldCheckIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              About Clarkson Laundry & Shipping
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serving the Clarkston community with reliable laundry and shipping services since 2015.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2015, Clarkson Laundry and Shipping began as a simple vision: to provide the Clarkston
                community with convenient, reliable, and affordable laundry and shipping services all under one roof.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small family business has grown into a trusted community hub, serving thousands of
                customers who rely on our clean facilities, modern equipment, and friendly service. We take pride in
                being more than just a laundromat – we're your neighbors, committed to making your daily tasks easier.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to invest in the latest technology and maintain the highest standards of cleanliness
                and customer service, ensuring that every visit to Clarkson Laundry and Shipping is a positive
                experience.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're proud to serve our Clarkston neighbors and contribute to our local community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Modern equipment, eco-friendly products, and meticulous attention to detail in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Extended hours, multiple services, and flexible options to fit your busy schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building lasting relationships through reliable service and genuine care for our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
