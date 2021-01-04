<template>
  <div class="readonly">
    <h2>Readonly</h2>
    <h4>使用递归Proxy实现数据响应式</h4>
    <section class="code-pen-conatiner">
      <p>ref: {{ refState }}</p>
      <p>reactive: {{ reactiveState }}</p>
    </section>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'Readonly',
  setup(props, ctx) {
    const obj = { count: 0 }
    const reactiveState = reactive(obj)
    const refState = ref(obj)

    const add = () => {
      reactiveState.count++
    }
    return {
      add,
      refState,
      reactiveState
    }
  }
}
</script>
