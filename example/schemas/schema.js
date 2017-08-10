import createSchema from 'part:@sanity/base/schema-creator'
import fairytale from './fairytale'

export default createSchema({
  name: 'default',
  types: [fairytale]
})
