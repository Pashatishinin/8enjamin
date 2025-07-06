import {defineField, defineType} from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',

  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => [
        Rule.required(),
        Rule.required().max(350).error('This text is too long'),
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
      title: 'description',
      media: 'images.0.asset',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: 'About Section',
        subtitle: title,
        media,
      }
    },
  },
})
