import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
  ],

  __experimental_actions: ['update', 'publish'],
})
