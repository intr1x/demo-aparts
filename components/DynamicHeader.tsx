'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/button'
import { DesktopNav } from './DesktopNav'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DynamicHeaderProps {
  phone?: string
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

export function DynamicHeader({ phone, navItems }: DynamicHeaderProps) {
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
                  "hidden lg:block text-lg font-medium transition-all duration-300",
                  transparent && isDarkBackground && "text-white hover:text-white/80",
                  transparent && !isDarkBackground && "text-gray-900 hover:text-gray-700",
                  !transparent && "hover:text-foreground/80"
                )}
              >
                {phone}
              </a>
            )}
            
            <Button 
              asChild 
              className="hidden lg:inline-flex transition-all duration-300"
              variant={transparent && isDarkBackground ? "secondary" : "default"}
            >
              <Link href="/contacts">Связаться</Link>
            </Button>
            
            {/* Mobile Contact Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
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

