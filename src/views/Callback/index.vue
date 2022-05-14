<template>
  <div class="container">
    <h1>父组件</h1>
    <Child :fun="parentFun" name="李"/>
  </div>
</template>

<script setup>
    import Child from './components/Child.vue'
    const parentFun = () => {
        console.log(233)
    }
</script>