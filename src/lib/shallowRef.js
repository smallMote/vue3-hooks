import shallowReactive from './shallowReactive'

function shallowRef(value) {
  return shallowReactive({ value })
}

export default shallowRef