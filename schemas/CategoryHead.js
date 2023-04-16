import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'CategoryHead',
  title: 'Category Head',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
