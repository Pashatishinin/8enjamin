import {defineField, defineType} from 'sanity'

export const contactDetails = defineType({
  name: 'contactDetails',
  title: 'Contact Details',
  type: 'document',

  fields: [
    {name: 'phone', type: 'string', title: 'Phone'},
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'whatsapp', type: 'string', title: 'WhatsApp'},
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Links',
      }
    },
  },
})
