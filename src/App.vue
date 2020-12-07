<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TestRef />
  <Reactive />
  <Ref />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ref from './components/hooks/Ref.vue'
import Reactive from './components/hooks/Reactive.vue'
import TestRef from './components/test/TestRef.vue'

export default {
  name: 'App',
  components: {
    Ref,
    Reactive,
    TestRef
  }
}
</script>
