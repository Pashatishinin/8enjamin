import {defineField, defineType} from 'sanity'

export const socialDetails = defineType({
  name: 'socialDetails',
  title: 'Social Details',
  type: 'document',

  fields: [
    {name: 'dribble', type: 'string', title: 'Dribble'},
    {name: 'behance', type: 'string', title: 'Behance'},
    {name: 'instagram', type: 'string', title: 'Instagram'},
    {name: 'facebook', type: 'string', title: 'Facebook'},
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Links',
      }
    },
  },
})
