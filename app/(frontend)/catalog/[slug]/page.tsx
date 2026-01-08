import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Reviews } from '@/components/Reviews'
import { mockApartments } from '@/lib/mock-data'

function extractTextFromLexical(data: Record<string, unknown>): string {
  try {
    if (!data?.root?.children) return ''
    
    let text = ''
    const traverse = (node: Record<string, unknown>) => {
      if (node.type === 'text') {
        text += node.text + ' '
      }
      if (node.children) {
        node.children.forEach(traverse)
      }
    }
    
    data.root.children.forEach(traverse)
    return text.trim()
  } catch {
    return ''
  }
}

interface ApartmentPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ApartmentPage({ params }: ApartmentPageProps) {
  const { slug } = await params
  
  // DEMO MODE: Используем моковые данные
  const mockApt = mockApartments.find((apt) => apt.slug === slug)
  
  if (!mockApt) {
    notFound()
  }

  const apartment = {
    id: mockApt.id,
    title: mockApt.title,
    slug: mockApt.slug,
    tower: mockApt.tower,
    description: mockApt.description,
    rooms: mockApt.rooms,
    area: mockApt.area,
    floor: mockApt.floor,
    priceFrom: mockApt.pricePerNight,
    mainImage: { url: mockApt.images[0]?.url },
    gallery: mockApt.images.slice(1).map((img) => ({ image: { url: img.url } })),
    tlId: null,
  }

  const bookingUrl = `https://www.travelline.ru/booking/?hotel_id=58629`

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] bg-gradient-to-br from-gray-700 to-gray-900">
        {(apartment.mainImage as { url?: string } | null)?.url && (
          <Image
            src={(apartment.mainImage as { url: string }).url}
            alt={apartment.title}
            fill
            className="object-cover opacity-80"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {apartment.title}
            </h1>
            <p className="text-white/80 text-lg mt-2">
              Башня: {apartment.tower === 'oko' ? 'ОКО' : apartment.tower === 'neva-t1' ? 'NEVA Tower T1' : 'NEVA Tower T2'}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Об апартаментах</h2>
              <div className="prose max-w-none text-gray-600">
                {/* Extract text from Lexical JSON */}
                {apartment.description && typeof apartment.description === 'object' && 'root' in apartment.description
                  ? extractTextFromLexical(apartment.description)
                  : 'Описание скоро появится...'}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6 border-y">
              <div>
                <div className="text-sm text-gray-500">Комнат</div>
                <div className="text-2xl font-bold">{apartment.rooms}</div>
              </div>
              {apartment.area && (
                <div>
                  <div className="text-sm text-gray-500">Площадь</div>
                  <div className="text-2xl font-bold">{apartment.area} м²</div>
                </div>
              )}
              {apartment.floor && (
                <div>
                  <div className="text-sm text-gray-500">Этаж</div>
                  <div className="text-2xl font-bold">{apartment.floor}</div>
                </div>
              )}
            </div>

            {/* Gallery */}
            {apartment.gallery && apartment.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Галерея</h2>
                <div className="grid grid-cols-2 gap-4">
                  {apartment.gallery.map((item: { image?: { url?: string } }, index: number) => {
                    const imageUrl = item.image?.url
                    return imageUrl ? (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={`${apartment.title} - ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="border rounded-lg p-6 sticky top-24 space-y-6">
              <div>
                <div className="text-sm text-gray-500">Стоимость</div>
                <div className="text-3xl font-bold">
                  от {apartment.priceFrom?.toLocaleString() || '...'} ₽
                </div>
                <div className="text-sm text-gray-500">за сутки</div>
              </div>

              <Button className="w-full" size="lg" asChild>
                <Link href={bookingUrl} target="_blank">
                  Забронировать
                </Link>
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Вы будете перенаправлены на страницу бронирования TravelLine
              </p>
            </div>
          </div>
        </div>
      </div>

      <Reviews />
    </div>
  )
}

