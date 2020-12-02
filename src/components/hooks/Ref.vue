<template>
  <div class="reactive">
    <h4>Ref 是对 Reactive的封装，为了解决单值相应，因为Proxy只能传递一个对象，这也就是为什么使用ref的时候必须使用.value获取、修改值</h4>
    <section class="code-pen-conatiner">
      <iframe height="285" style="width: 100%;" scrolling="no" title="vue3-ref" src="https://codepen.io/wlittleyang/embed/PoGPPQL?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/wlittleyang/pen/PoGPPQL'>vue3-ref</a> by wlittleyang
        (<a href='https://codepen.io/wlittleyang'>@wlittleyang</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Ref'
}
</script>