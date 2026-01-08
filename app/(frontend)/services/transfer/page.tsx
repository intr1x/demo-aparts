import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserRoundCheck, Plane, Briefcase, Smartphone, Droplets, Wifi, Plug, Snowflake } from 'lucide-react'

export default function TransferServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-014.jpg"
            alt="Трансфер"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Премиальный трансфер</h1>
            <p className="text-gray-200 text-lg">
              Комфортабельные поездки на автомобилях бизнес-класса с профессиональным водителем
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Мы предлагаем услуги трансфера на комфортабельных автомобилях премиум-класса. 
            Встретим в аэропорту, довезем до апартаментов и обеспечим транспортом на время 
            вашего пребывания в Москве.
          </p>
        </div>

        {/* Vehicle Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/apartments/apartment-019.jpg"
                alt="Бизнес седан"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Бизнес седан</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mercedes E-Class, BMW 5-серии, Audi A6
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  До 3 пассажиров
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 багажных места
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi, зарядка
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-1">Из/в аэропорт</div>
                <div className="text-3xl font-bold text-blue-600">от 3000 ₽</div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-lg overflow-hidden shadow-xl relative">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
              Популярно
            </div>
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/apartments/apartment-020.jpg"
                alt="Минивэн"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Минивэн</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mercedes V-Class, Volkswagen Multivan
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  До 6 пассажиров
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  6 багажных мест
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi, зарядка, холодильник
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-1">Из/в аэропорт</div>
                <div className="text-3xl font-bold text-blue-600">от 4500 ₽</div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/apartments/apartment-021.jpg"
                alt="Представительский класс"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Представительский</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mercedes S-Class, BMW 7-серии, Audi A8
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  До 3 пассажиров
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 багажных места
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  VIP-класс, массаж, бар
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-1">Из/в аэропорт</div>
                <div className="text-3xl font-bold text-blue-600">от 6000 ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные маршруты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Шереметьево → Москва-Сити</h3>
                <p className="text-sm text-gray-500">~40 минут</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">3000 ₽</div>
                <div className="text-xs text-gray-500">бизнес-седан</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Домодедово → Москва-Сити</h3>
                <p className="text-sm text-gray-500">~50 минут</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">3500 ₽</div>
                <div className="text-xs text-gray-500">бизнес-седан</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Внуково → Москва-Сити</h3>
                <p className="text-sm text-gray-500">~35 минут</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">2800 ₽</div>
                <div className="text-xs text-gray-500">бизнес-седан</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Жуковский → Москва-Сити</h3>
                <p className="text-sm text-gray-500">~60 минут</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">4000 ₽</div>
                <div className="text-xs text-gray-500">бизнес-седан</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Вокзалы → Москва-Сити</h3>
                <p className="text-sm text-gray-500">~25 минут</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">1500 ₽</div>
                <div className="text-xs text-gray-500">бизнес-седан</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1">Аренда с водителем</h3>
                <p className="text-sm text-gray-500">По городу</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">2000 ₽</div>
                <div className="text-xs text-gray-500">за час</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Что включено</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserRoundCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Профессиональный водитель</h3>
              <p className="text-gray-600 text-sm">
                Опытные водители с безупречной репутацией
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Встреча с табличкой</h3>
              <p className="text-gray-600 text-sm">
                Ждем в зоне прилета с именной табличкой
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Помощь с багажом</h3>
              <p className="text-gray-600 text-sm">
                Водитель поможет с погрузкой и выгрузкой
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Отслеживание рейса</h3>
              <p className="text-gray-600 text-sm">
                Мониторим время прилета, ждем при задержках
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Вода и пресса</h3>
              <p className="text-gray-600 text-sm">
                Бутилированная вода и свежие газеты
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Wi-Fi в салоне</h3>
              <p className="text-gray-600 text-sm">
                Бесплатный высокоскоростной интернет
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plug className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Зарядные устройства</h3>
              <p className="text-gray-600 text-sm">
                USB и розетки для всех устройств
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Климат-контроль</h3>
              <p className="text-gray-600 text-sm">
                Индивидуальные настройки температуры
              </p>
            </div>
          </div>
        </div>

        {/* How to Order */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как заказать трансфер</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Оформите заявку</h3>
              <p className="text-gray-600 text-sm">
                При бронировании апартаментов или отдельно
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Укажите детали</h3>
              <p className="text-gray-600 text-sm">
                Дату, время, номер рейса и адрес
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Получите подтверждение</h3>
              <p className="text-gray-600 text-sm">
                Детали водителя и автомобиля за 2 часа
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Встреча</h3>
              <p className="text-gray-600 text-sm">
                Водитель встретит вас в зоне прилета
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Важная информация</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Бесплатное ожидание до 1 часа после прилета
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Детское кресло предоставляется бесплатно по запросу
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Возможна отмена за 24 часа без штрафа
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Наличный и безналичный расчет
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Специальные предложения</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Скидка 10% при заказе туда и обратно
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Бесплатный трансфер при аренде от 7 дней
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Фиксированная цена — без учета пробок
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Программа лояльности для частых клиентов
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Закажите трансфер прямо сейчас</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования трансфера или добавьте его при бронировании апартаментов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">
                Заказать трансфер
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

