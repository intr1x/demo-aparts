import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Building2, ShoppingBag, UtensilsCrossed, Dumbbell, Train, Car, Plane, Trophy, Building, Lightbulb, HardHat } from 'lucide-react'

export default function MoscowCityPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/apartments/apartment-001.jpg"
            alt="Москва-Сити"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О Москва-Сити</h1>
            <p className="text-gray-200 text-lg">
              Московский международный деловой центр — город будущего в сердце столицы
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Introduction */}
        <div className="prose max-w-none mb-16">
          <div className="text-center mb-12">
            <p className="text-gray-600 leading-relaxed text-lg">
              Московский международный деловой центр «Москва-Сити» — это амбициозный проект, 
              ставший символом современной России и одной из главных достопримечательностей столицы.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">История создания</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Проект комплекса был разработан в 1992 году, а строительство началось в 1998 году. 
                Идея создания делового центра мирового уровня принадлежала правительству Москвы 
                при поддержке президента России.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Расположенный в Пресненском районе на берегу Москвы-реки, комплекс занимает 
                территорию около 100 гектаров. Это уникальный градостроительный проект, 
                сочетающий офисные помещения, жилые апартаменты, торговые центры и 
                развлекательную инфраструктуру.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Сегодня Москва-Сити — это не просто деловой центр, а полноценный 
                многофункциональный комплекс, где живут, работают и отдыхают тысячи людей.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/apartments/apartment-007.jpg"
                alt="История Москва-Сити"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Москва-Сити в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">23</div>
              <div className="text-gray-600">небоскреба в составе комплекса</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">374 м</div>
              <div className="text-gray-600">высота башни Федерация</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">тысяч рабочих мест</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5 мин</div>
              <div className="text-gray-600">пешком до метро</div>
            </div>
          </div>
        </div>

        {/* Towers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Основные башни комплекса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Башня Федерация</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 374 метра (Восток), 242 метра (Запад)</p>
                <p><strong>Этажей:</strong> 93 (Восток), 62 (Запад)</p>
                <p><strong>Назначение:</strong> Офисы, апартаменты, смотровая площадка</p>
              </div>
              <p className="text-gray-600 text-sm">
                Самое высокое здание в Европе (до 2017 года). Включает смотровую площадку 
                PANORAMA360 на высоте 327 метров.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">ОКО</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 354 метра (Южная), 245 метров (Северная)</p>
                <p><strong>Этажей:</strong> 85 (Южная), 49 (Северная)</p>
                <p><strong>Назначение:</strong> Офисы, апартаменты, отель</p>
              </div>
              <p className="text-gray-600 text-sm">
                Жилой комплекс премиум-класса с панорамными окнами от пола до потолка. 
                Наши апартаменты расположены здесь!
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">NEVA Towers</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 345 метров (Башня 2), 302 метра (Башня 1)</p>
                <p><strong>Этажей:</strong> 79 (Башня 2), 69 (Башня 1)</p>
                <p><strong>Назначение:</strong> Апартаменты, отель, офисы</p>
              </div>
              <p className="text-gray-600 text-sm">
                Роскошные апартаменты с видом на реку и город. Включает 5-звездочный отель 
                и премиальные рестораны.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Меркурий Сити Тауэр</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 339 метров</p>
                <p><strong>Этажей:</strong> 75</p>
                <p><strong>Назначение:</strong> Офисы, апартаменты</p>
              </div>
              <p className="text-gray-600 text-sm">
                Одна из самых узнаваемых башен комплекса благодаря золотистому фасаду 
                и футуристичной архитектуре.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Эволюция</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 255 метров</p>
                <p><strong>Этажей:</strong> 54</p>
                <p><strong>Назначение:</strong> Офисы, торговый центр</p>
              </div>
              <p className="text-gray-600 text-sm">
                Один из первых построенных небоскребов комплекса. Включает крупный 
                торговый центр «Афимолл Сити».
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Башня Империя</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Высота:</strong> 239 метров</p>
                <p><strong>Этажей:</strong> 60</p>
                <p><strong>Назначение:</strong> Офисы, апартаменты</p>
              </div>
              <p className="text-gray-600 text-sm">
                Многофункциональная башня со смешанным назначением, включающая 
                бизнес-центр и жилые помещения.
              </p>
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Инфраструктура</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                Деловая инфраструктура
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Более 3 млн м² офисных площадей класса А
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Офисы международных компаний и банков
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Современные конференц-залы и коворкинги
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Деловой протокол и VIP-сервис
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <ShoppingBag className="w-6 h-6 text-purple-600" />
                </div>
                Торговля и развлечения
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  ТРЦ «Афимолл Сити» площадью 250 000 м²
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Более 100 магазинов премиум-брендов
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Кинотеатры, боулинг, развлекательные центры
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Фуд-корты и рестораны мировой кухни
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <UtensilsCrossed className="w-6 h-6 text-orange-600" />
                </div>
                Рестораны и кафе
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Более 50 ресторанов и кафе
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Панорамные рестораны на высоких этажах
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Заведения мишленовских шеф-поваров
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  От уличной еды до высокой кухни
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Dumbbell className="w-6 h-6 text-green-600" />
                </div>
                Спорт и здоровье
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Фитнес-клубы премиум-класса
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  SPA-центры и салоны красоты
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Медицинские центры и клиники
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Йога-студии и бассейны
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transport */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Транспортная доступность</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-3">Метро</h3>
              <p className="text-gray-600 text-sm mb-2">
                Станция «Деловой центр» (МЦК + Калининско-Солнцевская линия)
              </p>
              <p className="text-blue-600 font-semibold">5 минут пешком</p>
            </div>

            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-3">Автомобиль</h3>
              <p className="text-gray-600 text-sm mb-2">
                Удобный подъезд с ТТК, подземный паркинг на 7000 мест
              </p>
              <p className="text-blue-600 font-semibold">15 мин от центра</p>
            </div>

            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-3">Аэропорты</h3>
              <p className="text-gray-600 text-sm mb-2">
                Прямое сообщение с Шереметьево, Внуково, Домодедово
              </p>
              <p className="text-blue-600 font-semibold">30-50 мин</p>
            </div>
          </div>
        </div>

        {/* Interesting Facts */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Интересные факты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-indigo-100">
                Москва-Сити входит в топ-10 самых высоких деловых центров мира и является 
                единственным таким комплексом в Восточной Европе.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Building className="w-6 h-6 text-white" />
              </div>
              <p className="text-indigo-100">
                С обзорных площадок открывается вид на весь город с высоты птичьего полета. 
                В ясную погоду видимость достигает 60 километров.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <p className="text-indigo-100">
                В комплексе установлено более 1 миллиона светодиодных ламп, создающих 
                захватывающее световое шоу в вечернее время.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <p className="text-indigo-100">
                Строительство комплекса продолжается уже более 25 лет, и проект до сих пор 
                не завершен — планируется возведение новых башен.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Живите в самом сердце Москва-Сити</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Выберите премиальные апартаменты в башнях ОКО или NEVA Towers и станьте частью 
            этого уникального городского пространства
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/catalog">
              Смотреть апартаменты
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

