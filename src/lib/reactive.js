
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(o, key, valute) {}
  })
}

export default reactive