import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Общие',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              defaultValue: 'Aparts',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'whatsapp',
              type: 'text',
            },
            {
              name: 'telegram',
              type: 'text',
            },
          ],
        },
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroTitle',
              type: 'text',
            },
            {
              name: 'videoDay',
              type: 'upload',
              relationTo: 'media',
              label: 'Дневное видео',
            },
            {
              name: 'videoNight',
              type: 'upload',
              relationTo: 'media',
              label: 'Ночное видео',
            },
          ],
        },
      ],
    },
  ],
}

