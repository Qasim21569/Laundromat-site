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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/clarkson-logo.png"
              alt="Clarkson Laundry and Shipping"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border p-2">
                  <Link
                    href="/laundry"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">🧺</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Laundry Services</div>
                      <div className="text-sm text-muted-foreground">Self-service, wash & fold, pickup</div>
                    </div>
                  </Link>
                  <Link
                    href="/shipping"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">📦</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Shipping & Mail</div>
                      <div className="text-sm text-muted-foreground">UPS, mailboxes, Amazon lockers</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/location" className="text-foreground hover:text-primary transition-colors">
              Location
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+14045551234"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (404) 555-1234
            </a>
            <Button className="bg-primary hover:bg-primary/90">Schedule Pickup</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/laundry" className="text-foreground hover:text-primary transition-colors">
                Laundry Services
              </Link>
              <Link href="/shipping" className="text-foreground hover:text-primary transition-colors">
                Shipping & Mail
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/location" className="text-foreground hover:text-primary transition-colors">
                Location
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <div className="pt-4 border-t border-border">
                <a href="tel:+14045551234" className="flex items-center gap-2 text-muted-foreground mb-3">
                  <PhoneIcon className="w-4 h-4" />
                  (404) 555-1234
                </a>
                <Button className="w-full bg-primary hover:bg-primary/90">Schedule Pickup</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
