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
import shallowRef from './lib/shallowRef'

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
    const state = shallowRef({
      a: [1, 2, { c: 1 }]
    })
    state.value.a = { name: 'larry' }
    console.log(state.value)
  }
}
</script>
