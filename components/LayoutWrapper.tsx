'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  return (
    <div className={isHomePage ? '' : 'pt-16'}>
      {children}
    </div>
  )
}


