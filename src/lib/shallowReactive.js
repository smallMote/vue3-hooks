const shallowReactive = (obj) => {
  return new Proxy(obj, {
    get(obj, key) {
      console.log('获取数据之前可以做点什么...')
      console.log('获取数据', 'key = ' + key, 'value = ' + obj[key])
      return obj[key]
    },
    set(obj, key, value) {
      console.log('修改数据之前可以做点什么...')
      console.log('修改数据', 'key = ', key, '原来的值 = ', obj[key], '新值 = ', value)
      obj[key] = value
      console.log('修改后渲染数据到页面')
    }
  })
}

// const state = reactive({ count: 0 })
// // console.log(state.count) // 0
// state.count = 1
// console.log(state.count) // 1

module.exports = shallowReactive