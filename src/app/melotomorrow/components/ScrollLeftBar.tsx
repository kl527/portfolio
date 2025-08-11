"use client"

import { useState, useEffect } from 'react'

export default function ScrollLeftBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      setScrollProgress(scrollPercentRounded)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 h-screen bg-gray-200">
      <div 
        className="absolute bottom-0 left-0 w-full bg-melo-blue border-r-[12px] border-melo-blue transition-all duration-100"
        style={{ 
          height: `${scrollProgress}%`,
          transform: 'translateZ(0)'
        }}
      />
    </div>
  )
} 