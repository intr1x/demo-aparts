import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Leaf, Users, Zap } from 'lucide-react'

export default function CleaningServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-012.jpg"
            alt="Услуги уборки"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Услуги уборки</h1>
            <p className="text-gray-200 text-lg">
              Профессиональная уборка апартаментов премиум-класса
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Мы предлагаем комплексные услуги по уборке апартаментов для наших гостей. 
            Профессиональная команда клининга обеспечит идеальную чистоту вашего жилья 
            с использованием экологичных средств и современного оборудования.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Стандартная уборка</h3>
            <p className="text-gray-600 mb-6">
              Ежедневная или регулярная уборка апартаментов с поддержанием чистоты и порядка
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-2">от 2500 ₽</div>
            <p className="text-gray-500 text-sm">за уборку</p>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-lg p-8 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Популярно
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Генеральная уборка</h3>
            <p className="text-gray-600 mb-6">
              Глубокая уборка всех поверхностей, включая труднодоступные места и мебель
            </p>
            <div className="text-3xl font-bold text-green-600 mb-2">от 4500 ₽</div>
            <p className="text-gray-500 text-sm">за уборку</p>
          </div>

          <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">После мероприятия</h3>
            <p className="text-gray-600 mb-6">
              Уборка после вечеринок, деловых встреч или других мероприятий
            </p>
            <div className="text-3xl font-bold text-purple-600 mb-2">от 3500 ₽</div>
            <p className="text-gray-500 text-sm">за уборку</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Что входит в стандартную уборку</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Уборка всех комнат</h3>
                <p className="text-gray-600 text-sm">Протирка пыли, пылесос, мытье полов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Ванная комната</h3>
                <p className="text-gray-600 text-sm">Чистка сантехники, зеркал, кафельной плитки</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Кухня</h3>
                <p className="text-gray-600 text-sm">Мытье посуды, чистка плиты, раковины, столешниц</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Смена белья</h3>
                <p className="text-gray-600 text-sm">Замена постельного белья и полотенец</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Вынос мусора</h3>
                <p className="text-gray-600 text-sm">Очистка корзин и вынос мусора</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Мытье окон</h3>
                <p className="text-gray-600 text-sm">По запросу (дополнительная услуга)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Глажка белья</h3>
              <p className="text-gray-600 text-sm mb-3">Профессиональная глажка</p>
              <div className="text-xl font-bold text-blue-600">500 ₽</div>
            </div>

            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Химчистка мебели</h3>
              <p className="text-gray-600 text-sm mb-3">Глубокая чистка обивки</p>
              <div className="text-xl font-bold text-green-600">от 2000 ₽</div>
            </div>

            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Уборка балкона</h3>
              <p className="text-gray-600 text-sm mb-3">Мытье окон и уборка</p>
              <div className="text-xl font-bold text-orange-600">800 ₽</div>
            </div>

            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Мытье холодильника</h3>
              <p className="text-gray-600 text-sm mb-3">Внутри и снаружи</p>
              <div className="text-xl font-bold text-purple-600">600 ₽</div>
            </div>
          </div>
        </div>

        {/* How to Order */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как заказать уборку</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Свяжитесь с нами</h3>
              <p className="text-gray-600 text-sm">
                Позвоните или напишите в WhatsApp/Telegram
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Выберите услугу</h3>
              <p className="text-gray-600 text-sm">
                Определите тип и объем необходимой уборки
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Согласуйте время</h3>
              <p className="text-gray-600 text-sm">
                Выберите удобное время для проведения уборки
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Наслаждайтесь</h3>
              <p className="text-gray-600 text-sm">
                Профессиональная команда позаботится о чистоте
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Экологичные средства</h3>
              <p className="text-gray-600 text-sm">
                Используем только безопасные и гипоаллергенные средства для уборки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Опытная команда</h3>
              <p className="text-gray-600 text-sm">
                Все сотрудники прошли профессиональное обучение и имеют опыт работы
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Быстрый отклик</h3>
              <p className="text-gray-600 text-sm">
                Возможность заказать уборку в день обращения при наличии свободных слотов
              </p>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="max-w-3xl mx-auto bg-blue-50 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">График работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Рабочие дни</h3>
              <p className="text-gray-600">Понедельник - Пятница</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">8:00 - 20:00</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Выходные</h3>
              <p className="text-gray-600">Суббота - Воскресенье</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">9:00 - 18:00</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            * Возможен выезд в нерабочее время по предварительной договоренности
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Закажите уборку прямо сейчас</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом, и мы позаботимся о чистоте ваших апартаментов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">
                Контакты
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

