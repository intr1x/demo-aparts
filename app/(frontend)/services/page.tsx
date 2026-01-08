import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, ConciergeBell, Car, Shirt, ShoppingBasket, Map } from 'lucide-react'

const services = [
  {
    title: 'Уборка апартаментов',
    description: 'Профессиональная уборка апартаментов премиум-класса с использованием экологичных средств',
    icon: Sparkles,
    price: 'от 2500 ₽',
    href: '/services/cleaning',
    image: '/apartments/apartment-012.jpg',
  },
  {
    title: 'Консьерж-сервис',
    description: 'Круглосуточная помощь в решении любых вопросов: от бронирования ресторанов до организации трансфера',
    icon: ConciergeBell,
    price: 'включено',
    href: '/services/concierge',
    image: '/apartments/apartment-013.jpg',
  },
  {
    title: 'Трансфер',
    description: 'Комфортабельный трансфер из/в аэропорт на премиальных автомобилях с водителем',
    icon: Car,
    price: 'от 3000 ₽',
    href: '/services/transfer',
    image: '/apartments/apartment-014.jpg',
  },
  {
    title: 'Прачечная',
    description: 'Стирка, глажка и химчистка одежды и домашнего текстиля с доставкой в апартаменты',
    icon: Shirt,
    price: 'от 800 ₽',
    href: '/services/laundry',
    image: '/apartments/apartment-011.jpg',
  },
  {
    title: 'Продуктовая корзина',
    description: 'Доставка свежих продуктов и готовых блюд прямо в ваши апартаменты перед заездом',
    icon: ShoppingBasket,
    price: 'от 5000 ₽',
    href: '/services/grocery',
    image: '/apartments/apartment-010.jpg',
  },
  {
    title: 'Экскурсии',
    description: 'Индивидуальные и групповые экскурсии по Москве с профессиональными гидами',
    icon: Map,
    price: 'от 4000 ₽',
    href: '/services/tours',
    image: '/apartments/apartment-009.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-015.jpg"
            alt="Наши услуги"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-gray-200 text-lg">
              Премиальный сервис для вашего комфорта и удобства
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Мы создали экосистему премиальных услуг, чтобы ваше пребывание в апартаментах 
            было максимально комфортным. От уборки до организации мероприятий — мы позаботимся 
            обо всех деталях вашего отдыха или рабочей поездки.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <Link 
              key={service.href} 
              href={service.href}
              className="group bg-white border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <span className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Подробнее →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Почему наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 доступность</h3>
              <p className="text-gray-600">
                Большинство наших услуг доступны круглосуточно. Консьерж всегда на связи.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Проверенные партнеры</h3>
              <p className="text-gray-600">
                Работаем только с надежными компаниями и профессионалами с опытом.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Премиум качество</h3>
              <p className="text-gray-600">
                Высочайшие стандарты обслуживания для наших взыскательных гостей.
              </p>
            </div>
          </div>
        </div>

        {/* How to Order */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как заказать услугу</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Выберите услугу</h3>
              <p className="text-gray-600 text-sm">
                Ознакомьтесь с описанием и выберите нужную услугу
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Свяжитесь с нами</h3>
              <p className="text-gray-600 text-sm">
                Позвоните или напишите в WhatsApp/Telegram
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Обсудите детали</h3>
              <p className="text-gray-600 text-sm">
                Уточните время, стоимость и другие нюансы
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Получите сервис</h3>
              <p className="text-gray-600 text-sm">
                Наслаждайтесь премиальным обслуживанием
              </p>
            </div>
          </div>
        </div>

        {/* Package Deals */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Пакетные предложения</h2>
          <p className="text-center text-indigo-100 mb-8 max-w-2xl mx-auto">
            Закажите несколько услуг одновременно и получите скидку до 20%
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Базовый</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Ежедневная уборка + смена белья
              </p>
              <div className="text-3xl font-bold mb-2">10% скидка</div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-2 border-white">
              <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-2">
                Популярно
              </div>
              <h3 className="text-xl font-bold mb-3">Стандарт</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Уборка + прачечная + продуктовая корзина
              </p>
              <div className="text-3xl font-bold mb-2">15% скидка</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Премиум</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Все услуги + персональный консьерж
              </p>
              <div className="text-3xl font-bold mb-2">20% скидка</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашим консьерж-сервисом, и мы подберем оптимальный набор услуг для вас
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

