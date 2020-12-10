// const reactive = require('./reactive.js')
import reactive from './reactive'

const ref = (value) => {
  return reactive({ value })
}

// const count = ref({ a: 2 })
// // console.log(count.value) // 0
// count.value.a = 1
// console.log(count.value) // 1

export default ref