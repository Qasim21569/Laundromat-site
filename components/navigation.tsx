"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/20">
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
                priority
                quality={90}
                className="rounded-lg vintage-shadow transition-transform group-hover:scale-105"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="hidden md:block">
              <div className="font-cartoon font-bold text-3xl text-primary tracking-tight">
                CLARKSTON
              </div>
              <div className="font-body text-xl text-accent -mt-1 font-semibold">
                Laundry & Shipping
              </div>
            </div>
          </Link>

          {/* Vintage Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-primary hover:text-accent transition-colors font-medium">
              Home
            </Link>

            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-primary hover:text-accent transition-colors font-medium"
              >
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-card rounded-xl shadow-2xl border border-white/20 p-6 backdrop-blur-sm">
                  {/* Main Service Categories */}
                  <div className="space-y-4">
                    {/* Laundry Services */}
                    <Link
                      href="/laundry"
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-primary/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary text-lg">🧺</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">Laundry Services</h4>
                          <p className="text-xs text-muted-foreground">Self Service • Wash & Fold • Commercial</p>
                        </div>
                      </div>
                    </Link>

                    {/* Commercial Services */}
                    <Link
                      href="/commercial"
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-accent/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent text-lg">🏢</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">Commercial Laundry</h4>
                          <p className="text-xs text-muted-foreground">Business • Airbnb • Multi-Unit Housing</p>
                        </div>
                      </div>
                    </Link>

                    {/* Shipping Services */}
                    <Link
                      href="/shipping"
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-secondary/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <span className="text-secondary text-lg">📦</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">UPS Service Center</h4>
                          <p className="text-xs text-muted-foreground">Shipping • Mailboxes • No USPS drop-off</p>
                        </div>
                      </div>
                    </Link>

                    {/* View All Services */}
                    <div className="pt-3 border-t border-border">
                      <Link
                        href="/pricing"
                        className="block text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
                      >
                        <span className="font-heading font-medium text-foreground">View All Services & Pricing →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/promotions" className="text-primary hover:text-accent transition-colors font-medium">
              Promotions
            </Link>
            <Link href="/location" className="text-primary hover:text-accent transition-colors font-medium">
              Location
            </Link>
            <Link href="/about" className="text-primary hover:text-accent transition-colors font-medium">
              About
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 vintage-glow hover:scale-105 transition-all">
              Schedule Pickup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Vintage Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-primary hover:text-accent transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="/laundry" className="text-primary hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                🧺 Laundry Services
              </Link>
              <Link href="/commercial" className="text-primary hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                🏢 Commercial Laundry
              </Link>
              <Link href="/shipping" className="text-primary hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                📦 UPS Service Center
              </Link>
              <Link href="/pricing" className="text-primary hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                💰 Pricing
              </Link>
              <Link href="/promotions" className="text-primary hover:text-accent transition-colors font-medium py-2">
                Promotions
              </Link>
              <Link href="/location" className="text-primary hover:text-accent transition-colors font-medium py-2">
                Location
              </Link>
              <Link href="/about" className="text-primary hover:text-accent transition-colors font-medium py-2">
                About
              </Link>
              <div className="pt-4 border-t border-white/20">
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
