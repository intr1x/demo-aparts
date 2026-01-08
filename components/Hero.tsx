'use client'

import { useState, useRef } from 'react'
import { BookingWidget } from './BookingWidget'

interface HeroProps {
  title?: string
  videoDay?: string | null
  videoNight?: string | null
}

export function Hero({ title, videoDay, videoNight }: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Вычисляем видео при первом рендере
  const [currentVideo] = useState<string | null>(() => {
    const hour = new Date().getHours()
    const isNight = hour < 6 || hour >= 18
    
    if (isNight && videoNight) {
      return videoNight
    } else if (videoDay) {
      return videoDay
    }
    return null
  })

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Gradient */}
      {currentVideo ? (
        <video
          ref={videoRef}
          key={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
      ) : null}
      
      {/* Fallback gradient (shows while video loads or if no video) */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-1000 ${
          currentVideo && isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Loading Spinner - shows while video is loading */}
      {currentVideo && !isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin" />
            </div>
            <p className="text-white/80 text-sm font-medium tracking-wide">
              Загрузка...
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-white container mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          {title || 'Aparts'}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Премиальные апартаменты в Москва-Сити
        </p>
        
        {/* Booking widget */}
        <div className="mt-12">
          <BookingWidget />
        </div>
      </div>
    </section>
  )
}

