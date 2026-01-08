import { getPayload } from 'payload'
import config from '../payload.config'
import path from 'path'
import fs from 'fs'

// Данные апартаментов с сайта apartmentmoscowcity.ru
const apartments = [
  // Апартаменты посуточно в башнях Neva
  {
    title: 'Neva Navi 65 м²',
    slug: 'neva-navi-65',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 65,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 36,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Современные 1-комнатные апартаменты площадью 65 м² в башне Neva Towers на 36 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Рассчитаны на комфортное проживание до 2 гостей. Потрясающий вид на Москва-Сити.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-007.jpg', 'apartment-001.jpg', 'apartment-002.png'],
  },
  {
    title: 'Neva Nati 49 м²',
    slug: 'neva-nati-49',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 49,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 59,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Уютные 1-комнатные апартаменты 49 м² на 59 этаже башни Neva Towers.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Идеально для пары или делового человека. Панорамные окна с видом на город.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-008.jpg', 'apartment-003.png'],
  },
  {
    title: 'Neva Libra 70 м²',
    slug: 'neva-libra-70',
    tower: 'neva-t1',
    rooms: 2,
    capacity: 4,
    bathrooms: 1,
    area: 70,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 38,
    featured: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Просторные 2-комнатные апартаменты площадью 70 м² на 38 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Вмещают до 4 гостей. Популярный выбор для семейного отдыха.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-009.jpg', 'apartment-010.jpg', 'apartment-006.webp'],
  },
  {
    title: 'Neva Sirius 40 м²',
    slug: 'neva-sirius-40',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 40,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 28,
    featured: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Компактные и стильные 1-комнатные апартаменты 40 м² на 28 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Отличный вариант для краткосрочной аренды. Современный дизайн.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-011.jpg', 'apartment-026.jpg'],
  },
  {
    title: 'Neva City 51 м²',
    slug: 'neva-city-51',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 51,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 43,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: '1-комнатные апартаменты площадью 51 м² на 43 этаже Neva Towers.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Современное оснащение и панорамный вид на деловой центр.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-012.jpg', 'apartment-027.jpg'],
  },
  {
    title: 'Neva Shedar 51 м²',
    slug: 'neva-shedar-51',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 3,
    bathrooms: 1,
    area: 51,
    priceFrom: 10000,
    location: 'Москва-Сити, Neva Towers',
    floor: 28,
    featured: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: '1-комнатные апартаменты 51 м² на 28 этаже, вмещают до 3 гостей.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Удобная планировка с дополнительным спальным местом.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-013.jpg', 'apartment-014.jpg'],
  },
  // Апартаменты посуточно в башне OKO
  {
    title: 'Oko Polaris 45 м²',
    slug: 'oko-polaris-45',
    tower: 'oko',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 45,
    priceFrom: 10000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 29,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Элегантные 1-комнатные апартаменты 45 м² на 29 этаже башни ОКО.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Самая технологичная башня с потрясающими видами на город.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-014.jpg', 'apartment-015.jpg'],
  },
  {
    title: 'Oko Alruba 87 м²',
    slug: 'oko-alruba-87',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 2,
    area: 87,
    priceFrom: 10000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 51,
    featured: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Роскошные 2-комнатные апартаменты площадью 87 м² на 51 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Премиум-класс для семейного отдыха или деловых встреч на высшем уровне.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-016.jpg', 'apartment-017.jpg', 'apartment-018.jpg'],
  },
  {
    title: 'Oko Gudja 100 м²',
    slug: 'oko-gudja-100',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 2,
    area: 100,
    priceFrom: 10000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 29,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Просторные 2-комнатные апартаменты 100 м² на 29 этаже башни ОКО.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Максимальный комфорт для семьи или группы друзей.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-019.jpg', 'apartment-020.jpg'],
  },
  {
    title: 'Oko Avior 87 м²',
    slug: 'oko-avior-87',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 2,
    area: 87,
    priceFrom: 10000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 24,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: '2-комнатные апартаменты премиум-класса площадью 87 м².' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Идеальны для длительного проживания или деловых поездок.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-021.jpg', 'apartment-022.jpg'],
  },
  // Апартаменты на длительную аренду
  {
    title: 'Oko Kang 100 м²',
    slug: 'oko-kang-100',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 2,
    area: 100,
    priceFrom: 15000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 74,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Апартаменты на 74 этаже с захватывающим видом на весь город.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Доступны для длительной аренды. Площадь 100 м², 2 комнаты, до 4 гостей.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-023.jpg', 'apartment-024.jpg'],
  },
  {
    title: 'Oko Shedar 51 м²',
    slug: 'oko-shedar-51',
    tower: 'oko',
    rooms: 2,
    capacity: 2,
    bathrooms: 1,
    area: 51,
    priceFrom: 12000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 28,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: '2-комнатные апартаменты 51 м² для длительной аренды.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Уютное пространство для проживания в самом центре делового района.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-025.jpg', 'apartment-026.jpg'],
  },
  {
    title: 'Oko Polaris 3 45 м²',
    slug: 'oko-polaris-3-45',
    tower: 'oko',
    rooms: 1,
    capacity: 2,
    bathrooms: 1,
    area: 45,
    priceFrom: 14500,
    location: 'Москва-Сити, Башня ОКО',
    floor: 74,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: '1-комнатные апартаменты на 74 этаже башни ОКО.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Один из самых высоких жилых этажей в Европе. Доступны для длительной аренды.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-027.jpg', 'apartment-007.jpg'],
  },
  {
    title: 'OKO Nati 45 м²',
    slug: 'oko-nati-45',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 1,
    area: 45,
    priceFrom: 13000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 64,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Компактные 2-комнатные апартаменты 45 м² на 64 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Эффективная планировка для комфортного размещения до 4 человек.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-008.jpg', 'apartment-009.jpg'],
  },
  {
    title: 'OKO Sadr 90 м²',
    slug: 'oko-sadr-90',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    bathrooms: 2,
    area: 90,
    priceFrom: 16000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 48,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Роскошные 2-комнатные апартаменты площадью 90 м² на 48 этаже.' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Премиум-класс для длительного проживания с видом на Москву-реку.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-010.jpg', 'apartment-011.jpg', 'apartment-012.jpg'],
  },
  {
    title: 'Oko Altais 2 120 м²',
    slug: 'oko-altais-2-120',
    tower: 'oko',
    rooms: 2,
    capacity: 2,
    bathrooms: 2,
    area: 120,
    priceFrom: 18000,
    location: 'Москва-Сити, Башня ОКО',
    floor: 51,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Просторные апартаменты премиум-класса площадью 120 м².' },
            ],
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', text: 'Максимальный комфорт на 51 этаже с панорамными видами.' },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    images: ['apartment-013.jpg', 'apartment-006.webp'],
  },
]

