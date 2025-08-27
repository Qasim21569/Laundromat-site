import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GiftIcon, ClockIcon, StarIcon, HeartIcon, UserGroupIcon, CalendarIcon } from "@heroicons/react/24/outline"

const currentPromotions = [
  {
    id: 1,
    title: "First-Time Customer Special",
    description: "New to Clarkston? Enjoy 25% off your first wash & fold service!",
    discount: "25% OFF",
    validUntil: "Limited Time",
    icon: "🎯",
    type: "NEW CUSTOMER",
    featured: true,
    terms: "Valid for wash & fold service only. Minimum $20 order. Cannot be combined with other offers.",
    code: "WELCOME25"
  },
  {
    id: 2,
    title: "Loyalty Card Program",
    description: "Collect stamps with every visit. 10 stamps = 1 FREE wash!",
    discount: "FREE WASH",
    validUntil: "Ongoing",
    icon: "⭐",
    type: "LOYALTY",
    featured: true,
    terms: "One stamp per visit. Stamp cards available at front desk.",
    code: "LOYALTY"
  },
  {
    id: 3,
    title: "Commercial Client Package",
    description: "Save big on bulk commercial laundry services for your business.",
    discount: "UP TO 30% OFF",
    validUntil: "Year-Round",
    icon: "🏢",
    type: "BUSINESS",
    featured: false,
    terms: "Minimum monthly volume required. Custom pricing available.",
    code: "BIZPACK30"
  },
  {
    id: 4,
    title: "Referral Rewards",
    description: "Refer a friend and you both get $10 off your next service!",
    discount: "$10 OFF",
    validUntil: "Ongoing",
    icon: "👥",
    type: "REFERRAL",
    featured: false,
    terms: "Referred customer must complete first service. Both parties receive credit.",
    code: "REFER10"
  },
  {
    id: 5,
    title: "Student Discount",
    description: "Show your student ID and save 15% on all laundry services.",
    discount: "15% OFF",
    validUntil: "Academic Year",
    icon: "🎓",
    type: "STUDENT",
    featured: false,
    terms: "Valid student ID required. Cannot be combined with other offers.",
    code: "STUDENT15"
  },
  {
    id: 6,
    title: "Senior Citizen Special",
    description: "Seniors 65+ enjoy special pricing on wash & fold services.",
    discount: "20% OFF",
    validUntil: "Ongoing",
    icon: "💝",
    type: "SENIOR",
    featured: false,
    terms: "Valid ID required showing age 65+. Tuesdays and Thursdays only.",
    code: "SENIOR20"
  }
]

const seasonalOffers = [
  {
    id: 1,
    title: "Holiday Linen Service",
    description: "Get your holiday table linens and formal wear professionally cleaned",
    period: "November - January",
    icon: "🎄",
    offer: "Special holiday rates for formal wear and linens"
  },
  {
    id: 2,
    title: "Spring Cleaning Special", 
    description: "Comforters, bedding, and heavy winter items at discounted rates",
    period: "March - May",
    icon: "🌸",
    offer: "25% off comforters and bulky items"
  },
  {
    id: 3,
    title: "Summer Camp Prep",
    description: "Get kids' clothes labeled and cleaned before summer camp",
    period: "May - July",
    icon: "⛺",
    offer: "Free garment labeling with wash & fold service"
  },
  {
    id: 4,
    title: "Back-to-School Ready",
    description: "Uniform cleaning and preparation services for students",
    period: "August - September", 
    icon: "📚",
    offer: "Student uniform packages available"
  }
]

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Vintage Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-8 py-4 rounded-lg mb-6 animate-vintage-bounce">
              <div className="vintage-banner-content font-bold text-xl">
                🎉 AMAZING DEALS 🎉
              </div>
            </div>
            <h1 className="font-cartoon font-bold text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
              SPECIAL
              <span className="font-accent text-4xl lg:text-5xl text-accent block -mt-2">
                Promotions & Deals
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Save big on all your laundry and shipping needs! Check out our current promotions and 
              <span className="text-accent font-semibold"> vintage-quality deals</span> available now.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2 text-accent">
                <ClockIcon className="w-5 h-5" />
                Limited Time Offers
              </div>
              <div className="flex items-center gap-2 text-primary">
                <GiftIcon className="w-5 h-5" />
                New Deals Weekly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                CURRENT OFFERS
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Active Promotions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of these great deals available right now at Clarkston Laundry & Shipping
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPromotions.map((promo) => (
              <Card 
                key={promo.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg vintage-shadow hover:vintage-glow ${
                  promo.featured ? 'border-2 border-accent ring-2 ring-accent/20' : 'border-2 border-border hover:border-accent/50'
                }`}
              >
                {/* Featured Banner */}
                {promo.featured && (
                  <div className="absolute -top-1 -right-1 vintage-banner px-4 py-2 text-sm rounded-bl-lg z-10">
                    <div className="vintage-banner-content font-bold">
                      FEATURED
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-3xl hover:animate-vintage-wiggle">
                      {promo.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 font-semibold"
                    >
                      {promo.type}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                    {promo.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {promo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="vintage-border p-4 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5">
                    <div className="text-center">
                      <div className="font-heading font-bold text-2xl text-accent mb-1">
                        {promo.discount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Valid until: {promo.validUntil}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">
                      Code: <span className="font-mono font-semibold text-primary">{promo.code}</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {promo.terms}
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold vintage-glow hover:scale-105 transition-all"
                  >
                    Claim This Deal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block vintage-banner px-6 py-3 rounded-lg mb-6">
              <div className="vintage-banner-content font-bold text-lg">
                SEASONAL SPECIALS
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Year-Round Savings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Special promotions throughout the year for different seasons and occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalOffers.map((offer) => (
              <Card key={offer.id} className="text-center p-6 hover:shadow-lg transition-all duration-300 vintage-shadow hover:vintage-glow group">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:animate-vintage-wiggle group-hover:bg-accent/20 transition-all">
                  {offer.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {offer.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {offer.description}
                </p>
                <div className="vintage-border px-3 py-2 rounded-lg bg-white mb-4">
                  <div className="text-xs font-semibold text-primary">
                    {offer.period}
                  </div>
                </div>
                <div className="text-sm text-accent font-medium">
                  {offer.offer}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="vintage-border p-12 rounded-2xl bg-white vintage-shadow">
            <div className="w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center text-4xl mx-auto mb-6 animate-vintage-bounce">
              📧
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Never Miss a Deal!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our mailing list to be the first to know about new promotions, seasonal specials, 
              and exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 vintage-glow hover:scale-105 transition-all">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Weekly deals • Exclusive offers • No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">
              Promotion Terms & Conditions
            </h3>
            <div className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-2">
              <p>• All promotions are subject to availability and may be modified or discontinued at any time without notice.</p>
              <p>• Promotions cannot be combined unless otherwise specified. Only one discount per transaction.</p>
              <p>• Valid ID may be required for student and senior discounts. Proof of eligibility must be presented at time of service.</p>
              <p>• Commercial packages require minimum volume commitments and signed service agreements.</p>
              <p>• Clarkston Laundry and Shipping reserves the right to modify terms and conditions of promotions at any time.</p>
              <p>• For questions about promotions or eligibility, please contact us at (404) 555-1234.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

