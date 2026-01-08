'use client'

import { useEffect } from 'react'

export function BookingWidget() {
  useEffect(() => {
    // TravelLine script loader
    const script = document.createElement('script')
    script.src = 'https://www.travelline.ru/integration/loader.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize TL widget
      const initScript = document.createElement('script')
      initScript.innerHTML = `
        (function(w){
          var q = [
            ['setContext', 'TL-INT-aparts', 'ru'],
            ['embed', 'search-form', {
              container: 'tl-search-form',
              hotel_id: '58629'
            }]
          ];
          var t = w.travelline = (w.travelline || {}),
              ti = t.integration = (t.integration || {});
          ti.queue = (ti.queue || []);
          ti.queue.push(...q);
        })(window);
      `
      document.body.appendChild(initScript)
    }

    return () => {
      const scripts = document.querySelectorAll('script[src*="travelline"]')
      scripts.forEach(s => s.remove())
    }
  }, [])

  return <div id="tl-search-form" />
}
