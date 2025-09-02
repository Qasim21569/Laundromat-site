import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'primary' | 'accent' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  // Custom Clarkston Laundry colors - exact HSL matches
  primary: { base: 194, spread: 40 },  // #8AAFB7 - soft clean blue (194°, 26%, 63%)
  accent: { base: 43, spread: 30 },    // #F3C45A - warm vintage yellow (43°, 87%, 65%)
  footer: { base: 210, spread: 25 }    // #153857 - deep navy blue (210°, 58%, 22%)
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'primary',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    // Enhanced touch support for mobile devices
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) {
        const { clientX: x, clientY: y } = touch;
        if (cardRef.current) {
          cardRef.current.style.setProperty('--x', x.toFixed(2));
          cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
          cardRef.current.style.setProperty('--y', y.toFixed(2));
          cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        }
      }
    };

    document.addEventListener('pointermove', syncPointer);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      document.removeEventListener('pointermove', syncPointer);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = (): React.CSSProperties => {
    // Set saturation and lightness based on the specific color
    let saturation = 100;
    let lightness = 70;
    let bgOpacity = 0.08;
    
    if (glowColor === 'primary') {
      saturation = 26;  // #8AAFB7 saturation
      lightness = 63;   // #8AAFB7 lightness
      bgOpacity = 0.12;
    } else if (glowColor === 'accent') {
      saturation = 87;  // #F3C45A saturation
      lightness = 65;   // #F3C45A lightness
      bgOpacity = 0.10;
    } else if (glowColor === 'footer') {
      saturation = 58;  // #153857 saturation
      lightness = 22;   // #153857 lightness
      bgOpacity = 0.15;
    }

    const baseStyles: React.CSSProperties & Record<string, any> = {
      '--base': base,
      '--spread': spread,
      '--saturation': saturation,
      '--lightness': lightness,
      '--bg-opacity': bgOpacity,
      '--radius': '14',
      '--border': '2',
      '--backdrop': 'hsl(0 0% 100% / 0.95)',
      '--backup-border': 'hsl(0 0% 90% / 0.5)',
      '--size': typeof window !== 'undefined' && window.innerWidth < 768 ? '100' : '150', // Smaller spotlight on mobile
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-opacity, 0.08)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    };

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    /* Custom CSS variables for exact brand colors */
    [data-glow] {
      --clarkston-primary: #8AAFB7;
      --clarkston-accent: #F3C45A;
      --clarkston-footer: #153857;
    }
    
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--border-spot-opacity, 0.8)), transparent 100%
      );
      filter: brightness(1.2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 0.8)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? '' : ''}
          rounded-xl sm:rounded-2xl 
          relative 
          p-4 sm:p-6
          transition-all
          duration-300
          cursor-pointer
          hover:shadow-2xl
          backdrop-blur-[5px]
          touch-manipulation
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard }
