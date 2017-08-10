import Slider from '../../src/components/Slider'
import {get} from 'lodash'

export default function resolveInput(type) {
  if (type.name === 'number' && get(type, 'options.range')) {
    return Slider
  }

  return false
}
