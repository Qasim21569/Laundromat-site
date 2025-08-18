import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/clarkson-logo.png"
                alt="Clarkson Laundry and Shipping"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <div className="font-heading font-bold text-xl">Clarkson</div>
                <div className="font-accent text-sm opacity-90">Laundry & Shipping</div>
              </div>
            </div>

            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your complete service center in Clarkston, Georgia. Modern laundromat, shipping services, and business
              solutions all under one roof.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5" />
                <span>1295 Brockett Rd, Suite A, Clarkston, GA 30021</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5" />
                <a href="tel:+14045551234" className="hover:text-primary-foreground/80 transition-colors">
                  (404) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5" />
                <a
                  href="mailto:info@clarksonlaundry.com"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  info@clarksonlaundry.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5" />
                <span>Mon-Sun: 7:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/laundry"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Self-Service Laundromat
                </Link>
              </li>
              <li>
                <Link
                  href="/laundry"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link
                  href="/laundry"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pickup & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  UPS Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Private Mailboxes
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Amazon Lockers
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 Clarkson Laundry and Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
