import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GroceryServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-010.jpg"
            alt="Продуктовая корзина"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Продуктовая корзина</h1>
            <p className="text-gray-200 text-lg">
              Доставка свежих продуктов и готовых блюд прямо в ваши апартаменты
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Встречайте гостей готовым холодильником! Мы подготовим и доставим продуктовый набор 
            к вашему заезду. Свежие фрукты, молочные продукты, напитки и многое другое — 
            всё уже будет ждать вас в апартаментах.
          </p>
        </div>

        {/* Ready Baskets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-emerald-600 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">Базовая</h3>
            <p className="text-gray-600 text-sm mb-6">
              Основные продукты для комфортного пребывания
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Молоко, йогурты, масло
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Хлеб, яйца, сыр
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Кофе, чай, сахар
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Вода, соки
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Фрукты (2-3 вида)
              </li>
            </ul>
            <div className="border-t pt-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5 000 ₽</div>
              <Button className="w-full mt-4" variant="outline">Заказать</Button>
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-600 rounded-lg p-8 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Популярно
            </div>
            <h3 className="text-2xl font-bold mb-4">Стандарт</h3>
            <p className="text-gray-600 text-sm mb-6">
              Расширенный набор для семьи или длительного проживания
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Всё из базовой корзины
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Мясо, рыба охлажденные
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Овощи свежие (набор)
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Колбасные изделия
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Макароны, крупы, специи
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Фрукты расширенный набор
              </li>
            </ul>
            <div className="border-t pt-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">8 000 ₽</div>
              <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">Заказать</Button>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-emerald-600 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">Премиум</h3>
            <p className="text-gray-600 text-sm mb-6">
              Эксклюзивные продукты высшего качества
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Всё из стандартной корзины
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Премиальные сыры
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Деликатесы, морепродукты
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Экзотические фрукты
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Вино, шампанское
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Готовые блюда от шефа
              </li>
            </ul>
            <div className="border-t pt-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15 000 ₽</div>
              <Button className="w-full mt-4" variant="outline">Заказать</Button>
            </div>
          </div>
        </div>

        {/* Custom Order */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Индивидуальный заказ</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Можете составить собственный список продуктов. Мы закупим всё необходимое 
            в проверенных магазинах и доставим к вашему приезду.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🥗</div>
              <h3 className="font-semibold">Свежие продукты</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="font-semibold">Готовая еда</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🍷</div>
              <h3 className="font-semibold">Алкоголь</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🍰</div>
              <h3 className="font-semibold">Десерты</h3>
            </div>
          </div>
        </div>

        {/* Special Diets */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Специальные диеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold mb-2">Вегетарианская</h3>
              <p className="text-sm text-gray-600">Без мяса и рыбы</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🥑</div>
              <h3 className="font-semibold mb-2">Веганская</h3>
              <p className="text-sm text-gray-600">Только растительные продукты</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="font-semibold mb-2">Без глютена</h3>
              <p className="text-sm text-gray-600">Gluten-free продукты</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🥛</div>
              <h3 className="font-semibold mb-2">Без лактозы</h3>
              <p className="text-sm text-gray-600">Lactose-free варианты</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как заказать</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Выберите корзину</h3>
              <p className="text-gray-600 text-sm">
                Готовый набор или индивидуальный заказ
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Оформите заказ</h3>
              <p className="text-gray-600 text-sm">
                Минимум за 24 часа до заезда
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Мы закупим</h3>
              <p className="text-gray-600 text-sm">
                Свежие продукты в день заезда
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Всё готово!</h3>
              <p className="text-gray-600 text-sm">
                Холодильник наполнен к вашему приезду
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Закажите продуктовую корзину</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Встречайте гостей наполненным холодильником! Укажите продуктовую корзину при бронировании апартаментов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">
                Оформить заказ
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


