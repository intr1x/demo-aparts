import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import React from 'react'

const jost = Jost({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Aparts — Премиальные апартаменты в Москва-Сити',
  description: 'Аренда апартаментов в башнях ОКО и NEVA Tower',
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={jost.className}>
        <NuqsAdapter>
          <Header />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  )
}
