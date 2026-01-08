import { Hero } from '@/components/Hero'
import { FeaturedProperties } from '@/components/FeaturedProperties'
import { Reviews } from '@/components/Reviews'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function HomePage() {
  // DEMO MODE: Используем статические данные
  const settings = {
    heroTitle: 'Премиальные апартаменты в Москва-Сити',
  }
  const videoDay = null
  const videoNight = null

  return (
    <main>
      <Hero
        title={settings.heroTitle}
        videoDay={videoDay}
        videoNight={videoNight}
      />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Добро пожаловать в мир премиального комфорта</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Мы предлагаем эксклюзивные апартаменты в самом сердце деловой столицы — Москва-Сити.
            Наши объекты расположены в лучших башнях комплекса: ОКО и NEVA Towers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Откройте для себя новый уровень жизни на высоте 200 метров над городом. 
            Панорамные виды, премиальная отделка и инфраструктура мирового класса делают 
            каждое пребывание незабываемым опытом.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Премиум расположение</h3>
              <p className="text-gray-600">
                Апартаменты в башнях ОКО и NEVA Towers с панорамными видами на Москву. 
                Инфраструктура делового квартала к вашим услугам.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Полная обустройство</h3>
              <p className="text-gray-600">
                Все апартаменты полностью меблированы и оснащены бытовой техникой премиум-класса. 
                Готовы к заселению с первого дня.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Сервис 24/7</h3>
              <p className="text-gray-600">
                Консьерж-сервис, охрана территории, техническая поддержка. 
                Мы заботимся о вашем комфорте круглосуточно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные апартаменты</h2>
            <p className="text-gray-600 text-lg">
              Откройте для себя наши лучшие предложения с эксклюзивными видами и премиальной отделкой
            </p>
          </div>
          <FeaturedProperties />
        </div>
      </section>

      {/* About Moscow City Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">О Москва-Сити</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Московский международный деловой центр «Москва-Сити» — современный 
                многофункциональный комплекс класса «Премиум», расположенный в центре столицы.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Это уникальный проект, объединивший в себе офисные помещения, апартаменты, 
                рестораны, магазины и развлекательную инфраструктуру. Башни комплекса 
                являются высочайшими небоскребами в Европе.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
                  <div className="text-gray-400">метров над городом</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">5 мин</div>
                  <div className="text-gray-400">до метро Деловой центр</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/apartments/apartment-001.jpg"
                alt="Москва-Сити"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Инфраструктура</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Торговые центры</h3>
              <p className="text-sm text-gray-600">Магазины премиум-брендов</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Фитнес и SPA</h3>
              <p className="text-sm text-gray-600">Современные спортзалы</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Рестораны</h3>
              <p className="text-sm text-gray-600">Кухня со всего мира</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Смотровые площадки</h3>
              <p className="text-sm text-gray-600">Виды на 360°</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Готовы забронировать?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Выберите идеальные апартаменты из нашего каталога и забронируйте прямо сейчас
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/catalog">
              Смотреть каталог
            </Link>
          </Button>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />
    </main>
  )
}

