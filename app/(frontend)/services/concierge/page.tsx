import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UtensilsCrossed, Theater, CarTaxiFront, Heart, Gift, PartyPopper, ShoppingBag, Wrench, FileText } from 'lucide-react'

export default function ConciergeServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-013.jpg"
            alt="Консьерж-сервис"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Консьерж-сервис 24/7</h1>
            <p className="text-gray-200 text-lg">
              Персональный помощник для решения любых задач во время вашего пребывания
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Наш консьерж-сервис работает круглосуточно, чтобы сделать ваше пребывание 
            максимально комфортным и безопасным. Мы поможем решить любые вопросы — 
            от заказа такси до организации деловых встреч и праздничных мероприятий.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Бронирование ресторанов</h3>
            <p className="text-gray-700 text-sm">
              Столик в лучших ресторанах Москвы, учет ваших предпочтений и диетических ограничений
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
              <Theater className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Билеты на мероприятия</h3>
            <p className="text-gray-700 text-sm">
              Билеты в театры, на концерты, спортивные события и другие культурные мероприятия
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
              <CarTaxiFront className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Заказ транспорта</h3>
            <p className="text-gray-700 text-sm">
              Такси, трансфер, аренда автомобиля с водителем для деловых и личных поездок
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-orange-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Медицинская помощь</h3>
            <p className="text-gray-700 text-sm">
              Вызов врача на дом, запись к специалистам, помощь с рецептами и лекарствами
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-pink-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Доставка цветов и подарков</h3>
            <p className="text-gray-700 text-sm">
              Организация доставки цветов, подарков, сувениров для ваших близких или партнеров
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
              <PartyPopper className="w-6 h-6 text-indigo-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Организация мероприятий</h3>
            <p className="text-gray-700 text-sm">
              Дни рождения, корпоративы, романтические ужины — организуем под ключ
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-yellow-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Шоппинг-ассистент</h3>
            <p className="text-gray-700 text-sm">
              Помощь в выборе и покупке одежды, аксессуаров, подарков в премиум-бутиках
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-red-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Техническая поддержка</h3>
            <p className="text-gray-700 text-sm">
              Помощь с техникой в апартаментах, WiFi, TV, климат-контролем 24/7
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Деловая поддержка</h3>
            <p className="text-gray-700 text-sm">
              Бронирование переговорных, печать документов, помощь в организации встреч
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как работает консьерж-сервис</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Свяжитесь</h3>
              <p className="text-gray-600 text-sm">
                Позвоните, напишите в чат или используйте мобильное приложение
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Опишите запрос</h3>
              <p className="text-gray-600 text-sm">
                Расскажите, что вам нужно, в любое время суток
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Мы все решим</h3>
              <p className="text-gray-600 text-sm">
                Консьерж займется вашим запросом и уточнит детали
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Готово!</h3>
              <p className="text-gray-600 text-sm">
                Получите результат и наслаждайтесь отдыхом
              </p>
            </div>
          </div>
        </div>

        {/* Real Examples */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Реальные примеры запросов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-gray-700 italic mb-2">
                &quot;Нужно организовать романтический ужин с видом на город для двоих на годовщину свадьбы&quot;
              </p>
              <p className="text-sm text-gray-500">
                ✅ Забронировали панорамный ресторан, украсили апартаменты цветами, заказали торт
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-gray-700 italic mb-2">
                &quot;Завтра важная встреча, нужна переговорная на 6 человек с проектором&quot;
              </p>
              <p className="text-sm text-gray-500">
                ✅ Забронировали переговорную в деловом центре, организовали кофе-брейк
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-gray-700 italic mb-2">
                &quot;Хочу сходить в Большой театр на балет &apos;Лебединое озеро&apos;&quot;
              </p>
              <p className="text-sm text-gray-500">
                ✅ Достали билеты в партер на ближайший спектакль, организовали трансфер
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-gray-700 italic mb-2">
                &quot;Нужен врач-педиатр для ребенка, небольшая температура&quot;
              </p>
              <p className="text-sm text-gray-500">
                ✅ Вызвали проверенного педиатра на дом в течение часа
              </p>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Всегда на связи</h2>
              <p className="text-purple-100 mb-6">
                Наша команда консьержей работает в режиме 24/7, 365 дней в году. 
                Вы можете связаться с нами в любое время удобным для вас способом.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Телефон консьержа: +7 (999) 999-99-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>Email: concierge@msc-aparts.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                  <span>WhatsApp/Telegram чат</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/apartments/apartment-018.jpg"
                alt="Консьерж"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Стоимость</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="text-5xl font-bold text-blue-600 mb-4">Бесплатно</div>
            <p className="text-gray-600 mb-2">
              Базовый консьерж-сервис включен в стоимость проживания
            </p>
            <p className="text-sm text-gray-500">
              * Оплачиваются только заказанные услуги третьих лиц (билеты, доставка, etc.)
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Попробуйте консьерж-сервис</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Забронируйте апартаменты и получите доступ к персональному помощнику 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/catalog">
                Выбрать апартаменты
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" asChild>
              <Link href="/contacts">
                Задать вопрос
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

