import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ParkingPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-015.jpg"
            alt="Паркинг Москва-Сити"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Подземный паркинг</h1>
            <p className="text-gray-200 text-lg">
              Охраняемая парковка в башнях Москва-Сити для вашего удобства и безопасности
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Для наших гостей доступна современная подземная парковка в башнях комплекса 
            Москва-Сити. Многоуровневый паркинг оборудован по последнему слову техники 
            и обеспечивает максимальную безопасность вашего автомобиля.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Охрана 24/7</h3>
            <p className="text-gray-600">
              Круглосуточная охрана и контроль доступа. Въезд только по пропускам или QR-кодам.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Видеонаблюдение</h3>
            <p className="text-gray-600">
              Современная система видеонаблюдения с записью на всех уровнях паркинга.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Зарядные станции</h3>
            <p className="text-gray-600">
              Станции для зарядки электромобилей на каждом уровне паркинга.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Навигация</h3>
            <p className="text-gray-600">
              Понятная навигация и указатели на всех уровнях для быстрого поиска места.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Система безопасности</h3>
            <p className="text-gray-600">
              Автоматическая пожарная сигнализация, система пожаротушения и аварийные выходы.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Автомойка</h3>
            <p className="text-gray-600">
              Услуги автомойки и детейлинга доступны прямо на территории паркинга.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Стоимость парковки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">300 ₽</div>
              <div className="text-gray-500 mb-4">за сутки</div>
              <p className="text-sm text-gray-600">Стандартное место</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">1800 ₽</div>
              <div className="text-gray-500 mb-4">за неделю</div>
              <p className="text-sm text-gray-600">Выгода 300 ₽</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">6000 ₽</div>
              <div className="text-gray-500 mb-4">за месяц</div>
              <p className="text-sm text-gray-600">Выгода 3000 ₽</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            * Бронирование парковочного места осуществляется вместе с апартаментами
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Бронирование</h3>
              <p className="text-gray-600 text-sm">
                Укажите необходимость парковки при бронировании апартаментов
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Получение доступа</h3>
              <p className="text-gray-600 text-sm">
                При заселении вы получите QR-код для въезда на паркинг
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Въезд</h3>
              <p className="text-gray-600 text-sm">
                Просканируйте QR-код на въезде, шлагбаум откроется автоматически
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Парковка</h3>
              <p className="text-gray-600 text-sm">
                Припаркуйтесь на любом свободном месте вашего уровня
              </p>
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">Правила паркинга</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Соблюдайте скоростной режим</h3>
                <p className="text-gray-600 text-sm">Максимальная скорость на паркинге — 5 км/ч</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Паркуйтесь только на разметке</h3>
                <p className="text-gray-600 text-sm">Не загораживайте проезды и другие автомобили</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Выключайте двигатель</h3>
                <p className="text-gray-600 text-sm">Не оставляйте автомобиль с работающим двигателем</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Ценные вещи с собой</h3>
                <p className="text-gray-600 text-sm">Не оставляйте ценные вещи в автомобиле</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Курение запрещено</h3>
                <p className="text-gray-600 text-sm">На всей территории паркинга действует запрет на курение</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Запрет на ремонт</h3>
                <p className="text-gray-600 text-sm">Ремонт автомобилей на паркинге запрещен</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Фотографии паркинга</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/apartments/apartment-016.jpg"
                alt="Паркинг - въезд"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/apartments/apartment-017.jpg"
                alt="Паркинг - парковочные места"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы забронировать?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Выберите апартаменты и добавьте парковочное место при оформлении бронирования
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/catalog">
              Смотреть апартаменты
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

