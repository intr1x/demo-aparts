import { CatalogClient } from '@/components/CatalogClient'
import { mockApartments } from '@/lib/mock-data'

export default async function CatalogPage() {
  // DEMO MODE: Используем моковые данные
  const serializedApartments = mockApartments.map((apt) => ({
    id: apt.id,
    title: apt.title,
    slug: apt.slug,
    tower: apt.tower,
    rooms: apt.rooms,
    capacity: apt.maxGuests,
    priceFrom: apt.pricePerNight,
    area: apt.area,
    floor: apt.floor,
    mainImage: apt.images[0] ? { url: apt.images[0].url } : undefined,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Каталог апартаментов</h1>
      
      <CatalogClient initialApartments={serializedApartments} />
    </div>
  )
}

