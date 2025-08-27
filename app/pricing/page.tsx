import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                TRANSPARENT PRICING
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
              SIMPLE &
              <span className="font-accent text-4xl lg:text-5xl text-primary block -mt-2">
                Honest Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no surprises. Just <span className="text-primary font-semibold">honest pricing</span> for quality services.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50 relative">
              <div className="absolute -top-2 -right-2 vintage-banner px-3 py-1 text-xs rounded-lg">
                <div className="vintage-banner-content font-bold">
                  POPULAR
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  🧺
                </div>
                <CardTitle className="font-heading font-bold text-2xl group-hover:text-accent transition-colors">Laundry Services</CardTitle>
                <CardDescription className="text-muted-foreground">Self-service and full-service options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Wash (per load)</span>
                    <span className="font-bold text-primary">$3.50</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Dry (per load)</span>
                    <span className="font-bold text-primary">$2.75</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Wash & Fold (per lb)</span>
                    <span className="font-bold text-primary">$1.25</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Pickup & Delivery</span>
                    <span className="font-bold text-primary">$4.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  📦
                </div>
                <CardTitle className="font-heading font-bold text-2xl group-hover:text-accent transition-colors">Shipping Services</CardTitle>
                <CardDescription className="text-muted-foreground">UPS Authorized Service Center (No USPS)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <span>UPS Ground</span>
                    <span className="font-bold text-accent">From $8.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <span>UPS 2-Day Air</span>
                    <span className="font-bold text-accent">From $15.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <span>UPS Next Day</span>
                    <span className="font-bold text-accent">From $25.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <span>Packing Service</span>
                    <span className="font-bold text-accent">$5.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50 md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  📮
                </div>
                <CardTitle className="font-heading font-bold text-2xl group-hover:text-accent transition-colors">Mailbox Rental</CardTitle>
                <CardDescription className="text-muted-foreground">Private mailbox services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Small Box (monthly)</span>
                    <span className="font-bold text-primary">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Medium Box (monthly)</span>
                    <span className="font-bold text-primary">$24.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Large Box (monthly)</span>
                    <span className="font-bold text-primary">$34.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                    <span>Setup Fee (one-time)</span>
                    <span className="font-bold text-primary">$25.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 vintage-border p-8 rounded-2xl bg-white vintage-shadow">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied customers in Clarkston!
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 vintage-glow hover:scale-105 transition-all">
              💬 Get Started Today
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Questions about pricing? Call us at (404) 555-1234</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
