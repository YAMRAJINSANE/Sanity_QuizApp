import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'CategorySubHead',
  title: 'Category Sub Head',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ]
})
