import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-700 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Политика конфиденциальности</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
            <p className="text-gray-700 mb-0">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта и клиентов ООО «Апартаменты Москва-Сити».
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Общие положения</h2>
          <p className="text-gray-600 mb-4">
            <strong>1.1.</strong> Настоящая Политика разработана в соответствии с Федеральным законом 
            от 27.07.2006 №152-ФЗ «О персональных данных».
          </p>
          <p className="text-gray-600 mb-4">
            <strong>1.2.</strong> Используя сайт или услуги Компании, вы соглашаетесь с условиями 
            настоящей Политики конфиденциальности.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>1.3.</strong> В случае несогласия с условиями Политики вы должны прекратить 
            использование сайта и услуг.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Какие данные мы собираем</h2>
          <p className="text-gray-600 mb-4">
            Мы можем собирать и обрабатывать следующие категории персональных данных:
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">2.1. Данные, предоставленные вами:</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Фамилия, имя, отчество</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Паспортные данные (при заселении)</li>
            <li>Данные банковской карты (для оплаты)</li>
            <li>Информация о предпочтениях и пожеланиях</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">2.2. Данные, собираемые автоматически:</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>IP-адрес</li>
            <li>Информация о браузере и устройстве</li>
            <li>Cookies и данные о посещениях сайта</li>
            <li>Геолокация (с вашего согласия)</li>
            <li>История бронирований</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Цели обработки персональных данных</h2>
          <p className="text-gray-600 mb-4">
            Мы обрабатываем ваши персональные данные для следующих целей:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Обработка бронирований и оказание услуг</li>
            <li>Связь с вами по вопросам бронирования</li>
            <li>Проведение расчетов и оформление документов</li>
            <li>Улучшение качества обслуживания</li>
            <li>Информирование о специальных предложениях (с вашего согласия)</li>
            <li>Обеспечение безопасности и предотвращение мошенничества</li>
            <li>Выполнение требований законодательства</li>
            <li>Анализ и статистика использования сайта</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Правовые основания обработки</h2>
          <p className="text-gray-600 mb-4">
            Обработка персональных данных осуществляется на основании:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Вашего согласия на обработку персональных данных</li>
            <li>Договора на оказание услуг</li>
            <li>Требований законодательства РФ</li>
            <li>Наших законных интересов (предотвращение мошенничества, безопасность)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Как мы защищаем ваши данные</h2>
          <p className="text-gray-600 mb-4">
            Мы применяем следующие меры для защиты персональных данных:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>SSL-шифрование для передачи данных</li>
            <li>Хранение данных на защищенных серверах</li>
            <li>Ограничение доступа сотрудников к персональным данным</li>
            <li>Регулярные проверки систем безопасности</li>
            <li>Обучение сотрудников правилам обработки данных</li>
            <li>Соблюдение требований стандарта PCI DSS для платежных данных</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Передача данных третьим лицам</h2>
          <p className="text-gray-600 mb-4">
            <strong>6.1.</strong> Мы не продаем и не передаем ваши персональные данные третьим лицам 
            без вашего согласия, за исключением случаев, предусмотренных законом.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>6.2.</strong> Мы можем передавать данные следующим категориям получателей:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Платежным системам для обработки платежей</li>
            <li>Курьерским службам для доставки документов</li>
            <li>Партнерам, оказывающим дополнительные услуги (трансфер, уборка)</li>
            <li>Государственным органам по их законным запросам</li>
          </ul>
          <p className="text-gray-600 mb-4">
            <strong>6.3.</strong> Все третьи лица обязаны соблюдать конфиденциальность 
            и использовать данные только для указанных целей.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Файлы cookie</h2>
          <p className="text-gray-600 mb-4">
            <strong>7.1.</strong> Наш сайт использует файлы cookie для улучшения работы и анализа посещаемости.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.2.</strong> Cookie — это небольшие текстовые файлы, сохраняемые на вашем устройстве.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.3.</strong> Вы можете отключить cookie в настройках браузера, но это может 
            ограничить функциональность сайта.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>7.4.</strong> Мы используем:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Обязательные cookie для работы сайта</li>
            <li>Аналитические cookie (Google Analytics, Яндекс.Метрика)</li>
            <li>Рекламные cookie (с вашего согласия)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Срок хранения данных</h2>
          <p className="text-gray-600 mb-4">
            <strong>8.1.</strong> Персональные данные хранятся не дольше, чем этого требуют цели обработки.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>8.2.</strong> После достижения целей обработки или по вашему требованию данные удаляются 
            или обезличиваются.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>8.3.</strong> Некоторые данные могут храниться дольше в соответствии с требованиями 
            законодательства (бухгалтерские документы — 5 лет).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Ваши права</h2>
          <p className="text-gray-600 mb-4">
            В отношении ваших персональных данных вы имеете право:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Получать информацию об обработке ваших данных</li>
            <li>Требовать уточнения, обновления или исправления данных</li>
            <li>Требовать удаления данных (право на забвение)</li>
            <li>Ограничить обработку данных</li>
            <li>Отозвать согласие на обработку данных</li>
            <li>Получить копию ваших данных в структурированном формате</li>
            <li>Обжаловать действия в Роскомнадзоре</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Для реализации своих прав направьте запрос на email: <a href="mailto:privacy@msc-aparts.ru" className="text-indigo-600 hover:underline">privacy@msc-aparts.ru</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Безопасность несовершеннолетних</h2>
          <p className="text-gray-600 mb-4">
            <strong>10.1.</strong> Наши услуги не предназначены для лиц младше 18 лет.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>10.2.</strong> Мы не собираем намеренно персональные данные несовершеннолетних.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>10.3.</strong> Если вам стало известно, что несовершеннолетний предоставил нам свои данные, 
            сообщите нам, и мы удалим эту информацию.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Изменения в Политике</h2>
          <p className="text-gray-600 mb-4">
            <strong>11.1.</strong> Мы вправе вносить изменения в настоящую Политику конфиденциальности.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>11.2.</strong> Новая редакция вступает в силу с момента размещения на сайте.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>11.3.</strong> Рекомендуем периодически проверять данную страницу для 
            ознакомления с изменениями.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Контактная информация</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@msc-aparts.ru" className="text-indigo-600 hover:underline">privacy@msc-aparts.ru</a></p>
            <p className="text-gray-700 mb-2"><strong>Телефон:</strong> +7 (999) 123-45-67</p>
            <p className="text-gray-700 mb-2"><strong>Адрес:</strong> 123112, г. Москва, Пресненская наб., д. 10</p>
            <p className="text-gray-700 mb-2"><strong>Ответственный за обработку:</strong> privacy@msc-aparts.ru</p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
            <p className="text-gray-700 mb-2">
              <strong>Дата последнего обновления:</strong> 01.01.2024
            </p>
            <p className="text-gray-700">
              Продолжая использовать сайт после внесения изменений в Политику, 
              вы соглашаетесь с новыми условиями.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacts" 
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
            >
              Связаться с нами
            </Link>
            <Link 
              href="/info/public-offer" 
              className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              Публичная оферта
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


