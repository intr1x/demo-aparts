'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Maximize, Building } from 'lucide-react'
import { getPublicMediaUrl } from '@/lib/media'

interface PropertyCardProps {
  id: string | number
  title: string
  slug: string
  price: number | null
  tower: string
  rooms: number
  area?: number
  floor?: number
  mainImage?: {
    url: string
  }
}

export function PropertyCard({
  title,
  slug,
  price,
  tower,
  rooms,
  area,
  floor,
  mainImage,
}: PropertyCardProps) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 p-0">
      <Link href={`/catalog/${slug}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-t-lg">
          {mainImage?.url && getPublicMediaUrl(mainImage.url) ? (
            <Image
              src={getPublicMediaUrl(mainImage.url)!}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-sm">Фото скоро</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <Link href={`/catalog/${slug}`}>
        <div className="p-6">
          {/* Title */}
          <h3 className="text-gray-500 text-base mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Price and Tower */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-2xl font-bold text-gray-900">
              От {price ? `${price.toLocaleString('ru-RU')} ₽` : '...'}
            </span>
            <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-md shrink-0 ml-2">
              {tower === 'oko' ? 'ОКО' : tower === 'neva-t1' ? 'NEVA T1' : 'NEVA T2'}
            </span>
          </div>

          {/* Features */}
          <div className="flex items-start justify-between pt-4 border-t border-gray-100">
            {/* Rooms */}
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-gray-400" />
                <span className="font-bold text-gray-900 text-lg">{rooms}</span>
              </div>
              <div className="text-gray-500 text-xs">Комнат</div>
            </div>

            {/* Area */}
            {area && (
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-gray-900 text-lg">{area}м²</span>
                </div>
                <div className="text-gray-500 text-xs">Площадь</div>
              </div>
            )}

            {/* Floor */}
            {floor && (
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-gray-900 text-lg">{floor}</span>
                </div>
                <div className="text-gray-500 text-xs">Этаж</div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </Card>
  )
}

