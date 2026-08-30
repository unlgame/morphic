'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="black"></circle>
      <circle cx="102" cy="128" r="18" fill="white"></circle>
      <circle cx="154" cy="128" r="18" fill="white"></circle>
    </svg>
  )
}

function IconLogoOutline({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <circle
        cx="128"
        cy="128"
        r="108"
        fill="none"
        stroke="currentColor"
        strokeWidth="24"
      ></circle>
      <circle cx="102" cy="128" r="18" fill="currentColor"></circle>
      <circle cx="154" cy="128" r="18" fill="currentColor"></circle>
    </svg>
  )
}

function IconBlinkingLogo({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    let blinkTimeoutId: ReturnType<typeof setTimeout> | undefined
    let nextBlinkTimeoutId: ReturnType<typeof setTimeout>

    const scheduleBlink = () => {
      const nextDelay = Math.random() * 5000 + 2000

      nextBlinkTimeoutId = setTimeout(() => {
        setIsBlinking(true)

        blinkTimeoutId = setTimeout(() => {
          setIsBlinking(false)
          scheduleBlink()
        }, 200)
      }, nextDelay)
    }

    scheduleBlink()

    return () => {
      if (blinkTimeoutId) {
        clearTimeout(blinkTimeoutId)
      }
      clearTimeout(nextBlinkTimeoutId)
    }
  }, [])

  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="#222"></circle>
      <ellipse
        cx="102"
        cy="128"
        rx="18"
        ry="18"
        fill="white"
        className={cn(isBlinking && 'animate-blink')}
      ></ellipse>
      <ellipse
        cx="154"
        cy="128"
        rx="18"
        ry="18"
        fill="white"
        className={cn(isBlinking && 'animate-blink')}
      ></ellipse>
    </svg>
  )
}

export { IconBlinkingLogo, IconLogo, IconLogoOutline }
