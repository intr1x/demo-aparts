import { PropertyCard } from './PropertyCard'
import Link from 'next/link'
import { mockApartments } from '@/lib/mock-data'

export async function FeaturedProperties() {
  // DEMO MODE: Используем моковые данные
  const serializedApartments = mockApartments
    .filter((apt) => apt.featured)
    .slice(0, 3)
    .map((apt) => ({
      id: apt.id,
      title: apt.title,
      slug: apt.slug,
      tower: apt.tower,
      rooms: apt.rooms,
      priceFrom: apt.pricePerNight,
      area: apt.area,
      floor: apt.floor,
      mainImage: apt.images[0] ? { url: apt.images[0].url } : undefined,
    }))

  if (serializedApartments.length === 0) {
    return null
  }

  return (
    <>
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serializedApartments.map((apt) => (
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

      {/* View All Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Смотреть все объекты
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </>
  )
}

