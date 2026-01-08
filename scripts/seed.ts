/**
 * Скрипт создания тестовых апартаментов
 * Запуск: npx tsx scripts/seed.ts
 */

import { getPayload } from 'payload'
import config from '../payload.config'

const testApartments = [
  {
    title: 'Студия Панорама',
    slug: 'studio-panorama',
    tower: 'oko',
    rooms: 1,
    capacity: 2,
    area: 35,
    floor: 45,
    priceFrom: 10000,
    tlId: '12345',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Современная студия с панорамным видом на Москву. Полностью оборудованная кухня, стильный дизайн и все необходимое для комфортного проживания.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Апартаменты Делюкс 1 комната',
    slug: 'deluxe-1-room',
    tower: 'oko',
    rooms: 1,
    capacity: 3,
    area: 48,
    floor: 42,
    priceFrom: 13000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Просторные апартаменты делюкс класса с отдельной спальней. Высокие потолки, панорамные окна и премиальная отделка.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Семейные апартаменты 2 комнаты',
    slug: 'family-2-rooms',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 75,
    floor: 38,
    priceFrom: 15000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Идеально для семейного отдыха. Две спальни, просторная гостиная, две ванные комнаты. Захватывающий вид на центр Москвы.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Пентхаус 3 комнаты',
    slug: 'penthouse-3-rooms',
    tower: 'oko',
    rooms: 3,
    capacity: 6,
    area: 120,
    floor: 51,
    priceFrom: 25000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Эксклюзивный пентхаус на верхних этажах. Три спальни, кабинет, панорамная терраса. Премиальная отделка от известных дизайнеров.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Бизнес-студия',
    slug: 'business-studio',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 32,
    floor: 28,
    priceFrom: 11000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Компактная студия для деловых поездок. Удобная рабочая зона, быстрый интернет, вся необходимая техника.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Апартаменты Комфорт 2 комнаты',
    slug: 'comfort-2-rooms',
    tower: 'neva-t1',
    rooms: 2,
    capacity: 4,
    area: 68,
    floor: 35,
    priceFrom: 14000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Уютные двухкомнатные апартаменты с видом на реку. Современный ремонт, удобная планировка, все для комфортного проживания.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Премиум апартаменты 3 комнаты',
    slug: 'premium-3-rooms',
    tower: 'neva-t1',
    rooms: 3,
    capacity: 6,
    area: 95,
    floor: 40,
    priceFrom: 18000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Премиальные апартаменты премиум-класса. Три спальни, просторная гостиная, две ванные. Авторский дизайн интерьера.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Студия Сити',
    slug: 'city-studio',
    tower: 'neva-t2',
    rooms: 1,
    capacity: 2,
    area: 38,
    floor: 30,
    priceFrom: 12000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Стильная студия в новой башне NEVA T2. Панорамные окна, современный дизайн, инфраструктура башни у вас под рукой.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Апартаменты Люкс 2 комнаты',
    slug: 'luxury-2-rooms',
    tower: 'neva-t2',
    rooms: 2,
    capacity: 4,
    area: 82,
    floor: 44,
    priceFrom: 16000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Роскошные апартаменты для продажи в NEVA T2. Премиальная отделка, панорамный вид, инфраструктура класса люкс.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Элитный пентхаус 4 комнаты',
    slug: 'elite-penthouse-4-rooms',
    tower: 'neva-t2',
    rooms: 4,
    capacity: 8,
    area: 150,
    floor: 56,
    priceFrom: 22000,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Элитный пентхаус на последних этажах. Четыре спальни, кабинет, терраса с джакузи, панорамный вид 360°. Индивидуальный дизайн-проект.',
              },
            ],
          },
        ],
      },
    },
  },
]

async function seed() {
  console.log('🚀 Создание тестовых апартаментов...\n')

  try {
    const payload = await getPayload({ config })

    // Проверяем, есть ли уже апартаменты
    const { totalDocs } = await payload.find({
      collection: 'apartments',
      limit: 1,
    })

    if (totalDocs > 0) {
      console.log(`⚠️  В базе уже есть ${totalDocs} апартаментов`)
      console.log('Продолжаем добавление новых...\n')
    }

    let created = 0
    let skipped = 0

    for (const apt of testApartments) {
      try {
        // Проверяем, существует ли апартамент с таким slug
        const existing = await payload.find({
          collection: 'apartments',
          where: {
            slug: { equals: apt.slug },
          },
        })

        if (existing.docs.length > 0) {
          console.log(`⏭️  Пропущено: "${apt.title}" (уже существует)`)
          skipped++
          continue
        }

        await payload.create({
          collection: 'apartments',
          data: apt,
        })

        console.log(`✅ Создано: "${apt.title}"`)
        console.log(`   🏢 Башня: ${apt.tower}`)
        console.log(
          `   🛏️  ${apt.rooms} комнат, ${apt.area} м², этаж ${apt.floor}`
        )
        console.log(
          `   💰 От ${apt.priceFrom.toLocaleString('ru-RU')} ₽`
        )
        console.log('')

        created++
      } catch (error: any) {
        console.error(`❌ Ошибка при создании "${apt.title}":`, error.message)
      }
    }

    console.log('\n✨ Готово!')
    console.log(`📊 Статистика:`)
    console.log(`   ✅ Создано: ${created}`)
    console.log(`   ⏭️  Пропущено: ${skipped}`)
    console.log(`   📋 Всего в задании: ${testApartments.length}`)
    console.log('\n🌐 Откройте каталог: http://localhost:3000/catalog')
  } catch (error) {
    console.error('❌ Ошибка:', error)
    process.exit(1)
  }

  process.exit(0)
}

seed()

