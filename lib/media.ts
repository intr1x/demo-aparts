/**
 * Преобразует Payload API URL в публичный URL для изображений
 * @param url - URL изображения из Payload CMS
 * @returns Публичный URL для использования в Next.js Image
 */
export function getPublicMediaUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined
  
  // Если URL содержит /api/media/file/, преобразуем в /media/
  if (url.includes('/api/media/file/')) {
    return url.replace(/.*\/api\/media\/file\//, '/media/')
  }
  
  return url
}

