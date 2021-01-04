<template>
  <div class="shallow-reactive">
    <h2>ShallowReactive</h2>
    <h4>使用非递归Proxy实现数据响应式，只有改变第一层级的数据才会发生响应</h4>
    <section class="code-pen-conatiner">
      <iframe height="490" style="width: 100%;" scrolling="no" title="vue-shallowReactive" src="https://codepen.io/wlittleyang/embed/preview/MWjjaZx?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/wlittleyang/pen/MWjjaZx'>vue-shallowReactive</a> by wlittleyang
        (<a href='https://codepen.io/wlittleyang'>@wlittleyang</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ShallowReactive'
}
</script>