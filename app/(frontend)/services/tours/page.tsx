import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Clock, Users, Building2, BookOpen, Film, Ghost, GraduationCap, Headphones, Smartphone, Umbrella } from 'lucide-react'

export default function ToursServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-009.jpg"
            alt="Экскурсии по Москве"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Экскурсии по Москве</h1>
            <p className="text-gray-200 text-lg">
              Откройте для себя столицу с профессиональными гидами
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Познакомьтесь с Москвой глазами местных жителей! Мы организуем индивидуальные 
            и групповые экскурсии с профессиональными гидами. От классических обзорных 
            маршрутов до уникальных тематических туров.
          </p>
        </div>

        {/* Tour Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-022.jpg"
                alt="Классическая Москва"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Классическая Москва</h3>
              <p className="text-gray-600 text-sm mb-4">
                Красная площадь, Кремль, Храм Христа Спасителя, Арбат
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3-4 часа</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-15 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 4 000 ₽</div>
              <p className="text-xs text-gray-500">индивидуальная</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-023.jpg"
                alt="Москва-Сити"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Деловой квартал</h3>
              <p className="text-gray-600 text-sm mb-4">
                Москва-Сити: небоскребы, смотровые площадки, история района
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-3 часа</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-10 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 3 500 ₽</div>
              <p className="text-xs text-gray-500">индивидуальная</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-024.jpg"
                alt="Ночная Москва"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Ночная Москва</h3>
              <p className="text-gray-600 text-sm mb-4">
                Вечерняя подсветка, огни небоскребов, романтика столицы
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-3 часа</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-8 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 5 000 ₽</div>
              <p className="text-xs text-gray-500">индивидуальная</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-025.jpg"
                alt="Третьяковская галерея"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Музеи и галереи</h3>
              <p className="text-gray-600 text-sm mb-4">
                Третьяковка, ГМИИ, Пушкинский музей с гидом-искусствоведом
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-3 часа</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-12 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 4 500 ₽</div>
              <p className="text-xs text-gray-500">+ билеты</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-026.jpg"
                alt="Усадьбы и парки"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Усадьбы и парки</h3>
              <p className="text-gray-600 text-sm mb-4">
                Коломенское, Царицыно, Кусково — история и архитектура
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4-5 часов</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-15 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 6 000 ₽</div>
              <p className="text-xs text-gray-500">+ трансфер</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 hover:shadow-xl transition-all">
            <div className="relative h-48">
              <Image
                src="/apartments/apartment-027.jpg"
                alt="Гастрономический тур"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Гастрономический</h3>
              <p className="text-gray-600 text-sm mb-4">
                Рынки, рестораны, дегустации — вкус Москвы
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3-4 часа</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-8 человек</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">от 7 000 ₽</div>
              <p className="text-xs text-gray-500">+ дегустации</p>
            </div>
          </div>
        </div>

        {/* Special Tours */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Специальные туры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Архитектурная Москва</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Конструктивизм, модерн, сталинская архитектура с искусствоведом
                  </p>
                  <div className="text-amber-600 font-bold">от 5 500 ₽</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Литературная Москва</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    По следам Пушкина, Толстого, Булгакова, Достоевского
                  </p>
                  <div className="text-amber-600 font-bold">от 4 500 ₽</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Film className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Киношная Москва</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Места съемок культовых фильмов, киностудии, музей кино
                  </p>
                  <div className="text-amber-600 font-bold">от 5 000 ₽</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Ghost className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Мистическая Москва</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Легенды, мифы, необычные истории и загадки столицы
                  </p>
                  <div className="text-amber-600 font-bold">от 4 000 ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Индивидуальная</h3>
            <p className="text-gray-600 text-sm mb-4">
              Персональный гид только для вашей группы. Гибкий маршрут и темп
            </p>
            <div className="text-3xl font-bold text-amber-600">от 4 000 ₽</div>
            <p className="text-sm text-gray-500 mt-2">для группы до 4 чел</p>
          </div>

          <div className="text-center p-8 bg-white border-2 border-amber-600 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Рекомендуем
            </div>
            <h3 className="text-xl font-bold mb-3">Семейная</h3>
            <p className="text-gray-600 text-sm mb-4">
              Интересно для всех возрастов. Интерактив для детей, история для взрослых
            </p>
            <div className="text-3xl font-bold text-amber-600">от 5 000 ₽</div>
            <p className="text-sm text-gray-500 mt-2">для семьи до 6 чел</p>
          </div>

          <div className="text-center p-8 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Корпоративная</h3>
            <p className="text-gray-600 text-sm mb-4">
              Team-building экскурсии для компаний. Квесты и активности
            </p>
            <div className="text-3xl font-bold text-amber-600">от 800 ₽</div>
            <p className="text-sm text-gray-500 mt-2">на человека от 10 чел</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Что включено</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Профессиональный гид</h3>
              <p className="text-sm text-gray-600">
                Лицензированные гиды с высшим образованием
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Аудиосистема</h3>
              <p className="text-sm text-gray-600">
                Для групп от 5 человек — беспроводная связь
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Фотосервис</h3>
              <p className="text-sm text-gray-600">
                Фотографии с экскурсии на вашу почту
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Umbrella className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Любая погода</h3>
              <p className="text-sm text-gray-600">
                Зонты и дождевики при необходимости
              </p>
            </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как забронировать</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Выберите тур</h3>
              <p className="text-gray-600 text-sm">
                Из готовых или создайте индивидуальный
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Свяжитесь с нами</h3>
              <p className="text-gray-600 text-sm">
                Минимум за 2 дня до желаемой даты
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Подтверждение</h3>
              <p className="text-gray-600 text-sm">
                Получите детали встречи и контакт гида
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Экскурсия</h3>
              <p className="text-gray-600 text-sm">
                Откройте Москву с новой стороны
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Quote */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 mb-20 text-center">
          <div className="text-6xl mb-6">❝</div>
          <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
            Экскурсия превзошла все ожидания! Гид был невероятно знающим и увлеченным. 
            Мы узнали столько интересного о Москве, сколько не узнали бы за месяц самостоятельных прогулок.
          </blockquote>
          <div className="font-semibold">— Анна и Сергей, гости из Санкт-Петербурга</div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Забронируйте экскурсию</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования экскурсии или уточнения деталей. 
            Мы поможем выбрать идеальный маршрут для вас!
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

