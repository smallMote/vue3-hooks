<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Readonly/>
  <ToRaw/>
  <Reactive />
  <Ref />
  <ShallowReactive />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ref from './components/hooks/Ref.vue'
import Reactive from './components/hooks/Reactive.vue'
import ShallowReactive from './components/hooks/ShallowReactive.vue'
import shallowRef from './lib/shallowRef'
import ToRaw from './components/hooks/ToRaw.vue'
import Readonly from './components/hooks/Readonly.vue'

// import { reactive } from 'vue'
export default {
  name: 'App',
  components: {
    Ref,
    Reactive,
    ShallowReactive,
    ToRaw,
    Readonly
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
