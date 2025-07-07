import {defineField, defineType} from 'sanity'

export const worksSection = defineType({
  name: 'worksSection',
  title: 'Works Section',
  type: 'document',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => [
        Rule.required(),
        Rule.required().max(500).error('This text is too long'),
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.asset',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media,
      }
    },
  },
})
