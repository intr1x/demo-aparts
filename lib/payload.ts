// DEMO MODE: Заглушка для Payload CMS
// В демо-версии Payload не используется, работаем с моковыми данными
export const getPayloadClient = async () => {
  throw new Error('Payload CMS disabled in demo mode. Use mock data instead.')
}
