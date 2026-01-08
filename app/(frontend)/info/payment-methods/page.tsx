import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PaymentMethodsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Способы оплаты</h1>
            <p className="text-gray-200 text-lg">
              Удобные и безопасные методы оплаты бронирования
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Мы предлагаем различные способы оплаты для вашего удобства. Все транзакции 
            защищены современными системами безопасности и соответствуют международным 
            стандартам PCI DSS.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Банковские карты</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Visa, Mastercard, МИР — онлайн оплата через защищенный платежный шлюз
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Моментальное подтверждение
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3D Secure защита
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Без комиссии
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-600 rounded-lg p-8 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Рекомендуем
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Онлайн-переводы</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              СБП (Система быстрых платежей), ЮMoney, QIWI, WebMoney
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Мгновенный перевод
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                По номеру телефона
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Без комиссии
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Банковский перевод</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Оплата по реквизитам банковским переводом для юридических лиц
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Для организаций
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                С НДС или без НДС
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Закрывающие документы
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Наличные</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Оплата наличными при заселении или в офисе компании
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                При заселении
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Чек и документы
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Без комиссии
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Депозит</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Возвратный депозит в качестве гарантии сохранности имущества
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Возврат после выезда
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                В течение 3-5 дней
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                На ту же карту
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Подарочные сертификаты</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Оплата номиналом подарочного сертификата компании
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Любой номинал
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Срок действия 1 год
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Идеальный подарок
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Process */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как происходит оплата</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Бронирование</h3>
              <p className="text-gray-600 text-sm">
                Выберите апартаменты и даты проживания в каталоге
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Предоплата</h3>
              <p className="text-gray-600 text-sm">
                Внесите предоплату 30-50% для подтверждения брони
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Подтверждение</h3>
              <p className="text-gray-600 text-sm">
                Получите подтверждение и все необходимые документы
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Полная оплата</h3>
              <p className="text-gray-600 text-sm">
                Доплатите остаток при заселении или заранее
              </p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Безопасность платежей</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Мы используем современные технологии шифрования и защиты данных для обеспечения 
              безопасности всех финансовых транзакций. Ваши платежные данные надежно защищены 
              и не хранятся на наших серверах.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <strong className="text-gray-900">SSL-шифрование</strong>
                  <p className="text-gray-600 text-sm">256-битное шифрование всех данных</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <strong className="text-gray-900">PCI DSS сертификация</strong>
                  <p className="text-gray-600 text-sm">Международный стандарт безопасности</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <strong className="text-gray-900">3D Secure</strong>
                  <p className="text-gray-600 text-sm">Дополнительная аутентификация</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/apartments/apartment-008.jpg"
              alt="Безопасность"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы об оплате</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold mb-2">Нужно ли вносить предоплату?</h3>
              <p className="text-gray-600 text-sm">
                Да, для подтверждения бронирования требуется предоплата в размере 30-50% от стоимости проживания. 
                Остальную сумму можно оплатить при заселении.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold mb-2">Можно ли вернуть предоплату при отмене?</h3>
              <p className="text-gray-600 text-sm">
                Да, при отмене бронирования за 7 и более дней до заезда предоплата возвращается в полном объеме. 
                При более поздней отмене применяются условия тарифа.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold mb-2">Какой размер депозита?</h3>
              <p className="text-gray-600 text-sm">
                Размер возвратного депозита зависит от типа апартаментов и срока проживания. 
                Обычно он составляет 5 000 - 15 000 рублей. Депозит возвращается в течение 3-5 рабочих дней после выезда.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold mb-2">Предоставляете ли вы документы для отчетности?</h3>
              <p className="text-gray-600 text-sm">
                Да, мы предоставляем полный пакет документов: договор, акт выполненных работ, счет и чек. 
                Работаем как с НДС, так и без НДС.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold mb-2">Есть ли комиссия при оплате картой?</h3>
              <p className="text-gray-600 text-sm">
                Нет, при оплате банковской картой или через СБП комиссия не взимается. 
                Вы платите только стоимость проживания и услуг.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы забронировать?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Выберите апартаменты и удобный способ оплаты. Мы гарантируем безопасность 
            ваших платежей и прозрачность всех условий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/catalog">
                Смотреть апартаменты
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


