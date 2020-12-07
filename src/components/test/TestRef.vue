<template>
  <div class="test-ref">
    a: {{ state.b }}
  </div>
  <button @click="count()">ADD</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TestRef',
  setup(props, ctx) {
    // const { root } = ctx
    // const { $route } = root
    const state = ref({
      a: 1,
      b: {
        c: 2
      }
    })

    const count = () => {
      state.value.b.c++
    }
    return {
      state,
      count
    }
  }
}
</script>