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
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                UPS AUTHORIZED SERVICE CENTER
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
              SHIPPING &
              <span className="font-accent text-4xl lg:text-5xl text-primary block -mt-2">
                Mail Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your one-stop shop for all shipping needs, private mailboxes, and package receiving with 
              <span className="text-primary font-semibold"> professional service</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 vintage-glow hover:scale-105 transition-all">
                📦 Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                📮 Private Mailbox Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                OUR SERVICES
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Complete Shipping Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <TruckIcon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-cartoon font-bold text-xl group-hover:text-accent transition-colors">UPS Authorized Service Center</CardTitle>
                <CardDescription className="text-muted-foreground">Complete UPS authorized service center. No USPS drop-off available.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Domestic & international shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Package tracking & insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Professional packing services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    UPS Ground, Air, and Express options
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <BuildingStorefrontIcon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading font-bold text-xl group-hover:text-accent transition-colors">Private Mailboxes</CardTitle>
                <CardDescription className="text-muted-foreground">Secure, professional mailing address</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    24/7 mail access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Package acceptance from all carriers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Mail forwarding services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Professional business address
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  <LockClosedIcon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-heading font-bold text-xl group-hover:text-accent transition-colors">Amazon Hub Lockers</CardTitle>
                <CardDescription className="text-muted-foreground">Secure package pickup at your convenience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Secure Amazon package delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Extended pickup hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    No missed deliveries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Free for Amazon customers
                  </li>
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
