"use client"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Animation configurations for the retro theme
export const initClarkstonAnimations = () => {
  if (typeof window === 'undefined') return

  // Banner slide-in effect for section headers
  gsap.utils.toArray('.vintage-banner').forEach((banner: any) => {
    gsap.fromTo(banner,
      {
        x: -100,
        opacity: 0,
        rotation: -5
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: banner,
          start: 'top 85%'
        }
      }
    )
  })

  // Service cards with retro wiggle animation
  gsap.utils.toArray('.service-card').forEach((card: any, i: number) => {
    const icon = card.querySelector('.service-icon')
    
    // Initial entrance
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotation: 5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        delay: i * 0.1
      }
    )

    // Enhanced hover animations
    if (icon) {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          boxShadow: '0 20px 25px -5px rgba(138, 175, 183, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        })
        
        gsap.to(icon, {
          scale: 1.2,
          rotation: 15,
          duration: 0.4,
          ease: 'bounce.out'
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        })
        
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }
  })

  // Hero section animations
  gsap.utils.toArray('.hero-content').forEach((hero: any) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top 80%'
      }
    })

    timeline
      .fromTo(hero.querySelector('h1'), 
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(hero.querySelector('p'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(hero.querySelectorAll('button'), 
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'bounce.out', stagger: 0.1 },
        '-=0.3'
      )
  })

  // Testimonial carousel animations
  ScrollTrigger.create({
    trigger: '.testimonials-section',
    start: 'top 70%',
    animation: gsap.timeline()
      .fromTo('.testimonial-card',
        { 
          opacity: 0, 
          x: 100, 
          rotation: 3 
        },
        { 
          opacity: 1, 
          x: 0, 
          rotation: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out' 
        }
      )
  })

  // Promotional banner animations
  gsap.utils.toArray('.promo-banner').forEach((banner: any) => {
    gsap.fromTo(banner,
      {
        scale: 0.95,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.8)',
        scrollTrigger: {
          trigger: banner,
          start: 'top 80%'
        }
      }
    )
  })

  // Navigation animation on scroll
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
      className: 'nav-scrolled',
      targets: 'nav'
    }
  })

  // Floating elements animation
  gsap.utils.toArray('.floating-stats').forEach((stat: any, i: number) => {
    gsap.to(stat, {
      y: -15,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      delay: i * 0.5
    })
  })

  // Footer animation
  ScrollTrigger.create({
    trigger: 'footer',
    start: 'top 90%',
    animation: gsap.fromTo('footer',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
  })

  // Page transition animations
  gsap.set('main', { opacity: 0, y: 30 })
  gsap.to('main', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 })
}

// Email popup trigger animation
export const triggerEmailPopup = () => {
  if (typeof window === 'undefined') return

  setTimeout(() => {
    const overlay = document.querySelector('.email-popup-overlay')
    const content = document.querySelector('.email-popup-content')
    
    if (overlay && content) {
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
      
      gsap.fromTo(content,
        {
          scale: 0.8,
          y: 50,
          opacity: 0
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'bounce.out'
        }
      )
    }
  }, 30000) // 30 second delay
}

// Button interaction animations
export const initButtonAnimations = () => {
  if (typeof window === 'undefined') return

  gsap.utils.toArray('button').forEach((button: any) => {
    if (button.classList.contains('vintage-glow')) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          boxShadow: '0 0 30px rgba(243, 196, 88, 0.4)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: '0 0 20px rgba(243, 196, 88, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }
  })
}

// Pricing card stagger animation
export const initPricingAnimations = () => {
  if (typeof window === 'undefined') return

  ScrollTrigger.create({
    trigger: '.pricing-cards',
    start: 'top 80%',
    animation: gsap.fromTo('.pricing-cards .card',
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.1 }
    )
  })
}

// Text reveal animations
export const initTextAnimations = () => {
  if (typeof window === 'undefined') return

  gsap.utils.toArray('h1, h2, h3').forEach((heading: any) => {
    ScrollTrigger.create({
      trigger: heading,
      start: 'top 90%',
      animation: gsap.fromTo(heading,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
    })
  })
}

// Initialize all animations
export const initAllAnimations = () => {
  if (typeof window === 'undefined') return

  // Small delay to ensure DOM is ready
  setTimeout(() => {
    initClarkstonAnimations()
    initButtonAnimations()
    initPricingAnimations()
    initTextAnimations()
  }, 100)
}

// Cleanup function
export const cleanupAnimations = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}

