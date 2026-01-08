/**
 * Полная пересборка апартаментов с фотографиями
 * Удаляет старые, загружает фото, создает новые объекты
 */

import { getPayload } from 'payload'
import config from '../payload.config'
import fs from 'fs'
import path from 'path'

// Данные апартаментов на основе apartmentmoscowcity.ru
const apartments = [
  // NEVA Towers
  {
    title: 'Neva Navi',
    slug: 'neva-navi-65',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 65,
    floor: 36,
    priceFrom: 10000,
    image: 'apartment-007.jpg',
  },
  {
    title: 'Neva Nati',
    slug: 'neva-nati-49',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 49,
    floor: 59,
    priceFrom: 10000,
    image: 'apartment-008.jpg',
  },
  {
    title: 'Neva Libra',
    slug: 'neva-libra-70',
    tower: 'neva-t1',
    rooms: 2,
    capacity: 4,
    area: 70,
    floor: 38,
    priceFrom: 10000,
    image: 'apartment-009.jpg',
  },
  {
    title: 'Neva Sirius',
    slug: 'neva-sirius-40',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 40,
    floor: 28,
    priceFrom: 10000,
    image: 'apartment-010.jpg',
  },
  {
    title: 'Neva City',
    slug: 'neva-city-51',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 51,
    floor: 43,
    priceFrom: 10000,
    image: 'apartment-011.jpg',
  },
  {
    title: 'Neva Shedar',
    slug: 'neva-shedar-51',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 3,
    area: 51,
    floor: 28,
    priceFrom: 10000,
    image: 'apartment-012.jpg',
  },
  // OKO Tower
  {
    title: 'Oko Polaris',
    slug: 'oko-polaris-45',
    tower: 'oko',
    rooms: 1,
    capacity: 2,
    area: 45,
    floor: 29,
    priceFrom: 10000,
    image: 'apartment-013.jpg',
  },
  {
    title: 'Oko Alruba',
    slug: 'oko-alruba-87',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 87,
    floor: 51,
    priceFrom: 10000,
    image: 'apartment-014.jpg',
  },
  {
    title: 'Oko Gudja',
    slug: 'oko-gudja-100',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 100,
    floor: 29,
    priceFrom: 10000,
    image: 'apartment-015.jpg',
  },
  {
    title: 'Oko Avior',
    slug: 'oko-avior-87',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 87,
    floor: 24,
    priceFrom: 10000,
    image: 'apartment-016.jpg',
  },
  {
    title: 'Neva Stars',
    slug: 'neva-stars-55',
    tower: 'neva-t2',
    rooms: 1,
    capacity: 2,
    area: 55,
    floor: 42,
    priceFrom: 11000,
    image: 'apartment-017.jpg',
  },
  {
    title: 'Oko Vista',
    slug: 'oko-vista-92',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 92,
    floor: 47,
    priceFrom: 15000,
    image: 'apartment-018.jpg',
  },
  {
    title: 'Neva Galaxy',
    slug: 'neva-galaxy-62',
    tower: 'neva-t2',
    rooms: 1,
    capacity: 2,
    area: 62,
    floor: 35,
    priceFrom: 12000,
    image: 'apartment-019.jpg',
  },
  {
    title: 'Oko Luxe',
    slug: 'oko-luxe-110',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 110,
    floor: 55,
    priceFrom: 18000,
    image: 'apartment-020.jpg',
  },
  {
    title: 'Neva Prime',
    slug: 'neva-prime-58',
    tower: 'neva-t1',
    rooms: 1,
    capacity: 2,
    area: 58,
    floor: 45,
    priceFrom: 11500,
    image: 'apartment-021.jpg',
  },
  {
    title: 'Oko Elite',
    slug: 'oko-elite-95',
    tower: 'oko',
    rooms: 2,
    capacity: 4,
    area: 95,
    floor: 48,
    priceFrom: 16000,
    image: 'apartment-022.jpg',
  },
]

async function rebuild() {
  console.log('🚀 Пересборка базы апартаментов...\n')

  try {
    const payload = await getPayload({ config })

    // 1. Удаляем все старые апартаменты
    console.log('🗑️  Удаление старых апартаментов...')
    const { docs: oldApartments } = await payload.find({
      collection: 'apartments',
      limit: 1000,
    })

    for (const apt of oldApartments) {
      await payload.delete({
        collection: 'apartments',
        id: apt.id,
      })
    }
    console.log(`   ✅ Удалено ${oldApartments.length} апартаментов\n`)

    // 2. Загружаем фотографии
    console.log('📸 Загрузка фотографий...')
    const publicDir = path.join(process.cwd(), 'public', 'apartments')
    const mediaMap: Record<string, string> = {}

    for (const apt of apartments) {
      const imagePath = path.join(publicDir, apt.image)
      
      if (!fs.existsSync(imagePath)) {
        console.log(`   ⚠️  Файл не найден: ${apt.image}`)
        continue
      }

      try {
        const imageBuffer = fs.readFileSync(imagePath)
        const ext = path.extname(apt.image).slice(1)
        
        const media = await payload.create({
          collection: 'media',
          data: {
            alt: apt.title,
          },
          file: {
            data: imageBuffer,
            mimetype: `image/${ext === 'jpg' ? 'jpeg' : ext}`,
            name: apt.image,
            size: imageBuffer.length,
          },
        })

        mediaMap[apt.image] = media.id
        console.log(`   ✅ Загружено: ${apt.image}`)
      } catch (error: any) {
        console.error(`   ❌ Ошибка загрузки ${apt.image}:`, error.message)
      }
    }
    console.log('')

    // 3. Создаем апартаменты
    console.log('🏢 Создание апартаментов...')
    let created = 0

    for (const apt of apartments) {
      const mediaId = mediaMap[apt.image]
      
      if (!mediaId) {
        console.log(`   ⏭️  Пропущено: "${apt.title}" (нет фото)`)
        continue
      }

      try {
        await payload.create({
          collection: 'apartments',
          data: {
            title: apt.title,
            slug: apt.slug,
            tower: apt.tower,
            rooms: apt.rooms,
            capacity: apt.capacity,
            area: apt.area,
            floor: apt.floor,
            priceFrom: apt.priceFrom,
            mainImage: mediaId,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: `Современные апартаменты ${apt.title} площадью ${apt.area} м² на ${apt.floor} этаже. Вместимость до ${apt.capacity} человек. Панорамные окна с видом на Москву.`,
                      },
                    ],
                  },
                ],
              },
            },
          },
        })

        console.log(`   ✅ ${apt.title} - ${apt.area}м², этаж ${apt.floor}`)
        created++
      } catch (error: any) {
        console.error(`   ❌ Ошибка создания "${apt.title}":`, error.message)
      }
    }

    console.log('\n✨ Готово!')
    console.log(`📊 Создано апартаментов: ${created}`)
    console.log('🌐 Каталог: http://localhost:3000/catalog')
  } catch (error) {
    console.error('❌ Ошибка:', error)
    process.exit(1)
  }

  process.exit(0)
}

rebuild()

