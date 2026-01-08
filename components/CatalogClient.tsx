'use client'

import { useMemo } from 'react'
import { useQueryState, parseAsString, parseAsInteger } from 'nuqs'
import { CatalogFilters } from './CatalogFilters'
import { PropertyCard } from './PropertyCard'

interface Apartment {
  id: string | number
  title: string
  slug: string
  tower: string
  rooms: number
  capacity: number
  priceFrom: number | null
  area?: number
  floor?: number
  mainImage?: {
    url: string
  }
}

interface CatalogClientProps {
  initialApartments: Apartment[]
}

export function CatalogClient({ initialApartments }: CatalogClientProps) {
  const [tower] = useQueryState('tower', parseAsString.withDefault('all'))
  const [rooms] = useQueryState('rooms', parseAsString.withDefault('all'))
  const [guests] = useQueryState('guests', parseAsInteger.withDefault(1))
  
  // Вычисляем минимальный и максимальный этаж из всех квартир
  const { minFloor, maxFloor } = useMemo(() => {
    const floors = initialApartments
      .map(apt => apt.floor)
      .filter((floor): floor is number => floor !== undefined && floor !== null)
    
    if (floors.length === 0) {
      return { minFloor: 1, maxFloor: 50 }
    }
    
    return {
      minFloor: Math.min(...floors),
      maxFloor: Math.max(...floors)
    }
  }, [initialApartments])

  const [floorMin] = useQueryState('floorMin', parseAsInteger.withDefault(minFloor))
  const [floorMax] = useQueryState('floorMax', parseAsInteger.withDefault(maxFloor))

  const filteredApartments = useMemo(() => {
    let filtered = initialApartments

    if (tower !== 'all') {
      filtered = filtered.filter((apt) => apt.tower === tower)
    }

    if (rooms !== 'all') {
      filtered = filtered.filter((apt) => apt.rooms === parseInt(rooms))
    }

    if (guests > 1) {
      filtered = filtered.filter((apt) => apt.capacity >= guests)
    }

    // Фильтрация по этажам
    filtered = filtered.filter((apt) => {
      if (apt.floor === undefined || apt.floor === null) return true
      return apt.floor >= floorMin && apt.floor <= floorMax
    })

    return filtered
  }, [tower, rooms, guests, floorMin, floorMax, initialApartments])

  return (
    <>
      <CatalogFilters 
        minFloor={minFloor} 
        maxFloor={maxFloor} 
        foundCount={filteredApartments.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredApartments.map((apt) => (
          <PropertyCard
            key={apt.id}
            id={apt.id}
            title={apt.title}
            slug={apt.slug}
            price={apt.priceFrom}
            tower={apt.tower}
            rooms={apt.rooms}
            area={apt.area}
            floor={apt.floor}
            mainImage={apt.mainImage}
          />
        ))}
      </div>

      {filteredApartments.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          Апартаменты не найдены
        </div>
      )}
    </>
  )
}

