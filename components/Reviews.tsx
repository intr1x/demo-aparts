'use client'

import { useEffect } from 'react'

export function Reviews() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://smartwidgets.ru/widgets/js/wid.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const scripts = document.querySelectorAll('script[src*="smartwidgets"]')
      scripts.forEach(s => s.remove())
    }
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Отзывы гостей</h2>
        <div className="sw-widget" data-id="YOUR_WIDGET_ID"></div>
        <p className="text-sm text-gray-400 mt-4">
          *ID виджета настраивается в коде
        </p>
      </div>
    </section>
  )
}

