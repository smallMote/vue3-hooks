
function reactive(obj) {
  // 判断类型
  if (obj && typeof obj === 'object') {
    if (obj instanceof Array) {
      console.log('array obj')
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = reactive(item)
        }
      })
    } else {
      for (let key in obj) {
        if (typeof obj[key] === 'object') { 
          obj[key] = reactive(obj[key])
        }
      }
    }
  } else {
    console.warn('Param not a object')
    return obj
  }
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      console.log('更新UI')
      return true
    }
  })
}

export default reactive
// !(function (root, factory) {
//   if (typeof module === 'object' && module.exports) {
//     module.exports = factory(root)
//     module.exports.default = module.exports
//   } else {
//     root.reactive = factory(root)
//   }
// })(typeof window !== 'undefined' ? window : this, function() {
//   return reactive
// })