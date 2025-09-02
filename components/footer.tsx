import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Vintage Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/clarkston-logo.jpg"
                alt="Clarkston Laundry and Shipping"
                width={80}
                height={80}
                quality={90}
                className="rounded-lg vintage-shadow"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <div>
                <div className="font-cartoon font-bold text-3xl tracking-tight">CLARKSTON</div>
                <div className="font-body text-xl text-accent -mt-1 font-semibold">Laundry & Shipping</div>
                <div className="text-sm text-white/70 font-accent">Since 2015</div>
              </div>
            </div>

            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Your complete service center in <span className="text-accent font-semibold">Clarkston, Georgia</span>. 
              Modern laundromat, UPS Authorized Service Center, and business solutions all under one roof.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-accent" />
                <span className="text-white/90">1295 Brocket Road, Suite A, Clarkston, GA 30021</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-accent" />
                <a href="tel:+14045551234" className="hover:text-accent transition-colors text-white/90">
                  (404) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-accent" />
                <a
                  href="mailto:info@clarksonlaundry.com"
                  className="hover:text-accent transition-colors text-white/90"
                >
                  info@clarksonlaundry.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-accent" />
                <span className="text-white/90">Mon-Sun: 7:00 AM - 12:00 AM (Midnight)</span>
              </div>
            </div>
          </div>

          {/* Vintage Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/laundry"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  🧺 Laundry Services
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  📦 UPS Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  🏢 Commercial Services
                  <span className="vintage-banner px-2 py-1 text-xs rounded ml-1">
                    <span className="vintage-banner-content text-xs">NEW</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  📮 Private Mailboxes
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  📱 Amazon Lockers
                </Link>
              </li>
            </ul>
          </div>

          {/* Vintage Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/promotions"
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  Promotions
                  <span className="vintage-banner px-2 py-1 text-xs rounded">
                    <span className="vintage-banner-content text-xs">DEALS</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-white/60">© 2024 Clarkston Laundry and Shipping. All rights reserved.</p>
            <div className="font-accent text-accent">
              Serving Clarkston with modern excellence since 2015
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
