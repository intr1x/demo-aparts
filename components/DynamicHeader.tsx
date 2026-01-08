'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/button'
import { DesktopNav } from './DesktopNav'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

// Telegram Icon Component
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
  )
}

// WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

interface DynamicHeaderProps {
  phone?: string
  telegram?: string
  whatsapp?: string
  navItems: Array<{
    href?: string
    label: string
    submenu?: Array<{
      href?: string
      label: string
      submenu?: Array<{
        href?: string
        label: string
      }>
    }>
  }>
}

export function DynamicHeader({ phone, telegram, whatsapp, navItems }: DynamicHeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isDarkBackground, setIsDarkBackground] = useState(true) // По умолчанию темный (для видео)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Отслеживание скролла
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleScroll() // Проверяем при монтировании
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isHomePage) return

    function checkBackgroundColor() {
      if (!headerRef.current) return

      try {
        // Получаем позицию логотипа
        const headerRect = headerRef.current.getBoundingClientRect()
        const logoX = headerRect.left + 100 // Примерная позиция логотипа
        const logoY = headerRect.top + headerRect.height / 2

        // Создаем временный canvas для чтения пикселей
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 1
        canvas.height = 1

        // Находим элементы под хедером
        const elements = document.elementsFromPoint(logoX, logoY)
        
        // Функция для проверки, является ли цвет прозрачным
        const isTransparent = (color: string) => {
          if (color === 'transparent' || color === 'rgba(0, 0, 0, 0)') return true
          const rgba = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
          if (rgba && rgba[4]) {
            return parseFloat(rgba[4]) < 0.1 // Почти прозрачный
          }
          return false
        }
        
        // Ищем первый элемент с непрозрачным фоном, игнорируя текстовые элементы
        let backgroundColor = null
        for (const el of elements) {
          // Пропускаем сам хедер и его дочерние элементы
          if (el === headerRef.current || headerRef.current?.contains(el)) continue
          
          // Пропускаем текстовые узлы и inline элементы
          if (!(el instanceof HTMLElement)) continue
          
          const tagName = el.tagName.toLowerCase()
          // Пропускаем текстовые элементы
          if (['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'strong', 'em', 'b', 'i'].includes(tagName)) {
            continue
          }
          
          const computedStyle = window.getComputedStyle(el)
          const bgColor = computedStyle.backgroundColor
          
          // Если нашли непрозрачный фон
          if (!isTransparent(bgColor)) {
            backgroundColor = bgColor
            break
          }
        }
        
        // Если не нашли непрозрачный фон, ищем в родительских элементах
        if (!backgroundColor) {
          const elements = document.elementsFromPoint(logoX, logoY)
          for (const el of elements) {
            if (el === headerRef.current || headerRef.current?.contains(el)) continue
            if (!(el instanceof HTMLElement)) continue
            
            let parent = el.parentElement
            while (parent && parent !== document.body) {
              const bgColor = window.getComputedStyle(parent).backgroundColor
              if (!isTransparent(bgColor)) {
                backgroundColor = bgColor
                break
              }
              parent = parent.parentElement
            }
            if (backgroundColor) break
          }
        }

        if (backgroundColor) {
          const rgb = backgroundColor.match(/\d+/g)
          
          if (rgb && rgb.length >= 3) {
            const r = parseInt(rgb[0])
            const g = parseInt(rgb[1])
            const b = parseInt(rgb[2])
            
            // Вычисляем яркость (относительную яркость)
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            
            // Если яркость меньше 180, фон темный (серые оттенки считаются светлыми)
            setIsDarkBackground(brightness < 180)
          } else {
            // Fallback на основе скролла
            const scrollPosition = window.scrollY
            const viewportHeight = window.innerHeight
            setIsDarkBackground(scrollPosition < viewportHeight * 0.7)
          }
        } else {
          // Fallback на основе скролла
          const scrollPosition = window.scrollY
          const viewportHeight = window.innerHeight
          setIsDarkBackground(scrollPosition < viewportHeight * 0.7)
        }
      } catch {
        // В случае ошибки используем fallback на основе скролла
        const scrollPosition = window.scrollY
        const viewportHeight = window.innerHeight
        setIsDarkBackground(scrollPosition < viewportHeight * 0.7)
      }
    }

    // Проверяем при монтировании
    checkBackgroundColor()

    // Проверяем при скролле
    const handleScroll = () => {
      requestAnimationFrame(checkBackgroundColor)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkBackgroundColor, { passive: true })
    
    // Даем время на загрузку контента
    const timeout = setTimeout(checkBackgroundColor, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkBackgroundColor)
      clearTimeout(timeout)
    }
  }, [isHomePage])

  // На главной странице прозрачный только если не проскроллили
  const transparent = isHomePage && !isScrolled

  return (
    <header 
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        transparent 
          ? "bg-transparent border-b border-transparent" 
          : "bg-white/95 backdrop-blur-md border-b border-border/40"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-2xl font-bold tracking-tight hover:opacity-80 transition-all duration-300",
              transparent && isDarkBackground && "text-white",
              transparent && !isDarkBackground && "text-gray-900"
            )}
          >
            Aparts
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav 
            navItems={navItems} 
            transparent={transparent && isDarkBackground}
          />

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {phone && (
              <a 
                href={`tel:${phone}`} 
                className={cn(
                  "hidden xl:block text-lg font-medium transition-all duration-300",
                  transparent && isDarkBackground && "text-white hover:text-white/80",
                  transparent && !isDarkBackground && "text-gray-900 hover:text-gray-700",
                  !transparent && "hover:text-foreground/80"
                )}
              >
                {phone}
              </a>
            )}
            
            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {telegram && (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className={cn(
                    "flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110",
                    transparent && isDarkBackground && "text-white hover:bg-white/10",
                    transparent && !isDarkBackground && "text-gray-900 hover:bg-gray-900/5",
                    !transparent && "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <TelegramIcon className="w-6 h-6" />
                </a>
              )}
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={cn(
                    "flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110",
                    transparent && isDarkBackground && "text-white hover:bg-white/10",
                    transparent && !isDarkBackground && "text-gray-900 hover:bg-gray-900/5",
                    !transparent && "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <Button 
              asChild 
              className="hidden lg:inline-flex transition-all duration-300"
              variant={transparent && isDarkBackground ? "secondary" : "default"}
            >
              <Link href="/contacts">Связаться</Link>
            </Button>
            
            {/* Mobile Contact Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Social Icons - Mobile */}
              {telegram && (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                    transparent && isDarkBackground && "text-white hover:bg-white/10",
                    transparent && !isDarkBackground && "text-gray-900 hover:bg-gray-900/5",
                    !transparent && "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <TelegramIcon className="w-6 h-6" />
                </a>
              )}
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                    transparent && isDarkBackground && "text-white hover:bg-white/10",
                    transparent && !isDarkBackground && "text-gray-900 hover:bg-gray-900/5",
                    !transparent && "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              )}
              
              {phone && (
                <Button 
                  asChild 
                  size="icon" 
                  variant={transparent && isDarkBackground ? "secondary" : "outline"}
                  className="h-10 w-10 shrink-0 transition-all duration-300"
                >
                  <a href={`tel:${phone}`} aria-label="Позвонить">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
              )}
              
              <Button 
                asChild 
                className="h-10 px-4 transition-all duration-300"
                variant={transparent && isDarkBackground ? "secondary" : "default"}
              >
                <Link href="/contacts">Связаться</Link>
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <MobileMenu 
              navItems={navItems} 
              phone={phone} 
              transparent={transparent && isDarkBackground}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

