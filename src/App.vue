<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TestRef />
  <Reactive />
  <Ref />
  <ShallowReactive />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ref from './components/hooks/Ref.vue'
import Reactive from './components/hooks/Reactive.vue'
import ShallowReactive from './components/hooks/ShallowReactive.vue'
import TestRef from './components/test/TestRef.vue'
import reactive from './lib/reactive'

// import { reactive } from 'vue'
export default {
  name: 'App',
  components: {
    Ref,
    Reactive,
    TestRef,
    ShallowReactive
  },
  setup() {
    const state = reactive({
      a: [1, 2, { c: 1 }]
    })
    // state.a[2].c = 2
    state.a.push({ name: 'Larry' }) // 更新数组 触发两次set，第一步增加数组长度，第二步将新想值放进数组
    // console.log(state.b[2].c)
    console.log('state', state.a)
  }
}
</script>
