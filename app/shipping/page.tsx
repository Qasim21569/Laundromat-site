import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TruckIcon, BuildingStorefrontIcon, LockClosedIcon } from "@heroicons/react/24/outline"

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Shipping & Mail Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your one-stop shop for all shipping needs, private mailboxes, and package receiving.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>UPS Shipping</CardTitle>
                <CardDescription>Full-service UPS authorized shipping center</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Domestic & international shipping</li>
                  <li>• Package tracking & insurance</li>
                  <li>• Professional packing services</li>
                  <li>• UPS Ground, Air, and Express options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BuildingStorefrontIcon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Private Mailboxes</CardTitle>
                <CardDescription>Secure, professional mailing address</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• 24/7 mail access</li>
                  <li>• Package acceptance from all carriers</li>
                  <li>• Mail forwarding services</li>
                  <li>• Professional business address</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <LockClosedIcon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Amazon Hub Lockers</CardTitle>
                <CardDescription>Secure package pickup at your convenience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Secure Amazon package delivery</li>
                  <li>• Extended pickup hours</li>
                  <li>• No missed deliveries</li>
                  <li>• Free for Amazon customers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
