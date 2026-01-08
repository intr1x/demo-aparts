/**
 * Скрипт миграции апартаментов
 * Добавляет значения для новых полей: bathrooms, area, status, location
 */

const { getPayload } = require('payload')
const config = require('../payload.config')

async function migrateApartments() {
  console.log('🚀 Начинаем миграцию апартаментов...\n')

  try {
    const payload = await getPayload({ config })

    // Получаем все апартаменты
    const { docs: apartments } = await payload.find({
      collection: 'apartments',
      limit: 1000,
    })

    console.log(`📊 Найдено апартаментов: ${apartments.length}\n`)

    if (apartments.length === 0) {
      console.log('ℹ️  Нет апартаментов для миграции')
      process.exit(0)
    }

    let updated = 0
    let skipped = 0

    for (const apt of apartments) {
      // Проверяем, нужна ли миграция
      const needsUpdate = 
        !apt.bathrooms || 
        !apt.area || 
        !apt.status || 
        !apt.location

      if (!needsUpdate) {
        console.log(`⏭️  Пропущено: "${apt.title}" (уже заполнено)`)
        skipped++
        continue
      }

      // Рассчитываем значения на основе существующих данных
      const bathrooms = apt.bathrooms || Math.max(1, Math.floor(apt.rooms / 2))
      const area = apt.area || (apt.rooms * 40 + 25)
      const status = apt.status || 'rent'
      
      // Определяем локацию на основе башни
      let location = apt.location
      if (!location) {
        switch (apt.tower) {
          case 'oko':
            location = 'ОКО, Москва-Сити'
            break
          case 'neva-t1':
            location = 'NEVA Tower T1, Москва-Сити'
            break
          case 'neva-t2':
            location = 'NEVA Tower T2, Москва-Сити'
            break
          default:
            location = 'Москва-Сити'
        }
      }

      try {
        await payload.update({
          collection: 'apartments',
          id: apt.id,
          data: {
            bathrooms,
            area,
            status,
            location,
          },
        })

        console.log(`✅ Обновлено: "${apt.title}"`)
        console.log(`   - Ванные: ${bathrooms}`)
        console.log(`   - Площадь: ${area} м²`)
        console.log(`   - Статус: ${status === 'rent' ? 'Аренда' : 'Продажа'}`)
        console.log(`   - Локация: ${location}\n`)
        
        updated++
      } catch (error) {
        console.error(`❌ Ошибка при обновлении "${apt.title}":`, error.message)
      }
    }

    console.log('\n✨ Миграция завершена!')
    console.log(`📈 Статистика:`)
    console.log(`   - Обновлено: ${updated}`)
    console.log(`   - Пропущено: ${skipped}`)
    console.log(`   - Всего: ${apartments.length}`)

  } catch (error) {
    console.error('❌ Ошибка миграции:', error)
    process.exit(1)
  }

  process.exit(0)
}

// Запускаем миграцию
migrateApartments()

