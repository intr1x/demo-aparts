import { getPayloadClient } from '@/lib/payload'
import { DynamicHeader } from './DynamicHeader'

export async function Header() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'settings' })

  const navItems = [
    { href: '/catalog', label: 'Каталог' },
    { href: '/parking', label: 'Паркинг' },
    { 
      href: '/services',
      label: 'Услуги',
      submenu: [
        { href: '/services/cleaning', label: 'Уборка' },
        { href: '/services/concierge', label: 'Консьерж-сервис' },
        { href: '/services/transfer', label: 'Трансфер' },
        { href: '/services/laundry', label: 'Прачечная' },
        { href: '/services/grocery', label: 'Продуктовая корзина' },
        { href: '/services/tours', label: 'Экскурсии' },
      ]
    },
    { 
      label: 'Информация',
      submenu: [
        { href: '/info/moscow-city', label: 'О "Москва-Сити"' },
        { href: '/info/public-offer', label: 'Публичная оферта' },
        { href: '/info/payment-methods', label: 'Способы оплаты' },
        { href: '/info/privacy-policy', label: 'Согласие на обработку персональных данных' },
      ]
    },
    { href: '/contacts', label: 'Контакты' },
  ]

  return <DynamicHeader phone={settings.phone} navItems={navItems} />
}
