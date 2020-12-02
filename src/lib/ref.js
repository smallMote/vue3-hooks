const reactive = require('./reactive')

const ref = (value) => {
  return reactive({ value })
}

const count = ref(0)
// console.log(count.value) // 0
count.value = 1
console.log(count.value) // 1