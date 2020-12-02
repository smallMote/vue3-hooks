<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Reactive />
  <Ref />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ref from './components/hooks/Ref.vue'
import Reactive from './components/hooks/Reactive.vue'

export default {
  name: 'App',
  components: {
    Ref,
    Reactive
  }
}
</script>
