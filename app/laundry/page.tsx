import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline"

export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Professional Laundry Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From self-service to full-service wash & fold, we make laundry day easy and convenient.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Pickup Today
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
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <SparklesIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Self-Service Laundry</CardTitle>
                <CardDescription>Clean, modern machines available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">High-efficiency washers & dryers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multiple load sizes available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Card & mobile payment options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Wash & Fold Service</CardTitle>
                <CardDescription>Professional cleaning with same-day service</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Same-day turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Professional folding & packaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Eco-friendly detergents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pickup & Delivery</CardTitle>
                <CardDescription>Convenient service right to your door</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Scheduled pickup & delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Text notifications & tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Contactless service available</span>
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
