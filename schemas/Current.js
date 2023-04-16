export default {
    name: 'weeklyCurrentAffair',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
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
  