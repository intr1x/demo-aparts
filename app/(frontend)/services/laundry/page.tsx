import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Leaf, Zap, Shield } from 'lucide-react'

export default function LaundryServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-011.jpg"
            alt="Прачечная"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Услуги прачечной</h1>
            <p className="text-gray-200 text-lg">
              Профессиональная стирка, глажка и химчистка с доставкой в апартаменты
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Мы предлагаем полный спектр услуг по уходу за одеждой и текстилем. 
            Современное оборудование, экологичные средства и внимательное отношение 
            к каждой вещи гарантируют идеальный результат.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Стирка одежды</h3>
            <p className="text-gray-600 text-sm mb-4">
              Обычная и деликатная стирка с учетом типа ткани и цвета
            </p>
            <div className="text-2xl font-bold text-blue-600">от 150 ₽</div>
            <p className="text-sm text-gray-500">за единицу</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Глажка</h3>
            <p className="text-gray-600 text-sm mb-4">
              Профессиональная глажка с паром для идеального вида
            </p>
            <div className="text-2xl font-bold text-green-600">от 100 ₽</div>
            <p className="text-sm text-gray-500">за единицу</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Химчистка</h3>
            <p className="text-gray-600 text-sm mb-4">
              Сухая чистка деликатных тканей, костюмов, пальто
            </p>
            <div className="text-2xl font-bold text-purple-600">от 500 ₽</div>
            <p className="text-sm text-gray-500">за единицу</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Постельное белье</h3>
            <p className="text-gray-600 text-sm mb-4">
              Стирка и глажка постельного белья, покрывал
            </p>
            <div className="text-2xl font-bold text-orange-600">от 800 ₽</div>
            <p className="text-sm text-gray-500">комплект</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Уход за обувью</h3>
            <p className="text-gray-600 text-sm mb-4">
              Чистка, покраска и восстановление обуви
            </p>
            <div className="text-2xl font-bold text-pink-600">от 400 ₽</div>
            <p className="text-sm text-gray-500">пара</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Экспресс-услуги</h3>
            <p className="text-gray-600 text-sm mb-4">
              Срочная стирка и глажка за 3-4 часа
            </p>
            <div className="text-2xl font-bold text-indigo-600">+50%</div>
            <p className="text-sm text-gray-500">к тарифу</p>
          </div>
        </div>

        {/* Price List */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Прайс-лист</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Рубашка/блузка</span>
              <span className="text-blue-600 font-bold">150 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Брюки/юбка</span>
              <span className="text-blue-600 font-bold">180 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Костюм (химчистка)</span>
              <span className="text-blue-600 font-bold">800 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Платье</span>
              <span className="text-blue-600 font-bold">250 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Пальто (химчистка)</span>
              <span className="text-blue-600 font-bold">1200 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Куртка</span>
              <span className="text-blue-600 font-bold">400 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Свитер/джемпер</span>
              <span className="text-blue-600 font-bold">200 ₽</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium">Постельный комплект</span>
              <span className="text-blue-600 font-bold">800 ₽</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Вызов курьера</h3>
              <p className="text-gray-600 text-sm">
                Звоните или пишите для заказа забора вещей
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Передача вещей</h3>
              <p className="text-gray-600 text-sm">
                Курьер заберет вещи в удобное время
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Обработка</h3>
              <p className="text-gray-600 text-sm">
                Профессиональная стирка или химчистка
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600 text-sm">
                Привозим чистые вещи к вам в апартаменты
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Эко-средства</h3>
            <p className="text-gray-600 text-sm">
              Используем безопасные и гипоаллергенные средства
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold mb-2">Быстро</h3>
            <p className="text-gray-600 text-sm">
              Стандартный срок — 24 часа, экспресс — 3-4 часа
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Страхование</h3>
            <p className="text-gray-600 text-sm">
              Все вещи застрахованы на время обработки
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Закажите услуги прачечной</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Позвоните нам или оставьте заявку, и мы заберем ваши вещи в удобное время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">
                Связаться с нами
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" asChild>
              <Link href="/catalog">
                Смотреть апартаменты
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

