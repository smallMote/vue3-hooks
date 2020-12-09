
function reactive(obj) {
  // 判断类型
  if (typeof obj === 'object') {
    if (obj === null) {
      console.warn('Param not a object')
    }
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