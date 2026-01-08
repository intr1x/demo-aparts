import Link from 'next/link'

export default function PublicOfferPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Публичная оферта</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 mb-0">
              Настоящий документ является официальным предложением (публичной офертой) 
              для физических и юридических лиц на заключение договора на оказание услуг 
              по предоставлению апартаментов во временное пользование.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Термины и определения</h2>
          <p className="text-gray-600 mb-4">
            <strong>1.1.</strong> «Исполнитель» — ООО «Апартаменты Москва-Сити», предоставляющее услуги аренды апартаментов.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>1.2.</strong> «Заказчик» — физическое или юридическое лицо, принимающее условия настоящей оферты.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>1.3.</strong> «Апартаменты» — жилые помещения, расположенные в ММДЦ «Москва-Сити».
          </p>
          <p className="text-gray-600 mb-4">
            <strong>1.4.</strong> «Услуги» — комплекс услуг по предоставлению апартаментов во временное пользование.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Предмет договора</h2>
          <p className="text-gray-600 mb-4">
            <strong>2.1.</strong> Исполнитель обязуется предоставить Заказчику апартаменты во временное пользование 
            на условиях и в сроки, согласованные при бронировании.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>2.2.</strong> Заказчик обязуется оплатить услуги и соблюдать правила проживания.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>2.3.</strong> Договор считается заключенным с момента внесения предоплаты.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Порядок бронирования и оплаты</h2>
          <p className="text-gray-600 mb-4">
            <strong>3.1.</strong> Бронирование осуществляется через сайт, по телефону или электронной почте.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>3.2.</strong> Для подтверждения бронирования требуется внесение предоплаты в размере 30-50% 
            от стоимости проживания.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>3.3.</strong> Оставшаяся сумма оплачивается не позднее дня заезда одним из доступных способов:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Банковской картой онлайн</li>
            <li>Банковским переводом</li>
            <li>Наличными при заселении</li>
            <li>Через системы электронных платежей</li>
          </ul>
          <p className="text-gray-600 mb-4">
            <strong>3.4.</strong> При заселении вносится возвратный депозит, размер которого зависит от категории апартаментов.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Заселение и выселение</h2>
          <p className="text-gray-600 mb-4">
            <strong>4.1.</strong> Расчетный час заезда — 14:00 по московскому времени.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>4.2.</strong> Расчетный час выезда — 12:00 по московскому времени.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>4.3.</strong> Ранний заезд и поздний выезд возможны по согласованию за дополнительную плату.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>4.4.</strong> При заселении Заказчик предъявляет документ, удостоверяющий личность.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>4.5.</strong> Максимальное количество гостей не должно превышать вместимость апартаментов.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Права и обязанности сторон</h2>
          
          <h3 className="text-xl font-bold mt-6 mb-3">5.1. Исполнитель обязуется:</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Предоставить апартаменты в чистом, пригодном для проживания состоянии</li>
            <li>Обеспечить работоспособность всего оборудования и коммуникаций</li>
            <li>Предоставить комплект постельного белья и полотенец</li>
            <li>Обеспечить конфиденциальность информации о Заказчике</li>
            <li>Оказывать консьерж-сервис 24/7</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">5.2. Заказчик обязуется:</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Использовать апартаменты по назначению</li>
            <li>Соблюдать правила проживания и пожарной безопасности</li>
            <li>Бережно относиться к имуществу</li>
            <li>Не сдавать апартаменты в субаренду</li>
            <li>Не превышать допустимое количество гостей</li>
            <li>Возместить ущерб в случае порчи имущества</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Отмена бронирования и возврат средств</h2>
          <p className="text-gray-600 mb-4">
            <strong>6.1.</strong> При отмене бронирования за 7 и более дней до заезда предоплата возвращается в полном объеме.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>6.2.</strong> При отмене за 3-6 дней удерживается 50% от предоплаты.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>6.3.</strong> При отмене менее чем за 3 дня или неявке предоплата не возвращается.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>6.4.</strong> Возврат денежных средств осуществляется в течение 10 рабочих дней 
            тем же способом, которым была произведена оплата.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Ответственность сторон</h2>
          <p className="text-gray-600 mb-4">
            <strong>7.1.</strong> За порчу или утрату имущества Заказчик несет материальную ответственность 
            в размере стоимости ремонта или замены.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.2.</strong> При нарушении правил проживания Исполнитель вправе расторгнуть договор 
            в одностороннем порядке без возврата оплаты.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.3.</strong> Исполнитель не несет ответственности за ценности, оставленные в апартаментах.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.4.</strong> Исполнитель не несет ответственности за неисполнение обязательств 
            по причинам непреодолимой силы (форс-мажор).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Депозит и его возврат</h2>
          <p className="text-gray-600 mb-4">
            <strong>8.1.</strong> Депозит удерживается в качестве гарантии возмещения возможного ущерба.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>8.2.</strong> После выезда производится осмотр апартаментов.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>8.3.</strong> При отсутствии повреждений депозит возвращается в течение 3-5 рабочих дней.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>8.4.</strong> В случае обнаружения ущерба из депозита удерживается стоимость ремонта/замены.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Конфиденциальность</h2>
          <p className="text-gray-600 mb-4">
            <strong>9.1.</strong> Исполнитель обязуется не разглашать персональные данные Заказчика третьим лицам.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>9.2.</strong> Обработка персональных данных осуществляется в соответствии с 
            <Link href="/info/privacy-policy" className="text-blue-600 hover:underline">Политикой конфиденциальности</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Разрешение споров</h2>
          <p className="text-gray-600 mb-4">
            <strong>10.1.</strong> Все споры разрешаются путем переговоров.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>10.2.</strong> При невозможности достижения согласия споры разрешаются в судебном порядке 
            по месту нахождения Исполнителя.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Прочие условия</h2>
          <p className="text-gray-600 mb-4">
            <strong>11.1.</strong> Договор действует до полного исполнения обязательств сторонами.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>11.2.</strong> Исполнитель вправе вносить изменения в условия оферты с уведомлением на сайте.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>11.3.</strong> Все вопросы, не урегулированные настоящей офертой, регулируются 
            законодательством Российской Федерации.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Реквизиты Исполнителя</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2"><strong>Наименование:</strong> ООО «Апартаменты Москва-Сити»</p>
            <p className="text-gray-700 mb-2"><strong>ИНН:</strong> 7700000000</p>
            <p className="text-gray-700 mb-2"><strong>КПП:</strong> 770001001</p>
            <p className="text-gray-700 mb-2"><strong>ОГРН:</strong> 1234567890123</p>
            <p className="text-gray-700 mb-2"><strong>Адрес:</strong> 123112, г. Москва, Пресненская наб., д. 10</p>
            <p className="text-gray-700 mb-2"><strong>Телефон:</strong> +7 (999) 123-45-67</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@msc-aparts.ru</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-gray-700 mb-2">
              <strong>Дата публикации:</strong> 01.01.2024
            </p>
            <p className="text-gray-700">
              Акцептом (принятием) условий настоящей оферты является факт оплаты услуг Заказчиком.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/contacts" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


