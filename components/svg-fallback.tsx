"use client"

import Image from "next/image"
import { useState } from "react"

interface SVGWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fallbackIcon?: string
  style?: React.CSSProperties
}

export function SVGWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fallbackIcon = "📋",
  style = {}
}: SVGWithFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-4xl" role="img" aria-label={alt}>
          {fallbackIcon}
        </span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse ${className}`}
          style={{ width, height }}
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized={true}
        className={className}
        style={style}
        onError={() => {
          setImageError(true)
          setIsLoading(false)
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
