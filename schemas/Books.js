export default {
  name: 'book',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'bookCat'}}],
      validation: Rule => Rule.required()
    },{
        name: 'image',
        title: 'Image',
        type: 'image',
      },{
        "name": "href",
        "type": "url",
        "title": "URL",
        "validation": Rule => Rule.required()
      }
  ]
}
