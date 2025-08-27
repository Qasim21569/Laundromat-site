"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border vintage-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Vintage Logo & Brand */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/images/clarkston-logo.jpg"
                alt="Clarkston Laundry and Shipping"
                width={60}
                height={60}
                className="rounded-lg vintage-shadow transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-cartoon font-bold text-3xl text-foreground tracking-tight">
                CLARKSTON
              </div>
              <div className="font-body text-xl text-primary -mt-1 font-semibold">
                Laundry & Shipping
              </div>
            </div>
          </Link>

          {/* Vintage Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>

            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-border p-4">
                  {/* Laundry Services Section */}
                  <div className="mb-4">
                    <h4 className="font-cartoon font-bold text-sm text-primary mb-3 uppercase tracking-wide">Laundry Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/laundry" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                        <span className="text-primary text-sm">🧺</span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">Self Service</span>
                      </Link>
                      <Link href="/laundry" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                        <span className="text-primary text-sm">👕</span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">Wash & Fold</span>
                      </Link>
                      <Link href="/commercial" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                        <span className="text-primary text-sm">🏢</span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">Commercial</span>
                      </Link>
                      <Link href="/laundry" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                        <span className="text-primary text-sm">🏠</span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">Airbnb</span>
                      </Link>
                    </div>
                    <Link href="/laundry" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group mt-1">
                      <span className="text-primary text-sm">🏘️</span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">Multi-Unit Housing</span>
                    </Link>
                  </div>
                  
                  {/* Other Services */}
                  <div className="pt-3 border-t border-border">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/shipping"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent text-sm">📦</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-accent text-sm">UPS Service Center</div>
                          <div className="text-xs text-muted-foreground">No USPS drop-off</div>
                        </div>
                      </Link>
                      <Link href="/laundry" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent text-sm">📬</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-accent text-sm">Business Services</div>
                          <div className="text-xs text-muted-foreground">Mail, printing, ATM</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/promotions" className="text-foreground hover:text-primary transition-colors font-medium relative">
              Promotions
              <span className="absolute -top-2 -right-2 vintage-banner px-2 py-1 text-xs rounded-full">
                <span className="vintage-banner-content text-xs">DEALS</span>
              </span>
            </Link>
            <Link href="/location" className="text-foreground hover:text-primary transition-colors font-medium">
              Location
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Vintage Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+14045551234"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <PhoneIcon className="w-4 h-4" />
              (404) 555-1234
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 vintage-glow hover:scale-105 transition-all">
              Schedule Pickup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Vintage Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-gradient-to-b from-white to-primary/5">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </Link>
              <div className="py-2">
                <div className="font-cartoon font-bold text-sm text-primary mb-2 uppercase tracking-wide">Laundry Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/laundry" className="block text-foreground hover:text-primary transition-colors py-1">Self Service & Wash & Fold</Link>
                  <Link href="/commercial" className="block text-foreground hover:text-primary transition-colors py-1">Commercial & Airbnb</Link>
                  <Link href="/laundry" className="block text-foreground hover:text-primary transition-colors py-1">Multi-Unit Housing</Link>
                </div>
              </div>
              <Link href="/shipping" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                📦 UPS Service Center
              </Link>
              <Link href="/promotions" className="text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center gap-2">
                Promotions
                <span className="vintage-banner px-2 py-1 text-xs rounded">
                  <span className="vintage-banner-content">DEALS</span>
                </span>
              </Link>
              <Link href="/location" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Location
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </Link>
              <div className="pt-4 border-t border-border">
                <a href="tel:+14045551234" className="flex items-center gap-2 text-muted-foreground mb-3 font-medium">
                  <PhoneIcon className="w-4 h-4" />
                  (404) 555-1234
                </a>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold vintage-glow">
                  Schedule Pickup
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
