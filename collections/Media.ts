import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: false,
    staticDir: './public/media',
    staticURL: '/media',
    mimeTypes: ['image/*', 'video/*'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
  },
  access: {
    read: () => true, // Публичный доступ к изображениям
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
