import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, ShieldCheckIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                OUR STORY
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
              ABOUT
              <span className="font-body text-4xl lg:text-5xl text-accent block -mt-2 font-medium">
                Clarkston
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Serving the <span className="text-primary font-semibold">Clarkston community</span> with reliable laundry and shipping services since 
              <span className="text-accent font-semibold"> 2015</span>.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2015, Clarkston Laundry and Shipping began as a simple vision: to provide the Clarkston
                community with convenient, reliable, and affordable laundry and shipping services all under one roof.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small family business has grown into a trusted community hub, serving thousands of
                customers who rely on our clean facilities, modern equipment, and friendly service. We take pride in
                being more than just a laundromat – we're your neighbors, committed to making your daily tasks easier.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to invest in the latest technology and maintain the highest standards of cleanliness
                and customer service, ensuring that every visit to Clarkston Laundry and Shipping is a positive
                experience.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <HeartIcon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading font-bold text-lg group-hover:text-accent transition-colors">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're proud to serve our Clarkston neighbors and contribute to our local community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <ShieldCheckIcon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading font-bold text-lg group-hover:text-accent transition-colors">Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modern equipment, eco-friendly products, and meticulous attention to detail in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <ClockIcon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading font-bold text-lg group-hover:text-accent transition-colors">Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Extended hours, multiple services, and flexible options to fit your busy schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <UsersIcon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading font-bold text-lg group-hover:text-accent transition-colors">Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
