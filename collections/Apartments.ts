import type { CollectionConfig } from 'payload'

export const Apartments: CollectionConfig = {
  slug: 'apartments',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tower',
      type: 'select',
      required: true,
      options: [
        { label: 'ОКО', value: 'oko' },
        { label: 'NEVA Tower T1', value: 'neva-t1' },
        { label: 'NEVA Tower T2', value: 'neva-t2' },
      ],
    },
    {
      name: 'rooms',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'capacity',
      type: 'number',
      required: true,
      min: 1,
      admin: {
        description: 'Максимальное количество гостей',
      },
    },
    {
      name: 'area',
      type: 'number',
      required: false,
      min: 1,
      admin: {
        description: 'Площадь в м²',
      },
    },
    {
      name: 'floor',
      type: 'number',
      required: false,
      min: 1,
      admin: {
        description: 'Этаж',
      },
    },
    {
      name: 'tlId',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'ID категории номера в TravelLine',
      },
    },
    {
      name: 'priceFrom',
      type: 'number',
      admin: {
        description: 'Базовая цена (можно переопределить через API)',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
