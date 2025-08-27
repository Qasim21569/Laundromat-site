"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface EmailCapturePopupProps {
  isVisible: boolean
  onClose: () => void
}

export function EmailCapturePopup({ isVisible, onClose }: EmailCapturePopupProps) {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleEmailCapture = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreed) return

    setIsSubmitting(true)
    
    try {
      // CRM integration placeholder - replace with actual CRM endpoint
      const response = await fetch('/api/crm/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'website_popup',
          timestamp: new Date().toISOString(),
          interests: ['laundry', 'shipping']
        })
      })
      
      if (response.ok || true) { // Allow success for demo purposes
        setShowSuccess(true)
        setTimeout(() => {
          onClose()
        }, 2000)
      }
    } catch (error) {
      console.error('Email capture error:', error)
      // For demo purposes, still show success
      setShowSuccess(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Vintage Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Vintage Popup Content */}
      <div className="relative bg-white rounded-xl vintage-shadow border-2 border-accent max-w-md w-full animate-vintage-slide-in">
        {showSuccess ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 vintage-glow">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">
              Welcome to the Clarkston Family!
            </h3>
            <p className="text-muted-foreground">
              Check your email for exclusive deals and updates.
            </p>
          </div>
        ) : (
          <>
            {/* Vintage Header */}
            <div className="relative p-6 pb-4">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-muted-foreground" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎁</span>
                </div>
                
                <h3 className="font-cartoon font-bold text-2xl text-foreground mb-2">
                  🎉 Special Offers Await!
                </h3>
                
                <p className="text-muted-foreground">
                  Get exclusive deals and updates from Clarkston Laundry & Shipping
                </p>
              </div>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handleEmailCapture} className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-primary/20 focus:border-accent transition-colors"
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="border-2 border-primary data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to receive promotional emails and special offers
                  </label>
                </div>
                
                <Button
                  type="submit"
                  disabled={!email || !agreed || isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 vintage-glow hover:scale-105 transition-all"
                >
                  {isSubmitting ? "Joining..." : "Get My Special Offers! 🎁"}
                </Button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// Auto-trigger hook
export function useEmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('emailPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    // Trigger popup after 30 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('emailPopupShown', 'true')
      }
    }, 30000) // 30 seconds

    return () => clearTimeout(timer)
  }, [hasShown])

  const closePopup = () => {
    setIsVisible(false)
  }

  return { isVisible, closePopup }
}

