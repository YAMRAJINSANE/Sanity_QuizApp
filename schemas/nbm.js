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
      name: 'correctMarks',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'incorrectMarks',
      type: 'number',
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
              type: 'number',
              title: 'Correct Option',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}
