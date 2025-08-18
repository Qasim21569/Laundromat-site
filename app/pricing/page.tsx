import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees, no surprises. Just honest pricing for quality services.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Laundry Services</CardTitle>
                <CardDescription>Self-service and full-service options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Wash (per load)</span>
                    <span className="font-semibold">$3.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dry (per load)</span>
                    <span className="font-semibold">$2.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wash & Fold (per lb)</span>
                    <span className="font-semibold">$1.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pickup & Delivery</span>
                    <span className="font-semibold">$4.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Shipping Services</CardTitle>
                <CardDescription>UPS authorized shipping center</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>UPS Ground</span>
                    <span className="font-semibold">From $8.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UPS 2-Day Air</span>
                    <span className="font-semibold">From $15.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UPS Next Day</span>
                    <span className="font-semibold">From $25.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packing Service</span>
                    <span className="font-semibold">$5.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-2xl">Mailbox Rental</CardTitle>
                <CardDescription>Private mailbox services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Small Box (monthly)</span>
                    <span className="font-semibold">$15.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Box (monthly)</span>
                    <span className="font-semibold">$24.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Large Box (monthly)</span>
                    <span className="font-semibold">$34.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup Fee (one-time)</span>
                    <span className="font-semibold">$25.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Questions about pricing? Call us at (404) 555-1234</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
