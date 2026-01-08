import { DynamicHeader } from './DynamicHeader'

export async function Header() {
  // DEMO MODE: Статические данные
  const phone = '+7 (999) 123-45-67'
  const telegram = 'https://t.me/yourusername'
  const whatsapp = 'https://wa.me/79991234567'

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

  return <DynamicHeader phone={phone} telegram={telegram} whatsapp={whatsapp} navItems={navItems} />
}
