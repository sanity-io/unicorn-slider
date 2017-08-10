export default {
  name: 'fairytale',
  title: 'Fairytale',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'happyEnding',
      title: 'Does it have a happy ending?',
      type: 'boolean'
    },
    {
      name: 'unicornCount',
      title: 'Number of Unicorns',
      type: 'number',
      description: 'Half unicorns are okay',
      options: {
        range: {min: 0, max: 10, step: 0.5}
      }
    }
  ]
}
