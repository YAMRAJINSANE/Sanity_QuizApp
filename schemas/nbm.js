export default {
  name: 'exam',
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
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required()
    },
    {
      name: 'categoriesHead',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CategoryHead'}}],
      validation: Rule => Rule.required()
    },
    {
      name: 'categoriesSubHead',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CategorySubHead'}}],
      validation: Rule => Rule.required()
    },
    {
      name: 'questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: Rule => Rule.required()
            },
            {
              name: 'options',
              type: 'array',
              title: 'Options',
              of: [
                {
                  name: 'option',
                  type: 'string',
                  title: 'Option'
                }
              ]
            },
            {
              name: 'correct',
              type: 'string',
            
                of: [{type: 'reference', to: {type: 'options'}}],
                validation: Rule => Rule.required()
              
             
              
            }
          ]
        }
      ]
    }
  ]
}