async function importApartments() {
  console.log('🚀 Начинаем импорт апартаментов...\n')

  const payload = await getPayload({ config })

  try {
    // Очищаем существующие апартаменты
    console.log('🧹 Очистка существующих апартаментов...')
    const existingApartments = await payload.find({
      collection: 'apartments',
      limit: 1000,
    })

    for (const apartment of existingApartments.docs) {
      await payload.delete({
        collection: 'apartments',
        id: apartment.id,
      })
    }
    console.log(`✓ Удалено ${existingApartments.docs.length} апартаментов\n`)

    // Импортируем каждый апартамент
    let successCount = 0
    let errorCount = 0

    for (const apartmentData of apartments) {
      try {
        console.log(`📦 Импорт: ${apartmentData.title}`)

        // Загружаем изображения
        const mediaIds: string[] = []

        for (const imageName of apartmentData.images) {
          const imagePath = path.join(
            process.cwd(),
            'public',
            'apartments',
            imageName
          )

          if (fs.existsSync(imagePath)) {
            try {
              const fileBuffer = fs.readFileSync(imagePath)
              const ext = path.extname(imageName)

              const media = await payload.create({
                collection: 'media',
                data: {
                  alt: `${apartmentData.title} - фото`,
                },
                file: {
                  data: fileBuffer,
                  mimetype: ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 
                           ext === '.png' ? 'image/png' : 
                           ext === '.webp' ? 'image/webp' : 'image/gif',
                  name: imageName,
                  size: fileBuffer.length,
                },
              })

              mediaIds.push(media.id)
              console.log(`  ✓ Загружено изображение: ${imageName}`)
            } catch (error) {
              console.error(`  ✗ Ошибка загрузки ${imageName}:`, error)
            }
          } else {
            console.log(`  ⚠ Файл не найден: ${imageName}`)
          }
        }

        // Создаем апартамент
        const apartment = await payload.create({
          collection: 'apartments',
          data: {
            title: apartmentData.title,
            slug: apartmentData.slug,
            tower: apartmentData.tower,
            rooms: apartmentData.rooms,
            capacity: apartmentData.capacity,
            bathrooms: apartmentData.bathrooms,
            area: apartmentData.area,
            status: 'rent',
            location: apartmentData.location,
            priceFrom: apartmentData.priceFrom,
            description: apartmentData.description,
            mainImage: mediaIds[0] || null,
            gallery: mediaIds.slice(1).map((id) => ({ image: id })),
          },
        })

        console.log(`  ✓ Создан апартамент ID: ${apartment.id}`)
        successCount++
      } catch (error) {
        console.error(`  ✗ Ошибка импорта ${apartmentData.title}:`, error)
        errorCount++
      }

      console.log('')
    }

    console.log('\n' + '='.repeat(50))
    console.log('✅ Импорт завершен!')
    console.log(`   Успешно: ${successCount}`)
    console.log(`   Ошибок: ${errorCount}`)
    console.log('='.repeat(50))

    process.exit(0)
  } catch (error) {
    console.error('❌ Критическая ошибка:', error)
    process.exit(1)
  }
}

importApartments()

